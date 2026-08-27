// Typed models for the CityAutocomplete SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface City {
  area?: number
  countryCode: string
  countryEmoji: string
  countryId: string
  countryName: string
  countryTelephoneCode?: string
  dialingCode?: string
  distanceKm?: number
  elevation?: number
  flagImage?: string
  id: string
  latitude?: number
  localizedName: string
  longitude?: number
  name: string
  normalizedName: string
  officialWebsite?: string
  population?: number
  postalCode?: string
  regionCode: string
  regionId: string
  regionName: string
  timeZone?: string
  translations: any[]
  wikidataId: string
}

export interface CityLoadMatch {
  id: string
}

export interface CityDto {
  area?: number
  countryCode: string
  countryEmoji: string
  countryId: string
  countryName: string
  countryTelephoneCode?: string
  dialingCode?: string
  distanceKm?: number
  elevation?: number
  flagImage?: string
  id: string
  latitude?: number
  localizedName: string
  longitude?: number
  name: string
  normalizedName: string
  officialWebsite?: string
  population?: number
  postalCode?: string
  regionCode: string
  regionId: string
  regionName: string
  timeZone?: string
  translations: any[]
  wikidataId: string
}

export interface CityDtoListMatch {
  country_code?: string
  limit?: number
  max_population?: number
  min_population?: number
  name?: string
  offset?: number
  preferred_language?: string
  region_id?: string
  sort?: string
}

export interface CityTranslationDto {
  cityId: string
  id: string
  language: string
  name: string
  nameNormalized: string
}

export interface CityTranslationDtoListMatch {
  id: string

  // Selects a custom action instead of the plain list:
  //   'translations'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Country {
  drivingSide: string
  emoji: string
  headOfGovernment: string
  headOfState: string
  id: string
  isoCode: string
  licencePlateCode: string
  localizedName?: string
  name: string
  preferredLanguageId: string
  regions: any[]
  telephoneCode: string
  translations: any[]
  trunkPrefix: string
  wikidataId: string
}

export interface CountryLoadMatch {
  id: string
}

export interface CountryListMatch {
  limit?: number
  name?: string
  offset?: number
  preferred_language?: string
  telephone_code?: string
}

export interface CountryTranslationDto {
  countryId: string
  id: string
  language: string
  name: string
  nameNormalized: string
}

export interface CountryTranslationDtoListMatch {
  id: string
  preferred_language?: string

  // Selects a custom action instead of the plain list:
  //   'translations'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Distance {
  distanceKm: number
}

export interface DistanceLoadMatch {
  city1: string
  city2: string
}

export interface Language {
  citiesCount: number
  id: string
  isoCode: string
  name: string
  wikidataId: string
}

export interface LanguageLoadMatch {
  id: string
}

export interface LanguageListMatch {
  limit?: number
  offset?: number
}

export interface Oneshot {
  emoji: Record<string, any>
  en?: string
  id: string
  name: string
  population: Record<string, any>
}

export interface OneshotListMatch {
  city_name: string
  country: string
  language: string
}

export interface Region {
  code: string
  countryId: string
  drivingSide: string
  emoji: string
  headOfGovernment: string
  headOfState: string
  id: string
  isoCode: string
  latitude: number
  licencePlateCode: string
  localizedName?: string
  longitude: number
  name: string
  population: number
  preferredLanguageId: string
  telephoneCode: string
  trunkPrefix: string
  wikidataId: string
}

export interface RegionLoadMatch {
  id: string
}

export interface RegionListMatch {
  country_id?: string
}

export interface RegionTranslationDto {
  id: string
  language: string
  name: string
  nameNormalized: string
  regionId: string
}

export interface RegionTranslationDtoListMatch {
  id: string
  preferred_language?: string

  // Selects a custom action instead of the plain list:
  //   'translations'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SettlementType {
  description: string
  id: string
  name: string
  nameNormalized: string
  wikidataId: string
}

export interface SettlementTypeListMatch {
  city_id: string
}

