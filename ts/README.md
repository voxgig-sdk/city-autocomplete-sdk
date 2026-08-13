# CityAutocomplete TypeScript SDK



The TypeScript SDK for the CityAutocomplete API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.City()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/city-autocomplete-sdk/releases](https://github.com/voxgig-sdk/city-autocomplete-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CityAutocompleteSDK } from '@voxgig-sdk/city-autocomplete'

const client = new CityAutocompleteSDK({
  apikey: process.env.CITY_AUTOCOMPLETE_APIKEY,
})
```

### 3. Load a city

`load()` returns the entity directly and throws on failure:

```ts
try {
  const city = await client.City().load({ id: 'example_id' })
  console.log(city)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const languages = await client.Language().list()
  console.log(languages)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CityAutocompleteSDK.test()

const language = await client.Language().list()
// language is the entity, populated with mock response data
// — call language.data() for the record itself
console.log(language)
```

You can also use the instance method:

```ts
const client = new CityAutocompleteSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Language()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CityAutocompleteSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```


## Reference

### CityAutocompleteSDK

#### Constructor

```ts
new CityAutocompleteSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `City(data?)` | `CityEntity` | Create a City entity instance. |
| `CityDto(data?)` | `CityDtoEntity` | Create a CityDto entity instance. |
| `CityTranslationDto(data?)` | `CityTranslationDtoEntity` | Create a CityTranslationDto entity instance. |
| `Country(data?)` | `CountryEntity` | Create a Country entity instance. |
| `CountryTranslationDto(data?)` | `CountryTranslationDtoEntity` | Create a CountryTranslationDto entity instance. |
| `Distance(data?)` | `DistanceEntity` | Create a Distance entity instance. |
| `Language(data?)` | `LanguageEntity` | Create a Language entity instance. |
| `Oneshot(data?)` | `OneshotEntity` | Create an Oneshot entity instance. |
| `Region(data?)` | `RegionEntity` | Create a Region entity instance. |
| `RegionTranslationDto(data?)` | `RegionTranslationDtoEntity` | Create a RegionTranslationDto entity instance. |
| `SettlementType(data?)` | `SettlementTypeEntity` | Create a SettlementType entity instance. |
| `tester(testopts?, sdkopts?)` | `CityAutocompleteSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CityAutocompleteSDK.test(testopts?, sdkopts?)` | `CityAutocompleteSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CityAutocompleteSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### City

| Field | Description |
| --- | --- |
| `area` |  |
| `countryCode` |  |
| `countryEmoji` |  |
| `countryId` |  |
| `countryName` |  |
| `countryTelephoneCode` |  |
| `dialingCode` |  |
| `distanceKm` |  |
| `elevation` |  |
| `flagImage` |  |
| `id` |  |
| `latitude` |  |
| `localizedName` |  |
| `longitude` |  |
| `name` |  |
| `normalizedName` |  |
| `officialWebsite` |  |
| `population` |  |
| `postalCode` |  |
| `regionCode` |  |
| `regionId` |  |
| `regionName` |  |
| `timeZone` |  |
| `translations` |  |
| `wikidataId` |  |

Operations: load.

API path: `/cities/{id}`

#### CityDto

| Field | Description |
| --- | --- |
| `area` |  |
| `countryCode` |  |
| `countryEmoji` |  |
| `countryId` |  |
| `countryName` |  |
| `countryTelephoneCode` |  |
| `dialingCode` |  |
| `distanceKm` |  |
| `elevation` |  |
| `flagImage` |  |
| `id` |  |
| `latitude` |  |
| `localizedName` |  |
| `longitude` |  |
| `name` |  |
| `normalizedName` |  |
| `officialWebsite` |  |
| `population` |  |
| `postalCode` |  |
| `regionCode` |  |
| `regionId` |  |
| `regionName` |  |
| `timeZone` |  |
| `translations` |  |
| `wikidataId` |  |

Operations: list.

API path: `/cities/search`

#### CityTranslationDto

| Field | Description |
| --- | --- |
| `cityId` |  |
| `id` |  |
| `language` |  |
| `name` |  |
| `nameNormalized` |  |

Operations: list.

API path: `/cities/{id}/translations`

#### Country

| Field | Description |
| --- | --- |
| `drivingSide` |  |
| `emoji` |  |
| `headOfGovernment` |  |
| `headOfState` |  |
| `id` |  |
| `isoCode` |  |
| `licencePlateCode` |  |
| `localizedName` |  |
| `name` |  |
| `preferredLanguageId` |  |
| `regions` |  |
| `telephoneCode` |  |
| `translations` |  |
| `trunkPrefix` |  |
| `wikidataId` |  |

Operations: list, load.

API path: `/countries`

#### CountryTranslationDto

| Field | Description |
| --- | --- |
| `countryId` |  |
| `id` |  |
| `language` |  |
| `name` |  |
| `nameNormalized` |  |

Operations: list.

API path: `/countries/{id}/translations`

#### Distance

| Field | Description |
| --- | --- |
| `distanceKm` |  |

Operations: load.

API path: `/cities/distance`

#### Language

| Field | Description |
| --- | --- |
| `citiesCount` |  |
| `id` |  |
| `isoCode` |  |
| `name` |  |
| `wikidataId` |  |

Operations: list, load.

API path: `/languages`

#### Oneshot

| Field | Description |
| --- | --- |
| `emoji` |  |
| `en` |  |
| `id` |  |
| `name` |  |
| `population` |  |

Operations: list.

API path: `/cities/oneshot/{country}/{language}/{city_name}`

#### Region

| Field | Description |
| --- | --- |
| `code` |  |
| `countryId` |  |
| `drivingSide` |  |
| `emoji` |  |
| `headOfGovernment` |  |
| `headOfState` |  |
| `id` |  |
| `isoCode` |  |
| `latitude` |  |
| `licencePlateCode` |  |
| `localizedName` |  |
| `longitude` |  |
| `name` |  |
| `population` |  |
| `preferredLanguageId` |  |
| `telephoneCode` |  |
| `trunkPrefix` |  |
| `wikidataId` |  |

Operations: list, load.

API path: `/countries/{id}/regions`

#### RegionTranslationDto

| Field | Description |
| --- | --- |
| `id` |  |
| `language` |  |
| `name` |  |
| `nameNormalized` |  |
| `regionId` |  |

Operations: list.

API path: `/regions/{id}/translations`

#### SettlementType

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `nameNormalized` |  |
| `wikidataId` |  |

Operations: list.

API path: `/cities/{id}/settlement-types`



## Entities


### City

Create an instance: `const city = client.City()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `number` |  |
| `countryCode` | `string` |  |
| `countryEmoji` | `string` |  |
| `countryId` | `string` |  |
| `countryName` | `string` |  |
| `countryTelephoneCode` | `string` |  |
| `dialingCode` | `string` |  |
| `distanceKm` | `number` |  |
| `elevation` | `number` |  |
| `flagImage` | `string` |  |
| `id` | `string` |  |
| `latitude` | `number` |  |
| `localizedName` | `string` |  |
| `longitude` | `number` |  |
| `name` | `string` |  |
| `normalizedName` | `string` |  |
| `officialWebsite` | `string` |  |
| `population` | `number` |  |
| `postalCode` | `string` |  |
| `regionCode` | `string` |  |
| `regionId` | `string` |  |
| `regionName` | `string` |  |
| `timeZone` | `string` |  |
| `translations` | `any[]` |  |
| `wikidataId` | `string` |  |

#### Example: Load

```ts
const city = await client.City().load({ id: 'city_id' })
```


### CityDto

Create an instance: `const city_dto = client.CityDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `number` |  |
| `countryCode` | `string` |  |
| `countryEmoji` | `string` |  |
| `countryId` | `string` |  |
| `countryName` | `string` |  |
| `countryTelephoneCode` | `string` |  |
| `dialingCode` | `string` |  |
| `distanceKm` | `number` |  |
| `elevation` | `number` |  |
| `flagImage` | `string` |  |
| `id` | `string` |  |
| `latitude` | `number` |  |
| `localizedName` | `string` |  |
| `longitude` | `number` |  |
| `name` | `string` |  |
| `normalizedName` | `string` |  |
| `officialWebsite` | `string` |  |
| `population` | `number` |  |
| `postalCode` | `string` |  |
| `regionCode` | `string` |  |
| `regionId` | `string` |  |
| `regionName` | `string` |  |
| `timeZone` | `string` |  |
| `translations` | `any[]` |  |
| `wikidataId` | `string` |  |

#### Example: List

```ts
const city_dtos = await client.CityDto().list()
```


### CityTranslationDto

Create an instance: `const city_translation_dto = client.CityTranslationDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cityId` | `string` |  |
| `id` | `string` |  |
| `language` | `string` |  |
| `name` | `string` |  |
| `nameNormalized` | `string` |  |

#### Example: List

```ts
const city_translation_dtos = await client.CityTranslationDto().list({ id: "example" })
```


### Country

Create an instance: `const country = client.Country()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drivingSide` | `string` |  |
| `emoji` | `string` |  |
| `headOfGovernment` | `string` |  |
| `headOfState` | `string` |  |
| `id` | `string` |  |
| `isoCode` | `string` |  |
| `licencePlateCode` | `string` |  |
| `localizedName` | `string` |  |
| `name` | `string` |  |
| `preferredLanguageId` | `string` |  |
| `regions` | `any[]` |  |
| `telephoneCode` | `string` |  |
| `translations` | `any[]` |  |
| `trunkPrefix` | `string` |  |
| `wikidataId` | `string` |  |

#### Example: Load

```ts
const country = await client.Country().load({ id: 'country_id' })
```

#### Example: List

```ts
const countrys = await client.Country().list()
```


### CountryTranslationDto

Create an instance: `const country_translation_dto = client.CountryTranslationDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countryId` | `string` |  |
| `id` | `string` |  |
| `language` | `string` |  |
| `name` | `string` |  |
| `nameNormalized` | `string` |  |

#### Example: List

```ts
const country_translation_dtos = await client.CountryTranslationDto().list({ id: "example" })
```


### Distance

Create an instance: `const distance = client.Distance()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `distanceKm` | `number` |  |

#### Example: Load

```ts
const distance = await client.Distance().load()
```


### Language

Create an instance: `const language = client.Language()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `citiesCount` | `number` |  |
| `id` | `string` |  |
| `isoCode` | `string` |  |
| `name` | `string` |  |
| `wikidataId` | `string` |  |

#### Example: Load

```ts
const language = await client.Language().load({ id: 'language_id' })
```

#### Example: List

```ts
const languages = await client.Language().list()
```


### Oneshot

Create an instance: `const oneshot = client.Oneshot()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `Record<string, any>` |  |
| `en` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `population` | `Record<string, any>` |  |

#### Example: List

```ts
const oneshots = await client.Oneshot().list({ city_name: "example", country: "example", language: "example" })
```


### Region

Create an instance: `const region = client.Region()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` |  |
| `countryId` | `string` |  |
| `drivingSide` | `string` |  |
| `emoji` | `string` |  |
| `headOfGovernment` | `string` |  |
| `headOfState` | `string` |  |
| `id` | `string` |  |
| `isoCode` | `string` |  |
| `latitude` | `number` |  |
| `licencePlateCode` | `string` |  |
| `localizedName` | `string` |  |
| `longitude` | `number` |  |
| `name` | `string` |  |
| `population` | `number` |  |
| `preferredLanguageId` | `string` |  |
| `telephoneCode` | `string` |  |
| `trunkPrefix` | `string` |  |
| `wikidataId` | `string` |  |

#### Example: Load

```ts
const region = await client.Region().load({ id: 'region_id' })
```

#### Example: List

```ts
const regions = await client.Region().list()
```


### RegionTranslationDto

Create an instance: `const region_translation_dto = client.RegionTranslationDto()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `language` | `string` |  |
| `name` | `string` |  |
| `nameNormalized` | `string` |  |
| `regionId` | `string` |  |

#### Example: List

```ts
const region_translation_dtos = await client.RegionTranslationDto().list({ id: "example" })
```


### SettlementType

Create an instance: `const settlement_type = client.SettlementType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `nameNormalized` | `string` |  |
| `wikidataId` | `string` |  |

#### Example: List

```ts
const settlement_types = await client.SettlementType().list({ city_id: "example" })
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
city-autocomplete/
├── src/
│   ├── CityAutocompleteSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CityAutocompleteSDK } from '@voxgig-sdk/city-autocomplete'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const language = client.Language()
await language.list()

// language.data() now returns the language data from the last `list`
// language.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
