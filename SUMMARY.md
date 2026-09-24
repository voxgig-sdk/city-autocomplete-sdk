# Geomelon API

Read-only geographic data API, cities, countries, regions, and languages with multilingual city names and fast prefix autocomplete. Authentication: subscribe on [RapidAPI](https://rapidapi.com/hom3chuk/api/geomelon) (free tier available) and send your key in the `x-rapidapi-key` header. The oneshot autocomplete endpoint is also available keyless on the free mirror at `https://oneshot.geomelon.dev/&#123;iso&#125;/&#123;lang&#125;/&#123;prefix&#125;`.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 11 entities and 17 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### City

Results: City details.

SDK operations: `load`.

Key fields to recognise:

- `area`: Area in km²
- `countryCode`: ISO country code
- `countryEmoji`: Emoji flag of the country
- `countryId`: UUID of the country
- `countryName`: Country name

### CityDto

Results: List of cities; Closest cities at lat/lon; Most populated cities nearby.

SDK operations: `list`.

Key fields to recognise:

- `area`: Area in km²
- `countryCode`: ISO country code
- `countryEmoji`: Emoji flag of the country
- `countryId`: UUID of the country
- `countryName`: Country name

### CityTranslationDto

Results: City translations.

SDK operations: `list`.

Key fields to recognise:

- `cityId`: City ID
- `id`: Translation ID
- `language`: Language code
- `name`: Translated name
- `nameNormalized`: Normalized translated name

### Country

Results: List of countries; Extended country information.

SDK operations: `list`, `load`.

Key fields to recognise:

- `drivingSide`: Driving side of the country
- `emoji`: Emoji of the country
- `headOfGovernment`: Head of government of the country
- `headOfState`: Head of state of the country
- `id`: Country ID

### CountryTranslationDto

Results: Country translations.

SDK operations: `list`.

Key fields to recognise:

- `countryId`: Country ID
- `id`: Translation ID
- `language`: Language code
- `name`: Translated name
- `nameNormalized`: Normalized translated name

### Distance

Results: Distance result.

SDK operations: `load`.

Key fields to recognise:

- `distanceKm`: Distance between cities

### Language

Results: List of languages; Language details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `citiesCount`: Number of cities using this language
- `id`: UUID of the language
- `isoCode`: ISO code of the language
- `name`: Name of the language
- `wikidataId`: Wikidata ID of the language

### Oneshot

SDK operations: `list`.

Key fields to recognise:

- `en`: English name, omitted when the requested language is English or no English translation exists
- `name`: City name in the requested language

### Region

Results: Country regions; Region details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `code`: Region code
- `countryId`: Country ID the region belongs to
- `drivingSide`: Driving side of the country
- `emoji`: Emoji of the country
- `headOfGovernment`: Head of government of the country

### RegionTranslationDto

Results: Region translations.

SDK operations: `list`.

Key fields to recognise:

- `id`: Translation ID
- `language`: Language code
- `name`: Translated name
- `nameNormalized`: Normalized translated name
- `regionId`: Region ID

### SettlementType

Results: City settlement types.

SDK operations: `list`.

Key fields to recognise:

- `description`: Description of the settlement type
- `id`: Settlement Type ID
- `name`: Name of the settlement type
- `nameNormalized`: Normalized name of the settlement type
- `wikidataId`: Wikidata ID

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| City | `load` | `GET /cities/{id}` | Required |
| CityDto | `list` | `GET /cities/search` | Required |
| CityDto | `list` | `GET /cities/byCoordinates/closest` | Required |
| CityDto | `list` | `GET /cities/byCoordinates/largest` | Required |
| CityTranslationDto | `list` | `GET /cities/{id}/translations` | Required |
| Country | `list` | `GET /countries` | Required |
| Country | `load` | `GET /countries/{id}` | Required |
| CountryTranslationDto | `list` | `GET /countries/{id}/translations` | Required |
| Distance | `load` | `GET /cities/distance` | Required |
| Language | `list` | `GET /languages` | Required |
| Language | `load` | `GET /languages/{id}` | Required |
| Oneshot | `list` | `GET /cities/oneshot/{country}/{language}/{city_name}` | Required |
| Region | `list` | `GET /countries/{id}/regions` | Required |
| Region | `list` | `GET /regions` | Required |
| Region | `load` | `GET /regions/{id}` | Required |
| RegionTranslationDto | `list` | `GET /regions/{id}/translations` | Required |
| SettlementType | `list` | `GET /cities/{id}/settlement-types` | Required |

## Connect to the API

- RapidAPI gateway: `https://geomelon.p.rapidapi.com`

The default credential is sent in the `x-rapidapi-key` header.

RapidAPI key, get one at https://rapidapi.com/hom3chuk/api/geomelon

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `city-autocomplete_list`: List records for an entity. Supported entities: `city_dto`, `city_translation_dto`, `country`, `country_translation_dto`, `language`, `oneshot`, `region`, `region_translation_dto`, `settlement_type`.
- `city-autocomplete_load`: Load one record for an entity. Supported entities: `city`, `country`, `distance`, `language`, `region`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

