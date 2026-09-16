

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"citiesCount","req":true,"short":"Number of cities using this language","type":"`$NUMBER`","index$":0},{"active":true,"name":"id","req":true,"short":"UUID of the language","type":"`$STRING`","index$":1},{"active":true,"name":"isoCode","req":true,"short":"ISO code of the language","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":true,"short":"Name of the language","type":"`$STRING`","index$":3},{"active":true,"name":"wikidataId","req":true,"short":"Wikidata ID of the language","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"language","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":200,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$NUMBER`","index$":0},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$NUMBER`","index$":1}]},"contract":{"id":"GET /languages","json":"{\"operationId\":\"/\",\"parameters\":[{\"description\":\"Maximum number of results\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":200,\"example\":200,\"type\":\"number\"}},{\"description\":\"Number of results to skip\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"example\":0,\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"citiesCount\":{\"description\":\"Number of cities using this language\",\"example\":252088,\"type\":\"number\"},\"id\":{\"description\":\"UUID of the language\",\"example\":\"abbf9d44-2b77-464b-bca4-90026a66182c\",\"type\":\"string\"},\"isoCode\":{\"description\":\"ISO code of the language\",\"example\":\"tr\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the language\",\"example\":\"Turkish\",\"type\":\"string\"},\"wikidataId\":{\"description\":\"Wikidata ID of the language\",\"example\":\"Q256\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"isoCode\",\"citiesCount\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"List of languages\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/languages","segments":[{"lit":"languages"}],"select":{"exist":["limit","offset"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"6aa910e2-07b2-4f0e-a1ec-194e85c4f35b","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /languages/{id}","json":"{\"operationId\":\":id\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"6aa910e2-07b2-4f0e-a1ec-194e85c4f35b\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"citiesCount\":{\"description\":\"Number of cities using this language\",\"example\":252088,\"type\":\"number\"},\"id\":{\"description\":\"UUID of the language\",\"example\":\"abbf9d44-2b77-464b-bca4-90026a66182c\",\"type\":\"string\"},\"isoCode\":{\"description\":\"ISO code of the language\",\"example\":\"tr\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the language\",\"example\":\"Turkish\",\"type\":\"string\"},\"wikidataId\":{\"description\":\"Wikidata ID of the language\",\"example\":\"Q256\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"isoCode\",\"citiesCount\"],\"type\":\"object\"}}},\"description\":\"Language details\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/languages/{id}","segments":[{"lit":"languages"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"language","name__orig":"language","Name":"Language","name_":"language","name-":"language","NAME":"LANGUAGE","index$":6}, {"active":true,"entity":"language","key$":"BasicLanguageFlow","kind":"basic","name":"BasicLanguageFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"language_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"language_ref01","srcdatavar":"language_ref01_data","suffix":"_dt0"},"match":{"id":"language01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-language_ref01"}}],"index$":1}]}, 'Language')
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
  
