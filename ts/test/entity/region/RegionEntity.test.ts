

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CityAutocompleteSDK, BaseFeature, config, stdutil } from '../../..'

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('RegionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CITY_AUTOCOMPLETE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CityAutocompleteSDK.test()
    const ent = testsdk.Region()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('region hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CityAutocompleteSDK.test(offline).Region().stream('list')) { }
    }, /offline/)

    for await (const _item of CityAutocompleteSDK.test(offline).Region()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CityAutocompleteSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Region().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CityAutocompleteSDK.test().Region().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CityAutocompleteSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Region().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Region().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CityAutocompleteSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Region().list({"country_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'region.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"code":{"a":true,"h":"Code","n":"code","r":true,"sh":"Region code","t":"`$STRING`","key$":"code","index$":0},"country":{"a":true,"h":"Country","n":"country","r":true,"sh":"Country details","t":"`$ANY`","key$":"country","index$":1},"countryId":{"a":true,"h":"Country Id","n":"countryId","r":true,"sh":"Country ID the region belongs to","t":"`$STRING`","key$":"countryId","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"UUID of the region","t":"`$STRING`","key$":"id","index$":3},"latitude":{"a":true,"h":"Latitude","n":"latitude","r":true,"sh":"Latitude of the region center","t":"`$NUMBER`","key$":"latitude","index$":4},"longitude":{"a":true,"h":"Longitude","n":"longitude","r":true,"sh":"Longitude of the region center","t":"`$NUMBER`","key$":"longitude","index$":5},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the region","t":"`$STRING`","key$":"name","index$":6},"population":{"a":true,"h":"Population","n":"population","r":true,"sh":"Population of the region","t":"`$NUMBER`","key$":"population","index$":7},"wikidataId":{"a":true,"h":"Wikidata Id","n":"wikidataId","r":true,"sh":"Wikidata ID","t":"`$STRING`","key$":"wikidataId","index$":8}},"id":{"field":"id","name":"id"},"name":"region","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /countries/{id}/regions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"509a2a0a-5ec6-483e-8381-4bea4422ac26","k":"param","n":"country_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/countries/{id}/regions","q":{"exist":["country_id"]},"r":{"param":{"id":"country_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"var":"country_id"},{"lit":"regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /regions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"509a2a0a-5ec6-483e-8381-4bea4422ac26","k":"query","n":"country_id","or":"countryId","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/regions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /regions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"63df31a3-ca32-4970-8b5e-bcf9a11426e6","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/regions/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"regions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.country"]]},"key$":"region","name__orig":"region","Name":"Region","name_":"region","name-":"region","NAME":"REGION","index$":8}, {"active":true,"entity":"region","key$":"BasicRegionFlow","kind":"basic","name":"BasicRegionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"region_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"region_ref01","srcdatavar":"region_ref01_data","suffix":"_dt0"},"m":{"id":"region01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-region_ref01"}}],"index$":1}]}, 'Region', {"GET /countries/{id}/regions":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","schema":{"example":"509a2a0a-5ec6-483e-8381-4bea4422ac26","type":"string"},"index$":0}]},"GET /regions":{"protocol":"http","parameters":[{"name":"countryId","required":false,"in":"query","schema":{"example":"509a2a0a-5ec6-483e-8381-4bea4422ac26","type":"string"},"index$":0}]},"GET /regions/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","schema":{"example":"63df31a3-ca32-4970-8b5e-bcf9a11426e6","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let region_ref01_data = Object.values(setup.data.existing.region)[0] as any

    // LIST
    const region_ref01_ent = client.Region()
    const region_ref01_match: any = {}

    const region_ref01_list = (await region_ref01_ent.list(region_ref01_match)).map((e: any) => e.data())


    // LOAD
    const region_ref01_match_dt0: any = {}
    region_ref01_match_dt0.id = region_ref01_data.id
    const region_ref01_data_dt0 = (await region_ref01_ent.load(region_ref01_match_dt0)).data()
    assert(region_ref01_data_dt0.id === region_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/region/RegionTestData.json')

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
    ['region01','region02','region03','country01','country02','country03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CITY_AUTOCOMPLETE_TEST_REGION_ENTID': idmap,
    'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
    'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
    'CITY_AUTOCOMPLETE_APIKEY': '',
  })

  idmap = env['CITY_AUTOCOMPLETE_TEST_REGION_ENTID']

  const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_REGION_ENTID']
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
  
