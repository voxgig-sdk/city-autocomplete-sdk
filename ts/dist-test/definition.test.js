"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "city",
        "accessor": "City",
        "op": "load",
        "method": "GET",
        "path": "/cities/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "964512d1-f150-4876-87ec-0ba47aef694a",
            "wikidataId": "Q1492",
            "name": "Barcelona",
            "localizedName": "Q1492",
            "population": 1702547,
            "latitude": 41.3825,
            "longitude": 2.176944444,
            "elevation": 9,
            "area": 101.3,
            "postalCode": "08001–08042",
            "officialWebsite": "https://www.barcelona.cat",
            "timeZone": "UTC+01:00",
            "flagImage": "http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Barcelona.svg",
            "dialingCode": "93",
            "normalizedName": "barcelona",
            "translations": [
                {
                    "language": "en",
                    "name": "Barcelona"
                },
                {
                    "language": "ja",
                    "name": "バルセロナ"
                }
            ],
            "distanceKm": 12.5,
            "countryId": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa",
            "countryName": "Spain",
            "countryCode": "ES",
            "countryEmoji": "🇪🇸",
            "countryTelephoneCode": "+34",
            "regionName": "Catalonia",
            "regionCode": "ES-CT",
            "regionId": "dde1e1c6-ca22-48e6-8ad7-f97b141c1929"
        },
        "idField": "id"
    },
    {
        "entity": "city_dto",
        "accessor": "CityDto",
        "op": "list",
        "method": "GET",
        "path": "/cities/search",
        "args": [],
        "select": {
            "country_code": "v1",
            "limit": "v1",
            "max_population": "v1",
            "min_population": "v1",
            "name": "dallas",
            "offset": "v1",
            "preferred_language": "v1",
            "region_id": "v1",
            "sort": "population_desc"
        },
        "headers": [],
        "query": [
            "sort",
            "offset",
            "limit",
            "preferredLanguages",
            "name",
            "maxPopulation",
            "minPopulation",
            "regionId",
            "countryCode"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "964512d1-f150-4876-87ec-0ba47aef694a",
                "wikidataId": "Q1492",
                "name": "Barcelona",
                "localizedName": "Q1492",
                "population": 1702547,
                "latitude": 41.3825,
                "longitude": 2.176944444,
                "elevation": 9,
                "area": 101.3,
                "postalCode": "08001–08042",
                "officialWebsite": "https://www.barcelona.cat",
                "timeZone": "UTC+01:00",
                "flagImage": "http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Barcelona.svg",
                "dialingCode": "93",
                "normalizedName": "barcelona",
                "translations": [
                    {
                        "language": "en",
                        "name": "Barcelona"
                    },
                    {
                        "language": "ja",
                        "name": "バルセロナ"
                    }
                ],
                "distanceKm": 12.5,
                "countryId": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa",
                "countryName": "Spain",
                "countryCode": "ES",
                "countryEmoji": "🇪🇸",
                "countryTelephoneCode": "+34",
                "regionName": "Catalonia",
                "regionCode": "ES-CT",
                "regionId": "dde1e1c6-ca22-48e6-8ad7-f97b141c1929"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "city_translation_dto",
        "accessor": "CityTranslationDto",
        "op": "list",
        "method": "GET",
        "path": "/cities/{id}/translations",
        "action": "translations",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "eabda784-b9cc-4ee8-84fa-6c311fbea8b5",
                "cityId": "964512d1-f150-4876-87ec-0ba47aef694a",
                "language": "azb",
                "name": "بارسلونا",
                "nameNormalized": "بارسلونا"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "country",
        "accessor": "Country",
        "op": "list",
        "method": "GET",
        "path": "/countries",
        "args": [],
        "select": {
            "limit": 200,
            "name": "Spa",
            "offset": 0,
            "preferred_language": "v1",
            "telephone_code": "v1"
        },
        "headers": [],
        "query": [
            "limit",
            "offset",
            "telephoneCode",
            "name",
            "preferredLanguages"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa",
                "wikidataId": "Q29",
                "name": "Spain",
                "localizedName": "España",
                "emoji": "🇪🇸",
                "headOfState": "Felipe VI of Spain",
                "headOfGovernment": "Pedro Sánchez",
                "isoCode": "ES",
                "telephoneCode": "+34",
                "trunkPrefix": "0",
                "licencePlateCode": "E",
                "drivingSide": "right",
                "preferredLanguageId": "a3d69219-5e64-4fef-a137-10bceb326e3d"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "country",
        "accessor": "Country",
        "op": "load",
        "method": "GET",
        "path": "/countries/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "509a2a0a-5ec6-483e-8381-4bea4422ac26"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa",
            "wikidataId": "Q29",
            "name": "Spain",
            "emoji": "🇪🇸",
            "headOfState": "Felipe VI of Spain",
            "headOfGovernment": "Pedro Sánchez",
            "isoCode": "ES",
            "telephoneCode": "+34",
            "trunkPrefix": "0",
            "licencePlateCode": "E",
            "drivingSide": "right",
            "preferredLanguageId": "a3d69219-5e64-4fef-a137-10bceb326e3d",
            "translations": [
                {
                    "id": "0230694f-5673-403d-a10d-716ee43ac702",
                    "countryId": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa",
                    "language": "diq",
                    "name": "İspanya",
                    "nameNormalized": "ispanya"
                }
            ],
            "regions": [
                {
                    "id": "dde1e1c6-ca22-48e6-8ad7-f97b141c1929",
                    "wikidataId": "Q5705",
                    "name": "Catalonia",
                    "countryId": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa",
                    "population": 8034743,
                    "code": "ES-CT",
                    "latitude": 41.85,
                    "longitude": 1.566666666
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "country_translation_dto",
        "accessor": "CountryTranslationDto",
        "op": "list",
        "method": "GET",
        "path": "/countries/{id}/translations",
        "action": "translations",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "509a2a0a-5ec6-483e-8381-4bea4422ac26"
            }
        ],
        "select": {
            "preferred_language": "v1"
        },
        "headers": [],
        "query": [
            "preferredLanguages"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "0230694f-5673-403d-a10d-716ee43ac702",
                "countryId": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa",
                "language": "diq",
                "name": "İspanya",
                "nameNormalized": "ispanya"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "distance",
        "accessor": "Distance",
        "op": "load",
        "method": "GET",
        "path": "/cities/distance",
        "args": [],
        "select": {
            "city1": "v1",
            "city2": "v1"
        },
        "headers": [],
        "query": [
            "city2",
            "city1"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "distanceKm": 1
        },
        "idField": "id"
    },
    {
        "entity": "language",
        "accessor": "Language",
        "op": "list",
        "method": "GET",
        "path": "/languages",
        "args": [],
        "select": {
            "limit": 200,
            "offset": 0
        },
        "headers": [],
        "query": [
            "limit",
            "offset"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "abbf9d44-2b77-464b-bca4-90026a66182c",
                "wikidataId": "Q256",
                "name": "Turkish",
                "isoCode": "tr",
                "citiesCount": 252088
            }
        ],
        "idField": "id"
    },
    {
        "entity": "language",
        "accessor": "Language",
        "op": "load",
        "method": "GET",
        "path": "/languages/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "6aa910e2-07b2-4f0e-a1ec-194e85c4f35b"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "abbf9d44-2b77-464b-bca4-90026a66182c",
            "wikidataId": "Q256",
            "name": "Turkish",
            "isoCode": "tr",
            "citiesCount": 252088
        },
        "idField": "id"
    },
    {
        "entity": "oneshot",
        "accessor": "Oneshot",
        "op": "list",
        "method": "GET",
        "path": "/cities/oneshot/{country}/{language}/{city_name}",
        "args": [
            {
                "name": "city_name",
                "wire": "city_name",
                "value": "bar"
            },
            {
                "name": "country",
                "wire": "country",
                "value": "es"
            },
            {
                "name": "language",
                "wire": "language",
                "value": "es"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "9c4eae2b-095b-48ab-9184-8f079b7dea25",
                "name": "Београд",
                "population": 1197714,
                "emoji": "🇷🇸",
                "en": "Belgrade"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "region",
        "accessor": "Region",
        "op": "load",
        "method": "GET",
        "path": "/regions/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "63df31a3-ca32-4970-8b5e-bcf9a11426e6"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "dde1e1c6-ca22-48e6-8ad7-f97b141c1929",
            "wikidataId": "Q5705",
            "name": "Catalonia",
            "countryId": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa",
            "population": 8034743,
            "code": "ES-CT",
            "latitude": 41.85,
            "longitude": 1.566666666,
            "country": {
                "id": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa",
                "wikidataId": "Q29",
                "name": "Spain",
                "localizedName": "España",
                "emoji": "🇪🇸",
                "headOfState": "Felipe VI of Spain",
                "headOfGovernment": "Pedro Sánchez",
                "isoCode": "ES",
                "telephoneCode": "+34",
                "trunkPrefix": "0",
                "licencePlateCode": "E",
                "drivingSide": "right",
                "preferredLanguageId": "a3d69219-5e64-4fef-a137-10bceb326e3d"
            }
        },
        "idField": "id"
    },
    {
        "entity": "region_translation_dto",
        "accessor": "RegionTranslationDto",
        "op": "list",
        "method": "GET",
        "path": "/regions/{id}/translations",
        "action": "translations",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "63df31a3-ca32-4970-8b5e-bcf9a11426e6"
            }
        ],
        "select": {
            "preferred_language": "v1"
        },
        "headers": [],
        "query": [
            "preferredLanguages"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "ada3e6fd-61dc-4b83-973d-a91d79498203",
                "regionId": "dde1e1c6-ca22-48e6-8ad7-f97b141c1929",
                "language": "csb",
                "name": "Katalońskô",
                "nameNormalized": "katalonsko"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "settlement_type",
        "accessor": "SettlementType",
        "op": "list",
        "method": "GET",
        "path": "/cities/{id}/settlement-types",
        "args": [
            {
                "name": "city_id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-rapidapi-key"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "5bdb4631-a170-4bd8-bf1a-2d447d3523b1",
                "wikidataId": "Q33146843",
                "name": "municipality of Catalonia",
                "nameNormalized": "municipality of catalonia",
                "description": "administrative division of Catalonia, Spain"
            }
        ],
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map