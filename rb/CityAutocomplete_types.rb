# frozen_string_literal: true

# Typed models for the CityAutocomplete SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# City entity data model.
#
# @!attribute [rw] area
#   @return [Float, nil]
#
# @!attribute [rw] country_code
#   @return [String]
#
# @!attribute [rw] country_emoji
#   @return [String]
#
# @!attribute [rw] country_id
#   @return [String]
#
# @!attribute [rw] country_name
#   @return [String]
#
# @!attribute [rw] country_telephone_code
#   @return [String, nil]
#
# @!attribute [rw] dialing_code
#   @return [String, nil]
#
# @!attribute [rw] distance_km
#   @return [Float, nil]
#
# @!attribute [rw] elevation
#   @return [Float, nil]
#
# @!attribute [rw] flag_image
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] localized_name
#   @return [String]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] normalized_name
#   @return [String]
#
# @!attribute [rw] official_website
#   @return [String, nil]
#
# @!attribute [rw] population
#   @return [Float, nil]
#
# @!attribute [rw] postal_code
#   @return [String, nil]
#
# @!attribute [rw] region_code
#   @return [String]
#
# @!attribute [rw] region_id
#   @return [String]
#
# @!attribute [rw] region_name
#   @return [String]
#
# @!attribute [rw] time_zone
#   @return [String, nil]
#
# @!attribute [rw] translation
#   @return [Array]
#
# @!attribute [rw] wikidata_id
#   @return [String]
City = Struct.new(
  :area,
  :country_code,
  :country_emoji,
  :country_id,
  :country_name,
  :country_telephone_code,
  :dialing_code,
  :distance_km,
  :elevation,
  :flag_image,
  :id,
  :latitude,
  :localized_name,
  :longitude,
  :name,
  :normalized_name,
  :official_website,
  :population,
  :postal_code,
  :region_code,
  :region_id,
  :region_name,
  :time_zone,
  :translation,
  :wikidata_id,
  keyword_init: true
)

# Request payload for City#load.
#
# @!attribute [rw] id
#   @return [String]
CityLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# CityDto entity data model.
#
# @!attribute [rw] area
#   @return [Float, nil]
#
# @!attribute [rw] country_code
#   @return [String]
#
# @!attribute [rw] country_emoji
#   @return [String]
#
# @!attribute [rw] country_id
#   @return [String]
#
# @!attribute [rw] country_name
#   @return [String]
#
# @!attribute [rw] country_telephone_code
#   @return [String, nil]
#
# @!attribute [rw] dialing_code
#   @return [String, nil]
#
# @!attribute [rw] distance_km
#   @return [Float, nil]
#
# @!attribute [rw] elevation
#   @return [Float, nil]
#
# @!attribute [rw] flag_image
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] localized_name
#   @return [String]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] normalized_name
#   @return [String]
#
# @!attribute [rw] official_website
#   @return [String, nil]
#
# @!attribute [rw] population
#   @return [Float, nil]
#
# @!attribute [rw] postal_code
#   @return [String, nil]
#
# @!attribute [rw] region_code
#   @return [String]
#
# @!attribute [rw] region_id
#   @return [String]
#
# @!attribute [rw] region_name
#   @return [String]
#
# @!attribute [rw] time_zone
#   @return [String, nil]
#
# @!attribute [rw] translation
#   @return [Array]
#
# @!attribute [rw] wikidata_id
#   @return [String]
CityDto = Struct.new(
  :area,
  :country_code,
  :country_emoji,
  :country_id,
  :country_name,
  :country_telephone_code,
  :dialing_code,
  :distance_km,
  :elevation,
  :flag_image,
  :id,
  :latitude,
  :localized_name,
  :longitude,
  :name,
  :normalized_name,
  :official_website,
  :population,
  :postal_code,
  :region_code,
  :region_id,
  :region_name,
  :time_zone,
  :translation,
  :wikidata_id,
  keyword_init: true
)

# Request payload for CityDto#list.
#
# @!attribute [rw] area
#   @return [Float, nil]
#
# @!attribute [rw] country_code
#   @return [String, nil]
#
# @!attribute [rw] country_emoji
#   @return [String, nil]
#
# @!attribute [rw] country_id
#   @return [String, nil]
#
# @!attribute [rw] country_name
#   @return [String, nil]
#
# @!attribute [rw] country_telephone_code
#   @return [String, nil]
#
# @!attribute [rw] dialing_code
#   @return [String, nil]
#
# @!attribute [rw] distance_km
#   @return [Float, nil]
#
# @!attribute [rw] elevation
#   @return [Float, nil]
#
# @!attribute [rw] flag_image
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] localized_name
#   @return [String, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] normalized_name
#   @return [String, nil]
#
# @!attribute [rw] official_website
#   @return [String, nil]
#
# @!attribute [rw] population
#   @return [Float, nil]
#
# @!attribute [rw] postal_code
#   @return [String, nil]
#
# @!attribute [rw] region_code
#   @return [String, nil]
#
# @!attribute [rw] region_id
#   @return [String, nil]
#
# @!attribute [rw] region_name
#   @return [String, nil]
#
# @!attribute [rw] time_zone
#   @return [String, nil]
#
# @!attribute [rw] translation
#   @return [Array, nil]
#
# @!attribute [rw] wikidata_id
#   @return [String, nil]
CityDtoListMatch = Struct.new(
  :area,
  :country_code,
  :country_emoji,
  :country_id,
  :country_name,
  :country_telephone_code,
  :dialing_code,
  :distance_km,
  :elevation,
  :flag_image,
  :id,
  :latitude,
  :localized_name,
  :longitude,
  :name,
  :normalized_name,
  :official_website,
  :population,
  :postal_code,
  :region_code,
  :region_id,
  :region_name,
  :time_zone,
  :translation,
  :wikidata_id,
  keyword_init: true
)

# CityTranslationDto entity data model.
#
# @!attribute [rw] city_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] name_normalized
#   @return [String]
CityTranslationDto = Struct.new(
  :city_id,
  :id,
  :language,
  :name,
  :name_normalized,
  keyword_init: true
)

# Request payload for CityTranslationDto#list.
#
# @!attribute [rw] id
#   @return [String]
CityTranslationDtoListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Country entity data model.
#
# @!attribute [rw] driving_side
#   @return [String]
#
# @!attribute [rw] emoji
#   @return [String]
#
# @!attribute [rw] head_of_government
#   @return [String]
#
# @!attribute [rw] head_of_state
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] iso_code
#   @return [String]
#
# @!attribute [rw] licence_plate_code
#   @return [String]
#
# @!attribute [rw] localized_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] preferred_language_id
#   @return [String]
#
# @!attribute [rw] region
#   @return [Array]
#
# @!attribute [rw] telephone_code
#   @return [String]
#
# @!attribute [rw] translation
#   @return [Array]
#
# @!attribute [rw] trunk_prefix
#   @return [String]
#
# @!attribute [rw] wikidata_id
#   @return [String]
Country = Struct.new(
  :driving_side,
  :emoji,
  :head_of_government,
  :head_of_state,
  :id,
  :iso_code,
  :licence_plate_code,
  :localized_name,
  :name,
  :preferred_language_id,
  :region,
  :telephone_code,
  :translation,
  :trunk_prefix,
  :wikidata_id,
  keyword_init: true
)

# Request payload for Country#load.
#
# @!attribute [rw] id
#   @return [String]
CountryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Country#list.
#
# @!attribute [rw] driving_side
#   @return [String, nil]
#
# @!attribute [rw] emoji
#   @return [String, nil]
#
# @!attribute [rw] head_of_government
#   @return [String, nil]
#
# @!attribute [rw] head_of_state
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] iso_code
#   @return [String, nil]
#
# @!attribute [rw] licence_plate_code
#   @return [String, nil]
#
# @!attribute [rw] localized_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] preferred_language_id
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [Array, nil]
#
# @!attribute [rw] telephone_code
#   @return [String, nil]
#
# @!attribute [rw] translation
#   @return [Array, nil]
#
# @!attribute [rw] trunk_prefix
#   @return [String, nil]
#
# @!attribute [rw] wikidata_id
#   @return [String, nil]
CountryListMatch = Struct.new(
  :driving_side,
  :emoji,
  :head_of_government,
  :head_of_state,
  :id,
  :iso_code,
  :licence_plate_code,
  :localized_name,
  :name,
  :preferred_language_id,
  :region,
  :telephone_code,
  :translation,
  :trunk_prefix,
  :wikidata_id,
  keyword_init: true
)

# CountryTranslationDto entity data model.
#
# @!attribute [rw] country_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] name_normalized
#   @return [String]
CountryTranslationDto = Struct.new(
  :country_id,
  :id,
  :language,
  :name,
  :name_normalized,
  keyword_init: true
)

# Request payload for CountryTranslationDto#list.
#
# @!attribute [rw] id
#   @return [String]
CountryTranslationDtoListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Distance entity data model.
#
# @!attribute [rw] distance_km
#   @return [Float]
Distance = Struct.new(
  :distance_km,
  keyword_init: true
)

# Request payload for Distance#load.
#
# @!attribute [rw] distance_km
#   @return [Float, nil]
DistanceLoadMatch = Struct.new(
  :distance_km,
  keyword_init: true
)

# Language entity data model.
#
# @!attribute [rw] cities_count
#   @return [Float]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] iso_code
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] wikidata_id
#   @return [String]
Language = Struct.new(
  :cities_count,
  :id,
  :iso_code,
  :name,
  :wikidata_id,
  keyword_init: true
)

# Request payload for Language#load.
#
# @!attribute [rw] id
#   @return [String]
LanguageLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Language#list.
#
# @!attribute [rw] cities_count
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] iso_code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] wikidata_id
#   @return [String, nil]
LanguageListMatch = Struct.new(
  :cities_count,
  :id,
  :iso_code,
  :name,
  :wikidata_id,
  keyword_init: true
)

# Oneshot entity data model.
#
# @!attribute [rw] emoji
#   @return [Hash]
#
# @!attribute [rw] en
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] population
#   @return [Hash]
Oneshot = Struct.new(
  :emoji,
  :en,
  :id,
  :name,
  :population,
  keyword_init: true
)

# Request payload for Oneshot#list.
#
# @!attribute [rw] city_name
#   @return [String]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
OneshotListMatch = Struct.new(
  :city_name,
  :country,
  :language,
  keyword_init: true
)

# Region entity data model.
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] country
#   @return [Object]
#
# @!attribute [rw] country_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] population
#   @return [Float]
#
# @!attribute [rw] wikidata_id
#   @return [String]
Region = Struct.new(
  :code,
  :country,
  :country_id,
  :id,
  :latitude,
  :longitude,
  :name,
  :population,
  :wikidata_id,
  keyword_init: true
)

# Request payload for Region#load.
#
# @!attribute [rw] id
#   @return [String]
RegionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Region#list.
#
# @!attribute [rw] country_id
#   @return [String, nil]
RegionListMatch = Struct.new(
  :country_id,
  keyword_init: true
)

# RegionTranslationDto entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] name_normalized
#   @return [String]
#
# @!attribute [rw] region_id
#   @return [String]
RegionTranslationDto = Struct.new(
  :id,
  :language,
  :name,
  :name_normalized,
  :region_id,
  keyword_init: true
)

# Request payload for RegionTranslationDto#list.
#
# @!attribute [rw] id
#   @return [String]
RegionTranslationDtoListMatch = Struct.new(
  :id,
  keyword_init: true
)

# SettlementType entity data model.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] name_normalized
#   @return [String]
#
# @!attribute [rw] wikidata_id
#   @return [String]
SettlementType = Struct.new(
  :description,
  :id,
  :name,
  :name_normalized,
  :wikidata_id,
  keyword_init: true
)

# Request payload for SettlementType#list.
#
# @!attribute [rw] city_id
#   @return [String]
SettlementTypeListMatch = Struct.new(
  :city_id,
  keyword_init: true
)

