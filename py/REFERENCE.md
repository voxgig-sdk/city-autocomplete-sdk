# CityAutocomplete Python SDK Reference

Complete API reference for the CityAutocomplete Python SDK.


## CityAutocompleteSDK

### Constructor

```python
from cityautocomplete_sdk import CityAutocompleteSDK

client = CityAutocompleteSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CityAutocompleteSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CityAutocompleteSDK.test()
```


### Instance Methods

#### `City(data=None)`

Create a new `CityEntity` instance. Pass `None` for no initial data.

#### `CityDto(data=None)`

Create a new `CityDtoEntity` instance. Pass `None` for no initial data.

#### `CityTranslationDto(data=None)`

Create a new `CityTranslationDtoEntity` instance. Pass `None` for no initial data.

#### `Country(data=None)`

Create a new `CountryEntity` instance. Pass `None` for no initial data.

#### `CountryTranslationDto(data=None)`

Create a new `CountryTranslationDtoEntity` instance. Pass `None` for no initial data.

#### `Distance(data=None)`

Create a new `DistanceEntity` instance. Pass `None` for no initial data.

#### `Language(data=None)`

Create a new `LanguageEntity` instance. Pass `None` for no initial data.

#### `Oneshot(data=None)`

Create a new `OneshotEntity` instance. Pass `None` for no initial data.

#### `Region(data=None)`

Create a new `RegionEntity` instance. Pass `None` for no initial data.

#### `RegionTranslationDto(data=None)`

Create a new `RegionTranslationDtoEntity` instance. Pass `None` for no initial data.

#### `SettlementType(data=None)`

Create a new `SettlementTypeEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CityEntity

```python
city = client.City()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `float` | No | Area in km² |
| `countryCode` | `str` | Yes | ISO country code |
| `countryEmoji` | `str` | Yes | Emoji flag of the country |
| `countryId` | `str` | Yes | UUID of the country |
| `countryName` | `str` | Yes | Country name |
| `countryTelephoneCode` | `str` | No | Telephone code of the country |
| `dialingCode` | `str` | No | Dialing code |
| `distanceKm` | `float` | No | Distance from the given point in kilometers |
| `elevation` | `float` | No | Elevation in meters |
| `flagImage` | `str` | No | Flag image URL |
| `id` | `str` | Yes | Geomelon UUID of the city |
| `latitude` | `float` | No | Latitude coordinate |
| `localizedName` | `str` | Yes | Localized name according to preferred languages |
| `longitude` | `float` | No | Longitude coordinate |
| `name` | `str` | Yes | City name |
| `normalizedName` | `str` | Yes | Normalized city name |
| `officialWebsite` | `str` | No | Official website URL |
| `population` | `float` | No | Population of the city |
| `postalCode` | `str` | No | Postal code |
| `regionCode` | `str` | Yes | Region code |
| `regionId` | `str` | Yes | UUID of the region |
| `regionName` | `str` | Yes | Region name |
| `timeZone` | `str` | No | Time zone |
| `translations` | `list` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `str` | Yes | Wikidata ID of the city |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.City().load({"id": "city_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CityDtoEntity

```python
city_dto = client.CityDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `float` | No | Area in km² |
| `countryCode` | `str` | Yes | ISO country code |
| `countryEmoji` | `str` | Yes | Emoji flag of the country |
| `countryId` | `str` | Yes | UUID of the country |
| `countryName` | `str` | Yes | Country name |
| `countryTelephoneCode` | `str` | No | Telephone code of the country |
| `dialingCode` | `str` | No | Dialing code |
| `distanceKm` | `float` | No | Distance from the given point in kilometers |
| `elevation` | `float` | No | Elevation in meters |
| `flagImage` | `str` | No | Flag image URL |
| `id` | `str` | Yes | Geomelon UUID of the city |
| `latitude` | `float` | No | Latitude coordinate |
| `localizedName` | `str` | Yes | Localized name according to preferred languages |
| `longitude` | `float` | No | Longitude coordinate |
| `name` | `str` | Yes | City name |
| `normalizedName` | `str` | Yes | Normalized city name |
| `officialWebsite` | `str` | No | Official website URL |
| `population` | `float` | No | Population of the city |
| `postalCode` | `str` | No | Postal code |
| `regionCode` | `str` | Yes | Region code |
| `regionId` | `str` | Yes | UUID of the region |
| `regionName` | `str` | Yes | Region name |
| `timeZone` | `str` | No | Time zone |
| `translations` | `list` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `str` | Yes | Wikidata ID of the city |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CityDto().list()
for city_dto in results:
    print(city_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CityDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CityTranslationDtoEntity

```python
city_translation_dto = client.CityTranslationDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cityId` | `str` | Yes | City ID |
| `id` | `str` | Yes | Translation ID |
| `language` | `str` | Yes | Language code |
| `name` | `str` | Yes | Translated name |
| `nameNormalized` | `str` | Yes | Normalized translated name |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CityTranslationDto().list({"id": "example"})
for city_translation_dto in results:
    print(city_translation_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CityTranslationDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountryEntity

```python
country = client.Country()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drivingSide` | `str` | Yes | Driving side of the country |
| `emoji` | `str` | Yes | Emoji of the country |
| `headOfGovernment` | `str` | Yes | Head of government of the country |
| `headOfState` | `str` | Yes | Head of state of the country |
| `id` | `str` | Yes | Country ID |
| `isoCode` | `str` | Yes | ISO code of the country |
| `licencePlateCode` | `str` | Yes | Licence plate code of the country |
| `localizedName` | `str` | No | Name in the first matched preferred language, falls back to name |
| `name` | `str` | Yes | Name of the country |
| `preferredLanguageId` | `str` | Yes | Preferred language ID for the country |
| `regions` | `list` | Yes | Regions within the country |
| `telephoneCode` | `str` | Yes | Telephone code of the country |
| `translations` | `list` | Yes | Country translations |
| `trunkPrefix` | `str` | Yes | Trunk prefix of the country |
| `wikidataId` | `str` | Yes | Wikidata ID |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Country().list()
for country in results:
    print(country)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Country().load({"id": "country_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountryTranslationDtoEntity

```python
country_translation_dto = client.CountryTranslationDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryId` | `str` | Yes | Country ID |
| `id` | `str` | Yes | Translation ID |
| `language` | `str` | Yes | Language code |
| `name` | `str` | Yes | Translated name |
| `nameNormalized` | `str` | Yes | Normalized translated name |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CountryTranslationDto().list({"id": "example"})
for country_translation_dto in results:
    print(country_translation_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryTranslationDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DistanceEntity

```python
distance = client.Distance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `distanceKm` | `float` | Yes | Distance between cities |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Distance().load({"city1": "city1", "city2": "city2"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DistanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LanguageEntity

```python
language = client.Language()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `citiesCount` | `float` | Yes | Number of cities using this language |
| `id` | `str` | Yes | UUID of the language |
| `isoCode` | `str` | Yes | ISO code of the language |
| `name` | `str` | Yes | Name of the language |
| `wikidataId` | `str` | Yes | Wikidata ID of the language |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Language().list()
for language in results:
    print(language)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Language().load({"id": "language_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LanguageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OneshotEntity

```python
oneshot = client.Oneshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `dict` | Yes |  |
| `en` | `str` | No | English name — omitted when the requested language is English or no English translation exists |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes | City name in the requested language |
| `population` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Oneshot().list({"city_name": "example", "country": "example", "language": "example"})
for oneshot in results:
    print(oneshot)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OneshotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RegionEntity

```python
region = client.Region()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `str` | Yes | Region code |
| `countryId` | `str` | Yes | Country ID the region belongs to |
| `drivingSide` | `str` | Yes | Driving side of the country |
| `emoji` | `str` | Yes | Emoji of the country |
| `headOfGovernment` | `str` | Yes | Head of government of the country |
| `headOfState` | `str` | Yes | Head of state of the country |
| `id` | `str` | Yes | Country ID |
| `isoCode` | `str` | Yes | ISO code of the country |
| `latitude` | `float` | Yes | Latitude of the region center |
| `licencePlateCode` | `str` | Yes | Licence plate code of the country |
| `localizedName` | `str` | No | Name in the first matched preferred language, falls back to name |
| `longitude` | `float` | Yes | Longitude of the region center |
| `name` | `str` | Yes | Name of the country |
| `population` | `float` | Yes | Population of the region |
| `preferredLanguageId` | `str` | Yes | Preferred language ID for the country |
| `telephoneCode` | `str` | Yes | Telephone code of the country |
| `trunkPrefix` | `str` | Yes | Trunk prefix of the country |
| `wikidataId` | `str` | Yes | Wikidata ID |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Region().list()
for region in results:
    print(region)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Region().load({"id": "region_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RegionTranslationDtoEntity

```python
region_translation_dto = client.RegionTranslationDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Translation ID |
| `language` | `str` | Yes | Language code |
| `name` | `str` | Yes | Translated name |
| `nameNormalized` | `str` | Yes | Normalized translated name |
| `regionId` | `str` | Yes | Region ID |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RegionTranslationDto().list({"id": "example"})
for region_translation_dto in results:
    print(region_translation_dto)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegionTranslationDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SettlementTypeEntity

```python
settlement_type = client.SettlementType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes | Description of the settlement type |
| `id` | `str` | Yes | Settlement Type ID |
| `name` | `str` | Yes | Name of the settlement type |
| `nameNormalized` | `str` | Yes | Normalized name of the settlement type |
| `wikidataId` | `str` | Yes | Wikidata ID |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SettlementType().list({"city_id": "example"})
for settlement_type in results:
    print(settlement_type)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettlementTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = CityAutocompleteSDK({
    "feature": {
        "test": {"active": True},
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

