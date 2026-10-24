package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/city-autocomplete-sdk/go"
	"github.com/voxgig-sdk/city-autocomplete-sdk/go/core"

	vs "github.com/voxgig-sdk/city-autocomplete-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const oneshotEntityLiveStrict = true


func TestOneshotEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Oneshot(nil)
		if ent == nil {
			t.Fatal("expected non-nil OneshotEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Oneshot(nil).List(map[string]any{"city_name": 1, "country": "x", "language": "x"}, nil)
		if sdkerr, ok := err.(*core.CityAutocompleteError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := oneshotBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "oneshot." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"city_name01", "country01", "language01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, oneshotEntityLiveStrict, "Live entity test blocked: needs %s via CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		oneshotRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.oneshot")))
		var oneshotRef01Data map[string]any
		if len(oneshotRef01DataRaw) > 0 {
			oneshotRef01Data = core.ToMapAny(oneshotRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = oneshotRef01Data

		// LIST
		oneshotRef01Ent := client.Oneshot(nil)
		oneshotRef01Match := map[string]any{
			"city_name": setup.idmap["city_name01"],
			"country": setup.idmap["country01"],
			"language": setup.idmap["language01"],
		}

		oneshotRef01ListResult, err := oneshotRef01Ent.List(oneshotRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, oneshotRef01ListOk := oneshotRef01ListResult.([]any)
		if !oneshotRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", oneshotRef01ListResult)
		}

	})
}

func oneshotBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "oneshot", "OneshotTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read oneshot test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse oneshot test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"oneshot01", "oneshot02", "oneshot03", "city_name01", "country01", "language01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID": idmap,
		"CITY_AUTOCOMPLETE_TEST_LIVE":      "FALSE",
		"CITY_AUTOCOMPLETE_TEST_EXPLAIN":   "FALSE",
		"CITY_AUTOCOMPLETE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CITY_AUTOCOMPLETE_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CITY_AUTOCOMPLETE_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCityAutocompleteSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CITY_AUTOCOMPLETE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CITY_AUTOCOMPLETE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
