# CityAutocomplete TypeScript SDK Reference

Complete API reference for the CityAutocomplete TypeScript SDK.


## CityAutocompleteSDK

### Constructor

```ts
new CityAutocompleteSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CityAutocompleteSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CityAutocompleteSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CityAutocompleteSDK` instance in test mode.


### Instance Methods

#### `City(data?: object)`

Create a new `City` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CityEntity` instance.

#### `CityDto(data?: object)`

Create a new `CityDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CityDtoEntity` instance.

#### `CityTranslationDto(data?: object)`

Create a new `CityTranslationDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CityTranslationDtoEntity` instance.

#### `Country(data?: object)`

Create a new `Country` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountryEntity` instance.

#### `CountryTranslationDto(data?: object)`

Create a new `CountryTranslationDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountryTranslationDtoEntity` instance.

#### `Distance(data?: object)`

Create a new `Distance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DistanceEntity` instance.

#### `Language(data?: object)`

Create a new `Language` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LanguageEntity` instance.

#### `Oneshot(data?: object)`

Create a new `Oneshot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OneshotEntity` instance.

#### `Region(data?: object)`

Create a new `Region` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegionEntity` instance.

#### `RegionTranslationDto(data?: object)`

Create a new `RegionTranslationDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegionTranslationDtoEntity` instance.

#### `SettlementType(data?: object)`

Create a new `SettlementType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SettlementTypeEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CityAutocompleteSDK.test()`.

**Returns:** `CityAutocompleteSDK` instance in test mode.


---

## CityEntity

```ts
const city = client.City()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `number` | No | Area in km² |
| `countryCode` | `string` | Yes | ISO country code |
| `countryEmoji` | `string` | Yes | Emoji flag of the country |
| `countryId` | `string` | Yes | UUID of the country |
| `countryName` | `string` | Yes | Country name |
| `countryTelephoneCode` | `string` | No | Telephone code of the country |
| `dialingCode` | `string` | No | Dialing code |
| `distanceKm` | `number` | No | Distance from the given point in kilometers |
| `elevation` | `number` | No | Elevation in meters |
| `flagImage` | `string` | No | Flag image URL |
| `id` | `string` | Yes | Geomelon UUID of the city |
| `latitude` | `number` | No | Latitude coordinate |
| `localizedName` | `string` | Yes | Localized name according to preferred languages |
| `longitude` | `number` | No | Longitude coordinate |
| `name` | `string` | Yes | City name |
| `normalizedName` | `string` | Yes | Normalized city name |
| `officialWebsite` | `string` | No | Official website URL |
| `population` | `number` | No | Population of the city |
| `postalCode` | `string` | No | Postal code |
| `regionCode` | `string` | Yes | Region code |
| `regionId` | `string` | Yes | UUID of the region |
| `regionName` | `string` | Yes | Region name |
| `timeZone` | `string` | No | Time zone |
| `translations` | `any[]` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `string` | Yes | Wikidata ID of the city |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.City().load({ id: 'city_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CityDtoEntity

```ts
const city_dto = client.CityDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `number` | No | Area in km² |
| `countryCode` | `string` | Yes | ISO country code |
| `countryEmoji` | `string` | Yes | Emoji flag of the country |
| `countryId` | `string` | Yes | UUID of the country |
| `countryName` | `string` | Yes | Country name |
| `countryTelephoneCode` | `string` | No | Telephone code of the country |
| `dialingCode` | `string` | No | Dialing code |
| `distanceKm` | `number` | No | Distance from the given point in kilometers |
| `elevation` | `number` | No | Elevation in meters |
| `flagImage` | `string` | No | Flag image URL |
| `id` | `string` | Yes | Geomelon UUID of the city |
| `latitude` | `number` | No | Latitude coordinate |
| `localizedName` | `string` | Yes | Localized name according to preferred languages |
| `longitude` | `number` | No | Longitude coordinate |
| `name` | `string` | Yes | City name |
| `normalizedName` | `string` | Yes | Normalized city name |
| `officialWebsite` | `string` | No | Official website URL |
| `population` | `number` | No | Population of the city |
| `postalCode` | `string` | No | Postal code |
| `regionCode` | `string` | Yes | Region code |
| `regionId` | `string` | Yes | UUID of the region |
| `regionName` | `string` | Yes | Region name |
| `timeZone` | `string` | No | Time zone |
| `translations` | `any[]` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `string` | Yes | Wikidata ID of the city |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CityDto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CityDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CityTranslationDtoEntity

```ts
const city_translation_dto = client.CityTranslationDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cityId` | `string` | Yes | City ID |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `translations` | `/cities/{id}/translations` | `client.CityTranslationDto().list({ $action: 'translations', ... })` |

An action returns that action's OWN response, which is not necessarily a
CityTranslationDto record — check the API definition for its shape.

```ts
const result = await client.CityTranslationDto().list({
  $action: 'translations',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CityTranslationDto().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CityTranslationDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountryEntity

```ts
const country = client.Country()
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
| `regions` | `any[]` | Yes | Regions within the country |
| `telephoneCode` | `string` | Yes | Telephone code of the country |
| `translations` | `any[]` | Yes | Country translations |
| `trunkPrefix` | `string` | Yes | Trunk prefix of the country |
| `wikidataId` | `string` | Yes | Wikidata ID |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Country().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Country().load({ id: 'country_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountryTranslationDtoEntity

```ts
const country_translation_dto = client.CountryTranslationDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryId` | `string` | Yes | Country ID |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `translations` | `/countries/{id}/translations` | `client.CountryTranslationDto().list({ $action: 'translations', ... })` |

An action returns that action's OWN response, which is not necessarily a
CountryTranslationDto record — check the API definition for its shape.

```ts
const result = await client.CountryTranslationDto().list({
  $action: 'translations',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CountryTranslationDto().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountryTranslationDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DistanceEntity

```ts
const distance = client.Distance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `distanceKm` | `number` | Yes | Distance between cities |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Distance().load({ city1: 'city1', city2: 'city2' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DistanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LanguageEntity

```ts
const language = client.Language()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `citiesCount` | `number` | Yes | Number of cities using this language |
| `id` | `string` | Yes | UUID of the language |
| `isoCode` | `string` | Yes | ISO code of the language |
| `name` | `string` | Yes | Name of the language |
| `wikidataId` | `string` | Yes | Wikidata ID of the language |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Language().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Language().load({ id: 'language_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LanguageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OneshotEntity

```ts
const oneshot = client.Oneshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `Record<string, any>` | Yes |  |
| `en` | `string` | No | English name — omitted when the requested language is English or no English translation exists |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes | City name in the requested language |
| `population` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Oneshot().list({ city_name: "example", country: "example", language: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OneshotEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegionEntity

```ts
const region = client.Region()
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
| `latitude` | `number` | Yes | Latitude of the region center |
| `licencePlateCode` | `string` | Yes | Licence plate code of the country |
| `localizedName` | `string` | No | Name in the first matched preferred language, falls back to name |
| `longitude` | `number` | Yes | Longitude of the region center |
| `name` | `string` | Yes | Name of the country |
| `population` | `number` | Yes | Population of the region |
| `preferredLanguageId` | `string` | Yes | Preferred language ID for the country |
| `telephoneCode` | `string` | Yes | Telephone code of the country |
| `trunkPrefix` | `string` | Yes | Trunk prefix of the country |
| `wikidataId` | `string` | Yes | Wikidata ID |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Region().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Region().load({ id: 'region_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegionTranslationDtoEntity

```ts
const region_translation_dto = client.RegionTranslationDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |
| `regionId` | `string` | Yes | Region ID |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `translations` | `/regions/{id}/translations` | `client.RegionTranslationDto().list({ $action: 'translations', ... })` |

An action returns that action's OWN response, which is not necessarily a
RegionTranslationDto record — check the API definition for its shape.

```ts
const result = await client.RegionTranslationDto().list({
  $action: 'translations',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RegionTranslationDto().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegionTranslationDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SettlementTypeEntity

```ts
const settlement_type = client.SettlementType()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SettlementType().list({ city_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SettlementTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CityAutocompleteSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new CityAutocompleteSDK({
  feature: {
    test: { active: true },
  }
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

