

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"area":{"a":true,"h":"Area","n":"area","r":false,"sh":"Area in km²","t":"`$NUMBER`","key$":"area","index$":0},"countryCode":{"a":true,"h":"Country Code","n":"countryCode","r":true,"sh":"ISO country code","t":"`$STRING`","key$":"countryCode","index$":1},"countryEmoji":{"a":true,"h":"Country Emoji","n":"countryEmoji","r":true,"sh":"Emoji flag of the country","t":"`$STRING`","key$":"countryEmoji","index$":2},"countryId":{"a":true,"h":"Country Id","n":"countryId","r":true,"sh":"UUID of the country","t":"`$STRING`","key$":"countryId","index$":3},"countryName":{"a":true,"h":"Country Name","n":"countryName","r":true,"sh":"Country name","t":"`$STRING`","key$":"countryName","index$":4},"countryTelephoneCode":{"a":true,"h":"Country Telephone Code","n":"countryTelephoneCode","r":false,"sh":"Telephone code of the country","t":"`$STRING`","key$":"countryTelephoneCode","index$":5},"dialingCode":{"a":true,"h":"Dialing Code","n":"dialingCode","r":false,"sh":"Dialing code","t":"`$STRING`","key$":"dialingCode","index$":6},"distanceKm":{"a":true,"h":"Distance Km","n":"distanceKm","r":false,"sh":"Distance from the given point in kilometers","t":"`$NUMBER`","key$":"distanceKm","index$":7},"elevation":{"a":true,"h":"Elevation","n":"elevation","r":false,"sh":"Elevation in meters","t":"`$NUMBER`","key$":"elevation","index$":8},"flagImage":{"a":true,"h":"Flag Image","n":"flagImage","r":false,"sh":"Flag image URL","t":"`$STRING`","key$":"flagImage","index$":9},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Geomelon UUID of the city","t":"`$STRING`","key$":"id","index$":10},"latitude":{"a":true,"h":"Latitude","n":"latitude","r":false,"sh":"Latitude coordinate","t":"`$NUMBER`","key$":"latitude","index$":11},"localizedName":{"a":true,"h":"Localized Name","n":"localizedName","r":true,"sh":"Localized name according to preferred languages","t":"`$STRING`","key$":"localizedName","index$":12},"longitude":{"a":true,"h":"Longitude","n":"longitude","r":false,"sh":"Longitude coordinate","t":"`$NUMBER`","key$":"longitude","index$":13},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"City name","t":"`$STRING`","key$":"name","index$":14},"normalizedName":{"a":true,"h":"Normalized Name","n":"normalizedName","r":true,"sh":"Normalized city name","t":"`$STRING`","key$":"normalizedName","index$":15},"officialWebsite":{"a":true,"h":"Official Website","n":"officialWebsite","r":false,"sh":"Official website URL","t":"`$STRING`","key$":"officialWebsite","index$":16},"population":{"a":true,"h":"Population","n":"population","r":false,"sh":"Population of the city","t":"`$NUMBER`","key$":"population","index$":17},"postalCode":{"a":true,"h":"Postal Code","n":"postalCode","r":false,"sh":"Postal code","t":"`$STRING`","key$":"postalCode","index$":18},"regionCode":{"a":true,"h":"Region Code","n":"regionCode","r":true,"sh":"Region code","t":"`$STRING`","key$":"regionCode","index$":19},"regionId":{"a":true,"h":"Region Id","n":"regionId","r":true,"sh":"UUID of the region","t":"`$STRING`","key$":"regionId","index$":20},"regionName":{"a":true,"h":"Region Name","n":"regionName","r":true,"sh":"Region name","t":"`$STRING`","key$":"regionName","index$":21},"timeZone":{"a":true,"h":"Time Zone","n":"timeZone","r":false,"sh":"Time zone","t":"`$STRING`","key$":"timeZone","index$":22},"translations":{"a":true,"h":"Translations","n":"translations","r":true,"sh":"Translations of the city name in requested languages","t":"`$ARRAY`","key$":"translations","index$":23},"wikidataId":{"a":true,"h":"Wikidata Id","n":"wikidataId","r":true,"sh":"Wikidata ID of the city","t":"`$STRING`","key$":"wikidataId","index$":24}},"id":{"field":"id","name":"id"},"name":"city_dto","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /cities/search","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"us","k":"query","n":"country_code","or":"countryCode","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"max_population","or":"maxPopulation","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"k":"query","n":"min_population","or":"minPopulation","r":false,"t":"`$NUMBER`","index$":3},{"a":true,"ex":"dallas","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"ex":"en,fr,ja,hi","k":"query","n":"preferred_language","or":"preferredLanguages","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"region_id","or":"regionId","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":"population_desc","k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/cities/search","q":{"exist":["country_code","limit","max_population","min_population","name","offset","preferred_language","region_id","sort"]},"r":{},"s":[{"lit":"cities"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /cities/byCoordinates/closest","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"lat","or":"lat","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"k":"query","n":"lon","or":"lon","r":true,"t":"`$NUMBER`","index$":1},{"a":true,"ex":"en","k":"query","n":"preferred_language","or":"preferredLanguages","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/cities/byCoordinates/closest","q":{"exist":["lat","lon","preferred_language"]},"r":{},"s":[{"lit":"cities"},{"lit":"byCoordinates"},{"lit":"closest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /cities/byCoordinates/largest","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"lat","or":"lat","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"k":"query","n":"lon","or":"lon","r":true,"t":"`$NUMBER`","index$":1},{"a":true,"ex":"en","k":"query","n":"preferred_language","or":"preferredLanguages","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/cities/byCoordinates/largest","q":{"exist":["lat","lon","preferred_language"]},"r":{},"s":[{"lit":"cities"},{"lit":"byCoordinates"},{"lit":"largest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"city_dto","name__orig":"city_dto","Name":"CityDto","name_":"city_dto","name-":"city-dto","NAME":"CITY_DTO","index$":1}, {"active":true,"entity":"city_dto","key$":"BasicCityDtoFlow","kind":"basic","name":"BasicCityDtoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"city_dto_ref01"}}],"index$":0}]}, 'CityDto', {"GET /cities/search":{"protocol":"http","parameters":[{"name":"sort","required":false,"in":"query","schema":{"example":"population_desc","type":"string"},"index$":0},{"name":"offset","required":false,"in":"query","schema":{"default":0,"type":"number"},"index$":1},{"name":"limit","required":false,"in":"query","schema":{"default":20,"type":"number"},"index$":2},{"name":"preferredLanguages","required":false,"in":"query","schema":{"default":"en,fr,ja,hi","type":"string"},"index$":3},{"name":"name","required":false,"in":"query","schema":{"example":"dallas","type":"string"},"index$":4},{"name":"maxPopulation","required":false,"in":"query","schema":{"type":"number"},"index$":5},{"name":"minPopulation","required":false,"in":"query","schema":{"type":"number"},"index$":6},{"name":"regionId","required":false,"in":"query","schema":{"type":"string"},"index$":7},{"name":"countryCode","required":false,"in":"query","schema":{"example":"us","type":"string"},"index$":8}]},"GET /cities/byCoordinates/closest":{"protocol":"http","parameters":[{"name":"preferredLanguages","required":false,"in":"query","schema":{"default":"en","type":"string"},"index$":0},{"name":"lon","required":true,"in":"query","schema":{"type":"number"},"index$":1},{"name":"lat","required":true,"in":"query","schema":{"type":"number"},"index$":2}]},"GET /cities/byCoordinates/largest":{"protocol":"http","parameters":[{"name":"preferredLanguages","required":false,"in":"query","schema":{"default":"en","type":"string"},"index$":0},{"name":"lon","required":true,"in":"query","schema":{"type":"number"},"index$":1},{"name":"lat","required":true,"in":"query","schema":{"type":"number"},"index$":2}]}})
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
  
