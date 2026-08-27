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
| `area` | `float64` | No | Area in km² |
| `countryCode` | `string` | Yes | ISO country code |
| `countryEmoji` | `string` | Yes | Emoji flag of the country |
| `countryId` | `string` | Yes | UUID of the country |
| `countryName` | `string` | Yes | Country name |
| `countryTelephoneCode` | `string` | No | Telephone code of the country |
| `dialingCode` | `string` | No | Dialing code |
| `distanceKm` | `float64` | No | Distance from the given point in kilometers |
| `elevation` | `float64` | No | Elevation in meters |
| `flagImage` | `string` | No | Flag image URL |
| `id` | `string` | Yes | Geomelon UUID of the city |
| `latitude` | `float64` | No | Latitude coordinate |
| `localizedName` | `string` | Yes | Localized name according to preferred languages |
| `longitude` | `float64` | No | Longitude coordinate |
| `name` | `string` | Yes | City name |
| `normalizedName` | `string` | Yes | Normalized city name |
| `officialWebsite` | `string` | No | Official website URL |
| `population` | `float64` | No | Population of the city |
| `postalCode` | `string` | No | Postal code |
| `regionCode` | `string` | Yes | Region code |
| `regionId` | `string` | Yes | UUID of the region |
| `regionName` | `string` | Yes | Region name |
| `timeZone` | `string` | No | Time zone |
| `translations` | `[]any` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `string` | Yes | Wikidata ID of the city |

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
| `area` | `float64` | No | Area in km² |
| `countryCode` | `string` | Yes | ISO country code |
| `countryEmoji` | `string` | Yes | Emoji flag of the country |
| `countryId` | `string` | Yes | UUID of the country |
| `countryName` | `string` | Yes | Country name |
| `countryTelephoneCode` | `string` | No | Telephone code of the country |
| `dialingCode` | `string` | No | Dialing code |
| `distanceKm` | `float64` | No | Distance from the given point in kilometers |
| `elevation` | `float64` | No | Elevation in meters |
| `flagImage` | `string` | No | Flag image URL |
| `id` | `string` | Yes | Geomelon UUID of the city |
| `latitude` | `float64` | No | Latitude coordinate |
| `localizedName` | `string` | Yes | Localized name according to preferred languages |
| `longitude` | `float64` | No | Longitude coordinate |
| `name` | `string` | Yes | City name |
| `normalizedName` | `string` | Yes | Normalized city name |
| `officialWebsite` | `string` | No | Official website URL |
| `population` | `float64` | No | Population of the city |
| `postalCode` | `string` | No | Postal code |
| `regionCode` | `string` | Yes | Region code |
| `regionId` | `string` | Yes | UUID of the region |
| `regionName` | `string` | Yes | Region name |
| `timeZone` | `string` | No | Time zone |
| `translations` | `[]any` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `string` | Yes | Wikidata ID of the city |

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
| `cityId` | `string` | Yes | City ID |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |

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
| `regions` | `[]any` | Yes | Regions within the country |
| `telephoneCode` | `string` | Yes | Telephone code of the country |
| `translations` | `[]any` | Yes | Country translations |
| `trunkPrefix` | `string` | Yes | Trunk prefix of the country |
| `wikidataId` | `string` | Yes | Wikidata ID |

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
| `countryId` | `string` | Yes | Country ID |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |

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
| `distanceKm` | `float64` | Yes | Distance between cities |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Distance(nil).Load(map[string]any{"city1": "city1", "city2": "city2"}, nil)
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
| `citiesCount` | `float64` | Yes | Number of cities using this language |
| `id` | `string` | Yes | UUID of the language |
| `isoCode` | `string` | Yes | ISO code of the language |
| `name` | `string` | Yes | Name of the language |
| `wikidataId` | `string` | Yes | Wikidata ID of the language |

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
| `en` | `string` | No | English name — omitted when the requested language is English or no English translation exists |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes | City name in the requested language |
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
| `code` | `string` | Yes | Region code |
| `countryId` | `string` | Yes | Country ID the region belongs to |
| `drivingSide` | `string` | Yes | Driving side of the country |
| `emoji` | `string` | Yes | Emoji of the country |
| `headOfGovernment` | `string` | Yes | Head of government of the country |
| `headOfState` | `string` | Yes | Head of state of the country |
| `id` | `string` | Yes | Country ID |
| `isoCode` | `string` | Yes | ISO code of the country |
| `latitude` | `float64` | Yes | Latitude of the region center |
| `licencePlateCode` | `string` | Yes | Licence plate code of the country |
| `localizedName` | `string` | No | Name in the first matched preferred language, falls back to name |
| `longitude` | `float64` | Yes | Longitude of the region center |
| `name` | `string` | Yes | Name of the country |
| `population` | `float64` | Yes | Population of the region |
| `preferredLanguageId` | `string` | Yes | Preferred language ID for the country |
| `telephoneCode` | `string` | Yes | Telephone code of the country |
| `trunkPrefix` | `string` | Yes | Trunk prefix of the country |
| `wikidataId` | `string` | Yes | Wikidata ID |

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
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |
| `regionId` | `string` | Yes | Region ID |

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
| `description` | `string` | Yes | Description of the settlement type |
| `id` | `string` | Yes | Settlement Type ID |
| `name` | `string` | Yes | Name of the settlement type |
| `nameNormalized` | `string` | Yes | Normalized name of the settlement type |
| `wikidataId` | `string` | Yes | Wikidata ID |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

