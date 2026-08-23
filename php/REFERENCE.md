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
| `area` | `float` | No | Area in km² |
| `countryCode` | `string` | Yes | ISO country code |
| `countryEmoji` | `string` | Yes | Emoji flag of the country |
| `countryId` | `string` | Yes | UUID of the country |
| `countryName` | `string` | Yes | Country name |
| `countryTelephoneCode` | `string` | No | Telephone code of the country |
| `dialingCode` | `string` | No | Dialing code |
| `distanceKm` | `float` | No | Distance from the given point in kilometers |
| `elevation` | `float` | No | Elevation in meters |
| `flagImage` | `string` | No | Flag image URL |
| `id` | `string` | Yes | Geomelon UUID of the city |
| `latitude` | `float` | No | Latitude coordinate |
| `localizedName` | `string` | Yes | Localized name according to preferred languages |
| `longitude` | `float` | No | Longitude coordinate |
| `name` | `string` | Yes | City name |
| `normalizedName` | `string` | Yes | Normalized city name |
| `officialWebsite` | `string` | No | Official website URL |
| `population` | `float` | No | Population of the city |
| `postalCode` | `string` | No | Postal code |
| `regionCode` | `string` | Yes | Region code |
| `regionId` | `string` | Yes | UUID of the region |
| `regionName` | `string` | Yes | Region name |
| `timeZone` | `string` | No | Time zone |
| `translations` | `array` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `string` | Yes | Wikidata ID of the city |

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
| `area` | `float` | No | Area in km² |
| `countryCode` | `string` | Yes | ISO country code |
| `countryEmoji` | `string` | Yes | Emoji flag of the country |
| `countryId` | `string` | Yes | UUID of the country |
| `countryName` | `string` | Yes | Country name |
| `countryTelephoneCode` | `string` | No | Telephone code of the country |
| `dialingCode` | `string` | No | Dialing code |
| `distanceKm` | `float` | No | Distance from the given point in kilometers |
| `elevation` | `float` | No | Elevation in meters |
| `flagImage` | `string` | No | Flag image URL |
| `id` | `string` | Yes | Geomelon UUID of the city |
| `latitude` | `float` | No | Latitude coordinate |
| `localizedName` | `string` | Yes | Localized name according to preferred languages |
| `longitude` | `float` | No | Longitude coordinate |
| `name` | `string` | Yes | City name |
| `normalizedName` | `string` | Yes | Normalized city name |
| `officialWebsite` | `string` | No | Official website URL |
| `population` | `float` | No | Population of the city |
| `postalCode` | `string` | No | Postal code |
| `regionCode` | `string` | Yes | Region code |
| `regionId` | `string` | Yes | UUID of the region |
| `regionName` | `string` | Yes | Region name |
| `timeZone` | `string` | No | Time zone |
| `translations` | `array` | Yes | Translations of the city name in requested languages |
| `wikidataId` | `string` | Yes | Wikidata ID of the city |

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
| `cityId` | `string` | Yes | City ID |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |

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
| `regions` | `array` | Yes | Regions within the country |
| `telephoneCode` | `string` | Yes | Telephone code of the country |
| `translations` | `array` | Yes | Country translations |
| `trunkPrefix` | `string` | Yes | Trunk prefix of the country |
| `wikidataId` | `string` | Yes | Wikidata ID |

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
| `countryId` | `string` | Yes | Country ID |
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |

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
| `distanceKm` | `float` | Yes | Distance between cities |

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
| `citiesCount` | `float` | Yes | Number of cities using this language |
| `id` | `string` | Yes | UUID of the language |
| `isoCode` | `string` | Yes | ISO code of the language |
| `name` | `string` | Yes | Name of the language |
| `wikidataId` | `string` | Yes | Wikidata ID of the language |

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
| `en` | `string` | No | English name — omitted when the requested language is English or no English translation exists |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes | City name in the requested language |
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
| `code` | `string` | Yes | Region code |
| `countryId` | `string` | Yes | Country ID the region belongs to |
| `drivingSide` | `string` | Yes | Driving side of the country |
| `emoji` | `string` | Yes | Emoji of the country |
| `headOfGovernment` | `string` | Yes | Head of government of the country |
| `headOfState` | `string` | Yes | Head of state of the country |
| `id` | `string` | Yes | Country ID |
| `isoCode` | `string` | Yes | ISO code of the country |
| `latitude` | `float` | Yes | Latitude of the region center |
| `licencePlateCode` | `string` | Yes | Licence plate code of the country |
| `localizedName` | `string` | No | Name in the first matched preferred language, falls back to name |
| `longitude` | `float` | Yes | Longitude of the region center |
| `name` | `string` | Yes | Name of the country |
| `population` | `float` | Yes | Population of the region |
| `preferredLanguageId` | `string` | Yes | Preferred language ID for the country |
| `telephoneCode` | `string` | Yes | Telephone code of the country |
| `trunkPrefix` | `string` | Yes | Trunk prefix of the country |
| `wikidataId` | `string` | Yes | Wikidata ID |

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
| `id` | `string` | Yes | Translation ID |
| `language` | `string` | Yes | Language code |
| `name` | `string` | Yes | Translated name |
| `nameNormalized` | `string` | Yes | Normalized translated name |
| `regionId` | `string` | Yes | Region ID |

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
| `description` | `string` | Yes | Description of the settlement type |
| `id` | `string` | Yes | Settlement Type ID |
| `name` | `string` | Yes | Name of the settlement type |
| `nameNormalized` | `string` | Yes | Normalized name of the settlement type |
| `wikidataId` | `string` | Yes | Wikidata ID |

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

