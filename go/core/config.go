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
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://geomelon.p.rapidapi.com",
			"auth": map[string]any{
				"prefix": "",
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
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "countryCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryEmoji",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryTelephoneCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dialingCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distanceKm",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "elevation",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "flagImage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "latitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "localizedName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "longitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "normalizedName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "officialWebsite",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "population",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "postalCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regionCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regionId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regionName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timeZone",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "translations",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "wikidataId",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "city",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities/{id}",
								"parts": []any{
									"cities",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "countryCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryEmoji",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryTelephoneCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dialingCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distanceKm",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "elevation",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "flagImage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "latitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "localizedName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "longitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "normalizedName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "officialWebsite",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "population",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "postalCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regionCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regionId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regionName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timeZone",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "translations",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "wikidataId",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "city_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "us",
											"kind": "query",
											"name": "country_code",
											"orig": "country_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_population",
											"orig": "max_population",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_population",
											"orig": "min_population",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "dallas",
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "en,fr,ja,hi",
											"kind": "query",
											"name": "preferred_language",
											"orig": "preferred_language",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "region_id",
											"orig": "region_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "population_desc",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities/search",
								"parts": []any{
									"cities",
									"search",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "lat",
											"orig": "lat",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "lon",
											"orig": "lon",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "preferred_language",
											"orig": "preferred_language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities/byCoordinates/closest",
								"parts": []any{
									"cities",
									"byCoordinates",
									"closest",
								},
								"select": map[string]any{
									"exist": []any{
										"lat",
										"lon",
										"preferred_language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "lat",
											"orig": "lat",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "lon",
											"orig": "lon",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "preferred_language",
											"orig": "preferred_language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities/byCoordinates/largest",
								"parts": []any{
									"cities",
									"byCoordinates",
									"largest",
								},
								"select": map[string]any{
									"exist": []any{
										"lat",
										"lon",
										"preferred_language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameNormalized",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "city_translation_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities/{id}/translations",
								"parts": []any{
									"cities",
									"{id}",
									"translations",
								},
								"select": map[string]any{
									"$action": "translations",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "emoji",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headOfGovernment",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headOfState",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isoCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "licencePlateCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "localizedName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preferredLanguageId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regions",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "telephoneCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "translations",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trunkPrefix",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wikidataId",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "country",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 200,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "Spa",
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "fr,es,en",
											"kind": "query",
											"name": "preferred_language",
											"orig": "preferred_language",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "+34",
											"kind": "query",
											"name": "telephone_code",
											"orig": "telephone_code",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/countries",
								"parts": []any{
									"countries",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/{id}",
								"parts": []any{
									"countries",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameNormalized",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "country_translation_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "en,fr,hi",
											"kind": "query",
											"name": "preferred_language",
											"orig": "preferred_language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/{id}/translations",
								"parts": []any{
									"countries",
									"{id}",
									"translations",
								},
								"select": map[string]any{
									"$action": "translations",
									"exist": []any{
										"id",
										"preferred_language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "distance",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "city1",
											"orig": "city1",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "city2",
											"orig": "city2",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities/distance",
								"parts": []any{
									"cities",
									"distance",
								},
								"select": map[string]any{
									"exist": []any{
										"city1",
										"city2",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isoCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wikidataId",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "language",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 200,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/languages",
								"parts": []any{
									"languages",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "6aa910e2-07b2-4f0e-a1ec-194e85c4f35b",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/languages/{id}",
								"parts": []any{
									"languages",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "en",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "population",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "oneshot",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "bar",
											"kind": "param",
											"name": "city_name",
											"orig": "city_name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "es",
											"kind": "param",
											"name": "country",
											"orig": "country",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "es",
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities/oneshot/{country}/{language}/{city_name}",
								"parts": []any{
									"cities",
									"oneshot",
									"{country}",
									"{language}",
									"{city_name}",
								},
								"select": map[string]any{
									"exist": []any{
										"city_name",
										"country",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"oneshot",
						},
					},
				},
			},
			"region": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "drivingSide",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "emoji",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headOfGovernment",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headOfState",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isoCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "latitude",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "licencePlateCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "localizedName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "longitude",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "population",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "preferredLanguageId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "telephoneCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trunkPrefix",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wikidataId",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "region",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
											"kind": "param",
											"name": "country_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/{id}/regions",
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
								"select": map[string]any{
									"exist": []any{
										"country_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "509a2a0a-5ec6-483e-8381-4bea4422ac26",
											"kind": "query",
											"name": "country_id",
											"orig": "country_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/regions",
								"parts": []any{
									"regions",
								},
								"select": map[string]any{
									"exist": []any{
										"country_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "63df31a3-ca32-4970-8b5e-bcf9a11426e6",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/regions/{id}",
								"parts": []any{
									"regions",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.country`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"country",
						},
					},
				},
			},
			"region_translation_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameNormalized",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regionId",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "region_translation_dto",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "63df31a3-ca32-4970-8b5e-bcf9a11426e6",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "en,fr,hi",
											"kind": "query",
											"name": "preferred_language",
											"orig": "preferred_language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/regions/{id}/translations",
								"parts": []any{
									"regions",
									"{id}",
									"translations",
								},
								"select": map[string]any{
									"$action": "translations",
									"exist": []any{
										"id",
										"preferred_language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameNormalized",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wikidataId",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "settlement_type",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "city_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities/{id}/settlement-types",
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
								"select": map[string]any{
									"exist": []any{
										"city_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"city",
						},
					},
				},
			},
		},
	}
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
