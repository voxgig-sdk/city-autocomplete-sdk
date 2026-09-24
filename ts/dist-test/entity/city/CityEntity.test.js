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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "area": { "a": true, "h": "Area", "n": "area", "r": false, "sh": "Area in km²", "t": "`$NUMBER`", "key$": "area", "index$": 0 }, "countryCode": { "a": true, "h": "Country Code", "n": "countryCode", "r": true, "sh": "ISO country code", "t": "`$STRING`", "key$": "countryCode", "index$": 1 }, "countryEmoji": { "a": true, "h": "Country Emoji", "n": "countryEmoji", "r": true, "sh": "Emoji flag of the country", "t": "`$STRING`", "key$": "countryEmoji", "index$": 2 }, "countryId": { "a": true, "h": "Country Id", "n": "countryId", "r": true, "sh": "UUID of the country", "t": "`$STRING`", "key$": "countryId", "index$": 3 }, "countryName": { "a": true, "h": "Country Name", "n": "countryName", "r": true, "sh": "Country name", "t": "`$STRING`", "key$": "countryName", "index$": 4 }, "countryTelephoneCode": { "a": true, "h": "Country Telephone Code", "n": "countryTelephoneCode", "r": false, "sh": "Telephone code of the country", "t": "`$STRING`", "key$": "countryTelephoneCode", "index$": 5 }, "dialingCode": { "a": true, "h": "Dialing Code", "n": "dialingCode", "r": false, "sh": "Dialing code", "t": "`$STRING`", "key$": "dialingCode", "index$": 6 }, "distanceKm": { "a": true, "h": "Distance Km", "n": "distanceKm", "r": false, "sh": "Distance from the given point in kilometers", "t": "`$NUMBER`", "key$": "distanceKm", "index$": 7 }, "elevation": { "a": true, "h": "Elevation", "n": "elevation", "r": false, "sh": "Elevation in meters", "t": "`$NUMBER`", "key$": "elevation", "index$": 8 }, "flagImage": { "a": true, "h": "Flag Image", "n": "flagImage", "r": false, "sh": "Flag image URL", "t": "`$STRING`", "key$": "flagImage", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Geomelon UUID of the city", "t": "`$STRING`", "key$": "id", "index$": 10 }, "latitude": { "a": true, "h": "Latitude", "n": "latitude", "r": false, "sh": "Latitude coordinate", "t": "`$NUMBER`", "key$": "latitude", "index$": 11 }, "localizedName": { "a": true, "h": "Localized Name", "n": "localizedName", "r": true, "sh": "Localized name according to preferred languages", "t": "`$STRING`", "key$": "localizedName", "index$": 12 }, "longitude": { "a": true, "h": "Longitude", "n": "longitude", "r": false, "sh": "Longitude coordinate", "t": "`$NUMBER`", "key$": "longitude", "index$": 13 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "City name", "t": "`$STRING`", "key$": "name", "index$": 14 }, "normalizedName": { "a": true, "h": "Normalized Name", "n": "normalizedName", "r": true, "sh": "Normalized city name", "t": "`$STRING`", "key$": "normalizedName", "index$": 15 }, "officialWebsite": { "a": true, "h": "Official Website", "n": "officialWebsite", "r": false, "sh": "Official website URL", "t": "`$STRING`", "key$": "officialWebsite", "index$": 16 }, "population": { "a": true, "h": "Population", "n": "population", "r": false, "sh": "Population of the city", "t": "`$NUMBER`", "key$": "population", "index$": 17 }, "postalCode": { "a": true, "h": "Postal Code", "n": "postalCode", "r": false, "sh": "Postal code", "t": "`$STRING`", "key$": "postalCode", "index$": 18 }, "regionCode": { "a": true, "h": "Region Code", "n": "regionCode", "r": true, "sh": "Region code", "t": "`$STRING`", "key$": "regionCode", "index$": 19 }, "regionId": { "a": true, "h": "Region Id", "n": "regionId", "r": true, "sh": "UUID of the region", "t": "`$STRING`", "key$": "regionId", "index$": 20 }, "regionName": { "a": true, "h": "Region Name", "n": "regionName", "r": true, "sh": "Region name", "t": "`$STRING`", "key$": "regionName", "index$": 21 }, "timeZone": { "a": true, "h": "Time Zone", "n": "timeZone", "r": false, "sh": "Time zone", "t": "`$STRING`", "key$": "timeZone", "index$": 22 }, "translations": { "a": true, "h": "Translations", "n": "translations", "r": true, "sh": "Translations of the city name in requested languages", "t": "`$ARRAY`", "key$": "translations", "index$": 23 }, "wikidataId": { "a": true, "h": "Wikidata Id", "n": "wikidataId", "r": true, "sh": "Wikidata ID of the city", "t": "`$STRING`", "key$": "wikidataId", "index$": 24 } }, "id": { "field": "id", "name": "id" }, "name": "city", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /cities/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/cities/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "cities" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "city", "name__orig": "city", "Name": "City", "name_": "city", "name-": "city", "NAME": "CITY", "index$": 0 }, { "active": true, "entity": "city", "key$": "BasicCityFlow", "kind": "basic", "name": "BasicCityFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "city_ref01", "srcdatavar": "city_ref01_data", "suffix": "_dt0" }, "m": { "id": "city01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-city_ref01" } }], "index$": 0 }] }, 'City', { "GET /cities/{id}": { "protocol": "http", "operationId": ":id", "responses": { "200": { "description": "City details", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "string", "description": "Geomelon UUID of the city", "example": "964512d1-f150-4876-87ec-0ba47aef694a", "key$": "id" }, "wikidataId": { "type": "string", "description": "Wikidata ID of the city", "example": "Q1492", "key$": "wikidataId" }, "name": { "type": "string", "description": "City name", "example": "Barcelona", "key$": "name" }, "localizedName": { "type": "string", "description": "Localized name according to preferred languages", "example": "Q1492", "key$": "localizedName" }, "population": { "type": "number", "description": "Population of the city", "example": 1702547, "key$": "population" }, "latitude": { "type": "number", "description": "Latitude coordinate", "example": 41.3825, "key$": "latitude" }, "longitude": { "type": "number", "description": "Longitude coordinate", "example": 2.176944444, "key$": "longitude" }, "elevation": { "type": "number", "description": "Elevation in meters", "example": 9, "key$": "elevation" }, "area": { "type": "number", "description": "Area in km²", "example": 101.3, "key$": "area" }, "postalCode": { "type": "string", "description": "Postal code", "example": "08001–08042", "key$": "postalCode" }, "officialWebsite": { "type": "string", "description": "Official website URL", "example": "https://www.barcelona.cat", "key$": "officialWebsite" }, "timeZone": { "type": "string", "description": "Time zone", "example": "UTC+01:00", "key$": "timeZone" }, "flagImage": { "type": "string", "description": "Flag image URL", "example": "http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Barcelona.svg", "key$": "flagImage" }, "dialingCode": { "type": "string", "description": "Dialing code", "example": "93", "key$": "dialingCode" }, "normalizedName": { "type": "string", "description": "Normalized city name", "example": "barcelona", "key$": "normalizedName" }, "translations": { "description": "Translations of the city name in requested languages", "example": [{ "language": "en", "name": "Barcelona" }, { "language": "ja", "name": "バルセロナ" }], "type": "array", "items": { "type": "string" }, "key$": "translations" }, "distanceKm": { "type": "number", "description": "Distance from the given point in kilometers", "example": 12.5, "key$": "distanceKm" }, "countryId": { "type": "string", "description": "UUID of the country", "example": "a1e06cc1-817c-429f-84f4-6ab51dac9bfa", "key$": "countryId" }, "countryName": { "type": "string", "description": "Country name", "example": "Spain", "key$": "countryName" }, "countryCode": { "type": "string", "description": "ISO country code", "example": "ES", "key$": "countryCode" }, "countryEmoji": { "type": "string", "description": "Emoji flag of the country", "example": "🇪🇸", "key$": "countryEmoji" }, "countryTelephoneCode": { "type": "string", "description": "Telephone code of the country", "example": "+34", "key$": "countryTelephoneCode" }, "regionName": { "type": "string", "description": "Region name", "example": "Catalonia", "key$": "regionName" }, "regionCode": { "type": "string", "description": "Region code", "example": "ES-CT", "key$": "regionCode" }, "regionId": { "type": "string", "description": "UUID of the region", "example": "dde1e1c6-ca22-48e6-8ad7-f97b141c1929", "key$": "regionId" } }, "required": ["id", "wikidataId", "name", "localizedName", "normalizedName", "translations", "countryId", "countryName", "countryCode", "countryEmoji", "regionName", "regionCode", "regionId"], "x-ref": "#/components/schemas/CityDto", "index$": 0 } } } } }, "parameters": [{ "name": "id", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }], "security": [{ "RapidApiKey": [] }], "securitySource": "definition", "securitySchemes": { "RapidApiKey": { "type": "apiKey", "in": "header", "name": "x-rapidapi-key", "description": "RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon" } } } });
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