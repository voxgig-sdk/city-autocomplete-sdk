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

func TestOneshotEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Oneshot(nil)
		if ent == nil {
			t.Fatal("expected non-nil OneshotEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"oneshot": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Oneshot(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.Oneshot(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
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
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		oneshotRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.oneshot", setup.data)))
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
	idmap := vs.Transform(
		[]any{"oneshot01", "oneshot02", "oneshot03", "city_name01", "country01", "language01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID": idmap,
		"CITY_AUTOCOMPLETE_TEST_LIVE":      "FALSE",
		"CITY_AUTOCOMPLETE_TEST_EXPLAIN":   "FALSE",
		"CITY_AUTOCOMPLETE_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CITY_AUTOCOMPLETE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["CITY_AUTOCOMPLETE_APIKEY"],
			},
			extra,
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
