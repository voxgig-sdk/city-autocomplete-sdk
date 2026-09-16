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
(0, node_test_1.describe)('RegionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CITY_AUTOCOMPLETE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CityAutocompleteSDK.test();
        const ent = testsdk.Region();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'region.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "code", "req": true, "short": "Region code", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "countryId", "req": true, "short": "Country ID the region belongs to", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "drivingSide", "req": true, "short": "Driving side of the country", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "emoji", "req": true, "short": "Emoji of the country", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "headOfGovernment", "req": true, "short": "Head of government of the country", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "headOfState", "req": true, "short": "Head of state of the country", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "id", "req": true, "short": "Country ID", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "isoCode", "req": true, "short": "ISO code of the country", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "latitude", "req": true, "short": "Latitude of the region center", "type": "`$NUMBER`", "index$": 8 }, { "active": true, "name": "licencePlateCode", "req": true, "short": "Licence plate code of the country", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "localizedName", "req": false, "short": "Name in the first matched preferred language, falls back to name", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "longitude", "req": true, "short": "Longitude of the region center", "type": "`$NUMBER`", "index$": 11 }, { "active": true, "name": "name", "req": true, "short": "Name of the country", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "population", "req": true, "short": "Population of the region", "type": "`$NUMBER`", "index$": 13 }, { "active": true, "name": "preferredLanguageId", "req": true, "short": "Preferred language ID for the country", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "telephoneCode", "req": true, "short": "Telephone code of the country", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "trunkPrefix", "req": true, "short": "Trunk prefix of the country", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "wikidataId", "req": true, "short": "Wikidata ID", "type": "`$STRING`", "index$": 17 }], "id": { "field": "id", "name": "id" }, "name": "region", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26", "kind": "param", "name": "country_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /countries/{id}/regions", "json": "{\"operationId\":\":id/regions\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"509a2a0a-5ec6-483e-8381-4bea4422ac26\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"code\":{\"description\":\"Region code\",\"example\":\"ES-CT\",\"type\":\"string\"},\"countryId\":{\"description\":\"Country ID the region belongs to\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"id\":{\"description\":\"UUID of the region\",\"example\":\"dde1e1c6-ca22-48e6-8ad7-f97b141c1929\",\"type\":\"string\"},\"latitude\":{\"description\":\"Latitude of the region center\",\"example\":41.85,\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude of the region center\",\"example\":1.566666666,\"type\":\"number\"},\"name\":{\"description\":\"Name of the region\",\"example\":\"Catalonia\",\"type\":\"string\"},\"population\":{\"description\":\"Population of the region\",\"example\":8034743,\"type\":\"number\"},\"wikidataId\":{\"description\":\"Wikidata ID\",\"example\":\"Q5705\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"countryId\",\"population\",\"code\",\"latitude\",\"longitude\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Country regions\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/countries/{id}/regions", "rename": { "param": { "id": "country_id" } }, "segments": [{ "lit": "countries" }, { "var": "country_id" }, { "lit": "regions" }], "select": { "exist": ["country_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26", "kind": "query", "name": "country_id", "orig": "country_id", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /regions", "json": "{\"operationId\":\"/\",\"parameters\":[{\"in\":\"query\",\"name\":\"countryId\",\"required\":false,\"schema\":{\"example\":\"509a2a0a-5ec6-483e-8381-4bea4422ac26\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"code\":{\"description\":\"Region code\",\"example\":\"ES-CT\",\"type\":\"string\"},\"countryId\":{\"description\":\"Country ID the region belongs to\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"id\":{\"description\":\"UUID of the region\",\"example\":\"dde1e1c6-ca22-48e6-8ad7-f97b141c1929\",\"type\":\"string\"},\"latitude\":{\"description\":\"Latitude of the region center\",\"example\":41.85,\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude of the region center\",\"example\":1.566666666,\"type\":\"number\"},\"name\":{\"description\":\"Name of the region\",\"example\":\"Catalonia\",\"type\":\"string\"},\"population\":{\"description\":\"Population of the region\",\"example\":8034743,\"type\":\"number\"},\"wikidataId\":{\"description\":\"Wikidata ID\",\"example\":\"Q5705\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"countryId\",\"population\",\"code\",\"latitude\",\"longitude\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Country regions\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/regions", "segments": [{ "lit": "regions" }], "select": { "exist": ["country_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "63df31a3-ca32-4970-8b5e-bcf9a11426e6", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /regions/{id}", "json": "{\"operationId\":\":id\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"63df31a3-ca32-4970-8b5e-bcf9a11426e6\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Region code\",\"example\":\"ES-CT\",\"type\":\"string\"},\"country\":{\"allOf\":[{\"properties\":{\"drivingSide\":{\"description\":\"Driving side of the country\",\"example\":\"right\",\"type\":\"string\"},\"emoji\":{\"description\":\"Emoji of the country\",\"example\":\"🇪🇸\",\"type\":\"string\"},\"headOfGovernment\":{\"description\":\"Head of government of the country\",\"example\":\"Pedro Sánchez\",\"type\":\"string\"},\"headOfState\":{\"description\":\"Head of state of the country\",\"example\":\"Felipe VI of Spain\",\"type\":\"string\"},\"id\":{\"description\":\"Country ID\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"isoCode\":{\"description\":\"ISO code of the country\",\"example\":\"ES\",\"type\":\"string\"},\"licencePlateCode\":{\"description\":\"Licence plate code of the country\",\"example\":\"E\",\"type\":\"string\"},\"localizedName\":{\"description\":\"Name in the first matched preferred language, falls back to name\",\"example\":\"España\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the country\",\"example\":\"Spain\",\"type\":\"string\"},\"preferredLanguageId\":{\"description\":\"Preferred language ID for the country\",\"example\":\"a3d69219-5e64-4fef-a137-10bceb326e3d\",\"type\":\"string\"},\"telephoneCode\":{\"description\":\"Telephone code of the country\",\"example\":\"+34\",\"type\":\"string\"},\"trunkPrefix\":{\"description\":\"Trunk prefix of the country\",\"example\":\"0\",\"type\":\"string\"},\"wikidataId\":{\"description\":\"Wikidata ID\",\"example\":\"Q29\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"emoji\",\"headOfState\",\"headOfGovernment\",\"isoCode\",\"telephoneCode\",\"trunkPrefix\",\"licencePlateCode\",\"drivingSide\",\"preferredLanguageId\"],\"type\":\"object\"}],\"description\":\"Country details\"},\"countryId\":{\"description\":\"Country ID the region belongs to\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"id\":{\"description\":\"UUID of the region\",\"example\":\"dde1e1c6-ca22-48e6-8ad7-f97b141c1929\",\"type\":\"string\"},\"latitude\":{\"description\":\"Latitude of the region center\",\"example\":41.85,\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude of the region center\",\"example\":1.566666666,\"type\":\"number\"},\"name\":{\"description\":\"Name of the region\",\"example\":\"Catalonia\",\"type\":\"string\"},\"population\":{\"description\":\"Population of the region\",\"example\":8034743,\"type\":\"number\"},\"wikidataId\":{\"description\":\"Wikidata ID\",\"example\":\"Q5705\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"countryId\",\"population\",\"code\",\"latitude\",\"longitude\",\"country\"],\"type\":\"object\"}}},\"description\":\"Region details\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/regions/{id}", "segments": [{ "lit": "regions" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.country`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["country"]] }, "key$": "region", "name__orig": "region", "Name": "Region", "name_": "region", "name-": "region", "NAME": "REGION", "index$": 8 }, { "active": true, "entity": "region", "key$": "BasicRegionFlow", "kind": "basic", "name": "BasicRegionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "region_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "region_ref01", "srcdatavar": "region_ref01_data", "suffix": "_dt0" }, "match": { "id": "region01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-region_ref01" } }], "index$": 1 }] }, 'Region');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let region_ref01_data = Object.values(setup.data.existing.region)[0];
        // LIST
        const region_ref01_ent = client.Region();
        const region_ref01_match = {};
        const region_ref01_list = (await region_ref01_ent.list(region_ref01_match)).map((e) => e.data());
        // LOAD
        const region_ref01_match_dt0 = {};
        region_ref01_match_dt0.id = region_ref01_data.id;
        const region_ref01_data_dt0 = (await region_ref01_ent.load(region_ref01_match_dt0)).data();
        (0, node_assert_1.default)(region_ref01_data_dt0.id === region_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/region/RegionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CityAutocompleteSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['region01', 'region02', 'region03', 'country01', 'country02', 'country03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CITY_AUTOCOMPLETE_TEST_REGION_ENTID': idmap,
        'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
        'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
        'CITY_AUTOCOMPLETE_APIKEY': '',
    });
    idmap = env['CITY_AUTOCOMPLETE_TEST_REGION_ENTID'];
    const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_REGION_ENTID'];
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
//# sourceMappingURL=RegionEntity.test.js.map