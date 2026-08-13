# CityAutocomplete PHP SDK Reference

Complete API reference for the CityAutocomplete PHP SDK.


## CityAutocompleteSDK

### Constructor

```php
require_once __DIR__ . '/cityautocomplete_sdk.php';

$client = new CityAutocompleteSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CityAutocompleteSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CityAutocompleteSDK::test();
```


### Instance Methods

#### `City($data = null)`

Create a new `CityEntity` instance. Pass `null` for no initial data.

#### `CityDto($data = null)`

Create a new `CityDtoEntity` instance. Pass `null` for no initial data.

#### `CityTranslationDto($data = null)`

Create a new `CityTranslationDtoEntity` instance. Pass `null` for no initial data.

#### `Country($data = null)`

Create a new `CountryEntity` instance. Pass `null` for no initial data.

#### `CountryTranslationDto($data = null)`

Create a new `CountryTranslationDtoEntity` instance. Pass `null` for no initial data.

#### `Distance($data = null)`

Create a new `DistanceEntity` instance. Pass `null` for no initial data.

#### `Language($data = null)`

Create a new `LanguageEntity` instance. Pass `null` for no initial data.

#### `Oneshot($data = null)`

Create a new `OneshotEntity` instance. Pass `null` for no initial data.

#### `Region($data = null)`

Create a new `RegionEntity` instance. Pass `null` for no initial data.

#### `RegionTranslationDto($data = null)`

Create a new `RegionTranslationDtoEntity` instance. Pass `null` for no initial data.

#### `SettlementType($data = null)`

Create a new `SettlementTypeEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CityAutocompleteUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CityEntity

```php
$city = $client->City();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `float` | No |  |
| `countryCode` | `string` | Yes |  |
| `countryEmoji` | `string` | Yes |  |
| `countryId` | `string` | Yes |  |
| `countryName` | `string` | Yes |  |
| `countryTelephoneCode` | `string` | No |  |
| `dialingCode` | `string` | No |  |
| `distanceKm` | `float` | No |  |
| `elevation` | `float` | No |  |
| `flagImage` | `string` | No |  |
| `id` | `string` | Yes |  |
| `latitude` | `float` | No |  |
| `localizedName` | `string` | Yes |  |
| `longitude` | `float` | No |  |
| `name` | `string` | Yes |  |
| `normalizedName` | `string` | Yes |  |
| `officialWebsite` | `string` | No |  |
| `population` | `float` | No |  |
| `postalCode` | `string` | No |  |
| `regionCode` | `string` | Yes |  |
| `regionId` | `string` | Yes |  |
| `regionName` | `string` | Yes |  |
| `timeZone` | `string` | No |  |
| `translations` | `array` | Yes |  |
| `wikidataId` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->City()->load(["id" => "city_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CityEntity`

Create a new `CityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CityDtoEntity

```php
$city_dto = $client->CityDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `float` | No |  |
| `countryCode` | `string` | Yes |  |
| `countryEmoji` | `string` | Yes |  |
| `countryId` | `string` | Yes |  |
| `countryName` | `string` | Yes |  |
| `countryTelephoneCode` | `string` | No |  |
| `dialingCode` | `string` | No |  |
| `distanceKm` | `float` | No |  |
| `elevation` | `float` | No |  |
| `flagImage` | `string` | No |  |
| `id` | `string` | Yes |  |
| `latitude` | `float` | No |  |
| `localizedName` | `string` | Yes |  |
| `longitude` | `float` | No |  |
| `name` | `string` | Yes |  |
| `normalizedName` | `string` | Yes |  |
| `officialWebsite` | `string` | No |  |
| `population` | `float` | No |  |
| `postalCode` | `string` | No |  |
| `regionCode` | `string` | Yes |  |
| `regionId` | `string` | Yes |  |
| `regionName` | `string` | Yes |  |
| `timeZone` | `string` | No |  |
| `translations` | `array` | Yes |  |
| `wikidataId` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CityDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CityDtoEntity`

Create a new `CityDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CityTranslationDtoEntity

```php
$city_translation_dto = $client->CityTranslationDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cityId` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `nameNormalized` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CityTranslationDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CityTranslationDtoEntity`

Create a new `CityTranslationDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountryEntity

```php
$country = $client->Country();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drivingSide` | `string` | Yes |  |
| `emoji` | `string` | Yes |  |
| `headOfGovernment` | `string` | Yes |  |
| `headOfState` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `isoCode` | `string` | Yes |  |
| `licencePlateCode` | `string` | Yes |  |
| `localizedName` | `string` | No |  |
| `name` | `string` | Yes |  |
| `preferredLanguageId` | `string` | Yes |  |
| `regions` | `array` | Yes |  |
| `telephoneCode` | `string` | Yes |  |
| `translations` | `array` | Yes |  |
| `trunkPrefix` | `string` | Yes |  |
| `wikidataId` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Country()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Country()->load(["id" => "country_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountryEntity`

Create a new `CountryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountryTranslationDtoEntity

```php
$country_translation_dto = $client->CountryTranslationDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryId` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `nameNormalized` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CountryTranslationDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountryTranslationDtoEntity`

Create a new `CountryTranslationDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DistanceEntity

```php
$distance = $client->Distance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `distanceKm` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Distance()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DistanceEntity`

Create a new `DistanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LanguageEntity

```php
$language = $client->Language();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `citiesCount` | `float` | Yes |  |
| `id` | `string` | Yes |  |
| `isoCode` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `wikidataId` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Language()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Language()->load(["id" => "language_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LanguageEntity`

Create a new `LanguageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OneshotEntity

```php
$oneshot = $client->Oneshot();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `array` | Yes |  |
| `en` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `population` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Oneshot()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OneshotEntity`

Create a new `OneshotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RegionEntity

```php
$region = $client->Region();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes |  |
| `countryId` | `string` | Yes |  |
| `drivingSide` | `string` | Yes |  |
| `emoji` | `string` | Yes |  |
| `headOfGovernment` | `string` | Yes |  |
| `headOfState` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `isoCode` | `string` | Yes |  |
| `latitude` | `float` | Yes |  |
| `licencePlateCode` | `string` | Yes |  |
| `localizedName` | `string` | No |  |
| `longitude` | `float` | Yes |  |
| `name` | `string` | Yes |  |
| `population` | `float` | Yes |  |
| `preferredLanguageId` | `string` | Yes |  |
| `telephoneCode` | `string` | Yes |  |
| `trunkPrefix` | `string` | Yes |  |
| `wikidataId` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Region()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Region()->load(["id" => "region_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RegionEntity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RegionTranslationDtoEntity

```php
$region_translation_dto = $client->RegionTranslationDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `nameNormalized` | `string` | Yes |  |
| `regionId` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RegionTranslationDto()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RegionTranslationDtoEntity`

Create a new `RegionTranslationDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SettlementTypeEntity

```php
$settlement_type = $client->SettlementType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `nameNormalized` | `string` | Yes |  |
| `wikidataId` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SettlementType()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SettlementTypeEntity`

Create a new `SettlementTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new CityAutocompleteSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

