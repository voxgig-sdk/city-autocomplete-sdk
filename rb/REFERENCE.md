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
| `area` | `Float` | No | Area in km² |
| `countryCode` | `String` | Yes | ISO country code |
| `countryEmoji` | `String` | Yes | Emoji flag of the country |
| `countryId` | `String` | Yes | UUID of the country |
| `countryName` | `String` | Yes | Country name |
| `countryTelephoneCode` | `String` | No | Telephone code of the country |
| `dialingCode` | `String` | No | Dialing code |
| `distanceKm` | `Float` | No | Distance from the given point in kilometers |
| `elevation` | `Float` | No | Elevation in meters |
| `flagImage` | `String` | No | Flag image URL |
| `id` | `String` | Yes | Geomelon UUID of the city |
| `latitude` | `Float` | No | Latitude coordinate |
| `localizedName` | `String` | Yes | Localized name according to preferred languages |
| `longitude` | `Float` | No | Longitude coordinate |
| `name` | `String` | Yes | City name |
| `normalizedName` | `String` | Yes | Normalized city name |
| `officialWebsite` | `String` | No | Official website URL |
| `population` | `Float` | No | Population of the city |
| `postalCode` | `String` | No | Postal code |
| `regionCode` | `String` | Yes | Region code |
| `regionId` | `String` | Yes | UUID of the region |
| `regionName` | `String` | Yes | Region name |
| `timeZone` | `String` | No | Time zone |
| `translations` | `Array` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `String` | Yes | Wikidata ID of the city |

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
| `area` | `Float` | No | Area in km² |
| `countryCode` | `String` | Yes | ISO country code |
| `countryEmoji` | `String` | Yes | Emoji flag of the country |
| `countryId` | `String` | Yes | UUID of the country |
| `countryName` | `String` | Yes | Country name |
| `countryTelephoneCode` | `String` | No | Telephone code of the country |
| `dialingCode` | `String` | No | Dialing code |
| `distanceKm` | `Float` | No | Distance from the given point in kilometers |
| `elevation` | `Float` | No | Elevation in meters |
| `flagImage` | `String` | No | Flag image URL |
| `id` | `String` | Yes | Geomelon UUID of the city |
| `latitude` | `Float` | No | Latitude coordinate |
| `localizedName` | `String` | Yes | Localized name according to preferred languages |
| `longitude` | `Float` | No | Longitude coordinate |
| `name` | `String` | Yes | City name |
| `normalizedName` | `String` | Yes | Normalized city name |
| `officialWebsite` | `String` | No | Official website URL |
| `population` | `Float` | No | Population of the city |
| `postalCode` | `String` | No | Postal code |
| `regionCode` | `String` | Yes | Region code |
| `regionId` | `String` | Yes | UUID of the region |
| `regionName` | `String` | Yes | Region name |
| `timeZone` | `String` | No | Time zone |
| `translations` | `Array` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `String` | Yes | Wikidata ID of the city |

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
| `cityId` | `String` | Yes | City ID |
| `id` | `String` | Yes | Translation ID |
| `language` | `String` | Yes | Language code |
| `name` | `String` | Yes | Translated name |
| `nameNormalized` | `String` | Yes | Normalized translated name |

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
| `drivingSide` | `String` | Yes | Driving side of the country |
| `emoji` | `String` | Yes | Emoji of the country |
| `headOfGovernment` | `String` | Yes | Head of government of the country |
| `headOfState` | `String` | Yes | Head of state of the country |
| `id` | `String` | Yes | Country ID |
| `isoCode` | `String` | Yes | ISO code of the country |
| `licencePlateCode` | `String` | Yes | Licence plate code of the country |
| `localizedName` | `String` | No | Name in the first matched preferred language, falls back to name |
| `name` | `String` | Yes | Name of the country |
| `preferredLanguageId` | `String` | Yes | Preferred language ID for the country |
| `regions` | `Array` | Yes | Regions within the country |
| `telephoneCode` | `String` | Yes | Telephone code of the country |
| `translations` | `Array` | Yes | Country translations |
| `trunkPrefix` | `String` | Yes | Trunk prefix of the country |
| `wikidataId` | `String` | Yes | Wikidata ID |

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
| `countryId` | `String` | Yes | Country ID |
| `id` | `String` | Yes | Translation ID |
| `language` | `String` | Yes | Language code |
| `name` | `String` | Yes | Translated name |
| `nameNormalized` | `String` | Yes | Normalized translated name |

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
| `distanceKm` | `Float` | Yes | Distance between cities |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Distance.load({ "city1" => "city1", "city2" => "city2" })
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
| `citiesCount` | `Float` | Yes | Number of cities using this language |
| `id` | `String` | Yes | UUID of the language |
| `isoCode` | `String` | Yes | ISO code of the language |
| `name` | `String` | Yes | Name of the language |
| `wikidataId` | `String` | Yes | Wikidata ID of the language |

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
| `en` | `String` | No | English name — omitted when the requested language is English or no English translation exists |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes | City name in the requested language |
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
| `code` | `String` | Yes | Region code |
| `countryId` | `String` | Yes | Country ID the region belongs to |
| `drivingSide` | `String` | Yes | Driving side of the country |
| `emoji` | `String` | Yes | Emoji of the country |
| `headOfGovernment` | `String` | Yes | Head of government of the country |
| `headOfState` | `String` | Yes | Head of state of the country |
| `id` | `String` | Yes | Country ID |
| `isoCode` | `String` | Yes | ISO code of the country |
| `latitude` | `Float` | Yes | Latitude of the region center |
| `licencePlateCode` | `String` | Yes | Licence plate code of the country |
| `localizedName` | `String` | No | Name in the first matched preferred language, falls back to name |
| `longitude` | `Float` | Yes | Longitude of the region center |
| `name` | `String` | Yes | Name of the country |
| `population` | `Float` | Yes | Population of the region |
| `preferredLanguageId` | `String` | Yes | Preferred language ID for the country |
| `telephoneCode` | `String` | Yes | Telephone code of the country |
| `trunkPrefix` | `String` | Yes | Trunk prefix of the country |
| `wikidataId` | `String` | Yes | Wikidata ID |

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
| `id` | `String` | Yes | Translation ID |
| `language` | `String` | Yes | Language code |
| `name` | `String` | Yes | Translated name |
| `nameNormalized` | `String` | Yes | Normalized translated name |
| `regionId` | `String` | Yes | Region ID |

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
| `description` | `String` | Yes | Description of the settlement type |
| `id` | `String` | Yes | Settlement Type ID |
| `name` | `String` | Yes | Name of the settlement type |
| `nameNormalized` | `String` | Yes | Normalized name of the settlement type |
| `wikidataId` | `String` | Yes | Wikidata ID |

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

