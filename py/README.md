# CityAutocomplete Python SDK



The Python SDK for the CityAutocomplete API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.City()` — each
carrying a small, uniform set of operations (`list`, `load`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/city-autocomplete-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cityautocomplete_sdk import CityAutocompleteSDK

client = CityAutocompleteSDK({
    "apikey": os.environ.get("CITY_AUTOCOMPLETE_APIKEY"),
})
```

### 3. Load a city

`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    city = client.City().load({"id": "example_id"})
    print(city)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    languages = client.Language().list()
    print(languages)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CityAutocompleteSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
language = client.Language().list()
# language contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CityAutocompleteSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CityAutocompleteSDK

```python
from cityautocomplete_sdk import CityAutocompleteSDK

client = CityAutocompleteSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CityAutocompleteSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CityAutocompleteSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `city = client.City()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `float` | Area in km² |
| `countryCode` | `str` | ISO country code |
| `countryEmoji` | `str` | Emoji flag of the country |
| `countryId` | `str` | UUID of the country |
| `countryName` | `str` | Country name |
| `countryTelephoneCode` | `str` | Telephone code of the country |
| `dialingCode` | `str` | Dialing code |
| `distanceKm` | `float` | Distance from the given point in kilometers |
| `elevation` | `float` | Elevation in meters |
| `flagImage` | `str` | Flag image URL |
| `id` | `str` | Geomelon UUID of the city |
| `latitude` | `float` | Latitude coordinate |
| `localizedName` | `str` | Localized name according to preferred languages |
| `longitude` | `float` | Longitude coordinate |
| `name` | `str` | City name |
| `normalizedName` | `str` | Normalized city name |
| `officialWebsite` | `str` | Official website URL |
| `population` | `float` | Population of the city |
| `postalCode` | `str` | Postal code |
| `regionCode` | `str` | Region code |
| `regionId` | `str` | UUID of the region |
| `regionName` | `str` | Region name |
| `timeZone` | `str` | Time zone |
| `translations` | `list` | Translations of the city name in requested languages |
| `wikidataId` | `str` | Wikidata ID of the city |

#### Example: Load

```python
city = client.City().load({"id": "city_id"})
```


### CityDto

Create an instance: `city_dto = client.CityDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `float` | Area in km² |
| `countryCode` | `str` | ISO country code |
| `countryEmoji` | `str` | Emoji flag of the country |
| `countryId` | `str` | UUID of the country |
| `countryName` | `str` | Country name |
| `countryTelephoneCode` | `str` | Telephone code of the country |
| `dialingCode` | `str` | Dialing code |
| `distanceKm` | `float` | Distance from the given point in kilometers |
| `elevation` | `float` | Elevation in meters |
| `flagImage` | `str` | Flag image URL |
| `id` | `str` | Geomelon UUID of the city |
| `latitude` | `float` | Latitude coordinate |
| `localizedName` | `str` | Localized name according to preferred languages |
| `longitude` | `float` | Longitude coordinate |
| `name` | `str` | City name |
| `normalizedName` | `str` | Normalized city name |
| `officialWebsite` | `str` | Official website URL |
| `population` | `float` | Population of the city |
| `postalCode` | `str` | Postal code |
| `regionCode` | `str` | Region code |
| `regionId` | `str` | UUID of the region |
| `regionName` | `str` | Region name |
| `timeZone` | `str` | Time zone |
| `translations` | `list` | Translations of the city name in requested languages |
| `wikidataId` | `str` | Wikidata ID of the city |

#### Example: List

```python
city_dtos = client.CityDto().list()
```


### CityTranslationDto

Create an instance: `city_translation_dto = client.CityTranslationDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cityId` | `str` | City ID |
| `id` | `str` | Translation ID |
| `language` | `str` | Language code |
| `name` | `str` | Translated name |
| `nameNormalized` | `str` | Normalized translated name |

#### Example: List

```python
city_translation_dtos = client.CityTranslationDto().list({"id": "example"})
```


### Country

Create an instance: `country = client.Country()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drivingSide` | `str` | Driving side of the country |
| `emoji` | `str` | Emoji of the country |
| `headOfGovernment` | `str` | Head of government of the country |
| `headOfState` | `str` | Head of state of the country |
| `id` | `str` | Country ID |
| `isoCode` | `str` | ISO code of the country |
| `licencePlateCode` | `str` | Licence plate code of the country |
| `localizedName` | `str` | Name in the first matched preferred language, falls back to name |
| `name` | `str` | Name of the country |
| `preferredLanguageId` | `str` | Preferred language ID for the country |
| `regions` | `list` | Regions within the country |
| `telephoneCode` | `str` | Telephone code of the country |
| `translations` | `list` | Country translations |
| `trunkPrefix` | `str` | Trunk prefix of the country |
| `wikidataId` | `str` | Wikidata ID |

#### Example: Load

```python
country = client.Country().load({"id": "country_id"})
```

#### Example: List

```python
countrys = client.Country().list()
```


### CountryTranslationDto

Create an instance: `country_translation_dto = client.CountryTranslationDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countryId` | `str` | Country ID |
| `id` | `str` | Translation ID |
| `language` | `str` | Language code |
| `name` | `str` | Translated name |
| `nameNormalized` | `str` | Normalized translated name |

#### Example: List

```python
country_translation_dtos = client.CountryTranslationDto().list({"id": "example"})
```


### Distance

Create an instance: `distance = client.Distance()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `distanceKm` | `float` | Distance between cities |

#### Example: Load

```python
distance = client.Distance().load()
```


### Language

Create an instance: `language = client.Language()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `citiesCount` | `float` | Number of cities using this language |
| `id` | `str` | UUID of the language |
| `isoCode` | `str` | ISO code of the language |
| `name` | `str` | Name of the language |
| `wikidataId` | `str` | Wikidata ID of the language |

#### Example: Load

```python
language = client.Language().load({"id": "language_id"})
```

#### Example: List

```python
languages = client.Language().list()
```


### Oneshot

Create an instance: `oneshot = client.Oneshot()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `dict` |  |
| `en` | `str` | English name — omitted when the requested language is English or no English translation exists |
| `id` | `str` |  |
| `name` | `str` | City name in the requested language |
| `population` | `dict` |  |

#### Example: List

```python
oneshots = client.Oneshot().list({"city_name": "example", "country": "example", "language": "example"})
```


### Region

Create an instance: `region = client.Region()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `str` | Region code |
| `countryId` | `str` | Country ID the region belongs to |
| `drivingSide` | `str` | Driving side of the country |
| `emoji` | `str` | Emoji of the country |
| `headOfGovernment` | `str` | Head of government of the country |
| `headOfState` | `str` | Head of state of the country |
| `id` | `str` | Country ID |
| `isoCode` | `str` | ISO code of the country |
| `latitude` | `float` | Latitude of the region center |
| `licencePlateCode` | `str` | Licence plate code of the country |
| `localizedName` | `str` | Name in the first matched preferred language, falls back to name |
| `longitude` | `float` | Longitude of the region center |
| `name` | `str` | Name of the country |
| `population` | `float` | Population of the region |
| `preferredLanguageId` | `str` | Preferred language ID for the country |
| `telephoneCode` | `str` | Telephone code of the country |
| `trunkPrefix` | `str` | Trunk prefix of the country |
| `wikidataId` | `str` | Wikidata ID |

#### Example: Load

```python
region = client.Region().load({"id": "region_id"})
```

#### Example: List

```python
regions = client.Region().list()
```


### RegionTranslationDto

Create an instance: `region_translation_dto = client.RegionTranslationDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | Translation ID |
| `language` | `str` | Language code |
| `name` | `str` | Translated name |
| `nameNormalized` | `str` | Normalized translated name |
| `regionId` | `str` | Region ID |

#### Example: List

```python
region_translation_dtos = client.RegionTranslationDto().list({"id": "example"})
```


### SettlementType

Create an instance: `settlement_type = client.SettlementType()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | Description of the settlement type |
| `id` | `str` | Settlement Type ID |
| `name` | `str` | Name of the settlement type |
| `nameNormalized` | `str` | Normalized name of the settlement type |
| `wikidataId` | `str` | Wikidata ID |

#### Example: List

```python
settlement_types = client.SettlementType().list({"city_id": "example"})
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cityautocomplete_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cityautocomplete_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
language = client.Language()
language.list()

# language.data_get() now returns the language data from the last list
# language.match_get() returns the last match criteria
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
