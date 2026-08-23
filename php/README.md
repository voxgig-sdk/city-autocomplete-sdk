# CityAutocomplete PHP SDK



The PHP SDK for the CityAutocomplete API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->City()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/city-autocomplete-sdk/releases](https://github.com/voxgig-sdk/city-autocomplete-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cityautocomplete_sdk.php';

$client = new CityAutocompleteSDK([
    "apikey" => getenv("CITY_AUTOCOMPLETE_APIKEY"),
]);
```

### 3. Load a city

```php
try {
    // load() returns the ENTITY — call data_get() for the City record (throws on error).
    $city = $client->City()->load(["id" => "example_id"]);
    print_r($city);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $languages = $client->Language()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CityAutocompleteSDK::test([
    "entity" => ["language" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$language = $client->Language()->list();
print_r($language);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CityAutocompleteSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CITY_AUTOCOMPLETE_TEST_LIVE=TRUE
CITY_AUTOCOMPLETE_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CityAutocompleteSDK

```php
require_once 'cityautocomplete_sdk.php';
$client = new CityAutocompleteSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CityAutocompleteSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CityAutocompleteSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `City` | `($data): CityEntity` | Create a City entity instance. |
| `CityDto` | `($data): CityDtoEntity` | Create a CityDto entity instance. |
| `CityTranslationDto` | `($data): CityTranslationDtoEntity` | Create a CityTranslationDto entity instance. |
| `Country` | `($data): CountryEntity` | Create a Country entity instance. |
| `CountryTranslationDto` | `($data): CountryTranslationDtoEntity` | Create a CountryTranslationDto entity instance. |
| `Distance` | `($data): DistanceEntity` | Create a Distance entity instance. |
| `Language` | `($data): LanguageEntity` | Create a Language entity instance. |
| `Oneshot` | `($data): OneshotEntity` | Create an Oneshot entity instance. |
| `Region` | `($data): RegionEntity` | Create a Region entity instance. |
| `RegionTranslationDto` | `($data): RegionTranslationDtoEntity` | Create a RegionTranslationDto entity instance. |
| `SettlementType` | `($data): SettlementTypeEntity` | Create a SettlementType entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$city = $client->City();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `float` | Area in km² |
| `countryCode` | `string` | ISO country code |
| `countryEmoji` | `string` | Emoji flag of the country |
| `countryId` | `string` | UUID of the country |
| `countryName` | `string` | Country name |
| `countryTelephoneCode` | `string` | Telephone code of the country |
| `dialingCode` | `string` | Dialing code |
| `distanceKm` | `float` | Distance from the given point in kilometers |
| `elevation` | `float` | Elevation in meters |
| `flagImage` | `string` | Flag image URL |
| `id` | `string` | Geomelon UUID of the city |
| `latitude` | `float` | Latitude coordinate |
| `localizedName` | `string` | Localized name according to preferred languages |
| `longitude` | `float` | Longitude coordinate |
| `name` | `string` | City name |
| `normalizedName` | `string` | Normalized city name |
| `officialWebsite` | `string` | Official website URL |
| `population` | `float` | Population of the city |
| `postalCode` | `string` | Postal code |
| `regionCode` | `string` | Region code |
| `regionId` | `string` | UUID of the region |
| `regionName` | `string` | Region name |
| `timeZone` | `string` | Time zone |
| `translations` | `array` | Translations of the city name in requested languages |
| `wikidataId` | `string` | Wikidata ID of the city |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the City record (throws on error).
$city = $client->City()->load(["id" => "city_id"]);
```


### CityDto

Create an instance: `$city_dto = $client->CityDto();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `area` | `float` | Area in km² |
| `countryCode` | `string` | ISO country code |
| `countryEmoji` | `string` | Emoji flag of the country |
| `countryId` | `string` | UUID of the country |
| `countryName` | `string` | Country name |
| `countryTelephoneCode` | `string` | Telephone code of the country |
| `dialingCode` | `string` | Dialing code |
| `distanceKm` | `float` | Distance from the given point in kilometers |
| `elevation` | `float` | Elevation in meters |
| `flagImage` | `string` | Flag image URL |
| `id` | `string` | Geomelon UUID of the city |
| `latitude` | `float` | Latitude coordinate |
| `localizedName` | `string` | Localized name according to preferred languages |
| `longitude` | `float` | Longitude coordinate |
| `name` | `string` | City name |
| `normalizedName` | `string` | Normalized city name |
| `officialWebsite` | `string` | Official website URL |
| `population` | `float` | Population of the city |
| `postalCode` | `string` | Postal code |
| `regionCode` | `string` | Region code |
| `regionId` | `string` | UUID of the region |
| `regionName` | `string` | Region name |
| `timeZone` | `string` | Time zone |
| `translations` | `array` | Translations of the city name in requested languages |
| `wikidataId` | `string` | Wikidata ID of the city |

#### Example: List

```php
// list() returns an array of CityDto records (throws on error).
$city_dtos = $client->CityDto()->list();
```


### CityTranslationDto

Create an instance: `$city_translation_dto = $client->CityTranslationDto();`

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

```php
// list() returns an array of CityTranslationDto records (throws on error).
$city_translation_dtos = $client->CityTranslationDto()->list();
```


### Country

Create an instance: `$country = $client->Country();`

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
| `regions` | `array` | Regions within the country |
| `telephoneCode` | `string` | Telephone code of the country |
| `translations` | `array` | Country translations |
| `trunkPrefix` | `string` | Trunk prefix of the country |
| `wikidataId` | `string` | Wikidata ID |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Country record (throws on error).
$country = $client->Country()->load(["id" => "country_id"]);
```

#### Example: List

```php
// list() returns an array of Country records (throws on error).
$countrys = $client->Country()->list();
```


### CountryTranslationDto

Create an instance: `$country_translation_dto = $client->CountryTranslationDto();`

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

```php
// list() returns an array of CountryTranslationDto records (throws on error).
$country_translation_dtos = $client->CountryTranslationDto()->list();
```


### Distance

Create an instance: `$distance = $client->Distance();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `distanceKm` | `float` | Distance between cities |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Distance record (throws on error).
$distance = $client->Distance()->load();
```


### Language

Create an instance: `$language = $client->Language();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `citiesCount` | `float` | Number of cities using this language |
| `id` | `string` | UUID of the language |
| `isoCode` | `string` | ISO code of the language |
| `name` | `string` | Name of the language |
| `wikidataId` | `string` | Wikidata ID of the language |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Language record (throws on error).
$language = $client->Language()->load(["id" => "language_id"]);
```

#### Example: List

```php
// list() returns an array of Language records (throws on error).
$languages = $client->Language()->list();
```


### Oneshot

Create an instance: `$oneshot = $client->Oneshot();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `array` |  |
| `en` | `string` | English name — omitted when the requested language is English or no English translation exists |
| `id` | `string` |  |
| `name` | `string` | City name in the requested language |
| `population` | `array` |  |

#### Example: List

```php
// list() returns an array of Oneshot records (throws on error).
$oneshots = $client->Oneshot()->list();
```


### Region

Create an instance: `$region = $client->Region();`

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
| `latitude` | `float` | Latitude of the region center |
| `licencePlateCode` | `string` | Licence plate code of the country |
| `localizedName` | `string` | Name in the first matched preferred language, falls back to name |
| `longitude` | `float` | Longitude of the region center |
| `name` | `string` | Name of the country |
| `population` | `float` | Population of the region |
| `preferredLanguageId` | `string` | Preferred language ID for the country |
| `telephoneCode` | `string` | Telephone code of the country |
| `trunkPrefix` | `string` | Trunk prefix of the country |
| `wikidataId` | `string` | Wikidata ID |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Region record (throws on error).
$region = $client->Region()->load(["id" => "region_id"]);
```

#### Example: List

```php
// list() returns an array of Region records (throws on error).
$regions = $client->Region()->list();
```


### RegionTranslationDto

Create an instance: `$region_translation_dto = $client->RegionTranslationDto();`

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

```php
// list() returns an array of RegionTranslationDto records (throws on error).
$region_translation_dtos = $client->RegionTranslationDto()->list();
```


### SettlementType

Create an instance: `$settlement_type = $client->SettlementType();`

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

```php
// list() returns an array of SettlementType records (throws on error).
$settlement_types = $client->SettlementType()->list();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cityautocomplete_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cityautocomplete_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$language = $client->Language();
$language->list();

// $language->data_get() now returns the language data from the last list
// $language->match_get() returns the last match criteria
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
