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
(0, node_test_1.describe)('LanguageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CITY_AUTOCOMPLETE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CityAutocompleteSDK.test();
        const ent = testsdk.Language();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'language.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "citiesCount": { "a": true, "h": "Cities Count", "n": "citiesCount", "r": true, "sh": "Number of cities using this language", "t": "`$NUMBER`", "key$": "citiesCount", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "UUID of the language", "t": "`$STRING`", "key$": "id", "index$": 1 }, "isoCode": { "a": true, "h": "Iso Code", "n": "isoCode", "r": true, "sh": "ISO code of the language", "t": "`$STRING`", "key$": "isoCode", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Name of the language", "t": "`$STRING`", "key$": "name", "index$": 3 }, "wikidataId": { "a": true, "h": "Wikidata Id", "n": "wikidataId", "r": true, "sh": "Wikidata ID of the language", "t": "`$STRING`", "key$": "wikidataId", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "language", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /languages", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 200, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$NUMBER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/languages", "q": { "exist": ["limit", "offset"] }, "r": {}, "s": [{ "lit": "languages" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /languages/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "6aa910e2-07b2-4f0e-a1ec-194e85c4f35b", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/languages/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "languages" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "language", "name__orig": "language", "Name": "Language", "name_": "language", "name-": "language", "NAME": "LANGUAGE", "index$": 6 }, { "active": true, "entity": "language", "key$": "BasicLanguageFlow", "kind": "basic", "name": "BasicLanguageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "language_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "language_ref01", "srcdatavar": "language_ref01_data", "suffix": "_dt0" }, "m": { "id": "language01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-language_ref01" } }], "index$": 1 }] }, 'Language', { "GET /languages": { "protocol": "http", "parameters": [{ "name": "limit", "required": false, "in": "query", "description": "Maximum number of results", "schema": { "default": 200, "example": 200, "type": "number" }, "index$": 0 }, { "name": "offset", "required": false, "in": "query", "description": "Number of results to skip", "schema": { "default": 0, "example": 0, "type": "number" }, "index$": 1 }] }, "GET /languages/{id}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "schema": { "example": "6aa910e2-07b2-4f0e-a1ec-194e85c4f35b", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let language_ref01_data = Object.values(setup.data.existing.language)[0];
        // LIST
        const language_ref01_ent = client.Language();
        const language_ref01_match = {};
        const language_ref01_list = (await language_ref01_ent.list(language_ref01_match)).map((e) => e.data());
        // LOAD
        const language_ref01_match_dt0 = {};
        language_ref01_match_dt0.id = language_ref01_data.id;
        const language_ref01_data_dt0 = (await language_ref01_ent.load(language_ref01_match_dt0)).data();
        (0, node_assert_1.default)(language_ref01_data_dt0.id === language_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/language/LanguageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CityAutocompleteSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['language01', 'language02', 'language03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CITY_AUTOCOMPLETE_TEST_LANGUAGE_ENTID': idmap,
        'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
        'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
        'CITY_AUTOCOMPLETE_APIKEY': '',
    });
    idmap = env['CITY_AUTOCOMPLETE_TEST_LANGUAGE_ENTID'];
    const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_LANGUAGE_ENTID'];
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
//# sourceMappingURL=LanguageEntity.test.js.map