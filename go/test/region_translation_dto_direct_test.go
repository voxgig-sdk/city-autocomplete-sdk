package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/city-autocomplete-sdk/go"
	"github.com/voxgig-sdk/city-autocomplete-sdk/go/core"
)

func TestRegionTranslationDtoDirect(t *testing.T) {
	t.Run("direct-list-region_translation_dto", func(t *testing.T) {
		setup := region_translation_dtoDirectSetup([]any{
			map[string]any{"id": "direct01"},
			map[string]any{"id": "direct02"},
		})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-list-region_translation_dto", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		if setup.live {
			for _, _liveKey := range []string{"region_translation_dto01"} {
				if v := setup.idmap[_liveKey]; v == nil {
					t.Skipf("live test needs %s via *_ENTID env var (synthetic IDs only)", _liveKey)
					return
				}
			}
		}
		client := setup.client

		params := map[string]any{}
		if setup.live {
			params["id"] = setup.idmap["region_translation_dto01"]
		} else {
			params["id"] = "direct01"
		}

		result, err := client.Direct(map[string]any{
			"path":   "regions/{id}/translations",
			"method": "GET",
			"params": params,
		})
		if setup.live {
			// Live-mode leniency is a model decision
			// (main.kit.test.live.strict): synthetic IDs 4xx constantly
			// against an arbitrary public API, so the default SKIPS here.
			// A project that owns its test server sets strict and FAILS.
			if err != nil {
				t.Skipf("list call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Skipf("list call not ok (likely synthetic IDs against live API): %v", result)
			}
			status := core.ToInt(result["status"])
			if status < 200 || status >= 300 {
				t.Skipf("expected 2xx status, got %v", result["status"])
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
		}

		if !setup.live {
			if dataList, ok := result["data"].([]any); ok {
				if len(dataList) != 2 {
					t.Fatalf("expected 2 items, got %d", len(dataList))
				}
			} else {
				t.Fatalf("expected data to be an array, got %T", result["data"])
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
			call := (*setup.calls)[0]
			if initMap, ok := call["init"].(map[string]any); ok {
				if initMap["method"] != "GET" {
					t.Fatalf("expected method GET, got %v", initMap["method"])
				}
			}
			if url, ok := call["url"].(string); ok {
				if !strings.Contains(url, "direct01") {
					t.Fatalf("expected url to contain direct01, got %v", url)
				}
			}
		}
	})

}

type region_translation_dtoDirectSetupResult struct {
	client *sdk.CityAutocompleteSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func region_translation_dtoDirectSetup(mockres any) *region_translation_dtoDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"CITY_AUTOCOMPLETE_TEST_REGION_TRANSLATION_DTO_ENTID": map[string]any{},
		"CITY_AUTOCOMPLETE_TEST_LIVE":    "FALSE",
		"CITY_AUTOCOMPLETE_APIKEY":       "NONE",
	})

	live := env["CITY_AUTOCOMPLETE_TEST_LIVE"] == "TRUE"

	if live {
		mergedOpts := map[string]any{
			"apikey": env["CITY_AUTOCOMPLETE_APIKEY"],
		}
		client := sdk.NewCityAutocompleteSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["CITY_AUTOCOMPLETE_TEST_REGION_TRANSLATION_DTO_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &region_translation_dtoDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewCityAutocompleteSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &region_translation_dtoDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
