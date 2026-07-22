-- Typed models for the CityAutocomplete SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class City
---@field area? number
---@field country_code string
---@field country_emoji string
---@field country_id string
---@field country_name string
---@field country_telephone_code? string
---@field dialing_code? string
---@field distance_km? number
---@field elevation? number
---@field flag_image? string
---@field id string
---@field latitude? number
---@field localized_name string
---@field longitude? number
---@field name string
---@field normalized_name string
---@field official_website? string
---@field population? number
---@field postal_code? string
---@field region_code string
---@field region_id string
---@field region_name string
---@field time_zone? string
---@field translation table
---@field wikidata_id string

---@class CityLoadMatch
---@field id string

---@class CityDto
---@field area? number
---@field country_code string
---@field country_emoji string
---@field country_id string
---@field country_name string
---@field country_telephone_code? string
---@field dialing_code? string
---@field distance_km? number
---@field elevation? number
---@field flag_image? string
---@field id string
---@field latitude? number
---@field localized_name string
---@field longitude? number
---@field name string
---@field normalized_name string
---@field official_website? string
---@field population? number
---@field postal_code? string
---@field region_code string
---@field region_id string
---@field region_name string
---@field time_zone? string
---@field translation table
---@field wikidata_id string

---@class CityDtoListMatch
---@field area? number
---@field country_code? string
---@field country_emoji? string
---@field country_id? string
---@field country_name? string
---@field country_telephone_code? string
---@field dialing_code? string
---@field distance_km? number
---@field elevation? number
---@field flag_image? string
---@field id? string
---@field latitude? number
---@field localized_name? string
---@field longitude? number
---@field name? string
---@field normalized_name? string
---@field official_website? string
---@field population? number
---@field postal_code? string
---@field region_code? string
---@field region_id? string
---@field region_name? string
---@field time_zone? string
---@field translation? table
---@field wikidata_id? string

---@class CityTranslationDto
---@field city_id string
---@field id string
---@field language string
---@field name string
---@field name_normalized string

---@class CityTranslationDtoListMatch
---@field id string

---@class Country
---@field driving_side string
---@field emoji string
---@field head_of_government string
---@field head_of_state string
---@field id string
---@field iso_code string
---@field licence_plate_code string
---@field localized_name? string
---@field name string
---@field preferred_language_id string
---@field region table
---@field telephone_code string
---@field translation table
---@field trunk_prefix string
---@field wikidata_id string

---@class CountryLoadMatch
---@field id string

---@class CountryListMatch
---@field driving_side? string
---@field emoji? string
---@field head_of_government? string
---@field head_of_state? string
---@field id? string
---@field iso_code? string
---@field licence_plate_code? string
---@field localized_name? string
---@field name? string
---@field preferred_language_id? string
---@field region? table
---@field telephone_code? string
---@field translation? table
---@field trunk_prefix? string
---@field wikidata_id? string

---@class CountryTranslationDto
---@field country_id string
---@field id string
---@field language string
---@field name string
---@field name_normalized string

---@class CountryTranslationDtoListMatch
---@field id string

---@class Distance
---@field distance_km number

---@class DistanceLoadMatch
---@field distance_km? number

---@class Language
---@field cities_count number
---@field id string
---@field iso_code string
---@field name string
---@field wikidata_id string

---@class LanguageLoadMatch
---@field id string

---@class LanguageListMatch
---@field cities_count? number
---@field id? string
---@field iso_code? string
---@field name? string
---@field wikidata_id? string

---@class Oneshot
---@field emoji table
---@field en? string
---@field id string
---@field name string
---@field population table

---@class OneshotListMatch
---@field city_name string
---@field country string
---@field language string

---@class Region
---@field code string
---@field country any
---@field country_id string
---@field id string
---@field latitude number
---@field longitude number
---@field name string
---@field population number
---@field wikidata_id string

---@class RegionLoadMatch
---@field id string

---@class RegionListMatch
---@field country_id? string

---@class RegionTranslationDto
---@field id string
---@field language string
---@field name string
---@field name_normalized string
---@field region_id string

---@class RegionTranslationDtoListMatch
---@field id string

---@class SettlementType
---@field description string
---@field id string
---@field name string
---@field name_normalized string
---@field wikidata_id string

---@class SettlementTypeListMatch
---@field city_id string

local M = {}

return M
