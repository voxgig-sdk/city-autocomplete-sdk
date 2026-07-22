# CityAutocomplete Golang SDK



The Golang SDK for the CityAutocomplete API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.City(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/city-autocomplete-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/city-autocomplete-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/city-autocomplete-sdk/go=../city-autocomplete-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/city-autocomplete-sdk/go"
)

func main() {
    client := sdk.NewCityAutocompleteSDK(map[string]any{
        "apikey": os.Getenv("CITY_AUTOCOMPLETE_APIKEY"),
    })

    // Load a single city — the value is the loaded record.
    city, err := client.City(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(city)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
city, err := client.City(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = city
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

city, err := client.City(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(city) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCityAutocompleteSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCityAutocompleteSDK

```go
func NewCityAutocompleteSDK(options map[string]any) *CityAutocompleteSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CityAutocompleteSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CityAutocompleteSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `City` | `(data map[string]any) CityAutocompleteEntity` | Create a City entity instance. |
| `CityDto` | `(data map[string]any) CityAutocompleteEntity` | Create a CityDto entity instance. |
| `CityTranslationDto` | `(data map[string]any) CityAutocompleteEntity` | Create a CityTranslationDto entity instance. |
| `Country` | `(data map[string]any) CityAutocompleteEntity` | Create a Country entity instance. |
| `CountryTranslationDto` | `(data map[string]any) CityAutocompleteEntity` | Create a CountryTranslationDto entity instance. |
| `Distance` | `(data map[string]any) CityAutocompleteEntity` | Create a Distance entity instance. |
| `Language` | `(data map[string]any) CityAutocompleteEntity` | Create a Language entity instance. |
| `Oneshot` | `(data map[string]any) CityAutocompleteEntity` | Create an Oneshot entity instance. |
| `Region` | `(data map[string]any) CityAutocompleteEntity` | Create a Region entity instance. |
| `RegionTranslationDto` | `(data map[string]any) CityAutocompleteEntity` | Create a RegionTranslationDto entity instance. |
| `SettlementType` | `(data map[string]any) CityAutocompleteEntity` | Create a SettlementType entity instance. |

### Entity interface (CityAutocompleteEntity)

All entities implement the `CityAutocompleteEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    city, err := client.City(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // city is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### City

| Field | Description |
| --- | --- |
| `"area"` |  |
| `"country_code"` |  |
| `"country_emoji"` |  |
| `"country_id"` |  |
| `"country_name"` |  |
| `"country_telephone_code"` |  |
| `"dialing_code"` |  |
| `"distance_km"` |  |
| `"elevation"` |  |
| `"flag_image"` |  |
| `"id"` |  |
| `"latitude"` |  |
| `"localized_name"` |  |
| `"longitude"` |  |
| `"name"` |  |
| `"normalized_name"` |  |
| `"official_website"` |  |
| `"population"` |  |
| `"postal_code"` |  |
| `"region_code"` |  |
| `"region_id"` |  |
| `"region_name"` |  |
| `"time_zone"` |  |
| `"translation"` |  |
| `"wikidata_id"` |  |

Operations: Load.

API path: `/cities/{id}`

#### CityDto

| Field | Description |
| --- | --- |
| `"area"` |  |
| `"country_code"` |  |
| `"country_emoji"` |  |
| `"country_id"` |  |
| `"country_name"` |  |
| `"country_telephone_code"` |  |
| `"dialing_code"` |  |
| `"distance_km"` |  |
| `"elevation"` |  |
| `"flag_image"` |  |
| `"id"` |  |
| `"latitude"` |  |
| `"localized_name"` |  |
| `"longitude"` |  |
| `"name"` |  |
| `"normalized_name"` |  |
| `"official_website"` |  |
| `"population"` |  |
| `"postal_code"` |  |
| `"region_code"` |  |
| `"region_id"` |  |
| `"region_name"` |  |
| `"time_zone"` |  |
| `"translation"` |  |
| `"wikidata_id"` |  |

Operations: List.

API path: `/cities/search`

#### CityTranslationDto

| Field | Description |
| --- | --- |
| `"city_id"` |  |
| `"id"` |  |
| `"language"` |  |
| `"name"` |  |
| `"name_normalized"` |  |

Operations: List.

API path: `/cities/{id}/translations`

#### Country

| Field | Description |
| --- | --- |
| `"driving_side"` |  |
| `"emoji"` |  |
| `"head_of_government"` |  |
| `"head_of_state"` |  |
| `"id"` |  |
| `"iso_code"` |  |
| `"licence_plate_code"` |  |
| `"localized_name"` |  |
| `"name"` |  |
| `"preferred_language_id"` |  |
| `"region"` |  |
| `"telephone_code"` |  |
| `"translation"` |  |
| `"trunk_prefix"` |  |
| `"wikidata_id"` |  |

Operations: List, Load.

API path: `/countries`

#### CountryTranslationDto

| Field | Description |
| --- | --- |
| `"country_id"` |  |
| `"id"` |  |
| `"language"` |  |
| `"name"` |  |
| `"name_normalized"` |  |

Operations: List.

API path: `/countries/{id}/translations`

#### Distance

| Field | Description |
| --- | --- |
| `"distance_km"` |  |

Operations: Load.

API path: `/cities/distance`

#### Language

| Field | Description |
| --- | --- |
| `"cities_count"` |  |
| `"id"` |  |
| `"iso_code"` |  |
| `"name"` |  |
| `"wikidata_id"` |  |

Operations: List, Load.

API path: `/languages`

#### Oneshot

| Field | Description |
| --- | --- |
| `"emoji"` |  |
| `"en"` |  |
| `"id"` |  |
| `"name"` |  |
| `"population"` |  |

Operations: List.

API path: `/cities/oneshot/{country}/{language}/{city_name}`

#### Region

| Field | Description |
| --- | --- |
| `"code"` |  |
| `"country"` |  |
| `"country_id"` |  |
| `"id"` |  |
| `"latitude"` |  |
| `"longitude"` |  |
| `"name"` |  |
| `"population"` |  |
| `"wikidata_id"` |  |

Operations: List, Load.

API path: `/countries/{id}/regions`

#### RegionTranslationDto

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"language"` |  |
| `"name"` |  |
| `"name_normalized"` |  |
| `"region_id"` |  |

Operations: List.

API path: `/regions/{id}/translations`

#### SettlementType

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"id"` |  |
| `"name"` |  |
| `"name_normalized"` |  |
| `"wikidata_id"` |  |

Operations: List.

API path: `/cities/{id}/settlement-types`



## Entities


### City

Create an instance: `city := client.City(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `float64` |  |
| `country_code` | `string` |  |
| `country_emoji` | `string` |  |
| `country_id` | `string` |  |
| `country_name` | `string` |  |
| `country_telephone_code` | `string` |  |
| `dialing_code` | `string` |  |
| `distance_km` | `float64` |  |
| `elevation` | `float64` |  |
| `flag_image` | `string` |  |
| `id` | `string` |  |
| `latitude` | `float64` |  |
| `localized_name` | `string` |  |
| `longitude` | `float64` |  |
| `name` | `string` |  |
| `normalized_name` | `string` |  |
| `official_website` | `string` |  |
| `population` | `float64` |  |
| `postal_code` | `string` |  |
| `region_code` | `string` |  |
| `region_id` | `string` |  |
| `region_name` | `string` |  |
| `time_zone` | `string` |  |
| `translation` | `[]any` |  |
| `wikidata_id` | `string` |  |

#### Example: Load

```go
city, err := client.City(nil).Load(map[string]any{"id": "city_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(city) // the loaded record
```


### CityDto

Create an instance: `cityDto := client.CityDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `float64` |  |
| `country_code` | `string` |  |
| `country_emoji` | `string` |  |
| `country_id` | `string` |  |
| `country_name` | `string` |  |
| `country_telephone_code` | `string` |  |
| `dialing_code` | `string` |  |
| `distance_km` | `float64` |  |
| `elevation` | `float64` |  |
| `flag_image` | `string` |  |
| `id` | `string` |  |
| `latitude` | `float64` |  |
| `localized_name` | `string` |  |
| `longitude` | `float64` |  |
| `name` | `string` |  |
| `normalized_name` | `string` |  |
| `official_website` | `string` |  |
| `population` | `float64` |  |
| `postal_code` | `string` |  |
| `region_code` | `string` |  |
| `region_id` | `string` |  |
| `region_name` | `string` |  |
| `time_zone` | `string` |  |
| `translation` | `[]any` |  |
| `wikidata_id` | `string` |  |

#### Example: List

```go
cityDtos, err := client.CityDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cityDtos) // the array of records
```


### CityTranslationDto

Create an instance: `cityTranslationDto := client.CityTranslationDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `city_id` | `string` |  |
| `id` | `string` |  |
| `language` | `string` |  |
| `name` | `string` |  |
| `name_normalized` | `string` |  |

#### Example: List

```go
cityTranslationDtos, err := client.CityTranslationDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cityTranslationDtos) // the array of records
```


### Country

Create an instance: `country := client.Country(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `driving_side` | `string` |  |
| `emoji` | `string` |  |
| `head_of_government` | `string` |  |
| `head_of_state` | `string` |  |
| `id` | `string` |  |
| `iso_code` | `string` |  |
| `licence_plate_code` | `string` |  |
| `localized_name` | `string` |  |
| `name` | `string` |  |
| `preferred_language_id` | `string` |  |
| `region` | `[]any` |  |
| `telephone_code` | `string` |  |
| `translation` | `[]any` |  |
| `trunk_prefix` | `string` |  |
| `wikidata_id` | `string` |  |

#### Example: Load

```go
country, err := client.Country(nil).Load(map[string]any{"id": "country_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(country) // the loaded record
```

#### Example: List

```go
countrys, err := client.Country(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(countrys) // the array of records
```


### CountryTranslationDto

Create an instance: `countryTranslationDto := client.CountryTranslationDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country_id` | `string` |  |
| `id` | `string` |  |
| `language` | `string` |  |
| `name` | `string` |  |
| `name_normalized` | `string` |  |

#### Example: List

```go
countryTranslationDtos, err := client.CountryTranslationDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(countryTranslationDtos) // the array of records
```


### Distance

Create an instance: `distance := client.Distance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `distance_km` | `float64` |  |

#### Example: Load

```go
distance, err := client.Distance(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(distance) // the loaded record
```


### Language

Create an instance: `language := client.Language(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cities_count` | `float64` |  |
| `id` | `string` |  |
| `iso_code` | `string` |  |
| `name` | `string` |  |
| `wikidata_id` | `string` |  |

#### Example: Load

```go
language, err := client.Language(nil).Load(map[string]any{"id": "language_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(language) // the loaded record
```

#### Example: List

```go
languages, err := client.Language(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(languages) // the array of records
```


### Oneshot

Create an instance: `oneshot := client.Oneshot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `map[string]any` |  |
| `en` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `population` | `map[string]any` |  |

#### Example: List

```go
oneshots, err := client.Oneshot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(oneshots) // the array of records
```


### Region

Create an instance: `region := client.Region(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` |  |
| `country` | `any` |  |
| `country_id` | `string` |  |
| `id` | `string` |  |
| `latitude` | `float64` |  |
| `longitude` | `float64` |  |
| `name` | `string` |  |
| `population` | `float64` |  |
| `wikidata_id` | `string` |  |

#### Example: Load

```go
region, err := client.Region(nil).Load(map[string]any{"id": "region_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(region) // the loaded record
```

#### Example: List

```go
regions, err := client.Region(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(regions) // the array of records
```


### RegionTranslationDto

Create an instance: `regionTranslationDto := client.RegionTranslationDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `language` | `string` |  |
| `name` | `string` |  |
| `name_normalized` | `string` |  |
| `region_id` | `string` |  |

#### Example: List

```go
regionTranslationDtos, err := client.RegionTranslationDto(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(regionTranslationDtos) // the array of records
```


### SettlementType

Create an instance: `settlementType := client.SettlementType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `name_normalized` | `string` |  |
| `wikidata_id` | `string` |  |

#### Example: List

```go
settlementTypes, err := client.SettlementType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(settlementTypes) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/city-autocomplete-sdk/go/
├── city-autocomplete.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/city-autocomplete-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
city := client.City(nil)
city.Load(map[string]any{"id": "example_id"}, nil)

// city.Data() now returns the city data from the last load
// city.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
