
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'CityAutocomplete',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://geomelon.p.rapidapi.com",

    auth: {
      prefix: '',
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
          "type": "`$NUMBER`"
        },
        {
          "name": "countryCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "countryEmoji",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "countryId",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "countryName",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "countryTelephoneCode",
          "type": "`$STRING`"
        },
        {
          "name": "dialingCode",
          "type": "`$STRING`"
        },
        {
          "name": "distanceKm",
          "type": "`$NUMBER`"
        },
        {
          "name": "elevation",
          "type": "`$NUMBER`"
        },
        {
          "name": "flagImage",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "latitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "localizedName",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "longitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "normalizedName",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "officialWebsite",
          "type": "`$STRING`"
        },
        {
          "name": "population",
          "type": "`$NUMBER`"
        },
        {
          "name": "postalCode",
          "type": "`$STRING`"
        },
        {
          "name": "regionCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "regionId",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "regionName",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "timeZone",
          "type": "`$STRING`"
        },
        {
          "name": "translations",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "cities",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
          "type": "`$NUMBER`"
        },
        {
          "name": "countryCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "countryEmoji",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "countryId",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "countryName",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "countryTelephoneCode",
          "type": "`$STRING`"
        },
        {
          "name": "dialingCode",
          "type": "`$STRING`"
        },
        {
          "name": "distanceKm",
          "type": "`$NUMBER`"
        },
        {
          "name": "elevation",
          "type": "`$NUMBER`"
        },
        {
          "name": "flagImage",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "latitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "localizedName",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "longitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "normalizedName",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "officialWebsite",
          "type": "`$STRING`"
        },
        {
          "name": "population",
          "type": "`$NUMBER`"
        },
        {
          "name": "postalCode",
          "type": "`$STRING`"
        },
        {
          "name": "regionCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "regionId",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "regionName",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "timeZone",
          "type": "`$STRING`"
        },
        {
          "name": "translations",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "cities",
                "search"
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
              }
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
              "parts": [
                "cities",
                "byCoordinates",
                "closest"
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
              }
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
              "parts": [
                "cities",
                "byCoordinates",
                "largest"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "nameNormalized",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "cities",
                "{id}",
                "translations"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "emoji",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "headOfGovernment",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "headOfState",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "isoCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "licencePlateCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "localizedName",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "preferredLanguageId",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "regions",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "telephoneCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "translations",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "trunkPrefix",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "countries"
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
              }
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
              "parts": [
                "countries",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "nameNormalized",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "countries",
                "{id}",
                "translations"
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
              }
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
              "parts": [
                "cities",
                "distance"
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
              }
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
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "isoCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "languages"
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
              }
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
              "parts": [
                "languages",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "population",
          "req": true,
          "type": "`$OBJECT`"
        }
      ],
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
              "parts": [
                "cities",
                "oneshot",
                "{country}",
                "{language}",
                "{city_name}"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "countryId",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "drivingSide",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "emoji",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "headOfGovernment",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "headOfState",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "isoCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "latitude",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "licencePlateCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "localizedName",
          "type": "`$STRING`"
        },
        {
          "name": "longitude",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "population",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "preferredLanguageId",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "telephoneCode",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "trunkPrefix",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "countries",
                "{country_id}",
                "regions"
              ],
              "rename": {
                "param": {
                  "id": "country_id"
                }
              },
              "select": {
                "exist": [
                  "country_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "regions"
              ],
              "select": {
                "exist": [
                  "country_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "regions",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.country`"
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "nameNormalized",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "regionId",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "regions",
                "{id}",
                "translations"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "nameNormalized",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "wikidataId",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "cities",
                "{city_id}",
                "settlement-types"
              ],
              "rename": {
                "param": {
                  "id": "city_id"
                }
              },
              "select": {
                "exist": [
                  "city_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
  config
}

