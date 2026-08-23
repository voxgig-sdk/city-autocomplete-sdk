# CityAutocomplete Lua SDK Reference

Complete API reference for the CityAutocomplete Lua SDK.


## CityAutocompleteSDK

### Constructor

```lua
local sdk = require("city-autocomplete_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `City(data)`

Create a new `City` entity instance. Pass `nil` for no initial data.

#### `CityDto(data)`

Create a new `CityDto` entity instance. Pass `nil` for no initial data.

#### `CityTranslationDto(data)`

Create a new `CityTranslationDto` entity instance. Pass `nil` for no initial data.

#### `Country(data)`

Create a new `Country` entity instance. Pass `nil` for no initial data.

#### `CountryTranslationDto(data)`

Create a new `CountryTranslationDto` entity instance. Pass `nil` for no initial data.

#### `Distance(data)`

Create a new `Distance` entity instance. Pass `nil` for no initial data.

#### `Language(data)`

Create a new `Language` entity instance. Pass `nil` for no initial data.

#### `Oneshot(data)`

Create a new `Oneshot` entity instance. Pass `nil` for no initial data.

#### `Region(data)`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `RegionTranslationDto(data)`

Create a new `RegionTranslationDto` entity instance. Pass `nil` for no initial data.

#### `SettlementType(data)`

Create a new `SettlementType` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CityEntity

```lua
local city = client:City(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `number` | No | Area in km² |
| `countryCode` | `string` | Yes | ISO country code |
| `countryEmoji` | `string` | Yes | Emoji flag of the country |
| `countryId` | `string` | Yes | UUID of the country |
| `countryName` | `string` | Yes | Country name |
| `countryTelephoneCode` | `string` | No | Telephone code of the country |
| `dialingCode` | `string` | No | Dialing code |
| `distanceKm` | `number` | No | Distance from the given point in kilometers |
| `elevation` | `number` | No | Elevation in meters |
| `flagImage` | `string` | No | Flag image URL |
| `id` | `string` | Yes | Geomelon UUID of the city |
| `latitude` | `number` | No | Latitude coordinate |
| `localizedName` | `string` | Yes | Localized name according to preferred languages |
| `longitude` | `number` | No | Longitude coordinate |
| `name` | `string` | Yes | City name |
| `normalizedName` | `string` | Yes | Normalized city name |
| `officialWebsite` | `string` | No | Official website URL |
| `population` | `number` | No | Population of the city |
| `postalCode` | `string` | No | Postal code |
| `regionCode` | `string` | Yes | Region code |
| `regionId` | `string` | Yes | UUID of the region |
| `regionName` | `string` | Yes | Region name |
| `timeZone` | `string` | No | Time zone |
| `translations` | `table` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `string` | Yes | Wikidata ID of the city |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:City():load({ id = "city_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CityDtoEntity

```lua
local city_dto = client:CityDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `number` | No | Area in km² |
| `countryCode` | `string` | Yes | ISO country code |
| `countryEmoji` | `string` | Yes | Emoji flag of the country |
| `countryId` | `string` | Yes | UUID of the country |
| `countryName` | `string` | Yes | Country name |
| `countryTelephoneCode` | `string` | No | Telephone code of the country |
| `dialingCode` | `string` | No | Dialing code |
| `distanceKm` | `number` | No | Distance from the given point in kilometers |
| `elevation` | `number` | No | Elevation in meters |
| `flagImage` | `string` | No | Flag image URL |
| `id` | `string` | Yes | Geomelon UUID of the city |
| `latitude` | `number` | No | Latitude coordinate |
| `localizedName` | `string` | Yes | Localized name according to preferred languages |
| `longitude` | `number` | No | Longitude coordinate |
| `name` | `string` | Yes | City name |
| `normalizedName` | `string` | Yes | Normalized city name |
| `officialWebsite` | `string` | No | Official website URL |
| `population` | `number` | No | Population of the city |
| `postalCode` | `string` | No | Postal code |
| `regionCode` | `string` | Yes | Region code |
| `regionId` | `string` | Yes | UUID of the region |
| `regionName` | `string` | Yes | Region name |
| `timeZone` | `string` | No | Time zone |
| `translations` | `table` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `string` | Yes | Wikidata ID of the city |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CityDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CityDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CityTranslationDtoEntity

```lua
local city_translation_dto = client:CityTranslationDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cityId` | `string` | Yes | City ID |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CityTranslationDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CityTranslationDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CountryEntity

```lua
local country = client:Country(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drivingSide` | `string` | Yes | Driving side of the country |
| `emoji` | `string` | Yes | Emoji of the country |
| `headOfGovernment` | `string` | Yes | Head of government of the country |
| `headOfState` | `string` | Yes | Head of state of the country |
| `id` | `string` | Yes | Country ID |
| `isoCode` | `string` | Yes | ISO code of the country |
| `licencePlateCode` | `string` | Yes | Licence plate code of the country |
| `localizedName` | `string` | No | Name in the first matched preferred language, falls back to name |
| `name` | `string` | Yes | Name of the country |
| `preferredLanguageId` | `string` | Yes | Preferred language ID for the country |
| `regions` | `table` | Yes | Regions within the country |
| `telephoneCode` | `string` | Yes | Telephone code of the country |
| `translations` | `table` | Yes | Country translations |
| `trunkPrefix` | `string` | Yes | Trunk prefix of the country |
| `wikidataId` | `string` | Yes | Wikidata ID |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Country():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Country():load({ id = "country_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CountryTranslationDtoEntity

```lua
local country_translation_dto = client:CountryTranslationDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryId` | `string` | Yes | Country ID |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CountryTranslationDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryTranslationDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DistanceEntity

```lua
local distance = client:Distance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `distanceKm` | `number` | Yes | Distance between cities |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Distance():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DistanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LanguageEntity

```lua
local language = client:Language(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `citiesCount` | `number` | Yes | Number of cities using this language |
| `id` | `string` | Yes | UUID of the language |
| `isoCode` | `string` | Yes | ISO code of the language |
| `name` | `string` | Yes | Name of the language |
| `wikidataId` | `string` | Yes | Wikidata ID of the language |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Language():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Language():load({ id = "language_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LanguageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OneshotEntity

```lua
local oneshot = client:Oneshot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `table` | Yes |  |
| `en` | `string` | No | English name — omitted when the requested language is English or no English translation exists |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes | City name in the requested language |
| `population` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Oneshot():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OneshotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RegionEntity

```lua
local region = client:Region(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes | Region code |
| `countryId` | `string` | Yes | Country ID the region belongs to |
| `drivingSide` | `string` | Yes | Driving side of the country |
| `emoji` | `string` | Yes | Emoji of the country |
| `headOfGovernment` | `string` | Yes | Head of government of the country |
| `headOfState` | `string` | Yes | Head of state of the country |
| `id` | `string` | Yes | Country ID |
| `isoCode` | `string` | Yes | ISO code of the country |
| `latitude` | `number` | Yes | Latitude of the region center |
| `licencePlateCode` | `string` | Yes | Licence plate code of the country |
| `localizedName` | `string` | No | Name in the first matched preferred language, falls back to name |
| `longitude` | `number` | Yes | Longitude of the region center |
| `name` | `string` | Yes | Name of the country |
| `population` | `number` | Yes | Population of the region |
| `preferredLanguageId` | `string` | Yes | Preferred language ID for the country |
| `telephoneCode` | `string` | Yes | Telephone code of the country |
| `trunkPrefix` | `string` | Yes | Trunk prefix of the country |
| `wikidataId` | `string` | Yes | Wikidata ID |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Region():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Region():load({ id = "region_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RegionTranslationDtoEntity

```lua
local region_translation_dto = client:RegionTranslationDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |
| `regionId` | `string` | Yes | Region ID |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RegionTranslationDto():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegionTranslationDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SettlementTypeEntity

```lua
local settlement_type = client:SettlementType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the settlement type |
| `id` | `string` | Yes | Settlement Type ID |
| `name` | `string` | Yes | Name of the settlement type |
| `nameNormalized` | `string` | Yes | Normalized name of the settlement type |
| `wikidataId` | `string` | Yes | Wikidata ID |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SettlementType():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettlementTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

