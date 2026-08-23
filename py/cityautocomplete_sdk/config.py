# CityAutocomplete SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CityAutocomplete",
            "slug": "city-autocomplete",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://geomelon.p.rapidapi.com",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "city": {},
                "city_dto": {},
                "city_translation_dto": {},
                "country": {},
                "country_translation_dto": {},
                "distance": {},
                "language": {},
                "oneshot": {},
                "region": {},
                "region_translation_dto": {},
                "settlement_type": {},
            },
        },
        "entity": {
      "city": {
        "fields": [
          {
            "name": "area",
            "short": "Area in km²",
            "type": "`$NUMBER`",
          },
          {
            "name": "countryCode",
            "req": True,
            "short": "ISO country code",
            "type": "`$STRING`",
          },
          {
            "name": "countryEmoji",
            "req": True,
            "short": "Emoji flag of the country",
            "type": "`$STRING`",
          },
          {
            "name": "countryId",
            "req": True,
            "short": "UUID of the country",
            "type": "`$STRING`",
          },
          {
            "name": "countryName",
            "req": True,
            "short": "Country name",
            "type": "`$STRING`",
          },
          {
            "name": "countryTelephoneCode",
            "short": "Telephone code of the country",
            "type": "`$STRING`",
          },
          {
            "name": "dialingCode",
            "short": "Dialing code",
            "type": "`$STRING`",
          },
          {
            "name": "distanceKm",
            "short": "Distance from the given point in kilometers",
            "type": "`$NUMBER`",
          },
          {
            "name": "elevation",
            "short": "Elevation in meters",
            "type": "`$NUMBER`",
          },
          {
            "name": "flagImage",
            "short": "Flag image URL",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Geomelon UUID of the city",
            "type": "`$STRING`",
          },
          {
            "name": "latitude",
            "short": "Latitude coordinate",
            "type": "`$NUMBER`",
          },
          {
            "name": "localizedName",
            "req": True,
            "short": "Localized name according to preferred languages",
            "type": "`$STRING`",
          },
          {
            "name": "longitude",
            "short": "Longitude coordinate",
            "type": "`$NUMBER`",
          },
          {
            "name": "name",
            "req": True,
            "short": "City name",
            "type": "`$STRING`",
          },
          {
            "name": "normalizedName",
            "req": True,
            "short": "Normalized city name",
            "type": "`$STRING`",
          },
          {
            "name": "officialWebsite",
            "short": "Official website URL",
            "type": "`$STRING`",
          },
          {
            "name": "population",
            "short": "Population of the city",
            "type": "`$NUMBER`",
          },
          {
            "name": "postalCode",
            "short": "Postal code",
            "type": "`$STRING`",
          },
          {
            "name": "regionCode",
            "req": True,
            "short": "Region code",
            "type": "`$STRING`",
          },
          {
            "name": "regionId",
            "req": True,
            "short": "UUID of the region",
            "type": "`$STRING`",
          },
          {
            "name": "regionName",
            "req": True,
            "short": "Region name",
            "type": "`$STRING`",
          },
          {
            "name": "timeZone",
            "short": "Time zone",
            "type": "`$STRING`",
          },
          {
            "name": "translations",
            "req": True,
            "short": "Translations of the city name in requested languages",
            "type": "`$ARRAY`",
          },
          {
            "name": "wikidataId",
            "req": True,
            "short": "Wikidata ID of the city",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cities/{id}",
                "parts": [
                  "cities",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "city_dto": {
        "fields": [
          {
            "name": "area",
            "short": "Area in km²",
            "type": "`$NUMBER`",
          },
          {
            "name": "countryCode",
            "req": True,
            "short": "ISO country code",
            "type": "`$STRING`",
          },
          {
            "name": "countryEmoji",
            "req": True,
            "short": "Emoji flag of the country",
            "type": "`$STRING`",
          },
          {
            "name": "countryId",
            "req": True,
            "short": "UUID of the country",
            "type": "`$STRING`",
          },
          {
            "name": "countryName",
            "req": True,
            "short": "Country name",
            "type": "`$STRING`",
          },
          {
            "name": "countryTelephoneCode",
            "short": "Telephone code of the country",
            "type": "`$STRING`",
          },
          {
            "name": "dialingCode",
            "short": "Dialing code",
            "type": "`$STRING`",
          },
          {
            "name": "distanceKm",
            "short": "Distance from the given point in kilometers",
            "type": "`$NUMBER`",
          },
          {
            "name": "elevation",
            "short": "Elevation in meters",
            "type": "`$NUMBER`",
          },
          {
            "name": "flagImage",
            "short": "Flag image URL",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Geomelon UUID of the city",
            "type": "`$STRING`",
          },
          {
            "name": "latitude",
            "short": "Latitude coordinate",
            "type": "`$NUMBER`",
          },
          {
            "name": "localizedName",
            "req": True,
            "short": "Localized name according to preferred languages",
            "type": "`$STRING`",
          },
          {
            "name": "longitude",
            "short": "Longitude coordinate",
            "type": "`$NUMBER`",
          },
          {
            "name": "name",
            "req": True,
            "short": "City name",
            "type": "`$STRING`",
          },
          {
            "name": "normalizedName",
            "req": True,
            "short": "Normalized city name",
            "type": "`$STRING`",
          },
          {
            "name": "officialWebsite",
            "short": "Official website URL",
            "type": "`$STRING`",
          },
          {
            "name": "population",
            "short": "Population of the city",
            "type": "`$NUMBER`",
          },
          {
            "name": "postalCode",
            "short": "Postal code",
            "type": "`$STRING`",
          },
          {
            "name": "regionCode",
            "req": True,
            "short": "Region code",
            "type": "`$STRING`",
          },
          {
            "name": "regionId",
            "req": True,
            "short": "UUID of the region",
            "type": "`$STRING`",
          },
          {
            "name": "regionName",
            "req": True,
            "short": "Region name",
            "type": "`$STRING`",
          },
          {
            "name": "timeZone",
            "short": "Time zone",
            "type": "`$STRING`",
          },
          {
            "name": "translations",
            "req": True,
            "short": "Translations of the city name in requested languages",
            "type": "`$ARRAY`",
          },
          {
            "name": "wikidataId",
            "req": True,
            "short": "Wikidata ID of the city",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "max_population",
                      "orig": "max_population",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "min_population",
                      "orig": "min_population",
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": "dallas",
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": "en,fr,ja,hi",
                      "kind": "query",
                      "name": "preferred_language",
                      "orig": "preferred_language",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "region_id",
                      "orig": "region_id",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "population_desc",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cities/search",
                "parts": [
                  "cities",
                  "search",
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
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "lat",
                      "orig": "lat",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "lon",
                      "orig": "lon",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "preferred_language",
                      "orig": "preferred_language",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cities/byCoordinates/closest",
                "parts": [
                  "cities",
                  "byCoordinates",
                  "closest",
                ],
                "select": {
                  "exist": [
                    "lat",
                    "lon",
                    "preferred_language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "lat",
                      "orig": "lat",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "lon",
                      "orig": "lon",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "preferred_language",
                      "orig": "preferred_language",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cities/byCoordinates/largest",
                "parts": [
                  "cities",
                  "byCoordinates",
                  "largest",
                ],
                "select": {
                  "exist": [
                    "lat",
                    "lon",
                    "preferred_language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "city_translation_dto": {
        "fields": [
          {
            "name": "cityId",
            "req": True,
            "short": "City ID",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Translation ID",
            "type": "`$STRING`",
          },
          {
            "name": "language",
            "req": True,
            "short": "Language code",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Translated name",
            "type": "`$STRING`",
          },
          {
            "name": "nameNormalized",
            "req": True,
            "short": "Normalized translated name",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cities/{id}/translations",
                "parts": [
                  "cities",
                  "{id}",
                  "translations",
                ],
                "select": {
                  "$action": "translations",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "country": {
        "fields": [
          {
            "name": "drivingSide",
            "req": True,
            "short": "Driving side of the country",
            "type": "`$STRING`",
          },
          {
            "name": "emoji",
            "req": True,
            "short": "Emoji of the country",
            "type": "`$STRING`",
          },
          {
            "name": "headOfGovernment",
            "req": True,
            "short": "Head of government of the country",
            "type": "`$STRING`",
          },
          {
            "name": "headOfState",
            "req": True,
            "short": "Head of state of the country",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Country ID",
            "type": "`$STRING`",
          },
          {
            "name": "isoCode",
            "req": True,
            "short": "ISO code of the country",
            "type": "`$STRING`",
          },
          {
            "name": "licencePlateCode",
            "req": True,
            "short": "Licence plate code of the country",
            "type": "`$STRING`",
          },
          {
            "name": "localizedName",
            "short": "Name in the first matched preferred language, falls back to name",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Name of the country",
            "type": "`$STRING`",
          },
          {
            "name": "preferredLanguageId",
            "req": True,
            "short": "Preferred language ID for the country",
            "type": "`$STRING`",
          },
          {
            "name": "regions",
            "req": True,
            "short": "Regions within the country",
            "type": "`$ARRAY`",
          },
          {
            "name": "telephoneCode",
            "req": True,
            "short": "Telephone code of the country",
            "type": "`$STRING`",
          },
          {
            "name": "translations",
            "req": True,
            "short": "Country translations",
            "type": "`$ARRAY`",
          },
          {
            "name": "trunkPrefix",
            "req": True,
            "short": "Trunk prefix of the country",
            "type": "`$STRING`",
          },
          {
            "name": "wikidataId",
            "req": True,
            "short": "Wikidata ID",
            "type": "`$STRING`",
          },
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
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": "Spa",
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": "fr,es,en",
                      "kind": "query",
                      "name": "preferred_language",
                      "orig": "preferred_language",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "+34",
                      "kind": "query",
                      "name": "telephone_code",
                      "orig": "telephone_code",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/countries",
                "parts": [
                  "countries",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "name",
                    "offset",
                    "preferred_language",
                    "telephone_code",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/countries/{id}",
                "parts": [
                  "countries",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "country_translation_dto": {
        "fields": [
          {
            "name": "countryId",
            "req": True,
            "short": "Country ID",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Translation ID",
            "type": "`$STRING`",
          },
          {
            "name": "language",
            "req": True,
            "short": "Language code",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Translated name",
            "type": "`$STRING`",
          },
          {
            "name": "nameNormalized",
            "req": True,
            "short": "Normalized translated name",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": "en,fr,hi",
                      "kind": "query",
                      "name": "preferred_language",
                      "orig": "preferred_language",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/countries/{id}/translations",
                "parts": [
                  "countries",
                  "{id}",
                  "translations",
                ],
                "select": {
                  "$action": "translations",
                  "exist": [
                    "id",
                    "preferred_language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "distance": {
        "fields": [
          {
            "name": "distanceKm",
            "req": True,
            "short": "Distance between cities",
            "type": "`$NUMBER`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "city2",
                      "orig": "city2",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cities/distance",
                "parts": [
                  "cities",
                  "distance",
                ],
                "select": {
                  "exist": [
                    "city1",
                    "city2",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "language": {
        "fields": [
          {
            "name": "citiesCount",
            "req": True,
            "short": "Number of cities using this language",
            "type": "`$NUMBER`",
          },
          {
            "name": "id",
            "req": True,
            "short": "UUID of the language",
            "type": "`$STRING`",
          },
          {
            "name": "isoCode",
            "req": True,
            "short": "ISO code of the language",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Name of the language",
            "type": "`$STRING`",
          },
          {
            "name": "wikidataId",
            "req": True,
            "short": "Wikidata ID of the language",
            "type": "`$STRING`",
          },
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
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/languages",
                "parts": [
                  "languages",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/languages/{id}",
                "parts": [
                  "languages",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "oneshot": {
        "fields": [
          {
            "name": "emoji",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "en",
            "short": "English name — omitted when the requested language is English or no English translation exists",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "City name in the requested language",
            "type": "`$STRING`",
          },
          {
            "name": "population",
            "req": True,
            "type": "`$OBJECT`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "es",
                      "kind": "param",
                      "name": "country",
                      "orig": "country",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "es",
                      "kind": "param",
                      "name": "language",
                      "orig": "language",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cities/oneshot/{country}/{language}/{city_name}",
                "parts": [
                  "cities",
                  "oneshot",
                  "{country}",
                  "{language}",
                  "{city_name}",
                ],
                "select": {
                  "exist": [
                    "city_name",
                    "country",
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "oneshot",
            ],
          ],
        },
      },
      "region": {
        "fields": [
          {
            "name": "code",
            "req": True,
            "short": "Region code",
            "type": "`$STRING`",
          },
          {
            "name": "countryId",
            "req": True,
            "short": "Country ID the region belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "drivingSide",
            "req": True,
            "short": "Driving side of the country",
            "type": "`$STRING`",
          },
          {
            "name": "emoji",
            "req": True,
            "short": "Emoji of the country",
            "type": "`$STRING`",
          },
          {
            "name": "headOfGovernment",
            "req": True,
            "short": "Head of government of the country",
            "type": "`$STRING`",
          },
          {
            "name": "headOfState",
            "req": True,
            "short": "Head of state of the country",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Country ID",
            "type": "`$STRING`",
          },
          {
            "name": "isoCode",
            "req": True,
            "short": "ISO code of the country",
            "type": "`$STRING`",
          },
          {
            "name": "latitude",
            "req": True,
            "short": "Latitude of the region center",
            "type": "`$NUMBER`",
          },
          {
            "name": "licencePlateCode",
            "req": True,
            "short": "Licence plate code of the country",
            "type": "`$STRING`",
          },
          {
            "name": "localizedName",
            "short": "Name in the first matched preferred language, falls back to name",
            "type": "`$STRING`",
          },
          {
            "name": "longitude",
            "req": True,
            "short": "Longitude of the region center",
            "type": "`$NUMBER`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Name of the country",
            "type": "`$STRING`",
          },
          {
            "name": "population",
            "req": True,
            "short": "Population of the region",
            "type": "`$NUMBER`",
          },
          {
            "name": "preferredLanguageId",
            "req": True,
            "short": "Preferred language ID for the country",
            "type": "`$STRING`",
          },
          {
            "name": "telephoneCode",
            "req": True,
            "short": "Telephone code of the country",
            "type": "`$STRING`",
          },
          {
            "name": "trunkPrefix",
            "req": True,
            "short": "Trunk prefix of the country",
            "type": "`$STRING`",
          },
          {
            "name": "wikidataId",
            "req": True,
            "short": "Wikidata ID",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/countries/{id}/regions",
                "parts": [
                  "countries",
                  "{country_id}",
                  "regions",
                ],
                "rename": {
                  "param": {
                    "id": "country_id",
                  },
                },
                "select": {
                  "exist": [
                    "country_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
                      "kind": "query",
                      "name": "country_id",
                      "orig": "country_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/regions",
                "parts": [
                  "regions",
                ],
                "select": {
                  "exist": [
                    "country_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/regions/{id}",
                "parts": [
                  "regions",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.country`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "country",
            ],
          ],
        },
      },
      "region_translation_dto": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "short": "Translation ID",
            "type": "`$STRING`",
          },
          {
            "name": "language",
            "req": True,
            "short": "Language code",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Translated name",
            "type": "`$STRING`",
          },
          {
            "name": "nameNormalized",
            "req": True,
            "short": "Normalized translated name",
            "type": "`$STRING`",
          },
          {
            "name": "regionId",
            "req": True,
            "short": "Region ID",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": "en,fr,hi",
                      "kind": "query",
                      "name": "preferred_language",
                      "orig": "preferred_language",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/regions/{id}/translations",
                "parts": [
                  "regions",
                  "{id}",
                  "translations",
                ],
                "select": {
                  "$action": "translations",
                  "exist": [
                    "id",
                    "preferred_language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "settlement_type": {
        "fields": [
          {
            "name": "description",
            "req": True,
            "short": "Description of the settlement type",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Settlement Type ID",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Name of the settlement type",
            "type": "`$STRING`",
          },
          {
            "name": "nameNormalized",
            "req": True,
            "short": "Normalized name of the settlement type",
            "type": "`$STRING`",
          },
          {
            "name": "wikidataId",
            "req": True,
            "short": "Wikidata ID",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cities/{id}/settlement-types",
                "parts": [
                  "cities",
                  "{city_id}",
                  "settlement-types",
                ],
                "rename": {
                  "param": {
                    "id": "city_id",
                  },
                },
                "select": {
                  "exist": [
                    "city_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "city",
            ],
          ],
        },
      },
    },
    }
