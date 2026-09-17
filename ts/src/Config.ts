
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'CityAutocomplete',
        slug: "city-autocomplete",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://geomelon.p.rapidapi.com",

    auth: {
      prefix: '',
      name: 'x-rapidapi-key',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        city: {
        },
  
        city_dto: {
        },
  
        city_translation_dto: {
        },
  
        country: {
        },
  
        country_translation_dto: {
        },
  
        distance: {
        },
  
        language: {
        },
  
        oneshot: {
        },
  
        region: {
        },
  
        region_translation_dto: {
        },
  
        settlement_type: {
        },
  
    }
  }


  entity = {
    "city": {
      "fields": [
        {
          "name": "area",
          "short": "Area in km²",
          "type": "`$NUMBER`"
        },
        {
          "name": "countryCode",
          "req": true,
          "short": "ISO country code",
          "type": "`$STRING`"
        },
        {
          "name": "countryEmoji",
          "req": true,
          "short": "Emoji flag of the country",
          "type": "`$STRING`"
        },
        {
          "name": "countryId",
          "req": true,
          "short": "UUID of the country",
          "type": "`$STRING`"
        },
        {
          "name": "countryName",
          "req": true,
          "short": "Country name",
          "type": "`$STRING`"
        },
        {
          "name": "countryTelephoneCode",
          "short": "Telephone code of the country",
          "type": "`$STRING`"
        },
        {
          "name": "dialingCode",
          "short": "Dialing code",
          "type": "`$STRING`"
        },
        {
          "name": "distanceKm",
          "short": "Distance from the given point in kilometers",
          "type": "`$NUMBER`"
        },
        {
          "name": "elevation",
          "short": "Elevation in meters",
          "type": "`$NUMBER`"
        },
        {
          "name": "flagImage",
          "short": "Flag image URL",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Geomelon UUID of the city",
          "type": "`$STRING`"
        },
        {
          "name": "latitude",
          "short": "Latitude coordinate",
          "type": "`$NUMBER`"
        },
        {
          "name": "localizedName",
          "req": true,
          "short": "Localized name according to preferred languages",
          "type": "`$STRING`"
        },
        {
          "name": "longitude",
          "short": "Longitude coordinate",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "req": true,
          "short": "City name",
          "type": "`$STRING`"
        },
        {
          "name": "normalizedName",
          "req": true,
          "short": "Normalized city name",
          "type": "`$STRING`"
        },
        {
          "name": "officialWebsite",
          "short": "Official website URL",
          "type": "`$STRING`"
        },
        {
          "name": "population",
          "short": "Population of the city",
          "type": "`$NUMBER`"
        },
        {
          "name": "postalCode",
          "short": "Postal code",
          "type": "`$STRING`"
        },
        {
          "name": "regionCode",
          "req": true,
          "short": "Region code",
          "type": "`$STRING`"
        },
        {
          "name": "regionId",
          "req": true,
          "short": "UUID of the region",
          "type": "`$STRING`"
        },
        {
          "name": "regionName",
          "req": true,
          "short": "Region name",
          "type": "`$STRING`"
        },
        {
          "name": "timeZone",
          "short": "Time zone",
          "type": "`$STRING`"
        },
        {
          "name": "translations",
          "req": true,
          "short": "Translations of the city name in requested languages",
          "type": "`$ARRAY`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "short": "Wikidata ID of the city",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "city",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities/{id}",
              "segments": [
                {
                  "lit": "cities"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cities",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "city_dto": {
      "fields": [
        {
          "name": "area",
          "short": "Area in km²",
          "type": "`$NUMBER`"
        },
        {
          "name": "countryCode",
          "req": true,
          "short": "ISO country code",
          "type": "`$STRING`"
        },
        {
          "name": "countryEmoji",
          "req": true,
          "short": "Emoji flag of the country",
          "type": "`$STRING`"
        },
        {
          "name": "countryId",
          "req": true,
          "short": "UUID of the country",
          "type": "`$STRING`"
        },
        {
          "name": "countryName",
          "req": true,
          "short": "Country name",
          "type": "`$STRING`"
        },
        {
          "name": "countryTelephoneCode",
          "short": "Telephone code of the country",
          "type": "`$STRING`"
        },
        {
          "name": "dialingCode",
          "short": "Dialing code",
          "type": "`$STRING`"
        },
        {
          "name": "distanceKm",
          "short": "Distance from the given point in kilometers",
          "type": "`$NUMBER`"
        },
        {
          "name": "elevation",
          "short": "Elevation in meters",
          "type": "`$NUMBER`"
        },
        {
          "name": "flagImage",
          "short": "Flag image URL",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Geomelon UUID of the city",
          "type": "`$STRING`"
        },
        {
          "name": "latitude",
          "short": "Latitude coordinate",
          "type": "`$NUMBER`"
        },
        {
          "name": "localizedName",
          "req": true,
          "short": "Localized name according to preferred languages",
          "type": "`$STRING`"
        },
        {
          "name": "longitude",
          "short": "Longitude coordinate",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "req": true,
          "short": "City name",
          "type": "`$STRING`"
        },
        {
          "name": "normalizedName",
          "req": true,
          "short": "Normalized city name",
          "type": "`$STRING`"
        },
        {
          "name": "officialWebsite",
          "short": "Official website URL",
          "type": "`$STRING`"
        },
        {
          "name": "population",
          "short": "Population of the city",
          "type": "`$NUMBER`"
        },
        {
          "name": "postalCode",
          "short": "Postal code",
          "type": "`$STRING`"
        },
        {
          "name": "regionCode",
          "req": true,
          "short": "Region code",
          "type": "`$STRING`"
        },
        {
          "name": "regionId",
          "req": true,
          "short": "UUID of the region",
          "type": "`$STRING`"
        },
        {
          "name": "regionName",
          "req": true,
          "short": "Region name",
          "type": "`$STRING`"
        },
        {
          "name": "timeZone",
          "short": "Time zone",
          "type": "`$STRING`"
        },
        {
          "name": "translations",
          "req": true,
          "short": "Translations of the city name in requested languages",
          "type": "`$ARRAY`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "short": "Wikidata ID of the city",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "city_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "us",
                    "kind": "query",
                    "name": "country_code",
                    "orig": "country_code",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 20,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "max_population",
                    "orig": "max_population",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "min_population",
                    "orig": "min_population",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "dallas",
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "en,fr,ja,hi",
                    "kind": "query",
                    "name": "preferred_language",
                    "orig": "preferred_language",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "region_id",
                    "orig": "region_id",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "population_desc",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities/search",
              "segments": [
                {
                  "lit": "cities"
                },
                {
                  "lit": "search"
                }
              ],
              "select": {
                "exist": [
                  "country_code",
                  "limit",
                  "max_population",
                  "min_population",
                  "name",
                  "offset",
                  "preferred_language",
                  "region_id",
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cities",
                "search"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "lat",
                    "orig": "lat",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "lon",
                    "orig": "lon",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "preferred_language",
                    "orig": "preferred_language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities/byCoordinates/closest",
              "segments": [
                {
                  "lit": "cities"
                },
                {
                  "lit": "byCoordinates"
                },
                {
                  "lit": "closest"
                }
              ],
              "select": {
                "exist": [
                  "lat",
                  "lon",
                  "preferred_language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cities",
                "byCoordinates",
                "closest"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "lat",
                    "orig": "lat",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "lon",
                    "orig": "lon",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "preferred_language",
                    "orig": "preferred_language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities/byCoordinates/largest",
              "segments": [
                {
                  "lit": "cities"
                },
                {
                  "lit": "byCoordinates"
                },
                {
                  "lit": "largest"
                }
              ],
              "select": {
                "exist": [
                  "lat",
                  "lon",
                  "preferred_language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cities",
                "byCoordinates",
                "largest"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "city_translation_dto": {
      "fields": [
        {
          "name": "cityId",
          "req": true,
          "short": "City ID",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Translation ID",
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "req": true,
          "short": "Language code",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Translated name",
          "type": "`$STRING`"
        },
        {
          "name": "nameNormalized",
          "req": true,
          "short": "Normalized translated name",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "city_translation_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities/{id}/translations",
              "segments": [
                {
                  "lit": "cities"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "translations"
                }
              ],
              "select": {
                "$action": "translations",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cities",
                "{id}",
                "translations"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "country": {
      "fields": [
        {
          "name": "drivingSide",
          "req": true,
          "short": "Driving side of the country",
          "type": "`$STRING`"
        },
        {
          "name": "emoji",
          "req": true,
          "short": "Emoji of the country",
          "type": "`$STRING`"
        },
        {
          "name": "headOfGovernment",
          "req": true,
          "short": "Head of government of the country",
          "type": "`$STRING`"
        },
        {
          "name": "headOfState",
          "req": true,
          "short": "Head of state of the country",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Country ID",
          "type": "`$STRING`"
        },
        {
          "name": "isoCode",
          "req": true,
          "short": "ISO code of the country",
          "type": "`$STRING`"
        },
        {
          "name": "licencePlateCode",
          "req": true,
          "short": "Licence plate code of the country",
          "type": "`$STRING`"
        },
        {
          "name": "localizedName",
          "short": "Name in the first matched preferred language, falls back to name",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of the country",
          "type": "`$STRING`"
        },
        {
          "name": "preferredLanguageId",
          "req": true,
          "short": "Preferred language ID for the country",
          "type": "`$STRING`"
        },
        {
          "name": "regions",
          "req": true,
          "short": "Regions within the country",
          "type": "`$ARRAY`"
        },
        {
          "name": "telephoneCode",
          "req": true,
          "short": "Telephone code of the country",
          "type": "`$STRING`"
        },
        {
          "name": "translations",
          "req": true,
          "short": "Country translations",
          "type": "`$ARRAY`"
        },
        {
          "name": "trunkPrefix",
          "req": true,
          "short": "Trunk prefix of the country",
          "type": "`$STRING`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "short": "Wikidata ID",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "country",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 200,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "Spa",
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "fr,es,en",
                    "kind": "query",
                    "name": "preferred_language",
                    "orig": "preferred_language",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "+34",
                    "kind": "query",
                    "name": "telephone_code",
                    "orig": "telephone_code",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/countries",
              "segments": [
                {
                  "lit": "countries"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "name",
                  "offset",
                  "preferred_language",
                  "telephone_code"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "countries"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/countries/{id}",
              "segments": [
                {
                  "lit": "countries"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "countries",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "country_translation_dto": {
      "fields": [
        {
          "name": "countryId",
          "req": true,
          "short": "Country ID",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Translation ID",
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "req": true,
          "short": "Language code",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Translated name",
          "type": "`$STRING`"
        },
        {
          "name": "nameNormalized",
          "req": true,
          "short": "Normalized translated name",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "country_translation_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "en,fr,hi",
                    "kind": "query",
                    "name": "preferred_language",
                    "orig": "preferred_language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/countries/{id}/translations",
              "segments": [
                {
                  "lit": "countries"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "translations"
                }
              ],
              "select": {
                "$action": "translations",
                "exist": [
                  "id",
                  "preferred_language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "countries",
                "{id}",
                "translations"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "distance": {
      "fields": [
        {
          "name": "distanceKm",
          "req": true,
          "short": "Distance between cities",
          "type": "`$NUMBER`"
        }
      ],
      "name": "distance",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "city1",
                    "orig": "city1",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "city2",
                    "orig": "city2",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities/distance",
              "segments": [
                {
                  "lit": "cities"
                },
                {
                  "lit": "distance"
                }
              ],
              "select": {
                "exist": [
                  "city1",
                  "city2"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cities",
                "distance"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "language": {
      "fields": [
        {
          "name": "citiesCount",
          "req": true,
          "short": "Number of cities using this language",
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "req": true,
          "short": "UUID of the language",
          "type": "`$STRING`"
        },
        {
          "name": "isoCode",
          "req": true,
          "short": "ISO code of the language",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of the language",
          "type": "`$STRING`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "short": "Wikidata ID of the language",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "language",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 200,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/languages",
              "segments": [
                {
                  "lit": "languages"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "offset"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "languages"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "6aa910e2-07b2-4f0e-a1ec-194e85c4f35b",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/languages/{id}",
              "segments": [
                {
                  "lit": "languages"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "languages",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "oneshot": {
      "fields": [
        {
          "name": "emoji",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "en",
          "short": "English name — omitted when the requested language is English or no English translation exists",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "City name in the requested language",
          "type": "`$STRING`"
        },
        {
          "name": "population",
          "req": true,
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "oneshot",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "bar",
                    "kind": "param",
                    "name": "city_name",
                    "orig": "city_name",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "es",
                    "kind": "param",
                    "name": "country",
                    "orig": "country",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "es",
                    "kind": "param",
                    "name": "language",
                    "orig": "language",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities/oneshot/{country}/{language}/{city_name}",
              "segments": [
                {
                  "lit": "cities"
                },
                {
                  "lit": "oneshot"
                },
                {
                  "var": "country"
                },
                {
                  "var": "language"
                },
                {
                  "var": "city_name"
                }
              ],
              "select": {
                "exist": [
                  "city_name",
                  "country",
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cities",
                "oneshot",
                "{country}",
                "{language}",
                "{city_name}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "oneshot"
          ]
        ]
      }
    },
    "region": {
      "fields": [
        {
          "name": "code",
          "req": true,
          "short": "Region code",
          "type": "`$STRING`"
        },
        {
          "name": "countryId",
          "req": true,
          "short": "Country ID the region belongs to",
          "type": "`$STRING`"
        },
        {
          "name": "drivingSide",
          "req": true,
          "short": "Driving side of the country",
          "type": "`$STRING`"
        },
        {
          "name": "emoji",
          "req": true,
          "short": "Emoji of the country",
          "type": "`$STRING`"
        },
        {
          "name": "headOfGovernment",
          "req": true,
          "short": "Head of government of the country",
          "type": "`$STRING`"
        },
        {
          "name": "headOfState",
          "req": true,
          "short": "Head of state of the country",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Country ID",
          "type": "`$STRING`"
        },
        {
          "name": "isoCode",
          "req": true,
          "short": "ISO code of the country",
          "type": "`$STRING`"
        },
        {
          "name": "latitude",
          "req": true,
          "short": "Latitude of the region center",
          "type": "`$NUMBER`"
        },
        {
          "name": "licencePlateCode",
          "req": true,
          "short": "Licence plate code of the country",
          "type": "`$STRING`"
        },
        {
          "name": "localizedName",
          "short": "Name in the first matched preferred language, falls back to name",
          "type": "`$STRING`"
        },
        {
          "name": "longitude",
          "req": true,
          "short": "Longitude of the region center",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of the country",
          "type": "`$STRING`"
        },
        {
          "name": "population",
          "req": true,
          "short": "Population of the region",
          "type": "`$NUMBER`"
        },
        {
          "name": "preferredLanguageId",
          "req": true,
          "short": "Preferred language ID for the country",
          "type": "`$STRING`"
        },
        {
          "name": "telephoneCode",
          "req": true,
          "short": "Telephone code of the country",
          "type": "`$STRING`"
        },
        {
          "name": "trunkPrefix",
          "req": true,
          "short": "Trunk prefix of the country",
          "type": "`$STRING`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "short": "Wikidata ID",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "region",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
                    "kind": "param",
                    "name": "country_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/countries/{id}/regions",
              "rename": {
                "param": {
                  "id": "country_id"
                }
              },
              "segments": [
                {
                  "lit": "countries"
                },
                {
                  "var": "country_id"
                },
                {
                  "lit": "regions"
                }
              ],
              "select": {
                "exist": [
                  "country_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "countries",
                "{country_id}",
                "regions"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
                    "kind": "query",
                    "name": "country_id",
                    "orig": "country_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/regions",
              "segments": [
                {
                  "lit": "regions"
                }
              ],
              "select": {
                "exist": [
                  "country_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "regions"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "63df31a3-ca32-4970-8b5e-bcf9a11426e6",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/regions/{id}",
              "segments": [
                {
                  "lit": "regions"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.country`"
              },
              "parts": [
                "regions",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "country"
          ]
        ]
      }
    },
    "region_translation_dto": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "short": "Translation ID",
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "req": true,
          "short": "Language code",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Translated name",
          "type": "`$STRING`"
        },
        {
          "name": "nameNormalized",
          "req": true,
          "short": "Normalized translated name",
          "type": "`$STRING`"
        },
        {
          "name": "regionId",
          "req": true,
          "short": "Region ID",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "region_translation_dto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "63df31a3-ca32-4970-8b5e-bcf9a11426e6",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "en,fr,hi",
                    "kind": "query",
                    "name": "preferred_language",
                    "orig": "preferred_language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/regions/{id}/translations",
              "segments": [
                {
                  "lit": "regions"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "translations"
                }
              ],
              "select": {
                "$action": "translations",
                "exist": [
                  "id",
                  "preferred_language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "regions",
                "{id}",
                "translations"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "settlement_type": {
      "fields": [
        {
          "name": "description",
          "req": true,
          "short": "Description of the settlement type",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Settlement Type ID",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of the settlement type",
          "type": "`$STRING`"
        },
        {
          "name": "nameNormalized",
          "req": true,
          "short": "Normalized name of the settlement type",
          "type": "`$STRING`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "short": "Wikidata ID",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "settlement_type",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "city_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities/{id}/settlement-types",
              "rename": {
                "param": {
                  "id": "city_id"
                }
              },
              "segments": [
                {
                  "lit": "cities"
                },
                {
                  "var": "city_id"
                },
                {
                  "lit": "settlement-types"
                }
              ],
              "select": {
                "exist": [
                  "city_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cities",
                "{city_id}",
                "settlement-types"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "city"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

