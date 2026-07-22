# CityAutocomplete Golang SDK Reference

Complete API reference for the CityAutocomplete Golang SDK.


## CityAutocompleteSDK

### Constructor

```go
func NewCityAutocompleteSDK(options map[string]any) *CityAutocompleteSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CityAutocompleteSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CityAutocompleteSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `City(data map[string]any) CityAutocompleteEntity`

Create a new `City` entity instance. Pass `nil` for no initial data.

#### `CityDto(data map[string]any) CityAutocompleteEntity`

Create a new `CityDto` entity instance. Pass `nil` for no initial data.

#### `CityTranslationDto(data map[string]any) CityAutocompleteEntity`

Create a new `CityTranslationDto` entity instance. Pass `nil` for no initial data.

#### `Country(data map[string]any) CityAutocompleteEntity`

Create a new `Country` entity instance. Pass `nil` for no initial data.

#### `CountryTranslationDto(data map[string]any) CityAutocompleteEntity`

Create a new `CountryTranslationDto` entity instance. Pass `nil` for no initial data.

#### `Distance(data map[string]any) CityAutocompleteEntity`

Create a new `Distance` entity instance. Pass `nil` for no initial data.

#### `Language(data map[string]any) CityAutocompleteEntity`

Create a new `Language` entity instance. Pass `nil` for no initial data.

#### `Oneshot(data map[string]any) CityAutocompleteEntity`

Create a new `Oneshot` entity instance. Pass `nil` for no initial data.

#### `Region(data map[string]any) CityAutocompleteEntity`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `RegionTranslationDto(data map[string]any) CityAutocompleteEntity`

Create a new `RegionTranslationDto` entity instance. Pass `nil` for no initial data.

#### `SettlementType(data map[string]any) CityAutocompleteEntity`

Create a new `SettlementType` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CityEntity

```go
city := client.City(nil)
fmt.Println(city.GetName()) // "city"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `float64` | No |  |
| `country_code` | `string` | Yes |  |
| `country_emoji` | `string` | Yes |  |
| `country_id` | `string` | Yes |  |
| `country_name` | `string` | Yes |  |
| `country_telephone_code` | `string` | No |  |
| `dialing_code` | `string` | No |  |
| `distance_km` | `float64` | No |  |
| `elevation` | `float64` | No |  |
| `flag_image` | `string` | No |  |
| `id` | `string` | Yes |  |
| `latitude` | `float64` | No |  |
| `localized_name` | `string` | Yes |  |
| `longitude` | `float64` | No |  |
| `name` | `string` | Yes |  |
| `normalized_name` | `string` | Yes |  |
| `official_website` | `string` | No |  |
| `population` | `float64` | No |  |
| `postal_code` | `string` | No |  |
| `region_code` | `string` | Yes |  |
| `region_id` | `string` | Yes |  |
| `region_name` | `string` | Yes |  |
| `time_zone` | `string` | No |  |
| `translation` | `[]any` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.City(nil).Load(map[string]any{"id": "city_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CityDtoEntity

```go
cityDto := client.CityDto(nil)
fmt.Println(cityDto.GetName()) // "city_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `float64` | No |  |
| `country_code` | `string` | Yes |  |
| `country_emoji` | `string` | Yes |  |
| `country_id` | `string` | Yes |  |
| `country_name` | `string` | Yes |  |
| `country_telephone_code` | `string` | No |  |
| `dialing_code` | `string` | No |  |
| `distance_km` | `float64` | No |  |
| `elevation` | `float64` | No |  |
| `flag_image` | `string` | No |  |
| `id` | `string` | Yes |  |
| `latitude` | `float64` | No |  |
| `localized_name` | `string` | Yes |  |
| `longitude` | `float64` | No |  |
| `name` | `string` | Yes |  |
| `normalized_name` | `string` | Yes |  |
| `official_website` | `string` | No |  |
| `population` | `float64` | No |  |
| `postal_code` | `string` | No |  |
| `region_code` | `string` | Yes |  |
| `region_id` | `string` | Yes |  |
| `region_name` | `string` | Yes |  |
| `time_zone` | `string` | No |  |
| `translation` | `[]any` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CityDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CityDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CityTranslationDtoEntity

```go
cityTranslationDto := client.CityTranslationDto(nil)
fmt.Println(cityTranslationDto.GetName()) // "city_translation_dto"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CityTranslationDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CityTranslationDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CountryEntity

```go
country := client.Country(nil)
fmt.Println(country.GetName()) // "country"
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
| `region` | `[]any` | Yes |  |
| `telephone_code` | `string` | Yes |  |
| `translation` | `[]any` | Yes |  |
| `trunk_prefix` | `string` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Country(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Country(nil).Load(map[string]any{"id": "country_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CountryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CountryTranslationDtoEntity

```go
countryTranslationDto := client.CountryTranslationDto(nil)
fmt.Println(countryTranslationDto.GetName()) // "country_translation_dto"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CountryTranslationDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CountryTranslationDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DistanceEntity

```go
distance := client.Distance(nil)
fmt.Println(distance.GetName()) // "distance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `distance_km` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Distance(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DistanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LanguageEntity

```go
language := client.Language(nil)
fmt.Println(language.GetName()) // "language"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cities_count` | `float64` | Yes |  |
| `id` | `string` | Yes |  |
| `iso_code` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Language(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Language(nil).Load(map[string]any{"id": "language_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LanguageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OneshotEntity

```go
oneshot := client.Oneshot(nil)
fmt.Println(oneshot.GetName()) // "oneshot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `map[string]any` | Yes |  |
| `en` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `population` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Oneshot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OneshotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RegionEntity

```go
region := client.Region(nil)
fmt.Println(region.GetName()) // "region"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes |  |
| `country` | `any` | Yes |  |
| `country_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `latitude` | `float64` | Yes |  |
| `longitude` | `float64` | Yes |  |
| `name` | `string` | Yes |  |
| `population` | `float64` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Region(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Region(nil).Load(map[string]any{"id": "region_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RegionTranslationDtoEntity

```go
regionTranslationDto := client.RegionTranslationDto(nil)
fmt.Println(regionTranslationDto.GetName()) // "region_translation_dto"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RegionTranslationDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RegionTranslationDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SettlementTypeEntity

```go
settlementType := client.SettlementType(nil)
fmt.Println(settlementType.GetName()) // "settlement_type"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SettlementType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SettlementTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewCityAutocompleteSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

