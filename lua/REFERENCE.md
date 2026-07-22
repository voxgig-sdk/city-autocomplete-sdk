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
| `area` | `number` | No |  |
| `country_code` | `string` | Yes |  |
| `country_emoji` | `string` | Yes |  |
| `country_id` | `string` | Yes |  |
| `country_name` | `string` | Yes |  |
| `country_telephone_code` | `string` | No |  |
| `dialing_code` | `string` | No |  |
| `distance_km` | `number` | No |  |
| `elevation` | `number` | No |  |
| `flag_image` | `string` | No |  |
| `id` | `string` | Yes |  |
| `latitude` | `number` | No |  |
| `localized_name` | `string` | Yes |  |
| `longitude` | `number` | No |  |
| `name` | `string` | Yes |  |
| `normalized_name` | `string` | Yes |  |
| `official_website` | `string` | No |  |
| `population` | `number` | No |  |
| `postal_code` | `string` | No |  |
| `region_code` | `string` | Yes |  |
| `region_id` | `string` | Yes |  |
| `region_name` | `string` | Yes |  |
| `time_zone` | `string` | No |  |
| `translation` | `table` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `area` | `number` | No |  |
| `country_code` | `string` | Yes |  |
| `country_emoji` | `string` | Yes |  |
| `country_id` | `string` | Yes |  |
| `country_name` | `string` | Yes |  |
| `country_telephone_code` | `string` | No |  |
| `dialing_code` | `string` | No |  |
| `distance_km` | `number` | No |  |
| `elevation` | `number` | No |  |
| `flag_image` | `string` | No |  |
| `id` | `string` | Yes |  |
| `latitude` | `number` | No |  |
| `localized_name` | `string` | Yes |  |
| `longitude` | `number` | No |  |
| `name` | `string` | Yes |  |
| `normalized_name` | `string` | Yes |  |
| `official_website` | `string` | No |  |
| `population` | `number` | No |  |
| `postal_code` | `string` | No |  |
| `region_code` | `string` | Yes |  |
| `region_id` | `string` | Yes |  |
| `region_name` | `string` | Yes |  |
| `time_zone` | `string` | No |  |
| `translation` | `table` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `city_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |

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
| `driving_side` | `string` | Yes |  |
| `emoji` | `string` | Yes |  |
| `head_of_government` | `string` | Yes |  |
| `head_of_state` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `iso_code` | `string` | Yes |  |
| `licence_plate_code` | `string` | Yes |  |
| `localized_name` | `string` | No |  |
| `name` | `string` | Yes |  |
| `preferred_language_id` | `string` | Yes |  |
| `region` | `table` | Yes |  |
| `telephone_code` | `string` | Yes |  |
| `translation` | `table` | Yes |  |
| `trunk_prefix` | `string` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `country_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |

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
| `distance_km` | `number` | Yes |  |

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
| `cities_count` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `iso_code` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `en` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
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
| `code` | `string` | Yes |  |
| `country` | `any` | Yes |  |
| `country_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `latitude` | `number` | Yes |  |
| `longitude` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `population` | `number` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `id` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |
| `region_id` | `string` | Yes |  |

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
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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

