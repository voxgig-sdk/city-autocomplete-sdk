<?php
declare(strict_types=1);

// CityAutocomplete SDK configuration

class CityAutocompleteConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CityAutocomplete",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://geomelon.p.rapidapi.com",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "city" => [],
                    "city_dto" => [],
                    "city_translation_dto" => [],
                    "country" => [],
                    "country_translation_dto" => [],
                    "distance" => [],
                    "language" => [],
                    "oneshot" => [],
                    "region" => [],
                    "region_translation_dto" => [],
                    "settlement_type" => [],
                ],
            ],
            "entity" => [
        'city' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'area',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'country_code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'country_emoji',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'country_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'country_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'country_telephone_code',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'dialing_code',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'distance_km',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'elevation',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'flag_image',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'latitude',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'localized_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'longitude',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'normalized_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'official_website',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'population',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'postal_code',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'region_code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'region_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'region_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'time_zone',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'translation',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'wikidata_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 24,
            ],
          ],
          'name' => 'city',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/cities/{id}',
                  'parts' => [
                    'cities',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'city_dto' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'area',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'country_code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'country_emoji',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'country_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'country_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'country_telephone_code',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'dialing_code',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'distance_km',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'elevation',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'flag_image',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'latitude',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'localized_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'longitude',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'normalized_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'official_website',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'population',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'postal_code',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'region_code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'region_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'region_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'time_zone',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'translation',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'wikidata_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 24,
            ],
          ],
          'name' => 'city_dto',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'us',
                        'kind' => 'query',
                        'name' => 'country_code',
                        'orig' => 'country_code',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'max_population',
                        'orig' => 'max_population',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'min_population',
                        'orig' => 'min_population',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'dallas',
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'en,fr,ja,hi',
                        'kind' => 'query',
                        'name' => 'preferred_language',
                        'orig' => 'preferred_language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'region_id',
                        'orig' => 'region_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'population_desc',
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/cities/search',
                  'parts' => [
                    'cities',
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'country_code',
                      'limit',
                      'max_population',
                      'min_population',
                      'name',
                      'offset',
                      'preferred_language',
                      'region_id',
                      'sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'lat',
                        'orig' => 'lat',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'lon',
                        'orig' => 'lon',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'preferred_language',
                        'orig' => 'preferred_language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/cities/byCoordinates/closest',
                  'parts' => [
                    'cities',
                    'byCoordinates',
                    'closest',
                  ],
                  'select' => [
                    'exist' => [
                      'lat',
                      'lon',
                      'preferred_language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'lat',
                        'orig' => 'lat',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'lon',
                        'orig' => 'lon',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'preferred_language',
                        'orig' => 'preferred_language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/cities/byCoordinates/largest',
                  'parts' => [
                    'cities',
                    'byCoordinates',
                    'largest',
                  ],
                  'select' => [
                    'exist' => [
                      'lat',
                      'lon',
                      'preferred_language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 2,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'city_translation_dto' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'city_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'language',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'name_normalized',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
          ],
          'name' => 'city_translation_dto',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/cities/{id}/translations',
                  'parts' => [
                    'cities',
                    '{id}',
                    'translations',
                  ],
                  'select' => [
                    '$action' => 'translations',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'country' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'driving_side',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'emoji',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'head_of_government',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'head_of_state',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'iso_code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'licence_plate_code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'localized_name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'preferred_language_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'region',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'telephone_code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'translation',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'trunk_prefix',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'wikidata_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
          ],
          'name' => 'country',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 200,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'Spa',
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'fr,es,en',
                        'kind' => 'query',
                        'name' => 'preferred_language',
                        'orig' => 'preferred_language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '+34',
                        'kind' => 'query',
                        'name' => 'telephone_code',
                        'orig' => 'telephone_code',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/countries',
                  'parts' => [
                    'countries',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'name',
                      'offset',
                      'preferred_language',
                      'telephone_code',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '509a2a0a-5ec6-483e-8381-4bea4422ac26',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/countries/{id}',
                  'parts' => [
                    'countries',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'country_translation_dto' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'country_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'language',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'name_normalized',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
          ],
          'name' => 'country_translation_dto',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '509a2a0a-5ec6-483e-8381-4bea4422ac26',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'en,fr,hi',
                        'kind' => 'query',
                        'name' => 'preferred_language',
                        'orig' => 'preferred_language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/countries/{id}/translations',
                  'parts' => [
                    'countries',
                    '{id}',
                    'translations',
                  ],
                  'select' => [
                    '$action' => 'translations',
                    'exist' => [
                      'id',
                      'preferred_language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'distance' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'distance_km',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 0,
            ],
          ],
          'name' => 'distance',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'city1',
                        'orig' => 'city1',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'city2',
                        'orig' => 'city2',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/cities/distance',
                  'parts' => [
                    'cities',
                    'distance',
                  ],
                  'select' => [
                    'exist' => [
                      'city1',
                      'city2',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'language' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'cities_count',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'iso_code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'wikidata_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
          ],
          'name' => 'language',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 200,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/languages',
                  'parts' => [
                    'languages',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'offset',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '6aa910e2-07b2-4f0e-a1ec-194e85c4f35b',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/languages/{id}',
                  'parts' => [
                    'languages',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'oneshot' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'emoji',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'en',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'population',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
          ],
          'name' => 'oneshot',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'bar',
                        'kind' => 'param',
                        'name' => 'city_name',
                        'orig' => 'city_name',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'es',
                        'kind' => 'param',
                        'name' => 'country',
                        'orig' => 'country',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                      [
                        'active' => true,
                        'example' => 'es',
                        'kind' => 'param',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 2,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/cities/oneshot/{country}/{language}/{city_name}',
                  'parts' => [
                    'cities',
                    'oneshot',
                    '{country}',
                    '{language}',
                    '{city_name}',
                  ],
                  'select' => [
                    'exist' => [
                      'city_name',
                      'country',
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'oneshot',
              ],
            ],
          ],
        ],
        'region' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'country',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'country_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'latitude',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'longitude',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'population',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'wikidata_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
          ],
          'name' => 'region',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '509a2a0a-5ec6-483e-8381-4bea4422ac26',
                        'kind' => 'param',
                        'name' => 'country_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/countries/{id}/regions',
                  'parts' => [
                    'countries',
                    '{country_id}',
                    'regions',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'country_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'country_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '509a2a0a-5ec6-483e-8381-4bea4422ac26',
                        'kind' => 'query',
                        'name' => 'country_id',
                        'orig' => 'country_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/regions',
                  'parts' => [
                    'regions',
                  ],
                  'select' => [
                    'exist' => [
                      'country_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '63df31a3-ca32-4970-8b5e-bcf9a11426e6',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/regions/{id}',
                  'parts' => [
                    'regions',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'country',
              ],
            ],
          ],
        ],
        'region_translation_dto' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'language',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name_normalized',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'region_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
          ],
          'name' => 'region_translation_dto',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '63df31a3-ca32-4970-8b5e-bcf9a11426e6',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'en,fr,hi',
                        'kind' => 'query',
                        'name' => 'preferred_language',
                        'orig' => 'preferred_language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/regions/{id}/translations',
                  'parts' => [
                    'regions',
                    '{id}',
                    'translations',
                  ],
                  'select' => [
                    '$action' => 'translations',
                    'exist' => [
                      'id',
                      'preferred_language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'settlement_type' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name_normalized',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'wikidata_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
          ],
          'name' => 'settlement_type',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'city_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/cities/{id}/settlement-types',
                  'parts' => [
                    'cities',
                    '{city_id}',
                    'settlement-types',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'city_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'city_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'city',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CityAutocompleteFeatures::make_feature($name);
    }
}
