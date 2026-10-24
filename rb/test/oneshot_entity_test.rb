# Oneshot entity test

require "minitest/autorun"
require "json"
require_relative "../CityAutocomplete_sdk"
require_relative "runner"

class OneshotEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = CityAutocompleteSDK.test(nil, nil)
    ent = testsdk.Oneshot(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = CityAutocompleteConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = CityAutocompleteSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.Oneshot(nil).list({ "city_name" => 1, "country" => "x", "language" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = oneshot_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "oneshot." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["city_name01", "country01", "language01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID")
        end
      end
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    oneshot_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.oneshot")))
    oneshot_ref01_data = nil
    if oneshot_ref01_data_raw.length > 0
      oneshot_ref01_data = Helpers.to_map(oneshot_ref01_data_raw[0][1])
    end

    # LIST
    oneshot_ref01_ent = client.Oneshot(nil)
    oneshot_ref01_match = {
      "city_name" => setup[:idmap]["city_name01"],
      "country" => setup[:idmap]["country01"],
      "language" => setup[:idmap]["language01"],
    }

    oneshot_ref01_list_result = oneshot_ref01_ent.list(oneshot_ref01_match, nil)
    assert oneshot_ref01_list_result.is_a?(Array)

  end
end

def oneshot_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "oneshot", "OneshotTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CityAutocompleteSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["oneshot01", "oneshot02", "oneshot03", "city_name01", "country01", "language01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID" => idmap,
    "CITY_AUTOCOMPLETE_TEST_LIVE" => "FALSE",
    "CITY_AUTOCOMPLETE_TEST_EXPLAIN" => "FALSE",
    "CITY_AUTOCOMPLETE_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CITY_AUTOCOMPLETE_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CITY_AUTOCOMPLETE_APIKEY"],
      },
      extra || {},
    ])
    client = CityAutocompleteSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CITY_AUTOCOMPLETE_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CITY_AUTOCOMPLETE_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
