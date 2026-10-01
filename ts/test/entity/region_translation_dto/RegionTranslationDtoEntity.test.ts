

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('RegionTranslationDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CITY_AUTOCOMPLETE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CityAutocompleteSDK.test()
    const ent = testsdk.RegionTranslationDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'region_translation_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Translation ID","t":"`$STRING`","key$":"id","index$":0},"language":{"a":true,"h":"Language","n":"language","r":true,"sh":"Language code","t":"`$STRING`","key$":"language","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Translated name","t":"`$STRING`","key$":"name","index$":2},"nameNormalized":{"a":true,"h":"Name Normalized","n":"nameNormalized","r":true,"sh":"Normalized translated name","t":"`$STRING`","key$":"nameNormalized","index$":3},"regionId":{"a":true,"h":"Region Id","n":"regionId","r":true,"sh":"Region ID","t":"`$STRING`","key$":"regionId","index$":4}},"id":{"field":"id","name":"id"},"name":"region_translation_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /regions/{id}/translations","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"63df31a3-ca32-4970-8b5e-bcf9a11426e6","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"en,fr,hi","k":"query","n":"preferred_language","or":"preferredLanguages","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/regions/{id}/translations","q":{"$action":"translations","exist":["id","preferred_language"]},"r":{},"s":[{"lit":"regions"},{"var":"id"},{"lit":"translations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"region_translation_dto","name__orig":"region_translation_dto","Name":"RegionTranslationDto","name_":"region_translation_dto","name-":"region-translation-dto","NAME":"REGION_TRANSLATION_DTO","index$":9}, {"active":true,"entity":"region_translation_dto","key$":"BasicRegionTranslationDtoFlow","kind":"basic","name":"BasicRegionTranslationDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"region_translation_dto_ref01"}}],"index$":0}]}, 'RegionTranslationDto', {"GET /regions/{id}/translations":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","schema":{"example":"63df31a3-ca32-4970-8b5e-bcf9a11426e6","type":"string"},"index$":0},{"name":"preferredLanguages","required":false,"in":"query","schema":{"default":"en","example":"en,fr,hi","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let region_translation_dto_ref01_data = Object.values(setup.data.existing.region_translation_dto)[0] as any

    // LIST
    const region_translation_dto_ref01_ent = client.RegionTranslationDto()
    const region_translation_dto_ref01_match: any = {}

    const region_translation_dto_ref01_list = (await region_translation_dto_ref01_ent.list(region_translation_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/region_translation_dto/RegionTranslationDtoTestData.json')

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
    ['region_translation_dto01','region_translation_dto02','region_translation_dto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CITY_AUTOCOMPLETE_TEST_REGION_TRANSLATION_DTO_ENTID': idmap,
    'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
    'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
    'CITY_AUTOCOMPLETE_APIKEY': '',
  })

  idmap = env['CITY_AUTOCOMPLETE_TEST_REGION_TRANSLATION_DTO_ENTID']

  const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_REGION_TRANSLATION_DTO_ENTID']
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
  
