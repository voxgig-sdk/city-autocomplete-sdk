package core

import (
	"fmt"

	vs "github.com/voxgig-sdk/city-autocomplete-sdk/go/utility/struct"
)

type CityAutocompleteSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCityAutocompleteSDK(options map[string]any) *CityAutocompleteSDK {
	sdk := &CityAutocompleteSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CityAutocompleteSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CityAutocompleteSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CityAutocompleteSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CityAutocompleteSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

func (sdk *CityAutocompleteSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}


// City returns a City entity bound to this client.
// Idiomatic usage: client.City(nil).List(nil, nil) or
// client.City(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) City(data map[string]any) CityAutocompleteEntity {
	return NewCityEntityFunc(sdk, data)
}


// CityDto returns a CityDto entity bound to this client.
// Idiomatic usage: client.CityDto(nil).List(nil, nil) or
// client.CityDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) CityDto(data map[string]any) CityAutocompleteEntity {
	return NewCityDtoEntityFunc(sdk, data)
}


// CityTranslationDto returns a CityTranslationDto entity bound to this client.
// Idiomatic usage: client.CityTranslationDto(nil).List(nil, nil) or
// client.CityTranslationDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) CityTranslationDto(data map[string]any) CityAutocompleteEntity {
	return NewCityTranslationDtoEntityFunc(sdk, data)
}


// Country returns a Country entity bound to this client.
// Idiomatic usage: client.Country(nil).List(nil, nil) or
// client.Country(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) Country(data map[string]any) CityAutocompleteEntity {
	return NewCountryEntityFunc(sdk, data)
}


// CountryTranslationDto returns a CountryTranslationDto entity bound to this client.
// Idiomatic usage: client.CountryTranslationDto(nil).List(nil, nil) or
// client.CountryTranslationDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) CountryTranslationDto(data map[string]any) CityAutocompleteEntity {
	return NewCountryTranslationDtoEntityFunc(sdk, data)
}


// Distance returns a Distance entity bound to this client.
// Idiomatic usage: client.Distance(nil).List(nil, nil) or
// client.Distance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) Distance(data map[string]any) CityAutocompleteEntity {
	return NewDistanceEntityFunc(sdk, data)
}


// Language returns a Language entity bound to this client.
// Idiomatic usage: client.Language(nil).List(nil, nil) or
// client.Language(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) Language(data map[string]any) CityAutocompleteEntity {
	return NewLanguageEntityFunc(sdk, data)
}


// Oneshot returns a Oneshot entity bound to this client.
// Idiomatic usage: client.Oneshot(nil).List(nil, nil) or
// client.Oneshot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) Oneshot(data map[string]any) CityAutocompleteEntity {
	return NewOneshotEntityFunc(sdk, data)
}


// Region returns a Region entity bound to this client.
// Idiomatic usage: client.Region(nil).List(nil, nil) or
// client.Region(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) Region(data map[string]any) CityAutocompleteEntity {
	return NewRegionEntityFunc(sdk, data)
}


// RegionTranslationDto returns a RegionTranslationDto entity bound to this client.
// Idiomatic usage: client.RegionTranslationDto(nil).List(nil, nil) or
// client.RegionTranslationDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) RegionTranslationDto(data map[string]any) CityAutocompleteEntity {
	return NewRegionTranslationDtoEntityFunc(sdk, data)
}


// SettlementType returns a SettlementType entity bound to this client.
// Idiomatic usage: client.SettlementType(nil).List(nil, nil) or
// client.SettlementType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CityAutocompleteSDK) SettlementType(data map[string]any) CityAutocompleteEntity {
	return NewSettlementTypeEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CityAutocompleteSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCityAutocompleteSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
