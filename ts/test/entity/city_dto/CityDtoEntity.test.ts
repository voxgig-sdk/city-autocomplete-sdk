

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


describe('CityDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CITY_AUTOCOMPLETE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CITY_AUTOCOMPLETE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CityAutocompleteSDK.test()
    const ent = testsdk.CityDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CITY_AUTOCOMPLETE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'city_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"area","req":false,"short":"Area in km²","type":"`$NUMBER`","index$":0},{"active":true,"name":"countryCode","req":true,"short":"ISO country code","type":"`$STRING`","index$":1},{"active":true,"name":"countryEmoji","req":true,"short":"Emoji flag of the country","type":"`$STRING`","index$":2},{"active":true,"name":"countryId","req":true,"short":"UUID of the country","type":"`$STRING`","index$":3},{"active":true,"name":"countryName","req":true,"short":"Country name","type":"`$STRING`","index$":4},{"active":true,"name":"countryTelephoneCode","req":false,"short":"Telephone code of the country","type":"`$STRING`","index$":5},{"active":true,"name":"dialingCode","req":false,"short":"Dialing code","type":"`$STRING`","index$":6},{"active":true,"name":"distanceKm","req":false,"short":"Distance from the given point in kilometers","type":"`$NUMBER`","index$":7},{"active":true,"name":"elevation","req":false,"short":"Elevation in meters","type":"`$NUMBER`","index$":8},{"active":true,"name":"flagImage","req":false,"short":"Flag image URL","type":"`$STRING`","index$":9},{"active":true,"name":"id","req":true,"short":"Geomelon UUID of the city","type":"`$STRING`","index$":10},{"active":true,"name":"latitude","req":false,"short":"Latitude coordinate","type":"`$NUMBER`","index$":11},{"active":true,"name":"localizedName","req":true,"short":"Localized name according to preferred languages","type":"`$STRING`","index$":12},{"active":true,"name":"longitude","req":false,"short":"Longitude coordinate","type":"`$NUMBER`","index$":13},{"active":true,"name":"name","req":true,"short":"City name","type":"`$STRING`","index$":14},{"active":true,"name":"normalizedName","req":true,"short":"Normalized city name","type":"`$STRING`","index$":15},{"active":true,"name":"officialWebsite","req":false,"short":"Official website URL","type":"`$STRING`","index$":16},{"active":true,"name":"population","req":false,"short":"Population of the city","type":"`$NUMBER`","index$":17},{"active":true,"name":"postalCode","req":false,"short":"Postal code","type":"`$STRING`","index$":18},{"active":true,"name":"regionCode","req":true,"short":"Region code","type":"`$STRING`","index$":19},{"active":true,"name":"regionId","req":true,"short":"UUID of the region","type":"`$STRING`","index$":20},{"active":true,"name":"regionName","req":true,"short":"Region name","type":"`$STRING`","index$":21},{"active":true,"name":"timeZone","req":false,"short":"Time zone","type":"`$STRING`","index$":22},{"active":true,"name":"translations","req":true,"short":"Translations of the city name in requested languages","type":"`$ARRAY`","index$":23},{"active":true,"name":"wikidataId","req":true,"short":"Wikidata ID of the city","type":"`$STRING`","index$":24}],"id":{"field":"id","name":"id"},"name":"city_dto","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"us","kind":"query","name":"country_code","orig":"country_code","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":20,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$NUMBER`","index$":1},{"active":true,"kind":"query","name":"max_population","orig":"max_population","reqd":false,"type":"`$NUMBER`","index$":2},{"active":true,"kind":"query","name":"min_population","orig":"min_population","reqd":false,"type":"`$NUMBER`","index$":3},{"active":true,"example":"dallas","kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$NUMBER`","index$":5},{"active":true,"example":"en,fr,ja,hi","kind":"query","name":"preferred_language","orig":"preferred_language","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"region_id","orig":"region_id","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"example":"population_desc","kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":8}]},"contract":{"id":"GET /cities/search","json":"{\"operationId\":\"search\",\"parameters\":[{\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"example\":\"population_desc\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"number\"}},{\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"type\":\"number\"}},{\"in\":\"query\",\"name\":\"preferredLanguages\",\"required\":false,\"schema\":{\"default\":\"en,fr,ja,hi\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"example\":\"dallas\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"maxPopulation\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"in\":\"query\",\"name\":\"minPopulation\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"in\":\"query\",\"name\":\"regionId\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"countryCode\",\"required\":false,\"schema\":{\"example\":\"us\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"area\":{\"description\":\"Area in km²\",\"example\":101.3,\"type\":\"number\"},\"countryCode\":{\"description\":\"ISO country code\",\"example\":\"ES\",\"type\":\"string\"},\"countryEmoji\":{\"description\":\"Emoji flag of the country\",\"example\":\"🇪🇸\",\"type\":\"string\"},\"countryId\":{\"description\":\"UUID of the country\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"countryName\":{\"description\":\"Country name\",\"example\":\"Spain\",\"type\":\"string\"},\"countryTelephoneCode\":{\"description\":\"Telephone code of the country\",\"example\":\"+34\",\"type\":\"string\"},\"dialingCode\":{\"description\":\"Dialing code\",\"example\":\"93\",\"type\":\"string\"},\"distanceKm\":{\"description\":\"Distance from the given point in kilometers\",\"example\":12.5,\"type\":\"number\"},\"elevation\":{\"description\":\"Elevation in meters\",\"example\":9,\"type\":\"number\"},\"flagImage\":{\"description\":\"Flag image URL\",\"example\":\"http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Barcelona.svg\",\"type\":\"string\"},\"id\":{\"description\":\"Geomelon UUID of the city\",\"example\":\"964512d1-f150-4876-87ec-0ba47aef694a\",\"type\":\"string\"},\"latitude\":{\"description\":\"Latitude coordinate\",\"example\":41.3825,\"type\":\"number\"},\"localizedName\":{\"description\":\"Localized name according to preferred languages\",\"example\":\"Q1492\",\"type\":\"string\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"example\":2.176944444,\"type\":\"number\"},\"name\":{\"description\":\"City name\",\"example\":\"Barcelona\",\"type\":\"string\"},\"normalizedName\":{\"description\":\"Normalized city name\",\"example\":\"barcelona\",\"type\":\"string\"},\"officialWebsite\":{\"description\":\"Official website URL\",\"example\":\"https://www.barcelona.cat\",\"type\":\"string\"},\"population\":{\"description\":\"Population of the city\",\"example\":1702547,\"type\":\"number\"},\"postalCode\":{\"description\":\"Postal code\",\"example\":\"08001–08042\",\"type\":\"string\"},\"regionCode\":{\"description\":\"Region code\",\"example\":\"ES-CT\",\"type\":\"string\"},\"regionId\":{\"description\":\"UUID of the region\",\"example\":\"dde1e1c6-ca22-48e6-8ad7-f97b141c1929\",\"type\":\"string\"},\"regionName\":{\"description\":\"Region name\",\"example\":\"Catalonia\",\"type\":\"string\"},\"timeZone\":{\"description\":\"Time zone\",\"example\":\"UTC+01:00\",\"type\":\"string\"},\"translations\":{\"description\":\"Translations of the city name in requested languages\",\"example\":[{\"language\":\"en\",\"name\":\"Barcelona\"},{\"language\":\"ja\",\"name\":\"バルセロナ\"}],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"wikidataId\":{\"description\":\"Wikidata ID of the city\",\"example\":\"Q1492\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"localizedName\",\"normalizedName\",\"translations\",\"countryId\",\"countryName\",\"countryCode\",\"countryEmoji\",\"regionName\",\"regionCode\",\"regionId\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"List of cities\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cities/search","segments":[{"lit":"cities"},{"lit":"search"}],"select":{"exist":["country_code","limit","max_population","min_population","name","offset","preferred_language","region_id","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"lat","orig":"lat","reqd":true,"type":"`$NUMBER`","index$":0},{"active":true,"kind":"query","name":"lon","orig":"lon","reqd":true,"type":"`$NUMBER`","index$":1},{"active":true,"example":"en","kind":"query","name":"preferred_language","orig":"preferred_language","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /cities/byCoordinates/closest","json":"{\"operationId\":\"byCoordinates/closest\",\"parameters\":[{\"in\":\"query\",\"name\":\"preferredLanguages\",\"required\":false,\"schema\":{\"default\":\"en\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"lon\",\"required\":true,\"schema\":{\"type\":\"number\"}},{\"in\":\"query\",\"name\":\"lat\",\"required\":true,\"schema\":{\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"area\":{\"description\":\"Area in km²\",\"example\":101.3,\"type\":\"number\"},\"countryCode\":{\"description\":\"ISO country code\",\"example\":\"ES\",\"type\":\"string\"},\"countryEmoji\":{\"description\":\"Emoji flag of the country\",\"example\":\"🇪🇸\",\"type\":\"string\"},\"countryId\":{\"description\":\"UUID of the country\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"countryName\":{\"description\":\"Country name\",\"example\":\"Spain\",\"type\":\"string\"},\"countryTelephoneCode\":{\"description\":\"Telephone code of the country\",\"example\":\"+34\",\"type\":\"string\"},\"dialingCode\":{\"description\":\"Dialing code\",\"example\":\"93\",\"type\":\"string\"},\"distanceKm\":{\"description\":\"Distance from the given point in kilometers\",\"example\":12.5,\"type\":\"number\"},\"elevation\":{\"description\":\"Elevation in meters\",\"example\":9,\"type\":\"number\"},\"flagImage\":{\"description\":\"Flag image URL\",\"example\":\"http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Barcelona.svg\",\"type\":\"string\"},\"id\":{\"description\":\"Geomelon UUID of the city\",\"example\":\"964512d1-f150-4876-87ec-0ba47aef694a\",\"type\":\"string\"},\"latitude\":{\"description\":\"Latitude coordinate\",\"example\":41.3825,\"type\":\"number\"},\"localizedName\":{\"description\":\"Localized name according to preferred languages\",\"example\":\"Q1492\",\"type\":\"string\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"example\":2.176944444,\"type\":\"number\"},\"name\":{\"description\":\"City name\",\"example\":\"Barcelona\",\"type\":\"string\"},\"normalizedName\":{\"description\":\"Normalized city name\",\"example\":\"barcelona\",\"type\":\"string\"},\"officialWebsite\":{\"description\":\"Official website URL\",\"example\":\"https://www.barcelona.cat\",\"type\":\"string\"},\"population\":{\"description\":\"Population of the city\",\"example\":1702547,\"type\":\"number\"},\"postalCode\":{\"description\":\"Postal code\",\"example\":\"08001–08042\",\"type\":\"string\"},\"regionCode\":{\"description\":\"Region code\",\"example\":\"ES-CT\",\"type\":\"string\"},\"regionId\":{\"description\":\"UUID of the region\",\"example\":\"dde1e1c6-ca22-48e6-8ad7-f97b141c1929\",\"type\":\"string\"},\"regionName\":{\"description\":\"Region name\",\"example\":\"Catalonia\",\"type\":\"string\"},\"timeZone\":{\"description\":\"Time zone\",\"example\":\"UTC+01:00\",\"type\":\"string\"},\"translations\":{\"description\":\"Translations of the city name in requested languages\",\"example\":[{\"language\":\"en\",\"name\":\"Barcelona\"},{\"language\":\"ja\",\"name\":\"バルセロナ\"}],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"wikidataId\":{\"description\":\"Wikidata ID of the city\",\"example\":\"Q1492\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"localizedName\",\"normalizedName\",\"translations\",\"countryId\",\"countryName\",\"countryCode\",\"countryEmoji\",\"regionName\",\"regionCode\",\"regionId\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Closest cities at lat/lon\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cities/byCoordinates/closest","segments":[{"lit":"cities"},{"lit":"byCoordinates"},{"lit":"closest"}],"select":{"exist":["lat","lon","preferred_language"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"lat","orig":"lat","reqd":true,"type":"`$NUMBER`","index$":0},{"active":true,"kind":"query","name":"lon","orig":"lon","reqd":true,"type":"`$NUMBER`","index$":1},{"active":true,"example":"en","kind":"query","name":"preferred_language","orig":"preferred_language","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /cities/byCoordinates/largest","json":"{\"operationId\":\"byCoordinates/largest\",\"parameters\":[{\"in\":\"query\",\"name\":\"preferredLanguages\",\"required\":false,\"schema\":{\"default\":\"en\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"lon\",\"required\":true,\"schema\":{\"type\":\"number\"}},{\"in\":\"query\",\"name\":\"lat\",\"required\":true,\"schema\":{\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"area\":{\"description\":\"Area in km²\",\"example\":101.3,\"type\":\"number\"},\"countryCode\":{\"description\":\"ISO country code\",\"example\":\"ES\",\"type\":\"string\"},\"countryEmoji\":{\"description\":\"Emoji flag of the country\",\"example\":\"🇪🇸\",\"type\":\"string\"},\"countryId\":{\"description\":\"UUID of the country\",\"example\":\"a1e06cc1-817c-429f-84f4-6ab51dac9bfa\",\"type\":\"string\"},\"countryName\":{\"description\":\"Country name\",\"example\":\"Spain\",\"type\":\"string\"},\"countryTelephoneCode\":{\"description\":\"Telephone code of the country\",\"example\":\"+34\",\"type\":\"string\"},\"dialingCode\":{\"description\":\"Dialing code\",\"example\":\"93\",\"type\":\"string\"},\"distanceKm\":{\"description\":\"Distance from the given point in kilometers\",\"example\":12.5,\"type\":\"number\"},\"elevation\":{\"description\":\"Elevation in meters\",\"example\":9,\"type\":\"number\"},\"flagImage\":{\"description\":\"Flag image URL\",\"example\":\"http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Barcelona.svg\",\"type\":\"string\"},\"id\":{\"description\":\"Geomelon UUID of the city\",\"example\":\"964512d1-f150-4876-87ec-0ba47aef694a\",\"type\":\"string\"},\"latitude\":{\"description\":\"Latitude coordinate\",\"example\":41.3825,\"type\":\"number\"},\"localizedName\":{\"description\":\"Localized name according to preferred languages\",\"example\":\"Q1492\",\"type\":\"string\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"example\":2.176944444,\"type\":\"number\"},\"name\":{\"description\":\"City name\",\"example\":\"Barcelona\",\"type\":\"string\"},\"normalizedName\":{\"description\":\"Normalized city name\",\"example\":\"barcelona\",\"type\":\"string\"},\"officialWebsite\":{\"description\":\"Official website URL\",\"example\":\"https://www.barcelona.cat\",\"type\":\"string\"},\"population\":{\"description\":\"Population of the city\",\"example\":1702547,\"type\":\"number\"},\"postalCode\":{\"description\":\"Postal code\",\"example\":\"08001–08042\",\"type\":\"string\"},\"regionCode\":{\"description\":\"Region code\",\"example\":\"ES-CT\",\"type\":\"string\"},\"regionId\":{\"description\":\"UUID of the region\",\"example\":\"dde1e1c6-ca22-48e6-8ad7-f97b141c1929\",\"type\":\"string\"},\"regionName\":{\"description\":\"Region name\",\"example\":\"Catalonia\",\"type\":\"string\"},\"timeZone\":{\"description\":\"Time zone\",\"example\":\"UTC+01:00\",\"type\":\"string\"},\"translations\":{\"description\":\"Translations of the city name in requested languages\",\"example\":[{\"language\":\"en\",\"name\":\"Barcelona\"},{\"language\":\"ja\",\"name\":\"バルセロナ\"}],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"wikidataId\":{\"description\":\"Wikidata ID of the city\",\"example\":\"Q1492\",\"type\":\"string\"}},\"required\":[\"id\",\"wikidataId\",\"name\",\"localizedName\",\"normalizedName\",\"translations\",\"countryId\",\"countryName\",\"countryCode\",\"countryEmoji\",\"regionName\",\"regionCode\",\"regionId\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Most populated cities nearby\"}},\"security\":[{\"RapidApiKey\":[]}],\"securitySchemes\":{\"RapidApiKey\":{\"description\":\"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon\",\"in\":\"header\",\"name\":\"x-rapidapi-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cities/byCoordinates/largest","segments":[{"lit":"cities"},{"lit":"byCoordinates"},{"lit":"largest"}],"select":{"exist":["lat","lon","preferred_language"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"city_dto","name__orig":"city_dto","Name":"CityDto","name_":"city_dto","name-":"city-dto","NAME":"CITY_DTO","index$":1}, {"active":true,"entity":"city_dto","key$":"BasicCityDtoFlow","kind":"basic","name":"BasicCityDtoFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"city_dto_ref01"}}],"index$":0}]}, 'CityDto')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let city_dto_ref01_data = Object.values(setup.data.existing.city_dto)[0] as any

    // LIST
    const city_dto_ref01_ent = client.CityDto()
    const city_dto_ref01_match: any = {}

    const city_dto_ref01_list = (await city_dto_ref01_ent.list(city_dto_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/city_dto/CityDtoTestData.json')

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
    ['city_dto01','city_dto02','city_dto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CITY_AUTOCOMPLETE_TEST_CITY_DTO_ENTID': idmap,
    'CITY_AUTOCOMPLETE_TEST_LIVE': 'FALSE',
    'CITY_AUTOCOMPLETE_TEST_EXPLAIN': 'FALSE',
    'CITY_AUTOCOMPLETE_APIKEY': '',
  })

  idmap = env['CITY_AUTOCOMPLETE_TEST_CITY_DTO_ENTID']

  const live = 'TRUE' === env.CITY_AUTOCOMPLETE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CITY_AUTOCOMPLETE_TEST_CITY_DTO_ENTID']
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
  
