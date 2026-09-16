

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


describe('CountryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CITY_AUTOCOMPLETE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CityAutocompleteSDK.test()
    const ent = testsdk.Country()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'country.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"drivingSide","req":true,"short":"Driving side of the country","type":"`$STRING`","index$":0},{"active":true,"name":"emoji","req":true,"short":"Emoji of the country","type":"`$STRING`","index$":1},{"active":true,"name":"headOfGovernment","req":true,"short":"Head of government of the country","type":"`$STRING`","index$":2},{"active":true,"name":"headOfState","req":true,"short":"Head of state of the country","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":true,"short":"Country ID","type":"`$STRING`","index$":4},{"active":true,"name":"isoCode","req":true,"short":"ISO code of the country","type":"`$STRING`","index$":5},{"active":true,"name":"licencePlateCode","req":true,"short":"Licence plate code of the country","type":"`$STRING`","index$":6},{"active":true,"name":"localizedName","req":false,"short":"Name in the first matched preferred language, falls back to name","type":"`$STRING`","index$":7},{"active":true,"name":"name","req":true,"short":"Name of the country","type":"`$STRING`","index$":8},{"active":true,"name":"preferredLanguageId","req":true,"short":"Preferred language ID for the country","type":"`$STRING`","index$":9},{"active":true,"name":"regions","req":true,"short":"Regions within the country","type":"`$ARRAY`","index$":10},{"active":true,"name":"telephoneCode","req":true,"short":"Telephone code of the country","type":"`$STRING`","index$":11},{"active":true,"name":"translations","req":true,"short":"Country translations","type":"`$ARRAY`","index$":12},{"active":true,"name":"trunkPrefix","req":true,"short":"Trunk prefix of the country","type":"`$STRING`","index$":13},{"active":true,"name":"wikidataId","req":true,"short":"Wikidata ID","type":"`$STRING`","index$":14}],"id":{"field":"id","name":"id"},"name":"country","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":200,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$NUMBER`","index$":0},{"active":true,"example":"Spa","kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$NUMBER`","index$":2},{"active":true,"example":"fr,es,en","kind":"query","name":"preferred_language","orig":"preferred_language","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"+34","kind":"query","name":"telephone_code","orig":"telephone_code","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /countries","json":"{\"operationId\":\"/\",\"parameters\":[{\"description\":\"Maximum number of results\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":200,\"example\":200,\"type\":\"number\"}},{\"description\":\"Number of results to skip\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"example\":0,\"type\":\"number\"}},{\"description\":\"Filter by telephone code\",\"in\":\"query\",\"name\":\"telephoneCode\",\"required\":false,\"schema\":{\"example\":\"+34\",\"type\":\"string\"}},{\"description\":\"Prefix search on country name (English and preferred-language translations)\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"example\":\"Spa\",\"type\":\"string\"}},{\"description\":\"Comma-separated language codes. Affects localizedName and translation name search.\",\"in\":\"query\",\"name\":\"preferredLanguages\",\"required\":false,\"schema\":{\"example\":\"fr,es,en\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"drivingSide\":{\"description\":\"Driving side of the country\",\"example\":\"right\",\"type\":\"string\"},\"emoji\":{\"description\":\"Emoji of the country\",\"example\":\"🇪🇸\",\"type\":\"string\"},\"headOfGovernment\":{\"description\":\"Head of government of the country\",\"example\":\"Pedro Sánchez\",\"type\":\"string\"},\"headOfState\":{\"description\":\"Head of state of the country\",\"example\":\"Felipe VI of Spain\",\"type\":\"string\"},\"id\":{\"description\":\"Country ID\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"isoCode\":{\"description\":\"ISO code of the country\",\"example\":\"ES\",\"type\":\"string\"},\"licencePlateCode\":{\"description\":\"Licence plate code of the country\",\"example\":\"E\",\"type\":\"string\"},\"localizedName\":{\"description\":\"Name in the first matched preferred language, falls back to name\",\"example\":\"España\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the country\",\"example\":\"Spain\",\"type\":\"string\"},\"preferredLanguageId\":{\"description\":\"Preferred language ID for the country\",\"example\":\"a3d69219-5e64-4fef-a137-10bceb326e3d\",\"type\":\"string\"},\"telephoneCode\":{\"description\":\"Telephone code of the country\",\"example\":\"+34\",\"type\":\"string\"},\"trunkPrefix\":{\"description\":\"Trunk prefix of the country\",\"example\":\"0\",\"type\":\"string\"},\"wikidataId\":{\"description\":\"Wikidata ID\",\"example\":\"Q29\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"emoji\",\"headOfState\",\"headOfGovernment\",\"isoCode\",\"telephoneCode\",\"trunkPrefix\",\"licencePlateCode\",\"drivingSide\",\"preferredLanguageId\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"List of countries\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/countries","segments":[{"lit":"countries"}],"select":{"exist":["limit","name","offset","preferred_language","telephone_code"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"509a2a0a-5ec6-483e-8381-4bea4422ac26","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /countries/{id}","json":"{\"operationId\":\":id\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"509a2a0a-5ec6-483e-8381-4bea4422ac26\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"drivingSide\":{\"description\":\"Driving side of the country\",\"example\":\"right\",\"type\":\"string\"},\"emoji\":{\"description\":\"Emoji of the country\",\"example\":\"🇪🇸\",\"type\":\"string\"},\"headOfGovernment\":{\"description\":\"Head of government of the country\",\"example\":\"Pedro Sánchez\",\"type\":\"string\"},\"headOfState\":{\"description\":\"Head of state of the country\",\"example\":\"Felipe VI of Spain\",\"type\":\"string\"},\"id\":{\"description\":\"Country ID\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"isoCode\":{\"description\":\"ISO code of the country\",\"example\":\"ES\",\"type\":\"string\"},\"licencePlateCode\":{\"description\":\"Licence plate code of the country\",\"example\":\"E\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the country\",\"example\":\"Spain\",\"type\":\"string\"},\"preferredLanguageId\":{\"description\":\"Preferred language ID for the country\",\"example\":\"a3d69219-5e64-4fef-a137-10bceb326e3d\",\"type\":\"string\"},\"regions\":{\"description\":\"Regions within the country\",\"items\":{\"properties\":{\"code\":{\"description\":\"Region code\",\"example\":\"ES-CT\",\"type\":\"string\"},\"countryId\":{\"description\":\"Country ID the region belongs to\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"id\":{\"description\":\"UUID of the region\",\"example\":\"dde1e1c6-ca22-48e6-8ad7-f97b141c1929\",\"type\":\"string\"},\"latitude\":{\"description\":\"Latitude of the region center\",\"example\":41.85,\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude of the region center\",\"example\":1.566666666,\"type\":\"number\"},\"name\":{\"description\":\"Name of the region\",\"example\":\"Catalonia\",\"type\":\"string\"},\"population\":{\"description\":\"Population of the region\",\"example\":8034743,\"type\":\"number\"},\"wikidataId\":{\"description\":\"Wikidata ID\",\"example\":\"Q5705\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"countryId\",\"population\",\"code\",\"latitude\",\"longitude\"],\"type\":\"object\"},\"type\":\"array\"},\"telephoneCode\":{\"description\":\"Telephone code of the country\",\"example\":\"+34\",\"type\":\"string\"},\"translations\":{\"description\":\"Country translations\",\"items\":{\"properties\":{\"countryId\":{\"description\":\"Country ID\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"id\":{\"description\":\"Translation ID\",\"example\":\"0230694f-5673-403d-a10d-716ee43ac702\",\"type\":\"string\"},\"language\":{\"description\":\"Language code\",\"example\":\"diq\",\"type\":\"string\"},\"name\":{\"description\":\"Translated name\",\"example\":\"İspanya\",\"type\":\"string\"},\"nameNormalized\":{\"description\":\"Normalized translated name\",\"example\":\"ispanya\",\"type\":\"string\"}},\"required\":[\"id\",\"countryId\",\"language\",\"name\",\"nameNormalized\"],\"type\":\"object\"},\"type\":\"array\"},\"trunkPrefix\":{\"description\":\"Trunk prefix of the country\",\"example\":\"0\",\"type\":\"string\"},\"wikidataId\":{\"description\":\"Wikidata ID\",\"example\":\"Q29\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"emoji\",\"headOfState\",\"headOfGovernment\",\"isoCode\",\"telephoneCode\",\"trunkPrefix\",\"licencePlateCode\",\"drivingSide\",\"preferredLanguageId\",\"translations\",\"regions\"],\"type\":\"object\"}}},\"description\":\"Extended country information\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/countries/{id}","segments":[{"lit":"countries"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"country","name__orig":"country","Name":"Country","name_":"country","name-":"country","NAME":"COUNTRY","index$":3}, {"active":true,"entity":"country","key$":"BasicCountryFlow","kind":"basic","name":"BasicCountryFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"country_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"country_ref01","srcdatavar":"country_ref01_data","suffix":"_dt0"},"match":{"id":"country01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-country_ref01"}}],"index$":1}]}, 'Country')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let country_ref01_data = Object.values(setup.data.existing.country)[0] as any

    // LIST
    const country_ref01_ent = client.Country()
    const country_ref01_match: any = {}

    const country_ref01_list = (await country_ref01_ent.list(country_ref01_match)).map((e: any) => e.data())


    // LOAD
    const country_ref01_match_dt0: any = {}
    country_ref01_match_dt0.id = country_ref01_data.id
    const country_ref01_data_dt0 = (await country_ref01_ent.load(country_ref01_match_dt0)).data()
    assert(country_ref01_data_dt0.id === country_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/country/CountryTestData.json')

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
    ['country01','country02','country03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CITY_AUTOCOMPLETE_TEST_COUNTRY_ENTID': idmap,
    'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
    'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
    'CITY_AUTOCOMPLETE_APIKEY': '',
  })

  idmap = env['CITY_AUTOCOMPLETE_TEST_COUNTRY_ENTID']

  const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_COUNTRY_ENTID']
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
  
