// Typed models for the CityAutocomplete SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface City {
  area?: number
  country_code: string
  country_emoji: string
  country_id: string
  country_name: string
  country_telephone_code?: string
  dialing_code?: string
  distance_km?: number
  elevation?: number
  flag_image?: string
  id: string
  latitude?: number
  localized_name: string
  longitude?: number
  name: string
  normalized_name: string
  official_website?: string
  population?: number
  postal_code?: string
  region_code: string
  region_id: string
  region_name: string
  time_zone?: string
  translation: any[]
  wikidata_id: string
}

export interface CityLoadMatch {
  id: string
}

export interface CityDto {
  area?: number
  country_code: string
  country_emoji: string
  country_id: string
  country_name: string
  country_telephone_code?: string
  dialing_code?: string
  distance_km?: number
  elevation?: number
  flag_image?: string
  id: string
  latitude?: number
  localized_name: string
  longitude?: number
  name: string
  normalized_name: string
  official_website?: string
  population?: number
  postal_code?: string
  region_code: string
  region_id: string
  region_name: string
  time_zone?: string
  translation: any[]
  wikidata_id: string
}

export interface CityDtoListMatch {
  area?: number
  country_code?: string
  country_emoji?: string
  country_id?: string
  country_name?: string
  country_telephone_code?: string
  dialing_code?: string
  distance_km?: number
  elevation?: number
  flag_image?: string
  id?: string
  latitude?: number
  localized_name?: string
  longitude?: number
  name?: string
  normalized_name?: string
  official_website?: string
  population?: number
  postal_code?: string
  region_code?: string
  region_id?: string
  region_name?: string
  time_zone?: string
  translation?: any[]
  wikidata_id?: string
}

export interface CityTranslationDto {
  city_id: string
  id: string
  language: string
  name: string
  name_normalized: string
}

export interface CityTranslationDtoListMatch {
  id: string
}

export interface Country {
  driving_side: string
  emoji: string
  head_of_government: string
  head_of_state: string
  id: string
  iso_code: string
  licence_plate_code: string
  localized_name?: string
  name: string
  preferred_language_id: string
  region: any[]
  telephone_code: string
  translation: any[]
  trunk_prefix: string
  wikidata_id: string
}

export interface CountryLoadMatch {
  id: string
}

export interface CountryListMatch {
  driving_side?: string
  emoji?: string
  head_of_government?: string
  head_of_state?: string
  id?: string
  iso_code?: string
  licence_plate_code?: string
  localized_name?: string
  name?: string
  preferred_language_id?: string
  region?: any[]
  telephone_code?: string
  translation?: any[]
  trunk_prefix?: string
  wikidata_id?: string
}

export interface CountryTranslationDto {
  country_id: string
  id: string
  language: string
  name: string
  name_normalized: string
}

export interface CountryTranslationDtoListMatch {
  id: string
}

export interface Distance {
  distance_km: number
}

export interface DistanceLoadMatch {
  distance_km?: number
}

export interface Language {
  cities_count: number
  id: string
  iso_code: string
  name: string
  wikidata_id: string
}

export interface LanguageLoadMatch {
  id: string
}

export interface LanguageListMatch {
  cities_count?: number
  id?: string
  iso_code?: string
  name?: string
  wikidata_id?: string
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
  country: any
  country_id: string
  id: string
  latitude: number
  longitude: number
  name: string
  population: number
  wikidata_id: string
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
  name_normalized: string
  region_id: string
}

export interface RegionTranslationDtoListMatch {
  id: string
}

export interface SettlementType {
  description: string
  id: string
  name: string
  name_normalized: string
  wikidata_id: string
}

export interface SettlementTypeListMatch {
  city_id: string
}

