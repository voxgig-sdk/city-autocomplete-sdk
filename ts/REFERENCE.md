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
| `area` | `number` | No |  |
| `country_code` | `string` | Yes |  |
| `country_emoji` | `string` | Yes |  |
| `country_id` | `string` | Yes |  |
| `country_name` | `string` | Yes |  |
| `country_telephone_code` | `string` | No |  |
| `dialing_code` | `string` | No |  |
| `distance_km` | `number` | No |  |
| `elevation` | `number` | No |  |
| `flag_image` | `string` | No |  |
| `id` | `string` | Yes |  |
| `latitude` | `number` | No |  |
| `localized_name` | `string` | Yes |  |
| `longitude` | `number` | No |  |
| `name` | `string` | Yes |  |
| `normalized_name` | `string` | Yes |  |
| `official_website` | `string` | No |  |
| `population` | `number` | No |  |
| `postal_code` | `string` | No |  |
| `region_code` | `string` | Yes |  |
| `region_id` | `string` | Yes |  |
| `region_name` | `string` | Yes |  |
| `time_zone` | `string` | No |  |
| `translation` | `any[]` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `area` | `number` | No |  |
| `country_code` | `string` | Yes |  |
| `country_emoji` | `string` | Yes |  |
| `country_id` | `string` | Yes |  |
| `country_name` | `string` | Yes |  |
| `country_telephone_code` | `string` | No |  |
| `dialing_code` | `string` | No |  |
| `distance_km` | `number` | No |  |
| `elevation` | `number` | No |  |
| `flag_image` | `string` | No |  |
| `id` | `string` | Yes |  |
| `latitude` | `number` | No |  |
| `localized_name` | `string` | Yes |  |
| `longitude` | `number` | No |  |
| `name` | `string` | Yes |  |
| `normalized_name` | `string` | Yes |  |
| `official_website` | `string` | No |  |
| `population` | `number` | No |  |
| `postal_code` | `string` | No |  |
| `region_code` | `string` | Yes |  |
| `region_id` | `string` | Yes |  |
| `region_name` | `string` | Yes |  |
| `time_zone` | `string` | No |  |
| `translation` | `any[]` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `city_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CityTranslationDto().list()
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
| `driving_side` | `string` | Yes |  |
| `emoji` | `string` | Yes |  |
| `head_of_government` | `string` | Yes |  |
| `head_of_state` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `iso_code` | `string` | Yes |  |
| `licence_plate_code` | `string` | Yes |  |
| `localized_name` | `string` | No |  |
| `name` | `string` | Yes |  |
| `preferred_language_id` | `string` | Yes |  |
| `region` | `any[]` | Yes |  |
| `telephone_code` | `string` | Yes |  |
| `translation` | `any[]` | Yes |  |
| `trunk_prefix` | `string` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `country_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CountryTranslationDto().list()
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
| `distance_km` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Distance().load()
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
| `cities_count` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `iso_code` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `en` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `population` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Oneshot().list()
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
| `code` | `string` | Yes |  |
| `country` | `any` | Yes |  |
| `country_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `latitude` | `number` | Yes |  |
| `longitude` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `population` | `number` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

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
| `id` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |
| `region_id` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RegionTranslationDto().list()
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
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |
| `wikidata_id` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SettlementType().list()
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

