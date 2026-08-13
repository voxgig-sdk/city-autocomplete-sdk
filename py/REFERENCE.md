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
| `area` | `float` | No |  |
| `countryCode` | `str` | Yes |  |
| `countryEmoji` | `str` | Yes |  |
| `countryId` | `str` | Yes |  |
| `countryName` | `str` | Yes |  |
| `countryTelephoneCode` | `str` | No |  |
| `dialingCode` | `str` | No |  |
| `distanceKm` | `float` | No |  |
| `elevation` | `float` | No |  |
| `flagImage` | `str` | No |  |
| `id` | `str` | Yes |  |
| `latitude` | `float` | No |  |
| `localizedName` | `str` | Yes |  |
| `longitude` | `float` | No |  |
| `name` | `str` | Yes |  |
| `normalizedName` | `str` | Yes |  |
| `officialWebsite` | `str` | No |  |
| `population` | `float` | No |  |
| `postalCode` | `str` | No |  |
| `regionCode` | `str` | Yes |  |
| `regionId` | `str` | Yes |  |
| `regionName` | `str` | Yes |  |
| `timeZone` | `str` | No |  |
| `translations` | `list` | Yes |  |
| `wikidataId` | `str` | Yes |  |

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
| `area` | `float` | No |  |
| `countryCode` | `str` | Yes |  |
| `countryEmoji` | `str` | Yes |  |
| `countryId` | `str` | Yes |  |
| `countryName` | `str` | Yes |  |
| `countryTelephoneCode` | `str` | No |  |
| `dialingCode` | `str` | No |  |
| `distanceKm` | `float` | No |  |
| `elevation` | `float` | No |  |
| `flagImage` | `str` | No |  |
| `id` | `str` | Yes |  |
| `latitude` | `float` | No |  |
| `localizedName` | `str` | Yes |  |
| `longitude` | `float` | No |  |
| `name` | `str` | Yes |  |
| `normalizedName` | `str` | Yes |  |
| `officialWebsite` | `str` | No |  |
| `population` | `float` | No |  |
| `postalCode` | `str` | No |  |
| `regionCode` | `str` | Yes |  |
| `regionId` | `str` | Yes |  |
| `regionName` | `str` | Yes |  |
| `timeZone` | `str` | No |  |
| `translations` | `list` | Yes |  |
| `wikidataId` | `str` | Yes |  |

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
| `cityId` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `nameNormalized` | `str` | Yes |  |

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
| `drivingSide` | `str` | Yes |  |
| `emoji` | `str` | Yes |  |
| `headOfGovernment` | `str` | Yes |  |
| `headOfState` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `isoCode` | `str` | Yes |  |
| `licencePlateCode` | `str` | Yes |  |
| `localizedName` | `str` | No |  |
| `name` | `str` | Yes |  |
| `preferredLanguageId` | `str` | Yes |  |
| `regions` | `list` | Yes |  |
| `telephoneCode` | `str` | Yes |  |
| `translations` | `list` | Yes |  |
| `trunkPrefix` | `str` | Yes |  |
| `wikidataId` | `str` | Yes |  |

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
| `countryId` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `nameNormalized` | `str` | Yes |  |

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
| `distanceKm` | `float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Distance().load()
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
| `citiesCount` | `float` | Yes |  |
| `id` | `str` | Yes |  |
| `isoCode` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `wikidataId` | `str` | Yes |  |

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
| `en` | `str` | No |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
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
| `code` | `str` | Yes |  |
| `countryId` | `str` | Yes |  |
| `drivingSide` | `str` | Yes |  |
| `emoji` | `str` | Yes |  |
| `headOfGovernment` | `str` | Yes |  |
| `headOfState` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `isoCode` | `str` | Yes |  |
| `latitude` | `float` | Yes |  |
| `licencePlateCode` | `str` | Yes |  |
| `localizedName` | `str` | No |  |
| `longitude` | `float` | Yes |  |
| `name` | `str` | Yes |  |
| `population` | `float` | Yes |  |
| `preferredLanguageId` | `str` | Yes |  |
| `telephoneCode` | `str` | Yes |  |
| `trunkPrefix` | `str` | Yes |  |
| `wikidataId` | `str` | Yes |  |

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
| `id` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `nameNormalized` | `str` | Yes |  |
| `regionId` | `str` | Yes |  |

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
| `description` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `nameNormalized` | `str` | Yes |  |
| `wikidataId` | `str` | Yes |  |

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

