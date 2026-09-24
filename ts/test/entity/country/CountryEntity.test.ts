

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"drivingSide":{"a":true,"h":"Driving Side","n":"drivingSide","r":true,"sh":"Driving side of the country","t":"`$STRING`","key$":"drivingSide","index$":0},"emoji":{"a":true,"h":"Emoji","n":"emoji","r":true,"sh":"Emoji of the country","t":"`$STRING`","key$":"emoji","index$":1},"headOfGovernment":{"a":true,"h":"Head Of Government","n":"headOfGovernment","r":true,"sh":"Head of government of the country","t":"`$STRING`","key$":"headOfGovernment","index$":2},"headOfState":{"a":true,"h":"Head Of State","n":"headOfState","r":true,"sh":"Head of state of the country","t":"`$STRING`","key$":"headOfState","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Country ID","t":"`$STRING`","key$":"id","index$":4},"isoCode":{"a":true,"h":"Iso Code","n":"isoCode","r":true,"sh":"ISO code of the country","t":"`$STRING`","key$":"isoCode","index$":5},"licencePlateCode":{"a":true,"h":"Licence Plate Code","n":"licencePlateCode","r":true,"sh":"Licence plate code of the country","t":"`$STRING`","key$":"licencePlateCode","index$":6},"localizedName":{"a":true,"h":"Localized Name","n":"localizedName","r":false,"sh":"Name in the first matched preferred language, falls back to name","t":"`$STRING`","key$":"localizedName","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the country","t":"`$STRING`","key$":"name","index$":8},"preferredLanguageId":{"a":true,"h":"Preferred Language Id","n":"preferredLanguageId","r":true,"sh":"Preferred language ID for the country","t":"`$STRING`","key$":"preferredLanguageId","index$":9},"regions":{"a":true,"h":"Regions","n":"regions","r":true,"sh":"Regions within the country","t":"`$ARRAY`","key$":"regions","index$":10},"telephoneCode":{"a":true,"h":"Telephone Code","n":"telephoneCode","r":true,"sh":"Telephone code of the country","t":"`$STRING`","key$":"telephoneCode","index$":11},"translations":{"a":true,"h":"Translations","n":"translations","r":true,"sh":"Country translations","t":"`$ARRAY`","key$":"translations","index$":12},"trunkPrefix":{"a":true,"h":"Trunk Prefix","n":"trunkPrefix","r":true,"sh":"Trunk prefix of the country","t":"`$STRING`","key$":"trunkPrefix","index$":13},"wikidataId":{"a":true,"h":"Wikidata Id","n":"wikidataId","r":true,"sh":"Wikidata ID","t":"`$STRING`","key$":"wikidataId","index$":14}},"id":{"field":"id","name":"id"},"name":"country","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /countries","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":200,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"ex":"Spa","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"ex":"fr,es,en","k":"query","n":"preferred_language","or":"preferred_language","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"+34","k":"query","n":"telephone_code","or":"telephone_code","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/countries","q":{"exist":["limit","name","offset","preferred_language","telephone_code"]},"r":{},"s":[{"lit":"countries"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /countries/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"509a2a0a-5ec6-483e-8381-4bea4422ac26","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/countries/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"countries"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"country","name__orig":"country","Name":"Country","name_":"country","name-":"country","NAME":"COUNTRY","index$":3}, {"active":true,"entity":"country","key$":"BasicCountryFlow","kind":"basic","name":"BasicCountryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"country_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"country_ref01","srcdatavar":"country_ref01_data","suffix":"_dt0"},"m":{"id":"country01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-country_ref01"}}],"index$":1}]}, 'Country', {"GET /countries":{"protocol":"http","operationId":"/","responses":{"200":{"description":"List of countries","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Country ID","example":"a1e06cc1-817c-429f-84f4-6ab51dac9bfa","key$":"id"},"wikidataId":{"type":"string","description":"Wikidata ID","example":"Q29","key$":"wikidataId"},"name":{"type":"string","description":"Name of the country","example":"Spain","key$":"name"},"localizedName":{"type":"string","description":"Name in the first matched preferred language, falls back to name","example":"España","key$":"localizedName"},"emoji":{"type":"string","description":"Emoji of the country","example":"🇪🇸","key$":"emoji"},"headOfState":{"type":"string","description":"Head of state of the country","example":"Felipe VI of Spain","key$":"headOfState"},"headOfGovernment":{"type":"string","description":"Head of government of the country","example":"Pedro Sánchez","key$":"headOfGovernment"},"isoCode":{"type":"string","description":"ISO code of the country","example":"ES","key$":"isoCode"},"telephoneCode":{"type":"string","description":"Telephone code of the country","example":"+34","key$":"telephoneCode"},"trunkPrefix":{"type":"string","description":"Trunk prefix of the country","example":"0","key$":"trunkPrefix"},"licencePlateCode":{"type":"string","description":"Licence plate code of the country","example":"E","key$":"licencePlateCode"},"drivingSide":{"type":"string","description":"Driving side of the country","example":"right","key$":"drivingSide"},"preferredLanguageId":{"type":"string","description":"Preferred language ID for the country","example":"a3d69219-5e64-4fef-a137-10bceb326e3d","key$":"preferredLanguageId"}},"required":["id","wikidataId","name","emoji","headOfState","headOfGovernment","isoCode","telephoneCode","trunkPrefix","licencePlateCode","drivingSide","preferredLanguageId"],"x-ref":"#/components/schemas/CountryDto","index$":0}}}}}},"parameters":[{"name":"limit","required":false,"in":"query","description":"Maximum number of results","schema":{"default":200,"example":200,"type":"number"},"index$":0},{"name":"offset","required":false,"in":"query","description":"Number of results to skip","schema":{"default":0,"example":0,"type":"number"},"index$":1},{"name":"telephoneCode","required":false,"in":"query","description":"Filter by telephone code","schema":{"example":"+34","type":"string"},"index$":2},{"name":"name","required":false,"in":"query","description":"Prefix search on country name (English and preferred-language translations)","schema":{"example":"Spa","type":"string"},"index$":3},{"name":"preferredLanguages","required":false,"in":"query","description":"Comma-separated language codes. Affects localizedName and translation name search.","schema":{"example":"fr,es,en","type":"string"},"index$":4}],"security":[{"RapidApiKey":[]}],"securitySource":"definition","securitySchemes":{"RapidApiKey":{"type":"apiKey","in":"header","name":"x-rapidapi-key","description":"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon"}}},"GET /countries/{id}":{"protocol":"http","operationId":":id","responses":{"200":{"description":"Extended country information","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"string","description":"Country ID","example":"a1e06cc1-817c-429f-84f4-6ab51dac9bfa","key$":"id"},"wikidataId":{"type":"string","description":"Wikidata ID","example":"Q29","key$":"wikidataId"},"name":{"type":"string","description":"Name of the country","example":"Spain","key$":"name"},"emoji":{"type":"string","description":"Emoji of the country","example":"🇪🇸","key$":"emoji"},"headOfState":{"type":"string","description":"Head of state of the country","example":"Felipe VI of Spain","key$":"headOfState"},"headOfGovernment":{"type":"string","description":"Head of government of the country","example":"Pedro Sánchez","key$":"headOfGovernment"},"isoCode":{"type":"string","description":"ISO code of the country","example":"ES","key$":"isoCode"},"telephoneCode":{"type":"string","description":"Telephone code of the country","example":"+34","key$":"telephoneCode"},"trunkPrefix":{"type":"string","description":"Trunk prefix of the country","example":"0","key$":"trunkPrefix"},"licencePlateCode":{"type":"string","description":"Licence plate code of the country","example":"E","key$":"licencePlateCode"},"drivingSide":{"type":"string","description":"Driving side of the country","example":"right","key$":"drivingSide"},"preferredLanguageId":{"type":"string","description":"Preferred language ID for the country","example":"a3d69219-5e64-4fef-a137-10bceb326e3d","key$":"preferredLanguageId"},"translations":{"description":"Country translations","type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Translation ID","example":"0230694f-5673-403d-a10d-716ee43ac702","key$":"id"},"countryId":{"type":"string","description":"Country ID","example":"a1e06cc1-817c-429f-84f4-6ab51dac9bfa","key$":"countryId"},"language":{"type":"string","description":"Language code","example":"diq","key$":"language"},"name":{"type":"string","description":"Translated name","example":"İspanya","key$":"name"},"nameNormalized":{"type":"string","description":"Normalized translated name","example":"ispanya","key$":"nameNormalized"}},"required":["id","countryId","language","name","nameNormalized"],"x-ref":"#/components/schemas/CountryTranslationDto"},"key$":"translations"},"regions":{"description":"Regions within the country","type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"UUID of the region","example":"dde1e1c6-ca22-48e6-8ad7-f97b141c1929","key$":"id"},"wikidataId":{"type":"string","description":"Wikidata ID","example":"Q5705","key$":"wikidataId"},"name":{"type":"string","description":"Name of the region","example":"Catalonia","key$":"name"},"countryId":{"type":"string","description":"Country ID the region belongs to","example":"a1e06cc1-817c-429f-84f4-6ab51dac9bfa","key$":"countryId"},"population":{"type":"number","description":"Population of the region","example":8034743,"key$":"population"},"code":{"type":"string","description":"Region code","example":"ES-CT","key$":"code"},"latitude":{"type":"number","description":"Latitude of the region center","example":41.85,"key$":"latitude"},"longitude":{"type":"number","description":"Longitude of the region center","example":1.566666666,"key$":"longitude"}},"required":["id","wikidataId","name","countryId","population","code","latitude","longitude"],"x-ref":"#/components/schemas/RegionDto"},"key$":"regions"}},"required":["id","wikidataId","name","emoji","headOfState","headOfGovernment","isoCode","telephoneCode","trunkPrefix","licencePlateCode","drivingSide","preferredLanguageId","translations","regions"],"x-ref":"#/components/schemas/CountryExtendedDto","index$":0}}}}},"parameters":[{"name":"id","required":true,"in":"path","schema":{"example":"509a2a0a-5ec6-483e-8381-4bea4422ac26","type":"string"},"index$":0}],"security":[{"RapidApiKey":[]}],"securitySource":"definition","securitySchemes":{"RapidApiKey":{"type":"apiKey","in":"header","name":"x-rapidapi-key","description":"RapidAPI key — get one at https://rapidapi.com/hom3chuk/api/geomelon"}}}})
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
  
