<?php
declare(strict_types=1);

// CityAutocomplete SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CityAutocompleteSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CityAutocompleteUtility();
        $this->_utility = $utility;

        $config = CityAutocompleteConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CityAutocompleteHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CityAutocompleteHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, CityAutocompleteFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CityAutocompleteUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CityAutocompleteHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CityAutocompleteHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CityAutocompleteHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CityAutocompleteSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    public function direct(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CityAutocompleteHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CityAutocompleteHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }


    private $_city = null;

    // Canonical facade: $client->City()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->city()
    // resolves here too.
    public function City($data = null)
    {
        require_once __DIR__ . '/entity/city_entity.php';
        if ($data === null) {
            if ($this->_city === null) {
                $this->_city = new CityEntity($this, null);
            }
            return $this->_city;
        }
        return new CityEntity($this, $data);
    }


    private $_city_dto = null;

    // Canonical facade: $client->CityDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->city_dto()
    // resolves here too.
    public function CityDto($data = null)
    {
        require_once __DIR__ . '/entity/city_dto_entity.php';
        if ($data === null) {
            if ($this->_city_dto === null) {
                $this->_city_dto = new CityDtoEntity($this, null);
            }
            return $this->_city_dto;
        }
        return new CityDtoEntity($this, $data);
    }


    private $_city_translation_dto = null;

    // Canonical facade: $client->CityTranslationDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->city_translation_dto()
    // resolves here too.
    public function CityTranslationDto($data = null)
    {
        require_once __DIR__ . '/entity/city_translation_dto_entity.php';
        if ($data === null) {
            if ($this->_city_translation_dto === null) {
                $this->_city_translation_dto = new CityTranslationDtoEntity($this, null);
            }
            return $this->_city_translation_dto;
        }
        return new CityTranslationDtoEntity($this, $data);
    }


    private $_country = null;

    // Canonical facade: $client->Country()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->country()
    // resolves here too.
    public function Country($data = null)
    {
        require_once __DIR__ . '/entity/country_entity.php';
        if ($data === null) {
            if ($this->_country === null) {
                $this->_country = new CountryEntity($this, null);
            }
            return $this->_country;
        }
        return new CountryEntity($this, $data);
    }


    private $_country_translation_dto = null;

    // Canonical facade: $client->CountryTranslationDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->country_translation_dto()
    // resolves here too.
    public function CountryTranslationDto($data = null)
    {
        require_once __DIR__ . '/entity/country_translation_dto_entity.php';
        if ($data === null) {
            if ($this->_country_translation_dto === null) {
                $this->_country_translation_dto = new CountryTranslationDtoEntity($this, null);
            }
            return $this->_country_translation_dto;
        }
        return new CountryTranslationDtoEntity($this, $data);
    }


    private $_distance = null;

    // Canonical facade: $client->Distance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->distance()
    // resolves here too.
    public function Distance($data = null)
    {
        require_once __DIR__ . '/entity/distance_entity.php';
        if ($data === null) {
            if ($this->_distance === null) {
                $this->_distance = new DistanceEntity($this, null);
            }
            return $this->_distance;
        }
        return new DistanceEntity($this, $data);
    }


    private $_language = null;

    // Canonical facade: $client->Language()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->language()
    // resolves here too.
    public function Language($data = null)
    {
        require_once __DIR__ . '/entity/language_entity.php';
        if ($data === null) {
            if ($this->_language === null) {
                $this->_language = new LanguageEntity($this, null);
            }
            return $this->_language;
        }
        return new LanguageEntity($this, $data);
    }


    private $_oneshot = null;

    // Canonical facade: $client->Oneshot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->oneshot()
    // resolves here too.
    public function Oneshot($data = null)
    {
        require_once __DIR__ . '/entity/oneshot_entity.php';
        if ($data === null) {
            if ($this->_oneshot === null) {
                $this->_oneshot = new OneshotEntity($this, null);
            }
            return $this->_oneshot;
        }
        return new OneshotEntity($this, $data);
    }


    private $_region = null;

    // Canonical facade: $client->Region()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->region()
    // resolves here too.
    public function Region($data = null)
    {
        require_once __DIR__ . '/entity/region_entity.php';
        if ($data === null) {
            if ($this->_region === null) {
                $this->_region = new RegionEntity($this, null);
            }
            return $this->_region;
        }
        return new RegionEntity($this, $data);
    }


    private $_region_translation_dto = null;

    // Canonical facade: $client->RegionTranslationDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->region_translation_dto()
    // resolves here too.
    public function RegionTranslationDto($data = null)
    {
        require_once __DIR__ . '/entity/region_translation_dto_entity.php';
        if ($data === null) {
            if ($this->_region_translation_dto === null) {
                $this->_region_translation_dto = new RegionTranslationDtoEntity($this, null);
            }
            return $this->_region_translation_dto;
        }
        return new RegionTranslationDtoEntity($this, $data);
    }


    private $_settlement_type = null;

    // Canonical facade: $client->SettlementType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->settlement_type()
    // resolves here too.
    public function SettlementType($data = null)
    {
        require_once __DIR__ . '/entity/settlement_type_entity.php';
        if ($data === null) {
            if ($this->_settlement_type === null) {
                $this->_settlement_type = new SettlementTypeEntity($this, null);
            }
            return $this->_settlement_type;
        }
        return new SettlementTypeEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CityAutocompleteSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
