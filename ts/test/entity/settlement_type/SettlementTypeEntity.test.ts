

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CityAutocompleteSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SettlementTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CITY_AUTOCOMPLETE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CityAutocompleteSDK.test()
    const ent = testsdk.SettlementType()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'settlement_type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":true,"short":"Description of the settlement type","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":true,"short":"Settlement Type ID","type":"`$STRING`","index$":1},{"active":true,"name":"name","req":true,"short":"Name of the settlement type","type":"`$STRING`","index$":2},{"active":true,"name":"nameNormalized","req":true,"short":"Normalized name of the settlement type","type":"`$STRING`","index$":3},{"active":true,"name":"wikidataId","req":true,"short":"Wikidata ID","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"settlement_type","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"city_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /cities/{id}/settlement-types","json":"{\"operationId\":\":id/settlement-types\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Description of the settlement type\",\"example\":\"administrative division of Catalonia, Spain\",\"type\":\"string\"},\"id\":{\"description\":\"Settlement Type ID\",\"example\":\"5bdb4631-a170-4bd8-bf1a-2d447d3523b1\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the settlement type\",\"example\":\"municipality of Catalonia\",\"type\":\"string\"},\"nameNormalized\":{\"description\":\"Normalized name of the settlement type\",\"example\":\"municipality of catalonia\",\"type\":\"string\"},\"wikidataId\":{\"description\":\"Wikidata ID\",\"example\":\"Q33146843\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"nameNormalized\",\"description\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"City settlement types\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cities/{id}/settlement-types","rename":{"param":{"id":"city_id"}},"segments":[{"lit":"cities"},{"var":"city_id"},{"lit":"settlement-types"}],"select":{"exist":["city_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["city"]]},"key$":"settlement_type","name__orig":"settlement_type","Name":"SettlementType","name_":"settlement_type","name-":"settlement-type","NAME":"SETTLEMENT_TYPE","index$":10}, {"active":true,"entity":"settlement_type","key$":"BasicSettlementTypeFlow","kind":"basic","name":"BasicSettlementTypeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"city_id":"city01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"settlement_type_ref01"}}],"index$":0}]}, 'SettlementType')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let settlement_type_ref01_data = Object.values(setup.data.existing.settlement_type)[0] as any

    // LIST
    const settlement_type_ref01_ent = client.SettlementType()
    const settlement_type_ref01_match: any = {}
    settlement_type_ref01_match['city_id'] = setup.idmap['city01']

    const settlement_type_ref01_list = (await settlement_type_ref01_ent.list(settlement_type_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/settlement_type/SettlementTypeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CityAutocompleteSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['settlement_type01','settlement_type02','settlement_type03','city01','city02','city03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CITY_AUTOCOMPLETE_TEST_SETTLEMENT_TYPE_ENTID': idmap,
    'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
    'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
    'CITY_AUTOCOMPLETE_APIKEY': '',
  })

  idmap = env['CITY_AUTOCOMPLETE_TEST_SETTLEMENT_TYPE_ENTID']

  const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_SETTLEMENT_TYPE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CityAutocompleteSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
