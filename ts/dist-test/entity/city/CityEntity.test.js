"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CITY_AUTOCOMPLETE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CityAutocompleteSDK.test();
        const ent = testsdk.City();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'city.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "area", "req": false, "short": "Area in km²", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "countryCode", "req": true, "short": "ISO country code", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "countryEmoji", "req": true, "short": "Emoji flag of the country", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "countryId", "req": true, "short": "UUID of the country", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "countryName", "req": true, "short": "Country name", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "countryTelephoneCode", "req": false, "short": "Telephone code of the country", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "dialingCode", "req": false, "short": "Dialing code", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "distanceKm", "req": false, "short": "Distance from the given point in kilometers", "type": "`$NUMBER`", "index$": 7 }, { "active": true, "name": "elevation", "req": false, "short": "Elevation in meters", "type": "`$NUMBER`", "index$": 8 }, { "active": true, "name": "flagImage", "req": false, "short": "Flag image URL", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "id", "req": true, "short": "Geomelon UUID of the city", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "latitude", "req": false, "short": "Latitude coordinate", "type": "`$NUMBER`", "index$": 11 }, { "active": true, "name": "localizedName", "req": true, "short": "Localized name according to preferred languages", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "longitude", "req": false, "short": "Longitude coordinate", "type": "`$NUMBER`", "index$": 13 }, { "active": true, "name": "name", "req": true, "short": "City name", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "normalizedName", "req": true, "short": "Normalized city name", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "officialWebsite", "req": false, "short": "Official website URL", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "population", "req": false, "short": "Population of the city", "type": "`$NUMBER`", "index$": 17 }, { "active": true, "name": "postalCode", "req": false, "short": "Postal code", "type": "`$STRING`", "index$": 18 }, { "active": true, "name": "regionCode", "req": true, "short": "Region code", "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "regionId", "req": true, "short": "UUID of the region", "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "regionName", "req": true, "short": "Region name", "type": "`$STRING`", "index$": 21 }, { "active": true, "name": "timeZone", "req": false, "short": "Time zone", "type": "`$STRING`", "index$": 22 }, { "active": true, "name": "translations", "req": true, "short": "Translations of the city name in requested languages", "type": "`$ARRAY`", "index$": 23 }, { "active": true, "name": "wikidataId", "req": true, "short": "Wikidata ID of the city", "type": "`$STRING`", "index$": 24 }], "id": { "field": "id", "name": "id" }, "name": "city", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /cities/{id}", "json": "{\"operationId\":\":id\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"area\":{\"description\":\"Area in km²\",\"example\":101.3,\"type\":\"number\"},\"countryCode\":{\"description\":\"ISO country code\",\"example\":\"ES\",\"type\":\"string\"},\"countryEmoji\":{\"description\":\"Emoji flag of the country\",\"example\":\"🇪🇸\",\"type\":\"string\"},\"countryId\":{\"description\":\"UUID of the country\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"countryName\":{\"description\":\"Country name\",\"example\":\"Spain\",\"type\":\"string\"},\"countryTelephoneCode\":{\"description\":\"Telephone code of the country\",\"example\":\"+34\",\"type\":\"string\"},\"dialingCode\":{\"description\":\"Dialing code\",\"example\":\"93\",\"type\":\"string\"},\"distanceKm\":{\"description\":\"Distance from the given point in kilometers\",\"example\":12.5,\"type\":\"number\"},\"elevation\":{\"description\":\"Elevation in meters\",\"example\":9,\"type\":\"number\"},\"flagImage\":{\"description\":\"Flag image URL\",\"example\":\"http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Barcelona.svg\",\"type\":\"string\"},\"id\":{\"description\":\"Geomelon UUID of the city\",\"example\":\"964512d1-f150-4876-87ec-0ba47aef694a\",\"type\":\"string\"},\"latitude\":{\"description\":\"Latitude coordinate\",\"example\":41.3825,\"type\":\"number\"},\"localizedName\":{\"description\":\"Localized name according to preferred languages\",\"example\":\"Q1492\",\"type\":\"string\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"example\":2.176944444,\"type\":\"number\"},\"name\":{\"description\":\"City name\",\"example\":\"Barcelona\",\"type\":\"string\"},\"normalizedName\":{\"description\":\"Normalized city name\",\"example\":\"barcelona\",\"type\":\"string\"},\"officialWebsite\":{\"description\":\"Official website URL\",\"example\":\"https://www.barcelona.cat\",\"type\":\"string\"},\"population\":{\"description\":\"Population of the city\",\"example\":1702547,\"type\":\"number\"},\"postalCode\":{\"description\":\"Postal code\",\"example\":\"08001–08042\",\"type\":\"string\"},\"regionCode\":{\"description\":\"Region code\",\"example\":\"ES-CT\",\"type\":\"string\"},\"regionId\":{\"description\":\"UUID of the region\",\"example\":\"dde1e1c6-ca22-48e6-8ad7-f97b141c1929\",\"type\":\"string\"},\"regionName\":{\"description\":\"Region name\",\"example\":\"Catalonia\",\"type\":\"string\"},\"timeZone\":{\"description\":\"Time zone\",\"example\":\"UTC+01:00\",\"type\":\"string\"},\"translations\":{\"description\":\"Translations of the city name in requested languages\",\"example\":[{\"language\":\"en\",\"name\":\"Barcelona\"},{\"language\":\"ja\",\"name\":\"バルセロナ\"}],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"wikidataId\":{\"description\":\"Wikidata ID of the city\",\"example\":\"Q1492\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"localizedName\",\"normalizedName\",\"translations\",\"countryId\",\"countryName\",\"countryCode\",\"countryEmoji\",\"regionName\",\"regionCode\",\"regionId\"],\"type\":\"object\"}}},\"description\":\"City details\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/cities/{id}", "segments": [{ "lit": "cities" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "city", "name__orig": "city", "Name": "City", "name_": "city", "name-": "city", "NAME": "CITY", "index$": 0 }, { "active": true, "entity": "city", "key$": "BasicCityFlow", "kind": "basic", "name": "BasicCityFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "city_ref01", "srcdatavar": "city_ref01_data", "suffix": "_dt0" }, "match": { "id": "city01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-city_ref01" } }], "index$": 0 }] }, 'City');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let city_ref01_data = Object.values(setup.data.existing.city)[0];
        // LOAD
        const city_ref01_ent = client.City();
        const city_ref01_match_dt0 = {};
        city_ref01_match_dt0.id = city_ref01_data.id;
        const city_ref01_data_dt0 = (await city_ref01_ent.load(city_ref01_match_dt0)).data();
        (0, node_assert_1.default)(city_ref01_data_dt0.id === city_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/city/CityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CityAutocompleteSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['city01', 'city02', 'city03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CITY_AUTOCOMPLETE_TEST_CITY_ENTID': idmap,
        'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
        'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
        'CITY_AUTOCOMPLETE_APIKEY': '',
    });
    idmap = env['CITY_AUTOCOMPLETE_TEST_CITY_ENTID'];
    const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_CITY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CityAutocompleteSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CITY_AUTOCOMPLETE_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CityEntity.test.js.map