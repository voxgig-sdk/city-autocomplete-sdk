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

`load()` returns the bare record (a `dict`) and raises on error.

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
    city = client.City().load({"id": "example_id"})
    print(city)
except Exception as err:
    print(f"load failed: {err}")
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

# Entity ops return the bare record and raise on error.
city = client.City().load({"id": "test01"})
# city contains the mock response record
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

Entity operations return the bare result data (a `dict` for single-entity
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
| `area` |  |
| `country_code` |  |
| `country_emoji` |  |
| `country_id` |  |
| `country_name` |  |
| `country_telephone_code` |  |
| `dialing_code` |  |
| `distance_km` |  |
| `elevation` |  |
| `flag_image` |  |
| `id` |  |
| `latitude` |  |
| `localized_name` |  |
| `longitude` |  |
| `name` |  |
| `normalized_name` |  |
| `official_website` |  |
| `population` |  |
| `postal_code` |  |
| `region_code` |  |
| `region_id` |  |
| `region_name` |  |
| `time_zone` |  |
| `translation` |  |
| `wikidata_id` |  |

Operations: Load.

API path: `/cities/{id}`

#### CityDto

| Field | Description |
| --- | --- |
| `area` |  |
| `country_code` |  |
| `country_emoji` |  |
| `country_id` |  |
| `country_name` |  |
| `country_telephone_code` |  |
| `dialing_code` |  |
| `distance_km` |  |
| `elevation` |  |
| `flag_image` |  |
| `id` |  |
| `latitude` |  |
| `localized_name` |  |
| `longitude` |  |
| `name` |  |
| `normalized_name` |  |
| `official_website` |  |
| `population` |  |
| `postal_code` |  |
| `region_code` |  |
| `region_id` |  |
| `region_name` |  |
| `time_zone` |  |
| `translation` |  |
| `wikidata_id` |  |

Operations: List.

API path: `/cities/search`

#### CityTranslationDto

| Field | Description |
| --- | --- |
| `city_id` |  |
| `id` |  |
| `language` |  |
| `name` |  |
| `name_normalized` |  |

Operations: List.

API path: `/cities/{id}/translations`

#### Country

| Field | Description |
| --- | --- |
| `driving_side` |  |
| `emoji` |  |
| `head_of_government` |  |
| `head_of_state` |  |
| `id` |  |
| `iso_code` |  |
| `licence_plate_code` |  |
| `localized_name` |  |
| `name` |  |
| `preferred_language_id` |  |
| `region` |  |
| `telephone_code` |  |
| `translation` |  |
| `trunk_prefix` |  |
| `wikidata_id` |  |

Operations: List, Load.

API path: `/countries`

#### CountryTranslationDto

| Field | Description |
| --- | --- |
| `country_id` |  |
| `id` |  |
| `language` |  |
| `name` |  |
| `name_normalized` |  |

Operations: List.

API path: `/countries/{id}/translations`

#### Distance

| Field | Description |
| --- | --- |
| `distance_km` |  |

Operations: Load.

API path: `/cities/distance`

#### Language

| Field | Description |
| --- | --- |
| `cities_count` |  |
| `id` |  |
| `iso_code` |  |
| `name` |  |
| `wikidata_id` |  |

Operations: List, Load.

API path: `/languages`

#### Oneshot

| Field | Description |
| --- | --- |
| `emoji` |  |
| `en` |  |
| `id` |  |
| `name` |  |
| `population` |  |

Operations: List.

API path: `/cities/oneshot/{country}/{language}/{city_name}`

#### Region

| Field | Description |
| --- | --- |
| `code` |  |
| `country` |  |
| `country_id` |  |
| `id` |  |
| `latitude` |  |
| `longitude` |  |
| `name` |  |
| `population` |  |
| `wikidata_id` |  |

Operations: List, Load.

API path: `/countries/{id}/regions`

#### RegionTranslationDto

| Field | Description |
| --- | --- |
| `id` |  |
| `language` |  |
| `name` |  |
| `name_normalized` |  |
| `region_id` |  |

Operations: List.

API path: `/regions/{id}/translations`

#### SettlementType

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `name_normalized` |  |
| `wikidata_id` |  |

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
| `area` | `float` |  |
| `country_code` | `str` |  |
| `country_emoji` | `str` |  |
| `country_id` | `str` |  |
| `country_name` | `str` |  |
| `country_telephone_code` | `str` |  |
| `dialing_code` | `str` |  |
| `distance_km` | `float` |  |
| `elevation` | `float` |  |
| `flag_image` | `str` |  |
| `id` | `str` |  |
| `latitude` | `float` |  |
| `localized_name` | `str` |  |
| `longitude` | `float` |  |
| `name` | `str` |  |
| `normalized_name` | `str` |  |
| `official_website` | `str` |  |
| `population` | `float` |  |
| `postal_code` | `str` |  |
| `region_code` | `str` |  |
| `region_id` | `str` |  |
| `region_name` | `str` |  |
| `time_zone` | `str` |  |
| `translation` | `list` |  |
| `wikidata_id` | `str` |  |

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
| `area` | `float` |  |
| `country_code` | `str` |  |
| `country_emoji` | `str` |  |
| `country_id` | `str` |  |
| `country_name` | `str` |  |
| `country_telephone_code` | `str` |  |
| `dialing_code` | `str` |  |
| `distance_km` | `float` |  |
| `elevation` | `float` |  |
| `flag_image` | `str` |  |
| `id` | `str` |  |
| `latitude` | `float` |  |
| `localized_name` | `str` |  |
| `longitude` | `float` |  |
| `name` | `str` |  |
| `normalized_name` | `str` |  |
| `official_website` | `str` |  |
| `population` | `float` |  |
| `postal_code` | `str` |  |
| `region_code` | `str` |  |
| `region_id` | `str` |  |
| `region_name` | `str` |  |
| `time_zone` | `str` |  |
| `translation` | `list` |  |
| `wikidata_id` | `str` |  |

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
| `city_id` | `str` |  |
| `id` | `str` |  |
| `language` | `str` |  |
| `name` | `str` |  |
| `name_normalized` | `str` |  |

#### Example: List

```python
city_translation_dtos = client.CityTranslationDto().list()
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
| `driving_side` | `str` |  |
| `emoji` | `str` |  |
| `head_of_government` | `str` |  |
| `head_of_state` | `str` |  |
| `id` | `str` |  |
| `iso_code` | `str` |  |
| `licence_plate_code` | `str` |  |
| `localized_name` | `str` |  |
| `name` | `str` |  |
| `preferred_language_id` | `str` |  |
| `region` | `list` |  |
| `telephone_code` | `str` |  |
| `translation` | `list` |  |
| `trunk_prefix` | `str` |  |
| `wikidata_id` | `str` |  |

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
| `country_id` | `str` |  |
| `id` | `str` |  |
| `language` | `str` |  |
| `name` | `str` |  |
| `name_normalized` | `str` |  |

#### Example: List

```python
country_translation_dtos = client.CountryTranslationDto().list()
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
| `distance_km` | `float` |  |

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
| `cities_count` | `float` |  |
| `id` | `str` |  |
| `iso_code` | `str` |  |
| `name` | `str` |  |
| `wikidata_id` | `str` |  |

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
| `en` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `population` | `dict` |  |

#### Example: List

```python
oneshots = client.Oneshot().list()
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
| `code` | `str` |  |
| `country` | `Any` |  |
| `country_id` | `str` |  |
| `id` | `str` |  |
| `latitude` | `float` |  |
| `longitude` | `float` |  |
| `name` | `str` |  |
| `population` | `float` |  |
| `wikidata_id` | `str` |  |

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
| `id` | `str` |  |
| `language` | `str` |  |
| `name` | `str` |  |
| `name_normalized` | `str` |  |
| `region_id` | `str` |  |

#### Example: List

```python
region_translation_dtos = client.RegionTranslationDto().list()
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
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `name_normalized` | `str` |  |
| `wikidata_id` | `str` |  |

#### Example: List

```python
settlement_types = client.SettlementType().list()
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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
city = client.City()
city.load({"id": "example_id"})

# city.data_get() now returns the city data from the last load
# city.match_get() returns the last match criteria
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
