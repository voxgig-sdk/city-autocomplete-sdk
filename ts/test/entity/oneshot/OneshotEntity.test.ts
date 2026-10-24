

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


describe('OneshotEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CITY_AUTOCOMPLETE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CityAutocompleteSDK.test()
    const ent = testsdk.Oneshot()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CityAutocompleteSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Oneshot().list({"city_name":1,"country":"x","language":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'oneshot.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"emoji":{"a":true,"h":"Emoji","n":"emoji","r":true,"t":"`$OBJECT`","key$":"emoji","index$":0},"en":{"a":true,"h":"En","n":"en","r":false,"sh":"English name — omitted when the requested language is English or no English translation exists","t":"`$STRING`","key$":"en","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"City name in the requested language","t":"`$STRING`","key$":"name","index$":3},"population":{"a":true,"h":"Population","n":"population","r":true,"t":"`$OBJECT`","key$":"population","index$":4}},"id":{"field":"id","name":"id"},"name":"oneshot","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /cities/oneshot/{country}/{language}/{city_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"bar","k":"param","n":"city_name","or":"city_name","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"es","k":"param","n":"country","or":"country","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"es","k":"param","n":"language","or":"language","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/cities/oneshot/{country}/{language}/{city_name}","q":{"exist":["city_name","country","language"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"cities"},{"lit":"oneshot"},{"var":"country"},{"var":"language"},{"var":"city_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"oneshot","name__orig":"oneshot","Name":"Oneshot","name_":"oneshot","name-":"oneshot","NAME":"ONESHOT","index$":7}, {"active":true,"entity":"oneshot","key$":"BasicOneshotFlow","kind":"basic","name":"BasicOneshotFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"city_name":"city_name01","country":"country01","language":"language01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"oneshot_ref01"}}],"index$":0}]}, 'Oneshot', {"GET /cities/oneshot/{country}/{language}/{city_name}":{"protocol":"http","parameters":[{"name":"country","required":true,"in":"path","description":"Lowercase ISO 3166-1 alpha-2 country code","schema":{"example":"es","type":"string"},"index$":0},{"name":"language","required":true,"in":"path","description":"BCP 47 language code","schema":{"example":"es","type":"string"},"index$":1},{"name":"city_name","required":true,"in":"path","description":"City name prefix in the given language (1+ chars)","schema":{"example":"bar","type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let oneshot_ref01_data = Object.values(setup.data.existing.oneshot)[0] as any

    // LIST
    const oneshot_ref01_ent = client.Oneshot()
    const oneshot_ref01_match: any = {}
    oneshot_ref01_match['city_name'] = setup.idmap['city_name01']
    oneshot_ref01_match['country'] = setup.idmap['country01']
    oneshot_ref01_match['language'] = setup.idmap['language01']

    const oneshot_ref01_list = (await oneshot_ref01_ent.list(oneshot_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/oneshot/OneshotTestData.json')

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
    ['oneshot01','oneshot02','oneshot03','city_name01','country01','language01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID': idmap,
    'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
    'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
    'CITY_AUTOCOMPLETE_APIKEY': '',
  })

  idmap = env['CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID']

  const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_ONESHOT_ENTID']
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
  
