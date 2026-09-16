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
(0, node_test_1.describe)('OneshotEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CITY_AUTOCOMPLETE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CityAutocompleteSDK.test();
        const ent = testsdk.Oneshot();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'oneshot.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "emoji", "req": true, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "en", "req": false, "short": "English name — omitted when the requested language is English or no English translation exists", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "name", "req": true, "short": "City name in the requested language", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "population", "req": true, "type": "`$OBJECT`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "oneshot", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "bar", "kind": "param", "name": "city_name", "orig": "city_name", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "es", "kind": "param", "name": "country", "orig": "country", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "es", "kind": "param", "name": "language", "orig": "language", "reqd": true, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /cities/oneshot/{country}/{language}/{city_name}", "json": "{\"operationId\":\"OneshotController_byCountryLang\",\"parameters\":[{\"description\":\"Lowercase ISO 3166-1 alpha-2 country code\",\"in\":\"path\",\"name\":\"country\",\"required\":true,\"schema\":{\"example\":\"es\",\"type\":\"string\"}},{\"description\":\"BCP 47 language code\",\"in\":\"path\",\"name\":\"language\",\"required\":true,\"schema\":{\"example\":\"es\",\"type\":\"string\"}},{\"description\":\"City name prefix in the given language (1+ chars)\",\"in\":\"path\",\"name\":\"city_name\",\"required\":true,\"schema\":{\"example\":\"bar\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"emoji\":{\"example\":\"🇷🇸\",\"nullable\":true,\"type\":\"object\"},\"en\":{\"description\":\"English name — omitted when the requested language is English or no English translation exists\",\"example\":\"Belgrade\",\"type\":\"string\"},\"id\":{\"example\":\"9c4eae2b-095b-48ab-9184-8f079b7dea25\",\"type\":\"string\"},\"name\":{\"description\":\"City name in the requested language\",\"example\":\"Београд\",\"type\":\"string\"},\"population\":{\"example\":1197714,\"nullable\":true,\"type\":\"object\"}},\"required\":[\"id\",\"name\",\"population\",\"emoji\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/cities/oneshot/{country}/{language}/{city_name}", "segments": [{ "lit": "cities" }, { "lit": "oneshot" }, { "var": "country" }, { "var": "language" }, { "var": "city_name" }], "select": { "exist": ["city_name", "country", "language"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["oneshot"]] }, "key$": "oneshot", "name__orig": "oneshot", "Name": "Oneshot", "name_": "oneshot", "name-": "oneshot", "NAME": "ONESHOT", "index$": 7 }, { "active": true, "entity": "oneshot", "key$": "BasicOneshotFlow", "kind": "basic", "name": "BasicOneshotFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "city_name": "city_name01", "country": "country01", "language": "language01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "oneshot_ref01" } }], "index$": 0 }] }, 'Oneshot');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let oneshot_ref01_data = Object.values(setup.data.existing.oneshot)[0];
        // LIST
        const oneshot_ref01_ent = client.Oneshot();
        const oneshot_ref01_match = {};
        oneshot_ref01_match['city_name'] = setup.idmap['city_name01'];
        oneshot_ref01_match['country'] = setup.idmap['country01'];
        oneshot_ref01_match['language'] = setup.idmap['language01'];
        const oneshot_ref01_list = (await oneshot_ref01_ent.list(oneshot_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/oneshot/OneshotTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CityAutocompleteSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['oneshot01', 'oneshot02', 'oneshot03', 'oneshot01', 'oneshot02', 'oneshot03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID': idmap,
        'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
        'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
        'CITY_AUTOCOMPLETE_APIKEY': '',
    });
    idmap = env['CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID'];
    const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID'];
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
//# sourceMappingURL=OneshotEntity.test.js.map