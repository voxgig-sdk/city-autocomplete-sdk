

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


describe('LanguageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CITY_AUTOCOMPLETE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CityAutocompleteSDK.test()
    const ent = testsdk.Language()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'language.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"citiesCount":{"a":true,"h":"Cities Count","n":"citiesCount","r":true,"sh":"Number of cities using this language","t":"`$NUMBER`","key$":"citiesCount","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"UUID of the language","t":"`$STRING`","key$":"id","index$":1},"isoCode":{"a":true,"h":"Iso Code","n":"isoCode","r":true,"sh":"ISO code of the language","t":"`$STRING`","key$":"isoCode","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the language","t":"`$STRING`","key$":"name","index$":3},"wikidataId":{"a":true,"h":"Wikidata Id","n":"wikidataId","r":true,"sh":"Wikidata ID of the language","t":"`$STRING`","key$":"wikidataId","index$":4}},"id":{"field":"id","name":"id"},"name":"language","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /languages","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":200,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$NUMBER`","index$":1}]},"k":"http","m":"GET","o":"/languages","q":{"exist":["limit","offset"]},"r":{},"s":[{"lit":"languages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /languages/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"6aa910e2-07b2-4f0e-a1ec-194e85c4f35b","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/languages/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"languages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"language","name__orig":"language","Name":"Language","name_":"language","name-":"language","NAME":"LANGUAGE","index$":6}, {"active":true,"entity":"language","key$":"BasicLanguageFlow","kind":"basic","name":"BasicLanguageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"language_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"language_ref01","srcdatavar":"language_ref01_data","suffix":"_dt0"},"m":{"id":"language01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-language_ref01"}}],"index$":1}]}, 'Language', {"GET /languages":{"protocol":"http","operationId":"/","responses":{"200":{"description":"List of languages","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"UUID of the language","example":"abbf9d44-2b77-464b-bca4-90026a66182c","key$":"id"},"wikidataId":{"type":"string","description":"Wikidata ID of the language","example":"Q256","key$":"wikidataId"},"name":{"type":"string","description":"Name of the language","example":"Turkish","key$":"name"},"isoCode":{"type":"string","description":"ISO code of the language","example":"tr","key$":"isoCode"},"citiesCount":{"type":"number","description":"Number of cities using this language","example":252088,"key$":"citiesCount"}},"required":["id","wikidataId","name","isoCode","citiesCount"],"x-ref":"#/components/schemas/LanguageDto","index$":0}}}}}},"parameters":[{"name":"limit","required":false,"in":"query","description":"Maximum number of results","schema":{"default":200,"example":200,"type":"number"},"index$":0},{"name":"offset","required":false,"in":"query","description":"Number of results to skip","schema":{"default":0,"example":0,"type":"number"},"index$":1}],"security":[{"RapidApiKey":[]}],"securitySource":"definition","securitySchemes":{"RapidApiKey":{"type":"apiKey","in":"header","name":"x-rapidapi-key","description":"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon"}}},"GET /languages/{id}":{"protocol":"http","operationId":":id","responses":{"200":{"description":"Language details","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"string","description":"UUID of the language","example":"abbf9d44-2b77-464b-bca4-90026a66182c","key$":"id"},"wikidataId":{"type":"string","description":"Wikidata ID of the language","example":"Q256","key$":"wikidataId"},"name":{"type":"string","description":"Name of the language","example":"Turkish","key$":"name"},"isoCode":{"type":"string","description":"ISO code of the language","example":"tr","key$":"isoCode"},"citiesCount":{"type":"number","description":"Number of cities using this language","example":252088,"key$":"citiesCount"}},"required":["id","wikidataId","name","isoCode","citiesCount"],"x-ref":"#/components/schemas/LanguageDto","index$":0}}}}},"parameters":[{"name":"id","required":true,"in":"path","schema":{"example":"6aa910e2-07b2-4f0e-a1ec-194e85c4f35b","type":"string"},"index$":0}],"security":[{"RapidApiKey":[]}],"securitySource":"definition","securitySchemes":{"RapidApiKey":{"type":"apiKey","in":"header","name":"x-rapidapi-key","description":"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let language_ref01_data = Object.values(setup.data.existing.language)[0] as any

    // LIST
    const language_ref01_ent = client.Language()
    const language_ref01_match: any = {}

    const language_ref01_list = (await language_ref01_ent.list(language_ref01_match)).map((e: any) => e.data())


    // LOAD
    const language_ref01_match_dt0: any = {}
    language_ref01_match_dt0.id = language_ref01_data.id
    const language_ref01_data_dt0 = (await language_ref01_ent.load(language_ref01_match_dt0)).data()
    assert(language_ref01_data_dt0.id === language_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/language/LanguageTestData.json')

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
    ['language01','language02','language03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CITY_AUTOCOMPLETE_TEST_LANGUAGE_ENTID': idmap,
    'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
    'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
    'CITY_AUTOCOMPLETE_APIKEY': '',
  })

  idmap = env['CITY_AUTOCOMPLETE_TEST_LANGUAGE_ENTID']

  const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_LANGUAGE_ENTID']
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
  
