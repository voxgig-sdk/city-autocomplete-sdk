-- Typed models for the CityAutocomplete SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class City
---@field area? number
---@field countryCode string
---@field countryEmoji string
---@field countryId string
---@field countryName string
---@field countryTelephoneCode? string
---@field dialingCode? string
---@field distanceKm? number
---@field elevation? number
---@field flagImage? string
---@field id string
---@field latitude? number
---@field localizedName string
---@field longitude? number
---@field name string
---@field normalizedName string
---@field officialWebsite? string
---@field population? number
---@field postalCode? string
---@field regionCode string
---@field regionId string
---@field regionName string
---@field timeZone? string
---@field translations table
---@field wikidataId string

---@class CityLoadMatch
---@field id string

---@class CityDto
---@field area? number
---@field countryCode string
---@field countryEmoji string
---@field countryId string
---@field countryName string
---@field countryTelephoneCode? string
---@field dialingCode? string
---@field distanceKm? number
---@field elevation? number
---@field flagImage? string
---@field id string
---@field latitude? number
---@field localizedName string
---@field longitude? number
---@field name string
---@field normalizedName string
---@field officialWebsite? string
---@field population? number
---@field postalCode? string
---@field regionCode string
---@field regionId string
---@field regionName string
---@field timeZone? string
---@field translations table
---@field wikidataId string

---@class CityDtoListMatch
---@field area? number
---@field countryCode? string
---@field countryEmoji? string
---@field countryId? string
---@field countryName? string
---@field countryTelephoneCode? string
---@field dialingCode? string
---@field distanceKm? number
---@field elevation? number
---@field flagImage? string
---@field id? string
---@field latitude? number
---@field localizedName? string
---@field longitude? number
---@field name? string
---@field normalizedName? string
---@field officialWebsite? string
---@field population? number
---@field postalCode? string
---@field regionCode? string
---@field regionId? string
---@field regionName? string
---@field timeZone? string
---@field translations? table
---@field wikidataId? string

---@class CityTranslationDto
---@field cityId string
---@field id string
---@field language string
---@field name string
---@field nameNormalized string

---@class CityTranslationDtoListMatch
---@field id string

---@class Country
---@field drivingSide string
---@field emoji string
---@field headOfGovernment string
---@field headOfState string
---@field id string
---@field isoCode string
---@field licencePlateCode string
---@field localizedName? string
---@field name string
---@field preferredLanguageId string
---@field regions table
---@field telephoneCode string
---@field translations table
---@field trunkPrefix string
---@field wikidataId string

---@class CountryLoadMatch
---@field id string

---@class CountryListMatch
---@field drivingSide? string
---@field emoji? string
---@field headOfGovernment? string
---@field headOfState? string
---@field id? string
---@field isoCode? string
---@field licencePlateCode? string
---@field localizedName? string
---@field name? string
---@field preferredLanguageId? string
---@field regions? table
---@field telephoneCode? string
---@field translations? table
---@field trunkPrefix? string
---@field wikidataId? string

---@class CountryTranslationDto
---@field countryId string
---@field id string
---@field language string
---@field name string
---@field nameNormalized string

---@class CountryTranslationDtoListMatch
---@field id string

---@class Distance
---@field distanceKm number

---@class DistanceLoadMatch
---@field distanceKm? number

---@class Language
---@field citiesCount number
---@field id string
---@field isoCode string
---@field name string
---@field wikidataId string

---@class LanguageLoadMatch
---@field id string

---@class LanguageListMatch
---@field citiesCount? number
---@field id? string
---@field isoCode? string
---@field name? string
---@field wikidataId? string

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
---@field countryId string
---@field drivingSide string
---@field emoji string
---@field headOfGovernment string
---@field headOfState string
---@field id string
---@field isoCode string
---@field latitude number
---@field licencePlateCode string
---@field localizedName? string
---@field longitude number
---@field name string
---@field population number
---@field preferredLanguageId string
---@field telephoneCode string
---@field trunkPrefix string
---@field wikidataId string

---@class RegionLoadMatch
---@field id string

---@class RegionListMatch
---@field code? string
---@field countryId? string
---@field drivingSide? string
---@field emoji? string
---@field headOfGovernment? string
---@field headOfState? string
---@field id? string
---@field isoCode? string
---@field latitude? number
---@field licencePlateCode? string
---@field localizedName? string
---@field longitude? number
---@field name? string
---@field population? number
---@field preferredLanguageId? string
---@field telephoneCode? string
---@field trunkPrefix? string
---@field wikidataId? string

---@class RegionTranslationDto
---@field id string
---@field language string
---@field name string
---@field nameNormalized string
---@field regionId string

---@class RegionTranslationDtoListMatch
---@field id string

---@class SettlementType
---@field description string
---@field id string
---@field name string
---@field nameNormalized string
---@field wikidataId string

---@class SettlementTypeListMatch
---@field city_id string

local M = {}

return M
