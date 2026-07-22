# CityAutocomplete Ruby SDK



The Ruby SDK for the CityAutocomplete API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.City` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/city-autocomplete-sdk/releases](https://github.com/voxgig-sdk/city-autocomplete-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CityAutocomplete_sdk"

client = CityAutocompleteSDK.new({
  "apikey" => ENV["CITY_AUTOCOMPLETE_APIKEY"],
})
```

### 3. Load a city

```ruby
begin
  # load returns the bare City record (raises on error).
  city = client.City.load({ "id" => "example_id" })
  puts city
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  city = client.City.load({ "id" => "example_id" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = CityAutocompleteSDK.test({
  "entity" => { "city" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the bare mock record (raises on error).
city = client.City.load({ "id" => "test01" })
puts city
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CityAutocompleteSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CITY_AUTOCOMPLETE_TEST_LIVE=TRUE
CITY_AUTOCOMPLETE_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CityAutocompleteSDK

```ruby
require_relative "CityAutocomplete_sdk"
client = CityAutocompleteSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CityAutocompleteSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CityAutocompleteSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `City` | `(data) -> CityEntity` | Create a City entity instance. |
| `CityDto` | `(data) -> CityDtoEntity` | Create a CityDto entity instance. |
| `CityTranslationDto` | `(data) -> CityTranslationDtoEntity` | Create a CityTranslationDto entity instance. |
| `Country` | `(data) -> CountryEntity` | Create a Country entity instance. |
| `CountryTranslationDto` | `(data) -> CountryTranslationDtoEntity` | Create a CountryTranslationDto entity instance. |
| `Distance` | `(data) -> DistanceEntity` | Create a Distance entity instance. |
| `Language` | `(data) -> LanguageEntity` | Create a Language entity instance. |
| `Oneshot` | `(data) -> OneshotEntity` | Create an Oneshot entity instance. |
| `Region` | `(data) -> RegionEntity` | Create a Region entity instance. |
| `RegionTranslationDto` | `(data) -> RegionTranslationDtoEntity` | Create a RegionTranslationDto entity instance. |
| `SettlementType` | `(data) -> SettlementTypeEntity` | Create a SettlementType entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CityAutocompleteError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### City

| Field | Description |
| --- | --- |
| `area` |  |
| `country_code` |  |
| `country_emoji` |  |
| `country_id` |  |
| `country_name` |  |
| `country_telephone_code` |  |
| `dialing_code` |  |
| `distance_km` |  |
| `elevation` |  |
| `flag_image` |  |
| `id` |  |
| `latitude` |  |
| `localized_name` |  |
| `longitude` |  |
| `name` |  |
| `normalized_name` |  |
| `official_website` |  |
| `population` |  |
| `postal_code` |  |
| `region_code` |  |
| `region_id` |  |
| `region_name` |  |
| `time_zone` |  |
| `translation` |  |
| `wikidata_id` |  |

Operations: Load.

API path: `/cities/{id}`

#### CityDto

| Field | Description |
| --- | --- |
| `area` |  |
| `country_code` |  |
| `country_emoji` |  |
| `country_id` |  |
| `country_name` |  |
| `country_telephone_code` |  |
| `dialing_code` |  |
| `distance_km` |  |
| `elevation` |  |
| `flag_image` |  |
| `id` |  |
| `latitude` |  |
| `localized_name` |  |
| `longitude` |  |
| `name` |  |
| `normalized_name` |  |
| `official_website` |  |
| `population` |  |
| `postal_code` |  |
| `region_code` |  |
| `region_id` |  |
| `region_name` |  |
| `time_zone` |  |
| `translation` |  |
| `wikidata_id` |  |

Operations: List.

API path: `/cities/search`

#### CityTranslationDto

| Field | Description |
| --- | --- |
| `city_id` |  |
| `id` |  |
| `language` |  |
| `name` |  |
| `name_normalized` |  |

Operations: List.

API path: `/cities/{id}/translations`

#### Country

| Field | Description |
| --- | --- |
| `driving_side` |  |
| `emoji` |  |
| `head_of_government` |  |
| `head_of_state` |  |
| `id` |  |
| `iso_code` |  |
| `licence_plate_code` |  |
| `localized_name` |  |
| `name` |  |
| `preferred_language_id` |  |
| `region` |  |
| `telephone_code` |  |
| `translation` |  |
| `trunk_prefix` |  |
| `wikidata_id` |  |

Operations: List, Load.

API path: `/countries`

#### CountryTranslationDto

| Field | Description |
| --- | --- |
| `country_id` |  |
| `id` |  |
| `language` |  |
| `name` |  |
| `name_normalized` |  |

Operations: List.

API path: `/countries/{id}/translations`

#### Distance

| Field | Description |
| --- | --- |
| `distance_km` |  |

Operations: Load.

API path: `/cities/distance`

#### Language

| Field | Description |
| --- | --- |
| `cities_count` |  |
| `id` |  |
| `iso_code` |  |
| `name` |  |
| `wikidata_id` |  |

Operations: List, Load.

API path: `/languages`

#### Oneshot

| Field | Description |
| --- | --- |
| `emoji` |  |
| `en` |  |
| `id` |  |
| `name` |  |
| `population` |  |

Operations: List.

API path: `/cities/oneshot/{country}/{language}/{city_name}`

#### Region

| Field | Description |
| --- | --- |
| `code` |  |
| `country` |  |
| `country_id` |  |
| `id` |  |
| `latitude` |  |
| `longitude` |  |
| `name` |  |
| `population` |  |
| `wikidata_id` |  |

Operations: List, Load.

API path: `/countries/{id}/regions`

#### RegionTranslationDto

| Field | Description |
| --- | --- |
| `id` |  |
| `language` |  |
| `name` |  |
| `name_normalized` |  |
| `region_id` |  |

Operations: List.

API path: `/regions/{id}/translations`

#### SettlementType

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `name_normalized` |  |
| `wikidata_id` |  |

Operations: List.

API path: `/cities/{id}/settlement-types`



## Entities


### City

Create an instance: `city = client.City`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `Float` |  |
| `country_code` | `String` |  |
| `country_emoji` | `String` |  |
| `country_id` | `String` |  |
| `country_name` | `String` |  |
| `country_telephone_code` | `String` |  |
| `dialing_code` | `String` |  |
| `distance_km` | `Float` |  |
| `elevation` | `Float` |  |
| `flag_image` | `String` |  |
| `id` | `String` |  |
| `latitude` | `Float` |  |
| `localized_name` | `String` |  |
| `longitude` | `Float` |  |
| `name` | `String` |  |
| `normalized_name` | `String` |  |
| `official_website` | `String` |  |
| `population` | `Float` |  |
| `postal_code` | `String` |  |
| `region_code` | `String` |  |
| `region_id` | `String` |  |
| `region_name` | `String` |  |
| `time_zone` | `String` |  |
| `translation` | `Array` |  |
| `wikidata_id` | `String` |  |

#### Example: Load

```ruby
# load returns the bare City record (raises on error).
city = client.City.load({ "id" => "city_id" })
```


### CityDto

Create an instance: `city_dto = client.CityDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `Float` |  |
| `country_code` | `String` |  |
| `country_emoji` | `String` |  |
| `country_id` | `String` |  |
| `country_name` | `String` |  |
| `country_telephone_code` | `String` |  |
| `dialing_code` | `String` |  |
| `distance_km` | `Float` |  |
| `elevation` | `Float` |  |
| `flag_image` | `String` |  |
| `id` | `String` |  |
| `latitude` | `Float` |  |
| `localized_name` | `String` |  |
| `longitude` | `Float` |  |
| `name` | `String` |  |
| `normalized_name` | `String` |  |
| `official_website` | `String` |  |
| `population` | `Float` |  |
| `postal_code` | `String` |  |
| `region_code` | `String` |  |
| `region_id` | `String` |  |
| `region_name` | `String` |  |
| `time_zone` | `String` |  |
| `translation` | `Array` |  |
| `wikidata_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CityDto records (raises on error).
city_dtos = client.CityDto.list
```


### CityTranslationDto

Create an instance: `city_translation_dto = client.CityTranslationDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `city_id` | `String` |  |
| `id` | `String` |  |
| `language` | `String` |  |
| `name` | `String` |  |
| `name_normalized` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CityTranslationDto records (raises on error).
city_translation_dtos = client.CityTranslationDto.list
```


### Country

Create an instance: `country = client.Country`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `driving_side` | `String` |  |
| `emoji` | `String` |  |
| `head_of_government` | `String` |  |
| `head_of_state` | `String` |  |
| `id` | `String` |  |
| `iso_code` | `String` |  |
| `licence_plate_code` | `String` |  |
| `localized_name` | `String` |  |
| `name` | `String` |  |
| `preferred_language_id` | `String` |  |
| `region` | `Array` |  |
| `telephone_code` | `String` |  |
| `translation` | `Array` |  |
| `trunk_prefix` | `String` |  |
| `wikidata_id` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Country record (raises on error).
country = client.Country.load({ "id" => "country_id" })
```

#### Example: List

```ruby
# list returns an Array of Country records (raises on error).
countrys = client.Country.list
```


### CountryTranslationDto

Create an instance: `country_translation_dto = client.CountryTranslationDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country_id` | `String` |  |
| `id` | `String` |  |
| `language` | `String` |  |
| `name` | `String` |  |
| `name_normalized` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CountryTranslationDto records (raises on error).
country_translation_dtos = client.CountryTranslationDto.list
```


### Distance

Create an instance: `distance = client.Distance`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `distance_km` | `Float` |  |

#### Example: Load

```ruby
# load returns the bare Distance record (raises on error).
distance = client.Distance.load()
```


### Language

Create an instance: `language = client.Language`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cities_count` | `Float` |  |
| `id` | `String` |  |
| `iso_code` | `String` |  |
| `name` | `String` |  |
| `wikidata_id` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Language record (raises on error).
language = client.Language.load({ "id" => "language_id" })
```

#### Example: List

```ruby
# list returns an Array of Language records (raises on error).
languages = client.Language.list
```


### Oneshot

Create an instance: `oneshot = client.Oneshot`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `Hash` |  |
| `en` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `population` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of Oneshot records (raises on error).
oneshots = client.Oneshot.list
```


### Region

Create an instance: `region = client.Region`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `String` |  |
| `country` | `Object` |  |
| `country_id` | `String` |  |
| `id` | `String` |  |
| `latitude` | `Float` |  |
| `longitude` | `Float` |  |
| `name` | `String` |  |
| `population` | `Float` |  |
| `wikidata_id` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Region record (raises on error).
region = client.Region.load({ "id" => "region_id" })
```

#### Example: List

```ruby
# list returns an Array of Region records (raises on error).
regions = client.Region.list
```


### RegionTranslationDto

Create an instance: `region_translation_dto = client.RegionTranslationDto`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `language` | `String` |  |
| `name` | `String` |  |
| `name_normalized` | `String` |  |
| `region_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of RegionTranslationDto records (raises on error).
region_translation_dtos = client.RegionTranslationDto.list
```


### SettlementType

Create an instance: `settlement_type = client.SettlementType`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `name_normalized` | `String` |  |
| `wikidata_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of SettlementType records (raises on error).
settlement_types = client.SettlementType.list
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CityAutocomplete_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CityAutocomplete_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
city = client.City
city.load({ "id" => "example_id" })

# city.data_get now returns the city data from the last load
# city.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
