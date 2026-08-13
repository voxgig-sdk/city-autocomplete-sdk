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
# @!attribute [rw] countryCode
#   @return [String]
#
# @!attribute [rw] countryEmoji
#   @return [String]
#
# @!attribute [rw] countryId
#   @return [String]
#
# @!attribute [rw] countryName
#   @return [String]
#
# @!attribute [rw] countryTelephoneCode
#   @return [String, nil]
#
# @!attribute [rw] dialingCode
#   @return [String, nil]
#
# @!attribute [rw] distanceKm
#   @return [Float, nil]
#
# @!attribute [rw] elevation
#   @return [Float, nil]
#
# @!attribute [rw] flagImage
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] localizedName
#   @return [String]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] normalizedName
#   @return [String]
#
# @!attribute [rw] officialWebsite
#   @return [String, nil]
#
# @!attribute [rw] population
#   @return [Float, nil]
#
# @!attribute [rw] postalCode
#   @return [String, nil]
#
# @!attribute [rw] regionCode
#   @return [String]
#
# @!attribute [rw] regionId
#   @return [String]
#
# @!attribute [rw] regionName
#   @return [String]
#
# @!attribute [rw] timeZone
#   @return [String, nil]
#
# @!attribute [rw] translations
#   @return [Array]
#
# @!attribute [rw] wikidataId
#   @return [String]
City = Struct.new(
  :area,
  :countryCode,
  :countryEmoji,
  :countryId,
  :countryName,
  :countryTelephoneCode,
  :dialingCode,
  :distanceKm,
  :elevation,
  :flagImage,
  :id,
  :latitude,
  :localizedName,
  :longitude,
  :name,
  :normalizedName,
  :officialWebsite,
  :population,
  :postalCode,
  :regionCode,
  :regionId,
  :regionName,
  :timeZone,
  :translations,
  :wikidataId,
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
# @!attribute [rw] countryCode
#   @return [String]
#
# @!attribute [rw] countryEmoji
#   @return [String]
#
# @!attribute [rw] countryId
#   @return [String]
#
# @!attribute [rw] countryName
#   @return [String]
#
# @!attribute [rw] countryTelephoneCode
#   @return [String, nil]
#
# @!attribute [rw] dialingCode
#   @return [String, nil]
#
# @!attribute [rw] distanceKm
#   @return [Float, nil]
#
# @!attribute [rw] elevation
#   @return [Float, nil]
#
# @!attribute [rw] flagImage
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] localizedName
#   @return [String]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] normalizedName
#   @return [String]
#
# @!attribute [rw] officialWebsite
#   @return [String, nil]
#
# @!attribute [rw] population
#   @return [Float, nil]
#
# @!attribute [rw] postalCode
#   @return [String, nil]
#
# @!attribute [rw] regionCode
#   @return [String]
#
# @!attribute [rw] regionId
#   @return [String]
#
# @!attribute [rw] regionName
#   @return [String]
#
# @!attribute [rw] timeZone
#   @return [String, nil]
#
# @!attribute [rw] translations
#   @return [Array]
#
# @!attribute [rw] wikidataId
#   @return [String]
CityDto = Struct.new(
  :area,
  :countryCode,
  :countryEmoji,
  :countryId,
  :countryName,
  :countryTelephoneCode,
  :dialingCode,
  :distanceKm,
  :elevation,
  :flagImage,
  :id,
  :latitude,
  :localizedName,
  :longitude,
  :name,
  :normalizedName,
  :officialWebsite,
  :population,
  :postalCode,
  :regionCode,
  :regionId,
  :regionName,
  :timeZone,
  :translations,
  :wikidataId,
  keyword_init: true
)

# Request payload for CityDto#list.
#
# @!attribute [rw] area
#   @return [Float, nil]
#
# @!attribute [rw] countryCode
#   @return [String, nil]
#
# @!attribute [rw] countryEmoji
#   @return [String, nil]
#
# @!attribute [rw] countryId
#   @return [String, nil]
#
# @!attribute [rw] countryName
#   @return [String, nil]
#
# @!attribute [rw] countryTelephoneCode
#   @return [String, nil]
#
# @!attribute [rw] dialingCode
#   @return [String, nil]
#
# @!attribute [rw] distanceKm
#   @return [Float, nil]
#
# @!attribute [rw] elevation
#   @return [Float, nil]
#
# @!attribute [rw] flagImage
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] localizedName
#   @return [String, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] normalizedName
#   @return [String, nil]
#
# @!attribute [rw] officialWebsite
#   @return [String, nil]
#
# @!attribute [rw] population
#   @return [Float, nil]
#
# @!attribute [rw] postalCode
#   @return [String, nil]
#
# @!attribute [rw] regionCode
#   @return [String, nil]
#
# @!attribute [rw] regionId
#   @return [String, nil]
#
# @!attribute [rw] regionName
#   @return [String, nil]
#
# @!attribute [rw] timeZone
#   @return [String, nil]
#
# @!attribute [rw] translations
#   @return [Array, nil]
#
# @!attribute [rw] wikidataId
#   @return [String, nil]
CityDtoListMatch = Struct.new(
  :area,
  :countryCode,
  :countryEmoji,
  :countryId,
  :countryName,
  :countryTelephoneCode,
  :dialingCode,
  :distanceKm,
  :elevation,
  :flagImage,
  :id,
  :latitude,
  :localizedName,
  :longitude,
  :name,
  :normalizedName,
  :officialWebsite,
  :population,
  :postalCode,
  :regionCode,
  :regionId,
  :regionName,
  :timeZone,
  :translations,
  :wikidataId,
  keyword_init: true
)

# CityTranslationDto entity data model.
#
# @!attribute [rw] cityId
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
# @!attribute [rw] nameNormalized
#   @return [String]
CityTranslationDto = Struct.new(
  :cityId,
  :id,
  :language,
  :name,
  :nameNormalized,
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
# @!attribute [rw] drivingSide
#   @return [String]
#
# @!attribute [rw] emoji
#   @return [String]
#
# @!attribute [rw] headOfGovernment
#   @return [String]
#
# @!attribute [rw] headOfState
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isoCode
#   @return [String]
#
# @!attribute [rw] licencePlateCode
#   @return [String]
#
# @!attribute [rw] localizedName
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] preferredLanguageId
#   @return [String]
#
# @!attribute [rw] regions
#   @return [Array]
#
# @!attribute [rw] telephoneCode
#   @return [String]
#
# @!attribute [rw] translations
#   @return [Array]
#
# @!attribute [rw] trunkPrefix
#   @return [String]
#
# @!attribute [rw] wikidataId
#   @return [String]
Country = Struct.new(
  :drivingSide,
  :emoji,
  :headOfGovernment,
  :headOfState,
  :id,
  :isoCode,
  :licencePlateCode,
  :localizedName,
  :name,
  :preferredLanguageId,
  :regions,
  :telephoneCode,
  :translations,
  :trunkPrefix,
  :wikidataId,
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
# @!attribute [rw] drivingSide
#   @return [String, nil]
#
# @!attribute [rw] emoji
#   @return [String, nil]
#
# @!attribute [rw] headOfGovernment
#   @return [String, nil]
#
# @!attribute [rw] headOfState
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] isoCode
#   @return [String, nil]
#
# @!attribute [rw] licencePlateCode
#   @return [String, nil]
#
# @!attribute [rw] localizedName
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] preferredLanguageId
#   @return [String, nil]
#
# @!attribute [rw] regions
#   @return [Array, nil]
#
# @!attribute [rw] telephoneCode
#   @return [String, nil]
#
# @!attribute [rw] translations
#   @return [Array, nil]
#
# @!attribute [rw] trunkPrefix
#   @return [String, nil]
#
# @!attribute [rw] wikidataId
#   @return [String, nil]
CountryListMatch = Struct.new(
  :drivingSide,
  :emoji,
  :headOfGovernment,
  :headOfState,
  :id,
  :isoCode,
  :licencePlateCode,
  :localizedName,
  :name,
  :preferredLanguageId,
  :regions,
  :telephoneCode,
  :translations,
  :trunkPrefix,
  :wikidataId,
  keyword_init: true
)

# CountryTranslationDto entity data model.
#
# @!attribute [rw] countryId
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
# @!attribute [rw] nameNormalized
#   @return [String]
CountryTranslationDto = Struct.new(
  :countryId,
  :id,
  :language,
  :name,
  :nameNormalized,
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
# @!attribute [rw] distanceKm
#   @return [Float]
Distance = Struct.new(
  :distanceKm,
  keyword_init: true
)

# Request payload for Distance#load.
#
# @!attribute [rw] distanceKm
#   @return [Float, nil]
DistanceLoadMatch = Struct.new(
  :distanceKm,
  keyword_init: true
)

# Language entity data model.
#
# @!attribute [rw] citiesCount
#   @return [Float]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isoCode
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] wikidataId
#   @return [String]
Language = Struct.new(
  :citiesCount,
  :id,
  :isoCode,
  :name,
  :wikidataId,
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
# @!attribute [rw] citiesCount
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] isoCode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] wikidataId
#   @return [String, nil]
LanguageListMatch = Struct.new(
  :citiesCount,
  :id,
  :isoCode,
  :name,
  :wikidataId,
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
# @!attribute [rw] countryId
#   @return [String]
#
# @!attribute [rw] drivingSide
#   @return [String]
#
# @!attribute [rw] emoji
#   @return [String]
#
# @!attribute [rw] headOfGovernment
#   @return [String]
#
# @!attribute [rw] headOfState
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isoCode
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] licencePlateCode
#   @return [String]
#
# @!attribute [rw] localizedName
#   @return [String, nil]
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
# @!attribute [rw] preferredLanguageId
#   @return [String]
#
# @!attribute [rw] telephoneCode
#   @return [String]
#
# @!attribute [rw] trunkPrefix
#   @return [String]
#
# @!attribute [rw] wikidataId
#   @return [String]
Region = Struct.new(
  :code,
  :countryId,
  :drivingSide,
  :emoji,
  :headOfGovernment,
  :headOfState,
  :id,
  :isoCode,
  :latitude,
  :licencePlateCode,
  :localizedName,
  :longitude,
  :name,
  :population,
  :preferredLanguageId,
  :telephoneCode,
  :trunkPrefix,
  :wikidataId,
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
# @!attribute [rw] nameNormalized
#   @return [String]
#
# @!attribute [rw] regionId
#   @return [String]
RegionTranslationDto = Struct.new(
  :id,
  :language,
  :name,
  :nameNormalized,
  :regionId,
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
# @!attribute [rw] nameNormalized
#   @return [String]
#
# @!attribute [rw] wikidataId
#   @return [String]
SettlementType = Struct.new(
  :description,
  :id,
  :name,
  :nameNormalized,
  :wikidataId,
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

