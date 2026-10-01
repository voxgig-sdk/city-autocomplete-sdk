package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CityAutocomplete",
			"slug": "city-autocomplete",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://geomelon.p.rapidapi.com",
			"auth": map[string]any{
				"prefix": "",
				"name": "x-rapidapi-key",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"city": map[string]any{},
				"city_dto": map[string]any{},
				"city_translation_dto": map[string]any{},
				"country": map[string]any{},
				"country_translation_dto": map[string]any{},
				"distance": map[string]any{},
				"language": map[string]any{},
				"oneshot": map[string]any{},
				"region": map[string]any{},
				"region_translation_dto": map[string]any{},
				"settlement_type": map[string]any{},
			},
		},
		"entity": map[string]any{
			"city": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "area",
						"title": "Area",
						"type": "`$NUMBER`",
						"short": "Area in km²",
					},
					map[string]any{
						"name": "countryCode",
						"title": "Country Code",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO country code",
					},
					map[string]any{
						"name": "countryEmoji",
						"title": "Country Emoji",
						"type": "`$STRING`",
						"req": true,
						"short": "Emoji flag of the country",
					},
					map[string]any{
						"name": "countryId",
						"title": "Country Id",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID of the country",
					},
					map[string]any{
						"name": "countryName",
						"title": "Country Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Country name",
					},
					map[string]any{
						"name": "countryTelephoneCode",
						"title": "Country Telephone Code",
						"type": "`$STRING`",
						"short": "Telephone code of the country",
					},
					map[string]any{
						"name": "dialingCode",
						"title": "Dialing Code",
						"type": "`$STRING`",
						"short": "Dialing code",
					},
					map[string]any{
						"name": "distanceKm",
						"title": "Distance Km",
						"type": "`$NUMBER`",
						"short": "Distance from the given point in kilometers",
					},
					map[string]any{
						"name": "elevation",
						"title": "Elevation",
						"type": "`$NUMBER`",
						"short": "Elevation in meters",
					},
					map[string]any{
						"name": "flagImage",
						"title": "Flag Image",
						"type": "`$STRING`",
						"short": "Flag image URL",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Geomelon UUID of the city",
					},
					map[string]any{
						"name": "latitude",
						"title": "Latitude",
						"type": "`$NUMBER`",
						"short": "Latitude coordinate",
					},
					map[string]any{
						"name": "localizedName",
						"title": "Localized Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Localized name according to preferred languages",
					},
					map[string]any{
						"name": "longitude",
						"title": "Longitude",
						"type": "`$NUMBER`",
						"short": "Longitude coordinate",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "City name",
					},
					map[string]any{
						"name": "normalizedName",
						"title": "Normalized Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Normalized city name",
					},
					map[string]any{
						"name": "officialWebsite",
						"title": "Official Website",
						"type": "`$STRING`",
						"short": "Official website URL",
					},
					map[string]any{
						"name": "population",
						"title": "Population",
						"type": "`$NUMBER`",
						"short": "Population of the city",
					},
					map[string]any{
						"name": "postalCode",
						"title": "Postal Code",
						"type": "`$STRING`",
						"short": "Postal code",
					},
					map[string]any{
						"name": "regionCode",
						"title": "Region Code",
						"type": "`$STRING`",
						"req": true,
						"short": "Region code",
					},
					map[string]any{
						"name": "regionId",
						"title": "Region Id",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID of the region",
					},
					map[string]any{
						"name": "regionName",
						"title": "Region Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Region name",
					},
					map[string]any{
						"name": "timeZone",
						"title": "Time Zone",
						"type": "`$STRING`",
						"short": "Time zone",
					},
					map[string]any{
						"name": "translations",
						"title": "Translations",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Translations of the city name in requested languages",
					},
					map[string]any{
						"name": "wikidataId",
						"title": "Wikidata Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Wikidata ID of the city",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "city",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cities/{id}",
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"cities",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"city_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "area",
						"title": "Area",
						"type": "`$NUMBER`",
						"short": "Area in km²",
					},
					map[string]any{
						"name": "countryCode",
						"title": "Country Code",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO country code",
					},
					map[string]any{
						"name": "countryEmoji",
						"title": "Country Emoji",
						"type": "`$STRING`",
						"req": true,
						"short": "Emoji flag of the country",
					},
					map[string]any{
						"name": "countryId",
						"title": "Country Id",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID of the country",
					},
					map[string]any{
						"name": "countryName",
						"title": "Country Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Country name",
					},
					map[string]any{
						"name": "countryTelephoneCode",
						"title": "Country Telephone Code",
						"type": "`$STRING`",
						"short": "Telephone code of the country",
					},
					map[string]any{
						"name": "dialingCode",
						"title": "Dialing Code",
						"type": "`$STRING`",
						"short": "Dialing code",
					},
					map[string]any{
						"name": "distanceKm",
						"title": "Distance Km",
						"type": "`$NUMBER`",
						"short": "Distance from the given point in kilometers",
					},
					map[string]any{
						"name": "elevation",
						"title": "Elevation",
						"type": "`$NUMBER`",
						"short": "Elevation in meters",
					},
					map[string]any{
						"name": "flagImage",
						"title": "Flag Image",
						"type": "`$STRING`",
						"short": "Flag image URL",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Geomelon UUID of the city",
					},
					map[string]any{
						"name": "latitude",
						"title": "Latitude",
						"type": "`$NUMBER`",
						"short": "Latitude coordinate",
					},
					map[string]any{
						"name": "localizedName",
						"title": "Localized Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Localized name according to preferred languages",
					},
					map[string]any{
						"name": "longitude",
						"title": "Longitude",
						"type": "`$NUMBER`",
						"short": "Longitude coordinate",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "City name",
					},
					map[string]any{
						"name": "normalizedName",
						"title": "Normalized Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Normalized city name",
					},
					map[string]any{
						"name": "officialWebsite",
						"title": "Official Website",
						"type": "`$STRING`",
						"short": "Official website URL",
					},
					map[string]any{
						"name": "population",
						"title": "Population",
						"type": "`$NUMBER`",
						"short": "Population of the city",
					},
					map[string]any{
						"name": "postalCode",
						"title": "Postal Code",
						"type": "`$STRING`",
						"short": "Postal code",
					},
					map[string]any{
						"name": "regionCode",
						"title": "Region Code",
						"type": "`$STRING`",
						"req": true,
						"short": "Region code",
					},
					map[string]any{
						"name": "regionId",
						"title": "Region Id",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID of the region",
					},
					map[string]any{
						"name": "regionName",
						"title": "Region Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Region name",
					},
					map[string]any{
						"name": "timeZone",
						"title": "Time Zone",
						"type": "`$STRING`",
						"short": "Time zone",
					},
					map[string]any{
						"name": "translations",
						"title": "Translations",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Translations of the city name in requested languages",
					},
					map[string]any{
						"name": "wikidataId",
						"title": "Wikidata Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Wikidata ID of the city",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "city_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cities/search",
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"cities",
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "country_code",
											"orig": "countryCode",
											"type": "`$STRING`",
											"kind": "query",
											"example": "us",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "max_population",
											"orig": "maxPopulation",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_population",
											"orig": "minPopulation",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "dallas",
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "preferred_language",
											"orig": "preferredLanguages",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en,fr,ja,hi",
										},
										map[string]any{
											"name": "region_id",
											"orig": "regionId",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": "population_desc",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"country_code",
										"limit",
										"max_population",
										"min_population",
										"name",
										"offset",
										"preferred_language",
										"region_id",
										"sort",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cities/byCoordinates/closest",
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"lit": "byCoordinates",
									},
									map[string]any{
										"lit": "closest",
									},
								},
								"parts": []any{
									"cities",
									"byCoordinates",
									"closest",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "lat",
											"orig": "lat",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "lon",
											"orig": "lon",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "preferred_language",
											"orig": "preferredLanguages",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"lat",
										"lon",
										"preferred_language",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cities/byCoordinates/largest",
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"lit": "byCoordinates",
									},
									map[string]any{
										"lit": "largest",
									},
								},
								"parts": []any{
									"cities",
									"byCoordinates",
									"largest",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "lat",
											"orig": "lat",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "lon",
											"orig": "lon",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "preferred_language",
											"orig": "preferredLanguages",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"lat",
										"lon",
										"preferred_language",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"city_translation_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cityId",
						"title": "City Id",
						"type": "`$STRING`",
						"req": true,
						"short": "City ID",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Translation ID",
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
						"req": true,
						"short": "Language code",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Translated name",
					},
					map[string]any{
						"name": "nameNormalized",
						"title": "Name Normalized",
						"type": "`$STRING`",
						"req": true,
						"short": "Normalized translated name",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "city_translation_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cities/{id}/translations",
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "translations",
									},
								},
								"parts": []any{
									"cities",
									"{id}",
									"translations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "translations",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"country": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "drivingSide",
						"title": "Driving Side",
						"type": "`$STRING`",
						"req": true,
						"short": "Driving side of the country",
					},
					map[string]any{
						"name": "emoji",
						"title": "Emoji",
						"type": "`$STRING`",
						"req": true,
						"short": "Emoji of the country",
					},
					map[string]any{
						"name": "headOfGovernment",
						"title": "Head Of Government",
						"type": "`$STRING`",
						"req": true,
						"short": "Head of government of the country",
					},
					map[string]any{
						"name": "headOfState",
						"title": "Head Of State",
						"type": "`$STRING`",
						"req": true,
						"short": "Head of state of the country",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Country ID",
					},
					map[string]any{
						"name": "isoCode",
						"title": "Iso Code",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO code of the country",
					},
					map[string]any{
						"name": "licencePlateCode",
						"title": "Licence Plate Code",
						"type": "`$STRING`",
						"req": true,
						"short": "Licence plate code of the country",
					},
					map[string]any{
						"name": "localizedName",
						"title": "Localized Name",
						"type": "`$STRING`",
						"short": "Name in the first matched preferred language, falls back to name",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the country",
					},
					map[string]any{
						"name": "preferredLanguageId",
						"title": "Preferred Language Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Preferred language ID for the country",
					},
					map[string]any{
						"name": "regions",
						"title": "Regions",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Regions within the country",
					},
					map[string]any{
						"name": "telephoneCode",
						"title": "Telephone Code",
						"type": "`$STRING`",
						"req": true,
						"short": "Telephone code of the country",
					},
					map[string]any{
						"name": "translations",
						"title": "Translations",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Country translations",
					},
					map[string]any{
						"name": "trunkPrefix",
						"title": "Trunk Prefix",
						"type": "`$STRING`",
						"req": true,
						"short": "Trunk prefix of the country",
					},
					map[string]any{
						"name": "wikidataId",
						"title": "Wikidata Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Wikidata ID",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "country",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/countries",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
								},
								"parts": []any{
									"countries",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 200,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Spa",
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "preferred_language",
											"orig": "preferredLanguages",
											"type": "`$STRING`",
											"kind": "query",
											"example": "fr,es,en",
										},
										map[string]any{
											"name": "telephone_code",
											"orig": "telephoneCode",
											"type": "`$STRING`",
											"kind": "query",
											"example": "+34",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"name",
										"offset",
										"preferred_language",
										"telephone_code",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/countries/{id}",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"countries",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"country_translation_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "countryId",
						"title": "Country Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Country ID",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Translation ID",
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
						"req": true,
						"short": "Language code",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Translated name",
					},
					map[string]any{
						"name": "nameNormalized",
						"title": "Name Normalized",
						"type": "`$STRING`",
						"req": true,
						"short": "Normalized translated name",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "country_translation_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/countries/{id}/translations",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "translations",
									},
								},
								"parts": []any{
									"countries",
									"{id}",
									"translations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
										},
									},
									"query": []any{
										map[string]any{
											"name": "preferred_language",
											"orig": "preferredLanguages",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en,fr,hi",
										},
									},
								},
								"select": map[string]any{
									"$action": "translations",
									"exist": []any{
										"id",
										"preferred_language",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"distance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "distanceKm",
						"title": "Distance Km",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Distance between cities",
					},
				},
				"name": "distance",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cities/distance",
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"lit": "distance",
									},
								},
								"parts": []any{
									"cities",
									"distance",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "city1",
											"orig": "city1",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "city2",
											"orig": "city2",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"city1",
										"city2",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"language": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "citiesCount",
						"title": "Cities Count",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Number of cities using this language",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID of the language",
					},
					map[string]any{
						"name": "isoCode",
						"title": "Iso Code",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO code of the language",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the language",
					},
					map[string]any{
						"name": "wikidataId",
						"title": "Wikidata Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Wikidata ID of the language",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "language",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/languages",
								"segments": []any{
									map[string]any{
										"lit": "languages",
									},
								},
								"parts": []any{
									"languages",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 200,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/languages/{id}",
								"segments": []any{
									map[string]any{
										"lit": "languages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"languages",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "6aa910e2-07b2-4f0e-a1ec-194e85c4f35b",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"oneshot": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "emoji",
						"title": "Emoji",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "en",
						"title": "En",
						"type": "`$STRING`",
						"short": "English name — omitted when the requested language is English or no English translation exists",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "City name in the requested language",
					},
					map[string]any{
						"name": "population",
						"title": "Population",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "oneshot",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cities/oneshot/{country}/{language}/{city_name}",
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"lit": "oneshot",
									},
									map[string]any{
										"var": "country",
									},
									map[string]any{
										"var": "language",
									},
									map[string]any{
										"var": "city_name",
									},
								},
								"parts": []any{
									"cities",
									"oneshot",
									"{country}",
									"{language}",
									"{city_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "city_name",
											"orig": "city_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "bar",
										},
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "es",
										},
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "es",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"city_name",
										"country",
										"language",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"region": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
						"req": true,
						"short": "Region code",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$ANY`",
						"req": true,
						"short": "Country details",
					},
					map[string]any{
						"name": "countryId",
						"title": "Country Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Country ID the region belongs to",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID of the region",
					},
					map[string]any{
						"name": "latitude",
						"title": "Latitude",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Latitude of the region center",
					},
					map[string]any{
						"name": "longitude",
						"title": "Longitude",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Longitude of the region center",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the region",
					},
					map[string]any{
						"name": "population",
						"title": "Population",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Population of the region",
					},
					map[string]any{
						"name": "wikidataId",
						"title": "Wikidata Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Wikidata ID",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "region",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/countries/{id}/regions",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"var": "country_id",
									},
									map[string]any{
										"lit": "regions",
									},
								},
								"parts": []any{
									"countries",
									"{country_id}",
									"regions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "country_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "country_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"country_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/regions",
								"segments": []any{
									map[string]any{
										"lit": "regions",
									},
								},
								"parts": []any{
									"regions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "country_id",
											"orig": "countryId",
											"type": "`$STRING`",
											"kind": "query",
											"example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"country_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/regions/{id}",
								"segments": []any{
									map[string]any{
										"lit": "regions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"regions",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "63df31a3-ca32-4970-8b5e-bcf9a11426e6",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.country",
						},
					},
				},
			},
			"region_translation_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Translation ID",
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
						"req": true,
						"short": "Language code",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Translated name",
					},
					map[string]any{
						"name": "nameNormalized",
						"title": "Name Normalized",
						"type": "`$STRING`",
						"req": true,
						"short": "Normalized translated name",
					},
					map[string]any{
						"name": "regionId",
						"title": "Region Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Region ID",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "region_translation_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/regions/{id}/translations",
								"segments": []any{
									map[string]any{
										"lit": "regions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "translations",
									},
								},
								"parts": []any{
									"regions",
									"{id}",
									"translations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "63df31a3-ca32-4970-8b5e-bcf9a11426e6",
										},
									},
									"query": []any{
										map[string]any{
											"name": "preferred_language",
											"orig": "preferredLanguages",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en,fr,hi",
										},
									},
								},
								"select": map[string]any{
									"$action": "translations",
									"exist": []any{
										"id",
										"preferred_language",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"settlement_type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
						"short": "Description of the settlement type",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Settlement Type ID",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the settlement type",
					},
					map[string]any{
						"name": "nameNormalized",
						"title": "Name Normalized",
						"type": "`$STRING`",
						"req": true,
						"short": "Normalized name of the settlement type",
					},
					map[string]any{
						"name": "wikidataId",
						"title": "Wikidata Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Wikidata ID",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "settlement_type",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cities/{id}/settlement-types",
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"var": "city_id",
									},
									map[string]any{
										"lit": "settlement-types",
									},
								},
								"parts": []any{
									"cities",
									"{city_id}",
									"settlement-types",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "city_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "city_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"city_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.city",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
