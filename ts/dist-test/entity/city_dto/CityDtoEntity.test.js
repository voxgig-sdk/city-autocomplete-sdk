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
(0, node_test_1.describe)('CityDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CITY_AUTOCOMPLETE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CityAutocompleteSDK.test();
        const ent = testsdk.CityDto();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('city_dto hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.CityAutocompleteSDK.test(offline).CityDto().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.CityAutocompleteSDK.test(offline).CityDto()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.CityAutocompleteSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.CityDto().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.CityAutocompleteSDK.test().CityDto().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.CityAutocompleteSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.CityDto().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.CityDto().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CityAutocompleteSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CityDto().list({ "country_code": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'city_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "area": { "a": true, "h": "Area", "n": "area", "r": false, "sh": "Area in km²", "t": "`$NUMBER`", "key$": "area", "index$": 0 }, "countryCode": { "a": true, "h": "Country Code", "n": "countryCode", "r": true, "sh": "ISO country code", "t": "`$STRING`", "key$": "countryCode", "index$": 1 }, "countryEmoji": { "a": true, "h": "Country Emoji", "n": "countryEmoji", "r": true, "sh": "Emoji flag of the country", "t": "`$STRING`", "key$": "countryEmoji", "index$": 2 }, "countryId": { "a": true, "h": "Country Id", "n": "countryId", "r": true, "sh": "UUID of the country", "t": "`$STRING`", "key$": "countryId", "index$": 3 }, "countryName": { "a": true, "h": "Country Name", "n": "countryName", "r": true, "sh": "Country name", "t": "`$STRING`", "key$": "countryName", "index$": 4 }, "countryTelephoneCode": { "a": true, "h": "Country Telephone Code", "n": "countryTelephoneCode", "r": false, "sh": "Telephone code of the country", "t": "`$STRING`", "key$": "countryTelephoneCode", "index$": 5 }, "dialingCode": { "a": true, "h": "Dialing Code", "n": "dialingCode", "r": false, "sh": "Dialing code", "t": "`$STRING`", "key$": "dialingCode", "index$": 6 }, "distanceKm": { "a": true, "h": "Distance Km", "n": "distanceKm", "r": false, "sh": "Distance from the given point in kilometers", "t": "`$NUMBER`", "key$": "distanceKm", "index$": 7 }, "elevation": { "a": true, "h": "Elevation", "n": "elevation", "r": false, "sh": "Elevation in meters", "t": "`$NUMBER`", "key$": "elevation", "index$": 8 }, "flagImage": { "a": true, "h": "Flag Image", "n": "flagImage", "r": false, "sh": "Flag image URL", "t": "`$STRING`", "key$": "flagImage", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Geomelon UUID of the city", "t": "`$STRING`", "key$": "id", "index$": 10 }, "latitude": { "a": true, "h": "Latitude", "n": "latitude", "r": false, "sh": "Latitude coordinate", "t": "`$NUMBER`", "key$": "latitude", "index$": 11 }, "localizedName": { "a": true, "h": "Localized Name", "n": "localizedName", "r": true, "sh": "Localized name according to preferred languages", "t": "`$STRING`", "key$": "localizedName", "index$": 12 }, "longitude": { "a": true, "h": "Longitude", "n": "longitude", "r": false, "sh": "Longitude coordinate", "t": "`$NUMBER`", "key$": "longitude", "index$": 13 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "City name", "t": "`$STRING`", "key$": "name", "index$": 14 }, "normalizedName": { "a": true, "h": "Normalized Name", "n": "normalizedName", "r": true, "sh": "Normalized city name", "t": "`$STRING`", "key$": "normalizedName", "index$": 15 }, "officialWebsite": { "a": true, "h": "Official Website", "n": "officialWebsite", "r": false, "sh": "Official website URL", "t": "`$STRING`", "key$": "officialWebsite", "index$": 16 }, "population": { "a": true, "h": "Population", "n": "population", "r": false, "sh": "Population of the city", "t": "`$NUMBER`", "key$": "population", "index$": 17 }, "postalCode": { "a": true, "h": "Postal Code", "n": "postalCode", "r": false, "sh": "Postal code", "t": "`$STRING`", "key$": "postalCode", "index$": 18 }, "regionCode": { "a": true, "h": "Region Code", "n": "regionCode", "r": true, "sh": "Region code", "t": "`$STRING`", "key$": "regionCode", "index$": 19 }, "regionId": { "a": true, "h": "Region Id", "n": "regionId", "r": true, "sh": "UUID of the region", "t": "`$STRING`", "key$": "regionId", "index$": 20 }, "regionName": { "a": true, "h": "Region Name", "n": "regionName", "r": true, "sh": "Region name", "t": "`$STRING`", "key$": "regionName", "index$": 21 }, "timeZone": { "a": true, "h": "Time Zone", "n": "timeZone", "r": false, "sh": "Time zone", "t": "`$STRING`", "key$": "timeZone", "index$": 22 }, "translations": { "a": true, "h": "Translations", "n": "translations", "r": true, "sh": "Translations of the city name in requested languages", "t": "`$ARRAY`", "key$": "translations", "index$": 23 }, "wikidataId": { "a": true, "h": "Wikidata Id", "n": "wikidataId", "r": true, "sh": "Wikidata ID of the city", "t": "`$STRING`", "key$": "wikidataId", "index$": 24 } }, "id": { "field": "id", "name": "id" }, "name": "city_dto", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /cities/byCoordinates/closest", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "lat", "or": "lat", "r": true, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "k": "query", "n": "lon", "or": "lon", "r": true, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "ex": "en", "k": "query", "n": "preferred_language", "or": "preferredLanguages", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/cities/byCoordinates/closest", "q": { "exist": ["lat", "lon"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "cities" }, { "lit": "byCoordinates" }, { "lit": "closest" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /cities/byCoordinates/largest", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "lat", "or": "lat", "r": true, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "k": "query", "n": "lon", "or": "lon", "r": true, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "ex": "en", "k": "query", "n": "preferred_language", "or": "preferredLanguages", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/cities/byCoordinates/largest", "q": { "exist": ["lat", "lon"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "cities" }, { "lit": "byCoordinates" }, { "lit": "largest" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /cities/search", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "us", "k": "query", "n": "country_code", "or": "countryCode", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "k": "query", "n": "max_population", "or": "maxPopulation", "r": false, "t": "`$NUMBER`", "index$": 2 }, { "a": true, "k": "query", "n": "min_population", "or": "minPopulation", "r": false, "t": "`$NUMBER`", "index$": 3 }, { "a": true, "ex": "dallas", "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$NUMBER`", "index$": 5 }, { "a": true, "ex": "en,fr,ja,hi", "k": "query", "n": "preferred_language", "or": "preferredLanguages", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "region_id", "or": "regionId", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "ex": "population_desc", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/cities/search", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "cities" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "city_dto", "name__orig": "city_dto", "Name": "CityDto", "name_": "city_dto", "name-": "city-dto", "NAME": "CITY_DTO", "index$": 1 }, { "active": true, "entity": "city_dto", "key$": "BasicCityDtoFlow", "kind": "basic", "name": "BasicCityDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "city_dto_ref01" } }], "index$": 0 }] }, 'CityDto', { "GET /cities/byCoordinates/closest": { "protocol": "http", "parameters": [{ "name": "preferredLanguages", "required": false, "in": "query", "schema": { "default": "en", "type": "string" }, "index$": 0 }, { "name": "lon", "required": true, "in": "query", "schema": { "type": "number" }, "index$": 1 }, { "name": "lat", "required": true, "in": "query", "schema": { "type": "number" }, "index$": 2 }] }, "GET /cities/byCoordinates/largest": { "protocol": "http", "parameters": [{ "name": "preferredLanguages", "required": false, "in": "query", "schema": { "default": "en", "type": "string" }, "index$": 0 }, { "name": "lon", "required": true, "in": "query", "schema": { "type": "number" }, "index$": 1 }, { "name": "lat", "required": true, "in": "query", "schema": { "type": "number" }, "index$": 2 }] }, "GET /cities/search": { "protocol": "http", "parameters": [{ "name": "sort", "required": false, "in": "query", "schema": { "example": "population_desc", "type": "string" }, "index$": 0 }, { "name": "offset", "required": false, "in": "query", "schema": { "default": 0, "type": "number" }, "index$": 1 }, { "name": "limit", "required": false, "in": "query", "schema": { "default": 20, "type": "number" }, "index$": 2 }, { "name": "preferredLanguages", "required": false, "in": "query", "schema": { "default": "en,fr,ja,hi", "type": "string" }, "index$": 3 }, { "name": "name", "required": false, "in": "query", "schema": { "example": "dallas", "type": "string" }, "index$": 4 }, { "name": "maxPopulation", "required": false, "in": "query", "schema": { "type": "number" }, "index$": 5 }, { "name": "minPopulation", "required": false, "in": "query", "schema": { "type": "number" }, "index$": 6 }, { "name": "regionId", "required": false, "in": "query", "schema": { "type": "string" }, "index$": 7 }, { "name": "countryCode", "required": false, "in": "query", "schema": { "example": "us", "type": "string" }, "index$": 8 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let city_dto_ref01_data = Object.values(setup.data.existing.city_dto)[0];
        // LIST
        const city_dto_ref01_ent = client.CityDto();
        const city_dto_ref01_match = {};
        const city_dto_ref01_list = (await city_dto_ref01_ent.list(city_dto_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/city_dto/CityDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CityAutocompleteSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['city_dto01', 'city_dto02', 'city_dto03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CITY_AUTOCOMPLETE_TEST_CITY_DTO_ENTID': idmap,
        'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
        'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
        'CITY_AUTOCOMPLETE_APIKEY': '',
    });
    idmap = env['CITY_AUTOCOMPLETE_TEST_CITY_DTO_ENTID'];
    const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_CITY_DTO_ENTID'];
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
//# sourceMappingURL=CityDtoEntity.test.js.map