# CityAutocomplete SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://geomelon.p.rapidapi.com",
            "auth": {
                "prefix": "",
                "name": "x-rapidapi-key",
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
            "title": "Area",
            "type": "`$NUMBER`",
            "short": "Area in km²",
          },
          {
            "name": "countryCode",
            "title": "Country Code",
            "type": "`$STRING`",
            "req": True,
            "short": "ISO country code",
          },
          {
            "name": "countryEmoji",
            "title": "Country Emoji",
            "type": "`$STRING`",
            "req": True,
            "short": "Emoji flag of the country",
          },
          {
            "name": "countryId",
            "title": "Country Id",
            "type": "`$STRING`",
            "req": True,
            "short": "UUID of the country",
          },
          {
            "name": "countryName",
            "title": "Country Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Country name",
          },
          {
            "name": "countryTelephoneCode",
            "title": "Country Telephone Code",
            "type": "`$STRING`",
            "short": "Telephone code of the country",
          },
          {
            "name": "dialingCode",
            "title": "Dialing Code",
            "type": "`$STRING`",
            "short": "Dialing code",
          },
          {
            "name": "distanceKm",
            "title": "Distance Km",
            "type": "`$NUMBER`",
            "short": "Distance from the given point in kilometers",
          },
          {
            "name": "elevation",
            "title": "Elevation",
            "type": "`$NUMBER`",
            "short": "Elevation in meters",
          },
          {
            "name": "flagImage",
            "title": "Flag Image",
            "type": "`$STRING`",
            "short": "Flag image URL",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Geomelon UUID of the city",
          },
          {
            "name": "latitude",
            "title": "Latitude",
            "type": "`$NUMBER`",
            "short": "Latitude coordinate",
          },
          {
            "name": "localizedName",
            "title": "Localized Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Localized name according to preferred languages",
          },
          {
            "name": "longitude",
            "title": "Longitude",
            "type": "`$NUMBER`",
            "short": "Longitude coordinate",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "City name",
          },
          {
            "name": "normalizedName",
            "title": "Normalized Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Normalized city name",
          },
          {
            "name": "officialWebsite",
            "title": "Official Website",
            "type": "`$STRING`",
            "short": "Official website URL",
          },
          {
            "name": "population",
            "title": "Population",
            "type": "`$NUMBER`",
            "short": "Population of the city",
          },
          {
            "name": "postalCode",
            "title": "Postal Code",
            "type": "`$STRING`",
            "short": "Postal code",
          },
          {
            "name": "regionCode",
            "title": "Region Code",
            "type": "`$STRING`",
            "req": True,
            "short": "Region code",
          },
          {
            "name": "regionId",
            "title": "Region Id",
            "type": "`$STRING`",
            "req": True,
            "short": "UUID of the region",
          },
          {
            "name": "regionName",
            "title": "Region Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Region name",
          },
          {
            "name": "timeZone",
            "title": "Time Zone",
            "type": "`$STRING`",
            "short": "Time zone",
          },
          {
            "name": "translations",
            "title": "Translations",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Translations of the city name in requested languages",
          },
          {
            "name": "wikidataId",
            "title": "Wikidata Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Wikidata ID of the city",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "city",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities/{id}",
                "segments": [
                  {
                    "lit": "cities",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "cities",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
            "title": "Area",
            "type": "`$NUMBER`",
            "short": "Area in km²",
          },
          {
            "name": "countryCode",
            "title": "Country Code",
            "type": "`$STRING`",
            "req": True,
            "short": "ISO country code",
          },
          {
            "name": "countryEmoji",
            "title": "Country Emoji",
            "type": "`$STRING`",
            "req": True,
            "short": "Emoji flag of the country",
          },
          {
            "name": "countryId",
            "title": "Country Id",
            "type": "`$STRING`",
            "req": True,
            "short": "UUID of the country",
          },
          {
            "name": "countryName",
            "title": "Country Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Country name",
          },
          {
            "name": "countryTelephoneCode",
            "title": "Country Telephone Code",
            "type": "`$STRING`",
            "short": "Telephone code of the country",
          },
          {
            "name": "dialingCode",
            "title": "Dialing Code",
            "type": "`$STRING`",
            "short": "Dialing code",
          },
          {
            "name": "distanceKm",
            "title": "Distance Km",
            "type": "`$NUMBER`",
            "short": "Distance from the given point in kilometers",
          },
          {
            "name": "elevation",
            "title": "Elevation",
            "type": "`$NUMBER`",
            "short": "Elevation in meters",
          },
          {
            "name": "flagImage",
            "title": "Flag Image",
            "type": "`$STRING`",
            "short": "Flag image URL",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Geomelon UUID of the city",
          },
          {
            "name": "latitude",
            "title": "Latitude",
            "type": "`$NUMBER`",
            "short": "Latitude coordinate",
          },
          {
            "name": "localizedName",
            "title": "Localized Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Localized name according to preferred languages",
          },
          {
            "name": "longitude",
            "title": "Longitude",
            "type": "`$NUMBER`",
            "short": "Longitude coordinate",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "City name",
          },
          {
            "name": "normalizedName",
            "title": "Normalized Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Normalized city name",
          },
          {
            "name": "officialWebsite",
            "title": "Official Website",
            "type": "`$STRING`",
            "short": "Official website URL",
          },
          {
            "name": "population",
            "title": "Population",
            "type": "`$NUMBER`",
            "short": "Population of the city",
          },
          {
            "name": "postalCode",
            "title": "Postal Code",
            "type": "`$STRING`",
            "short": "Postal code",
          },
          {
            "name": "regionCode",
            "title": "Region Code",
            "type": "`$STRING`",
            "req": True,
            "short": "Region code",
          },
          {
            "name": "regionId",
            "title": "Region Id",
            "type": "`$STRING`",
            "req": True,
            "short": "UUID of the region",
          },
          {
            "name": "regionName",
            "title": "Region Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Region name",
          },
          {
            "name": "timeZone",
            "title": "Time Zone",
            "type": "`$STRING`",
            "short": "Time zone",
          },
          {
            "name": "translations",
            "title": "Translations",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Translations of the city name in requested languages",
          },
          {
            "name": "wikidataId",
            "title": "Wikidata Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Wikidata ID of the city",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "city_dto",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities/search",
                "segments": [
                  {
                    "lit": "cities",
                  },
                  {
                    "lit": "search",
                  },
                ],
                "parts": [
                  "cities",
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "country_code",
                      "orig": "countryCode",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "us",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 20,
                    },
                    {
                      "name": "max_population",
                      "orig": "maxPopulation",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "min_population",
                      "orig": "minPopulation",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "dallas",
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "preferred_language",
                      "orig": "preferredLanguages",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "en,fr,ja,hi",
                    },
                    {
                      "name": "region_id",
                      "orig": "regionId",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "population_desc",
                    },
                  ],
                },
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
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities/byCoordinates/closest",
                "segments": [
                  {
                    "lit": "cities",
                  },
                  {
                    "lit": "byCoordinates",
                  },
                  {
                    "lit": "closest",
                  },
                ],
                "parts": [
                  "cities",
                  "byCoordinates",
                  "closest",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "lat",
                      "orig": "lat",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "lon",
                      "orig": "lon",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "preferred_language",
                      "orig": "preferredLanguages",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "en",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "lat",
                    "lon",
                    "preferred_language",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities/byCoordinates/largest",
                "segments": [
                  {
                    "lit": "cities",
                  },
                  {
                    "lit": "byCoordinates",
                  },
                  {
                    "lit": "largest",
                  },
                ],
                "parts": [
                  "cities",
                  "byCoordinates",
                  "largest",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "lat",
                      "orig": "lat",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "lon",
                      "orig": "lon",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "preferred_language",
                      "orig": "preferredLanguages",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "en",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "lat",
                    "lon",
                    "preferred_language",
                  ],
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
            "title": "City Id",
            "type": "`$STRING`",
            "req": True,
            "short": "City ID",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Translation ID",
          },
          {
            "name": "language",
            "title": "Language",
            "type": "`$STRING`",
            "req": True,
            "short": "Language code",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Translated name",
          },
          {
            "name": "nameNormalized",
            "title": "Name Normalized",
            "type": "`$STRING`",
            "req": True,
            "short": "Normalized translated name",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "city_translation_dto",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities/{id}/translations",
                "segments": [
                  {
                    "lit": "cities",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "translations",
                  },
                ],
                "parts": [
                  "cities",
                  "{id}",
                  "translations",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "translations",
                  "exist": [
                    "id",
                  ],
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
            "title": "Driving Side",
            "type": "`$STRING`",
            "req": True,
            "short": "Driving side of the country",
          },
          {
            "name": "emoji",
            "title": "Emoji",
            "type": "`$STRING`",
            "req": True,
            "short": "Emoji of the country",
          },
          {
            "name": "headOfGovernment",
            "title": "Head Of Government",
            "type": "`$STRING`",
            "req": True,
            "short": "Head of government of the country",
          },
          {
            "name": "headOfState",
            "title": "Head Of State",
            "type": "`$STRING`",
            "req": True,
            "short": "Head of state of the country",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Country ID",
          },
          {
            "name": "isoCode",
            "title": "Iso Code",
            "type": "`$STRING`",
            "req": True,
            "short": "ISO code of the country",
          },
          {
            "name": "licencePlateCode",
            "title": "Licence Plate Code",
            "type": "`$STRING`",
            "req": True,
            "short": "Licence plate code of the country",
          },
          {
            "name": "localizedName",
            "title": "Localized Name",
            "type": "`$STRING`",
            "short": "Name in the first matched preferred language, falls back to name",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Name of the country",
          },
          {
            "name": "preferredLanguageId",
            "title": "Preferred Language Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Preferred language ID for the country",
          },
          {
            "name": "regions",
            "title": "Regions",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Regions within the country",
          },
          {
            "name": "telephoneCode",
            "title": "Telephone Code",
            "type": "`$STRING`",
            "req": True,
            "short": "Telephone code of the country",
          },
          {
            "name": "translations",
            "title": "Translations",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Country translations",
          },
          {
            "name": "trunkPrefix",
            "title": "Trunk Prefix",
            "type": "`$STRING`",
            "req": True,
            "short": "Trunk prefix of the country",
          },
          {
            "name": "wikidataId",
            "title": "Wikidata Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Wikidata ID",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "country",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries",
                "segments": [
                  {
                    "lit": "countries",
                  },
                ],
                "parts": [
                  "countries",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 200,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "Spa",
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "preferred_language",
                      "orig": "preferredLanguages",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "fr,es,en",
                    },
                    {
                      "name": "telephone_code",
                      "orig": "telephoneCode",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "+34",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "name",
                    "offset",
                    "preferred_language",
                    "telephone_code",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries/{id}",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "countries",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
            "title": "Country Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Country ID",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Translation ID",
          },
          {
            "name": "language",
            "title": "Language",
            "type": "`$STRING`",
            "req": True,
            "short": "Language code",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Translated name",
          },
          {
            "name": "nameNormalized",
            "title": "Name Normalized",
            "type": "`$STRING`",
            "req": True,
            "short": "Normalized translated name",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "country_translation_dto",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries/{id}/translations",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "translations",
                  },
                ],
                "parts": [
                  "countries",
                  "{id}",
                  "translations",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
                    },
                  ],
                  "query": [
                    {
                      "name": "preferred_language",
                      "orig": "preferredLanguages",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "en,fr,hi",
                    },
                  ],
                },
                "select": {
                  "$action": "translations",
                  "exist": [
                    "id",
                    "preferred_language",
                  ],
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
            "title": "Distance Km",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Distance between cities",
          },
        ],
        "name": "distance",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities/distance",
                "segments": [
                  {
                    "lit": "cities",
                  },
                  {
                    "lit": "distance",
                  },
                ],
                "parts": [
                  "cities",
                  "distance",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "city1",
                      "orig": "city1",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "city2",
                      "orig": "city2",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "city1",
                    "city2",
                  ],
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
            "title": "Cities Count",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Number of cities using this language",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "UUID of the language",
          },
          {
            "name": "isoCode",
            "title": "Iso Code",
            "type": "`$STRING`",
            "req": True,
            "short": "ISO code of the language",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Name of the language",
          },
          {
            "name": "wikidataId",
            "title": "Wikidata Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Wikidata ID of the language",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "language",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/languages",
                "segments": [
                  {
                    "lit": "languages",
                  },
                ],
                "parts": [
                  "languages",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 200,
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 0,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/languages/{id}",
                "segments": [
                  {
                    "lit": "languages",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "languages",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "6aa910e2-07b2-4f0e-a1ec-194e85c4f35b",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
            "title": "Emoji",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "en",
            "title": "En",
            "type": "`$STRING`",
            "short": "English name — omitted when the requested language is English or no English translation exists",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "City name in the requested language",
          },
          {
            "name": "population",
            "title": "Population",
            "type": "`$OBJECT`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "oneshot",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities/oneshot/{country}/{language}/{city_name}",
                "segments": [
                  {
                    "lit": "cities",
                  },
                  {
                    "lit": "oneshot",
                  },
                  {
                    "var": "country",
                  },
                  {
                    "var": "language",
                  },
                  {
                    "var": "city_name",
                  },
                ],
                "parts": [
                  "cities",
                  "oneshot",
                  "{country}",
                  "{language}",
                  "{city_name}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "city_name",
                      "orig": "city_name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "bar",
                    },
                    {
                      "name": "country",
                      "orig": "country",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "es",
                    },
                    {
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "es",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "city_name",
                    "country",
                    "language",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "region": {
        "fields": [
          {
            "name": "code",
            "title": "Code",
            "type": "`$STRING`",
            "req": True,
            "short": "Region code",
          },
          {
            "name": "country",
            "title": "Country",
            "type": "`$ANY`",
            "req": True,
            "short": "Country details",
          },
          {
            "name": "countryId",
            "title": "Country Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Country ID the region belongs to",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "UUID of the region",
          },
          {
            "name": "latitude",
            "title": "Latitude",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Latitude of the region center",
          },
          {
            "name": "longitude",
            "title": "Longitude",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Longitude of the region center",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Name of the region",
          },
          {
            "name": "population",
            "title": "Population",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Population of the region",
          },
          {
            "name": "wikidataId",
            "title": "Wikidata Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Wikidata ID",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "region",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries/{id}/regions",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "var": "country_id",
                  },
                  {
                    "lit": "regions",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "country_id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "country_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/regions",
                "segments": [
                  {
                    "lit": "regions",
                  },
                ],
                "parts": [
                  "regions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "country_id",
                      "orig": "countryId",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "country_id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/regions/{id}",
                "segments": [
                  {
                    "lit": "regions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "regions",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "63df31a3-ca32-4970-8b5e-bcf9a11426e6",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.country",
            ],
          ],
        },
      },
      "region_translation_dto": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Translation ID",
          },
          {
            "name": "language",
            "title": "Language",
            "type": "`$STRING`",
            "req": True,
            "short": "Language code",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Translated name",
          },
          {
            "name": "nameNormalized",
            "title": "Name Normalized",
            "type": "`$STRING`",
            "req": True,
            "short": "Normalized translated name",
          },
          {
            "name": "regionId",
            "title": "Region Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Region ID",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "region_translation_dto",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/regions/{id}/translations",
                "segments": [
                  {
                    "lit": "regions",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "translations",
                  },
                ],
                "parts": [
                  "regions",
                  "{id}",
                  "translations",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "63df31a3-ca32-4970-8b5e-bcf9a11426e6",
                    },
                  ],
                  "query": [
                    {
                      "name": "preferred_language",
                      "orig": "preferredLanguages",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "en,fr,hi",
                    },
                  ],
                },
                "select": {
                  "$action": "translations",
                  "exist": [
                    "id",
                    "preferred_language",
                  ],
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
            "title": "Description",
            "type": "`$STRING`",
            "req": True,
            "short": "Description of the settlement type",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Settlement Type ID",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Name of the settlement type",
          },
          {
            "name": "nameNormalized",
            "title": "Name Normalized",
            "type": "`$STRING`",
            "req": True,
            "short": "Normalized name of the settlement type",
          },
          {
            "name": "wikidataId",
            "title": "Wikidata Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Wikidata ID",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "settlement_type",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities/{id}/settlement-types",
                "segments": [
                  {
                    "lit": "cities",
                  },
                  {
                    "var": "city_id",
                  },
                  {
                    "lit": "settlement-types",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "city_id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "city_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.city",
            ],
          ],
        },
      },
    },
    }
