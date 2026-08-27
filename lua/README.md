# CityAutocomplete Lua SDK



The Lua SDK for the CityAutocomplete API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:City()` — each with the same small set of operations (`list`, `load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/city-autocomplete-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("city-autocomplete_sdk")

local client = sdk.new({
  apikey = os.getenv("CITY_AUTOCOMPLETE_APIKEY"),
})
```

### 3. Load a city

```lua
local city, err = client:City():load({ id = "example_id" })
if err then error(err) end
print(city)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local languages, err = client:Language():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Language():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### CityAutocompleteSDK

```lua
local sdk = require("city-autocomplete_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CityAutocompleteSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local city, err = client:City():load({ id = "example_id" })
    if err then error(err) end
    -- city is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### City

| Field | Description |
| --- | --- |
| `area` | Area in km² |
| `countryCode` | ISO country code |
| `countryEmoji` | Emoji flag of the country |
| `countryId` | UUID of the country |
| `countryName` | Country name |
| `countryTelephoneCode` | Telephone code of the country |
| `dialingCode` | Dialing code |
| `distanceKm` | Distance from the given point in kilometers |
| `elevation` | Elevation in meters |
| `flagImage` | Flag image URL |
| `id` | Geomelon UUID of the city |
| `latitude` | Latitude coordinate |
| `localizedName` | Localized name according to preferred languages |
| `longitude` | Longitude coordinate |
| `name` | City name |
| `normalizedName` | Normalized city name |
| `officialWebsite` | Official website URL |
| `population` | Population of the city |
| `postalCode` | Postal code |
| `regionCode` | Region code |
| `regionId` | UUID of the region |
| `regionName` | Region name |
| `timeZone` | Time zone |
| `translations` | Translations of the city name in requested languages |
| `wikidataId` | Wikidata ID of the city |

Operations: Load.

API path: `/cities/{id}`

#### CityDto

| Field | Description |
| --- | --- |
| `area` | Area in km² |
| `countryCode` | ISO country code |
| `countryEmoji` | Emoji flag of the country |
| `countryId` | UUID of the country |
| `countryName` | Country name |
| `countryTelephoneCode` | Telephone code of the country |
| `dialingCode` | Dialing code |
| `distanceKm` | Distance from the given point in kilometers |
| `elevation` | Elevation in meters |
| `flagImage` | Flag image URL |
| `id` | Geomelon UUID of the city |
| `latitude` | Latitude coordinate |
| `localizedName` | Localized name according to preferred languages |
| `longitude` | Longitude coordinate |
| `name` | City name |
| `normalizedName` | Normalized city name |
| `officialWebsite` | Official website URL |
| `population` | Population of the city |
| `postalCode` | Postal code |
| `regionCode` | Region code |
| `regionId` | UUID of the region |
| `regionName` | Region name |
| `timeZone` | Time zone |
| `translations` | Translations of the city name in requested languages |
| `wikidataId` | Wikidata ID of the city |

Operations: List.

API path: `/cities/search`

#### CityTranslationDto

| Field | Description |
| --- | --- |
| `cityId` | City ID |
| `id` | Translation ID |
| `language` | Language code |
| `name` | Translated name |
| `nameNormalized` | Normalized translated name |

Operations: List.

API path: `/cities/{id}/translations`

#### Country

| Field | Description |
| --- | --- |
| `drivingSide` | Driving side of the country |
| `emoji` | Emoji of the country |
| `headOfGovernment` | Head of government of the country |
| `headOfState` | Head of state of the country |
| `id` | Country ID |
| `isoCode` | ISO code of the country |
| `licencePlateCode` | Licence plate code of the country |
| `localizedName` | Name in the first matched preferred language, falls back to name |
| `name` | Name of the country |
| `preferredLanguageId` | Preferred language ID for the country |
| `regions` | Regions within the country |
| `telephoneCode` | Telephone code of the country |
| `translations` | Country translations |
| `trunkPrefix` | Trunk prefix of the country |
| `wikidataId` | Wikidata ID |

Operations: List, Load.

API path: `/countries`

#### CountryTranslationDto

| Field | Description |
| --- | --- |
| `countryId` | Country ID |
| `id` | Translation ID |
| `language` | Language code |
| `name` | Translated name |
| `nameNormalized` | Normalized translated name |

Operations: List.

API path: `/countries/{id}/translations`

#### Distance

| Field | Description |
| --- | --- |
| `distanceKm` | Distance between cities |

Operations: Load.

API path: `/cities/distance`

#### Language

| Field | Description |
| --- | --- |
| `citiesCount` | Number of cities using this language |
| `id` | UUID of the language |
| `isoCode` | ISO code of the language |
| `name` | Name of the language |
| `wikidataId` | Wikidata ID of the language |

Operations: List, Load.

API path: `/languages`

#### Oneshot

| Field | Description |
| --- | --- |
| `emoji` |  |
| `en` | English name — omitted when the requested language is English or no English translation exists |
| `id` |  |
| `name` | City name in the requested language |
| `population` |  |

Operations: List.

API path: `/cities/oneshot/{country}/{language}/{city_name}`

#### Region

| Field | Description |
| --- | --- |
| `code` | Region code |
| `countryId` | Country ID the region belongs to |
| `drivingSide` | Driving side of the country |
| `emoji` | Emoji of the country |
| `headOfGovernment` | Head of government of the country |
| `headOfState` | Head of state of the country |
| `id` | Country ID |
| `isoCode` | ISO code of the country |
| `latitude` | Latitude of the region center |
| `licencePlateCode` | Licence plate code of the country |
| `localizedName` | Name in the first matched preferred language, falls back to name |
| `longitude` | Longitude of the region center |
| `name` | Name of the country |
| `population` | Population of the region |
| `preferredLanguageId` | Preferred language ID for the country |
| `telephoneCode` | Telephone code of the country |
| `trunkPrefix` | Trunk prefix of the country |
| `wikidataId` | Wikidata ID |

Operations: List, Load.

API path: `/countries/{id}/regions`

#### RegionTranslationDto

| Field | Description |
| --- | --- |
| `id` | Translation ID |
| `language` | Language code |
| `name` | Translated name |
| `nameNormalized` | Normalized translated name |
| `regionId` | Region ID |

Operations: List.

API path: `/regions/{id}/translations`

#### SettlementType

| Field | Description |
| --- | --- |
| `description` | Description of the settlement type |
| `id` | Settlement Type ID |
| `name` | Name of the settlement type |
| `nameNormalized` | Normalized name of the settlement type |
| `wikidataId` | Wikidata ID |

Operations: List.

API path: `/cities/{id}/settlement-types`



## Entities


### City

Create an instance: `local city = client:City(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `number` | Area in km² |
| `countryCode` | `string` | ISO country code |
| `countryEmoji` | `string` | Emoji flag of the country |
| `countryId` | `string` | UUID of the country |
| `countryName` | `string` | Country name |
| `countryTelephoneCode` | `string` | Telephone code of the country |
| `dialingCode` | `string` | Dialing code |
| `distanceKm` | `number` | Distance from the given point in kilometers |
| `elevation` | `number` | Elevation in meters |
| `flagImage` | `string` | Flag image URL |
| `id` | `string` | Geomelon UUID of the city |
| `latitude` | `number` | Latitude coordinate |
| `localizedName` | `string` | Localized name according to preferred languages |
| `longitude` | `number` | Longitude coordinate |
| `name` | `string` | City name |
| `normalizedName` | `string` | Normalized city name |
| `officialWebsite` | `string` | Official website URL |
| `population` | `number` | Population of the city |
| `postalCode` | `string` | Postal code |
| `regionCode` | `string` | Region code |
| `regionId` | `string` | UUID of the region |
| `regionName` | `string` | Region name |
| `timeZone` | `string` | Time zone |
| `translations` | `table` | Translations of the city name in requested languages |
| `wikidataId` | `string` | Wikidata ID of the city |

#### Example: Load

```lua
local city, err = client:City():load({ id = "city_id" })
```


### CityDto

Create an instance: `local city_dto = client:CityDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `number` | Area in km² |
| `countryCode` | `string` | ISO country code |
| `countryEmoji` | `string` | Emoji flag of the country |
| `countryId` | `string` | UUID of the country |
| `countryName` | `string` | Country name |
| `countryTelephoneCode` | `string` | Telephone code of the country |
| `dialingCode` | `string` | Dialing code |
| `distanceKm` | `number` | Distance from the given point in kilometers |
| `elevation` | `number` | Elevation in meters |
| `flagImage` | `string` | Flag image URL |
| `id` | `string` | Geomelon UUID of the city |
| `latitude` | `number` | Latitude coordinate |
| `localizedName` | `string` | Localized name according to preferred languages |
| `longitude` | `number` | Longitude coordinate |
| `name` | `string` | City name |
| `normalizedName` | `string` | Normalized city name |
| `officialWebsite` | `string` | Official website URL |
| `population` | `number` | Population of the city |
| `postalCode` | `string` | Postal code |
| `regionCode` | `string` | Region code |
| `regionId` | `string` | UUID of the region |
| `regionName` | `string` | Region name |
| `timeZone` | `string` | Time zone |
| `translations` | `table` | Translations of the city name in requested languages |
| `wikidataId` | `string` | Wikidata ID of the city |

#### Example: List

```lua
local city_dtos, err = client:CityDto():list()
```


### CityTranslationDto

Create an instance: `local city_translation_dto = client:CityTranslationDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cityId` | `string` | City ID |
| `id` | `string` | Translation ID |
| `language` | `string` | Language code |
| `name` | `string` | Translated name |
| `nameNormalized` | `string` | Normalized translated name |

#### Example: List

```lua
local city_translation_dtos, err = client:CityTranslationDto():list()
```


### Country

Create an instance: `local country = client:Country(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drivingSide` | `string` | Driving side of the country |
| `emoji` | `string` | Emoji of the country |
| `headOfGovernment` | `string` | Head of government of the country |
| `headOfState` | `string` | Head of state of the country |
| `id` | `string` | Country ID |
| `isoCode` | `string` | ISO code of the country |
| `licencePlateCode` | `string` | Licence plate code of the country |
| `localizedName` | `string` | Name in the first matched preferred language, falls back to name |
| `name` | `string` | Name of the country |
| `preferredLanguageId` | `string` | Preferred language ID for the country |
| `regions` | `table` | Regions within the country |
| `telephoneCode` | `string` | Telephone code of the country |
| `translations` | `table` | Country translations |
| `trunkPrefix` | `string` | Trunk prefix of the country |
| `wikidataId` | `string` | Wikidata ID |

#### Example: Load

```lua
local country, err = client:Country():load({ id = "country_id" })
```

#### Example: List

```lua
local countrys, err = client:Country():list()
```


### CountryTranslationDto

Create an instance: `local country_translation_dto = client:CountryTranslationDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countryId` | `string` | Country ID |
| `id` | `string` | Translation ID |
| `language` | `string` | Language code |
| `name` | `string` | Translated name |
| `nameNormalized` | `string` | Normalized translated name |

#### Example: List

```lua
local country_translation_dtos, err = client:CountryTranslationDto():list()
```


### Distance

Create an instance: `local distance = client:Distance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `distanceKm` | `number` | Distance between cities |

#### Example: Load

```lua
local distance, err = client:Distance():load({ city1 = "city1", city2 = "city2" })
```


### Language

Create an instance: `local language = client:Language(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `citiesCount` | `number` | Number of cities using this language |
| `id` | `string` | UUID of the language |
| `isoCode` | `string` | ISO code of the language |
| `name` | `string` | Name of the language |
| `wikidataId` | `string` | Wikidata ID of the language |

#### Example: Load

```lua
local language, err = client:Language():load({ id = "language_id" })
```

#### Example: List

```lua
local languages, err = client:Language():list()
```


### Oneshot

Create an instance: `local oneshot = client:Oneshot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `table` |  |
| `en` | `string` | English name — omitted when the requested language is English or no English translation exists |
| `id` | `string` |  |
| `name` | `string` | City name in the requested language |
| `population` | `table` |  |

#### Example: List

```lua
local oneshots, err = client:Oneshot():list()
```


### Region

Create an instance: `local region = client:Region(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` | Region code |
| `countryId` | `string` | Country ID the region belongs to |
| `drivingSide` | `string` | Driving side of the country |
| `emoji` | `string` | Emoji of the country |
| `headOfGovernment` | `string` | Head of government of the country |
| `headOfState` | `string` | Head of state of the country |
| `id` | `string` | Country ID |
| `isoCode` | `string` | ISO code of the country |
| `latitude` | `number` | Latitude of the region center |
| `licencePlateCode` | `string` | Licence plate code of the country |
| `localizedName` | `string` | Name in the first matched preferred language, falls back to name |
| `longitude` | `number` | Longitude of the region center |
| `name` | `string` | Name of the country |
| `population` | `number` | Population of the region |
| `preferredLanguageId` | `string` | Preferred language ID for the country |
| `telephoneCode` | `string` | Telephone code of the country |
| `trunkPrefix` | `string` | Trunk prefix of the country |
| `wikidataId` | `string` | Wikidata ID |

#### Example: Load

```lua
local region, err = client:Region():load({ id = "region_id" })
```

#### Example: List

```lua
local regions, err = client:Region():list()
```


### RegionTranslationDto

Create an instance: `local region_translation_dto = client:RegionTranslationDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Translation ID |
| `language` | `string` | Language code |
| `name` | `string` | Translated name |
| `nameNormalized` | `string` | Normalized translated name |
| `regionId` | `string` | Region ID |

#### Example: List

```lua
local region_translation_dtos, err = client:RegionTranslationDto():list()
```


### SettlementType

Create an instance: `local settlement_type = client:SettlementType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the settlement type |
| `id` | `string` | Settlement Type ID |
| `name` | `string` | Name of the settlement type |
| `nameNormalized` | `string` | Normalized name of the settlement type |
| `wikidataId` | `string` | Wikidata ID |

#### Example: List

```lua
local settlement_types, err = client:SettlementType():list()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── city-autocomplete_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`city-autocomplete_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local language = client:Language()
language:list()

-- language:data_get() now returns the language data from the last list
-- language:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
