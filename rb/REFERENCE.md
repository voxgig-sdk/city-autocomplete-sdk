# CityAutocomplete Ruby SDK Reference

Complete API reference for the CityAutocomplete Ruby SDK.


## CityAutocompleteSDK

### Constructor

```ruby
require_relative 'CityAutocomplete_sdk'

client = CityAutocompleteSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CityAutocompleteSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CityAutocompleteSDK.test
```


### Instance Methods

#### `City(data = nil)`

Create a new `City` entity instance. Pass `nil` for no initial data.

#### `CityDto(data = nil)`

Create a new `CityDto` entity instance. Pass `nil` for no initial data.

#### `CityTranslationDto(data = nil)`

Create a new `CityTranslationDto` entity instance. Pass `nil` for no initial data.

#### `Country(data = nil)`

Create a new `Country` entity instance. Pass `nil` for no initial data.

#### `CountryTranslationDto(data = nil)`

Create a new `CountryTranslationDto` entity instance. Pass `nil` for no initial data.

#### `Distance(data = nil)`

Create a new `Distance` entity instance. Pass `nil` for no initial data.

#### `Language(data = nil)`

Create a new `Language` entity instance. Pass `nil` for no initial data.

#### `Oneshot(data = nil)`

Create a new `Oneshot` entity instance. Pass `nil` for no initial data.

#### `Region(data = nil)`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `RegionTranslationDto(data = nil)`

Create a new `RegionTranslationDto` entity instance. Pass `nil` for no initial data.

#### `SettlementType(data = nil)`

Create a new `SettlementType` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CityEntity

```ruby
city = client.City
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `Float` | No |  |
| `country_code` | `String` | Yes |  |
| `country_emoji` | `String` | Yes |  |
| `country_id` | `String` | Yes |  |
| `country_name` | `String` | Yes |  |
| `country_telephone_code` | `String` | No |  |
| `dialing_code` | `String` | No |  |
| `distance_km` | `Float` | No |  |
| `elevation` | `Float` | No |  |
| `flag_image` | `String` | No |  |
| `id` | `String` | Yes |  |
| `latitude` | `Float` | No |  |
| `localized_name` | `String` | Yes |  |
| `longitude` | `Float` | No |  |
| `name` | `String` | Yes |  |
| `normalized_name` | `String` | Yes |  |
| `official_website` | `String` | No |  |
| `population` | `Float` | No |  |
| `postal_code` | `String` | No |  |
| `region_code` | `String` | Yes |  |
| `region_id` | `String` | Yes |  |
| `region_name` | `String` | Yes |  |
| `time_zone` | `String` | No |  |
| `translation` | `Array` | Yes |  |
| `wikidata_id` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.City.load({ "id" => "city_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CityDtoEntity

```ruby
city_dto = client.CityDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `Float` | No |  |
| `country_code` | `String` | Yes |  |
| `country_emoji` | `String` | Yes |  |
| `country_id` | `String` | Yes |  |
| `country_name` | `String` | Yes |  |
| `country_telephone_code` | `String` | No |  |
| `dialing_code` | `String` | No |  |
| `distance_km` | `Float` | No |  |
| `elevation` | `Float` | No |  |
| `flag_image` | `String` | No |  |
| `id` | `String` | Yes |  |
| `latitude` | `Float` | No |  |
| `localized_name` | `String` | Yes |  |
| `longitude` | `Float` | No |  |
| `name` | `String` | Yes |  |
| `normalized_name` | `String` | Yes |  |
| `official_website` | `String` | No |  |
| `population` | `Float` | No |  |
| `postal_code` | `String` | No |  |
| `region_code` | `String` | Yes |  |
| `region_id` | `String` | Yes |  |
| `region_name` | `String` | Yes |  |
| `time_zone` | `String` | No |  |
| `translation` | `Array` | Yes |  |
| `wikidata_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CityDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CityDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CityTranslationDtoEntity

```ruby
city_translation_dto = client.CityTranslationDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city_id` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `language` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `name_normalized` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CityTranslationDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CityTranslationDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CountryEntity

```ruby
country = client.Country
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `driving_side` | `String` | Yes |  |
| `emoji` | `String` | Yes |  |
| `head_of_government` | `String` | Yes |  |
| `head_of_state` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `iso_code` | `String` | Yes |  |
| `licence_plate_code` | `String` | Yes |  |
| `localized_name` | `String` | No |  |
| `name` | `String` | Yes |  |
| `preferred_language_id` | `String` | Yes |  |
| `region` | `Array` | Yes |  |
| `telephone_code` | `String` | Yes |  |
| `translation` | `Array` | Yes |  |
| `trunk_prefix` | `String` | Yes |  |
| `wikidata_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Country.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Country.load({ "id" => "country_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CountryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CountryTranslationDtoEntity

```ruby
country_translation_dto = client.CountryTranslationDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country_id` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `language` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `name_normalized` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CountryTranslationDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CountryTranslationDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DistanceEntity

```ruby
distance = client.Distance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `distance_km` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Distance.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DistanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LanguageEntity

```ruby
language = client.Language
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cities_count` | `Float` | Yes |  |
| `id` | `String` | Yes |  |
| `iso_code` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `wikidata_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Language.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Language.load({ "id" => "language_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LanguageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OneshotEntity

```ruby
oneshot = client.Oneshot
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `Hash` | Yes |  |
| `en` | `String` | No |  |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `population` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Oneshot.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OneshotEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RegionEntity

```ruby
region = client.Region
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `String` | Yes |  |
| `country` | `Object` | Yes |  |
| `country_id` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `latitude` | `Float` | Yes |  |
| `longitude` | `Float` | Yes |  |
| `name` | `String` | Yes |  |
| `population` | `Float` | Yes |  |
| `wikidata_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Region.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Region.load({ "id" => "region_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RegionTranslationDtoEntity

```ruby
region_translation_dto = client.RegionTranslationDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes |  |
| `language` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `name_normalized` | `String` | Yes |  |
| `region_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RegionTranslationDto.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RegionTranslationDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SettlementTypeEntity

```ruby
settlement_type = client.SettlementType
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `name_normalized` | `String` | Yes |  |
| `wikidata_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SettlementType.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SettlementTypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = CityAutocompleteSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

