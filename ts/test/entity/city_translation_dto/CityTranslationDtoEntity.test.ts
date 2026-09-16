

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


describe('CityTranslationDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CITY_AUTOCOMPLETE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CityAutocompleteSDK.test()
    const ent = testsdk.CityTranslationDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'city_translation_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"cityId","req":true,"short":"City ID","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":true,"short":"Translation ID","type":"`$STRING`","index$":1},{"active":true,"name":"language","req":true,"short":"Language code","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":true,"short":"Translated name","type":"`$STRING`","index$":3},{"active":true,"name":"nameNormalized","req":true,"short":"Normalized translated name","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"city_translation_dto","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /cities/{id}/translations","json":"{\"operationId\":\":id/translations\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"cityId\":{\"description\":\"City ID\",\"example\":\"964512d1-f150-4876-87ec-0ba47aef694a\",\"type\":\"string\"},\"id\":{\"description\":\"Translation ID\",\"example\":\"eabda784-b9cc-4ee8-84fa-6c311fbea8b5\",\"type\":\"string\"},\"language\":{\"description\":\"Language code\",\"example\":\"azb\",\"type\":\"string\"},\"name\":{\"description\":\"Translated name\",\"example\":\"بارسلونا\",\"type\":\"string\"},\"nameNormalized\":{\"description\":\"Normalized translated name\",\"example\":\"بارسلونا\",\"type\":\"string\"}},\"required\":[\"id\",\"cityId\",\"language\",\"name\",\"nameNormalized\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"City translations\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cities/{id}/translations","segments":[{"lit":"cities"},{"var":"id"},{"lit":"translations"}],"select":{"$action":"translations","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"city_translation_dto","name__orig":"city_translation_dto","Name":"CityTranslationDto","name_":"city_translation_dto","name-":"city-translation-dto","NAME":"CITY_TRANSLATION_DTO","index$":2}, {"active":true,"entity":"city_translation_dto","key$":"BasicCityTranslationDtoFlow","kind":"basic","name":"BasicCityTranslationDtoFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"city_translation_dto_ref01"}}],"index$":0}]}, 'CityTranslationDto')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let city_translation_dto_ref01_data = Object.values(setup.data.existing.city_translation_dto)[0] as any

    // LIST
    const city_translation_dto_ref01_ent = client.CityTranslationDto()
    const city_translation_dto_ref01_match: any = {}

    const city_translation_dto_ref01_list = (await city_translation_dto_ref01_ent.list(city_translation_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/city_translation_dto/CityTranslationDtoTestData.json')

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
    ['city_translation_dto01','city_translation_dto02','city_translation_dto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CITY_AUTOCOMPLETE_TEST_CITY_TRANSLATION_DTO_ENTID': idmap,
    'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
    'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
    'CITY_AUTOCOMPLETE_APIKEY': '',
  })

  idmap = env['CITY_AUTOCOMPLETE_TEST_CITY_TRANSLATION_DTO_ENTID']

  const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_CITY_TRANSLATION_DTO_ENTID']
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
  
