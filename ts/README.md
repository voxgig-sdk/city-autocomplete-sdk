# CityAutocomplete TypeScript SDK



The TypeScript SDK for the CityAutocomplete API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.City()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
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

Operations: load.

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

Operations: list.

API path: `/cities/search`

#### CityTranslationDto

| Field | Description |
| --- | --- |
| `cityId` | City ID |
| `id` | Translation ID |
| `language` | Language code |
| `name` | Translated name |
| `nameNormalized` | Normalized translated name |

Operations: list.

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

Operations: list, load.

API path: `/countries`

#### CountryTranslationDto

| Field | Description |
| --- | --- |
| `countryId` | Country ID |
| `id` | Translation ID |
| `language` | Language code |
| `name` | Translated name |
| `nameNormalized` | Normalized translated name |

Operations: list.

API path: `/countries/{id}/translations`

#### Distance

| Field | Description |
| --- | --- |
| `distanceKm` | Distance between cities |

Operations: load.

API path: `/cities/distance`

#### Language

| Field | Description |
| --- | --- |
| `citiesCount` | Number of cities using this language |
| `id` | UUID of the language |
| `isoCode` | ISO code of the language |
| `name` | Name of the language |
| `wikidataId` | Wikidata ID of the language |

Operations: list, load.

API path: `/languages`

#### Oneshot

| Field | Description |
| --- | --- |
| `emoji` |  |
| `en` | English name — omitted when the requested language is English or no English translation exists |
| `id` |  |
| `name` | City name in the requested language |
| `population` |  |

Operations: list.

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

Operations: list, load.

API path: `/countries/{id}/regions`

#### RegionTranslationDto

| Field | Description |
| --- | --- |
| `id` | Translation ID |
| `language` | Language code |
| `name` | Translated name |
| `nameNormalized` | Normalized translated name |
| `regionId` | Region ID |

Operations: list.

API path: `/regions/{id}/translations`

#### SettlementType

| Field | Description |
| --- | --- |
| `description` | Description of the settlement type |
| `id` | Settlement Type ID |
| `name` | Name of the settlement type |
| `nameNormalized` | Normalized name of the settlement type |
| `wikidataId` | Wikidata ID |

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
| `area` | `number` | Area in km² |
| `countryCode` | `string` | ISO country code |
| `countryEmoji` | `string` | Emoji flag of the country |
| `countryId` | `string` | UUID of the country |
| `countryName` | `string` | Country name |
| `countryTelephoneCode` | `string` | Telephone code of the country |
| `dialingCode` | `string` | Dialing code |
| `distanceKm` | `number` | Distance from the given point in kilometers |
| `elevation` | `number` | Elevation in meters |
| `flagImage` | `string` | Flag image URL |
| `id` | `string` | Geomelon UUID of the city |
| `latitude` | `number` | Latitude coordinate |
| `localizedName` | `string` | Localized name according to preferred languages |
| `longitude` | `number` | Longitude coordinate |
| `name` | `string` | City name |
| `normalizedName` | `string` | Normalized city name |
| `officialWebsite` | `string` | Official website URL |
| `population` | `number` | Population of the city |
| `postalCode` | `string` | Postal code |
| `regionCode` | `string` | Region code |
| `regionId` | `string` | UUID of the region |
| `regionName` | `string` | Region name |
| `timeZone` | `string` | Time zone |
| `translations` | `any[]` | Translations of the city name in requested languages |
| `wikidataId` | `string` | Wikidata ID of the city |

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
| `area` | `number` | Area in km² |
| `countryCode` | `string` | ISO country code |
| `countryEmoji` | `string` | Emoji flag of the country |
| `countryId` | `string` | UUID of the country |
| `countryName` | `string` | Country name |
| `countryTelephoneCode` | `string` | Telephone code of the country |
| `dialingCode` | `string` | Dialing code |
| `distanceKm` | `number` | Distance from the given point in kilometers |
| `elevation` | `number` | Elevation in meters |
| `flagImage` | `string` | Flag image URL |
| `id` | `string` | Geomelon UUID of the city |
| `latitude` | `number` | Latitude coordinate |
| `localizedName` | `string` | Localized name according to preferred languages |
| `longitude` | `number` | Longitude coordinate |
| `name` | `string` | City name |
| `normalizedName` | `string` | Normalized city name |
| `officialWebsite` | `string` | Official website URL |
| `population` | `number` | Population of the city |
| `postalCode` | `string` | Postal code |
| `regionCode` | `string` | Region code |
| `regionId` | `string` | UUID of the region |
| `regionName` | `string` | Region name |
| `timeZone` | `string` | Time zone |
| `translations` | `any[]` | Translations of the city name in requested languages |
| `wikidataId` | `string` | Wikidata ID of the city |

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
| `cityId` | `string` | City ID |
| `id` | `string` | Translation ID |
| `language` | `string` | Language code |
| `name` | `string` | Translated name |
| `nameNormalized` | `string` | Normalized translated name |

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
| `drivingSide` | `string` | Driving side of the country |
| `emoji` | `string` | Emoji of the country |
| `headOfGovernment` | `string` | Head of government of the country |
| `headOfState` | `string` | Head of state of the country |
| `id` | `string` | Country ID |
| `isoCode` | `string` | ISO code of the country |
| `licencePlateCode` | `string` | Licence plate code of the country |
| `localizedName` | `string` | Name in the first matched preferred language, falls back to name |
| `name` | `string` | Name of the country |
| `preferredLanguageId` | `string` | Preferred language ID for the country |
| `regions` | `any[]` | Regions within the country |
| `telephoneCode` | `string` | Telephone code of the country |
| `translations` | `any[]` | Country translations |
| `trunkPrefix` | `string` | Trunk prefix of the country |
| `wikidataId` | `string` | Wikidata ID |

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
| `countryId` | `string` | Country ID |
| `id` | `string` | Translation ID |
| `language` | `string` | Language code |
| `name` | `string` | Translated name |
| `nameNormalized` | `string` | Normalized translated name |

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
| `distanceKm` | `number` | Distance between cities |

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
| `citiesCount` | `number` | Number of cities using this language |
| `id` | `string` | UUID of the language |
| `isoCode` | `string` | ISO code of the language |
| `name` | `string` | Name of the language |
| `wikidataId` | `string` | Wikidata ID of the language |

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
| `en` | `string` | English name — omitted when the requested language is English or no English translation exists |
| `id` | `string` |  |
| `name` | `string` | City name in the requested language |
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
| `code` | `string` | Region code |
| `countryId` | `string` | Country ID the region belongs to |
| `drivingSide` | `string` | Driving side of the country |
| `emoji` | `string` | Emoji of the country |
| `headOfGovernment` | `string` | Head of government of the country |
| `headOfState` | `string` | Head of state of the country |
| `id` | `string` | Country ID |
| `isoCode` | `string` | ISO code of the country |
| `latitude` | `number` | Latitude of the region center |
| `licencePlateCode` | `string` | Licence plate code of the country |
| `localizedName` | `string` | Name in the first matched preferred language, falls back to name |
| `longitude` | `number` | Longitude of the region center |
| `name` | `string` | Name of the country |
| `population` | `number` | Population of the region |
| `preferredLanguageId` | `string` | Preferred language ID for the country |
| `telephoneCode` | `string` | Telephone code of the country |
| `trunkPrefix` | `string` | Trunk prefix of the country |
| `wikidataId` | `string` | Wikidata ID |

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
| `id` | `string` | Translation ID |
| `language` | `string` | Language code |
| `name` | `string` | Translated name |
| `nameNormalized` | `string` | Normalized translated name |
| `regionId` | `string` | Region ID |

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
| `description` | `string` | Description of the settlement type |
| `id` | `string` | Settlement Type ID |
| `name` | `string` | Name of the settlement type |
| `nameNormalized` | `string` | Normalized name of the settlement type |
| `wikidataId` | `string` | Wikidata ID |

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
