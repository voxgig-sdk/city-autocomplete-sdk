# Typed models for the CityAutocomplete SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CityRequired(TypedDict):
    countryCode: str
    countryEmoji: str
    countryId: str
    countryName: str
    id: str
    localizedName: str
    name: str
    normalizedName: str
    regionCode: str
    regionId: str
    regionName: str
    translations: list
    wikidataId: str


class City(CityRequired, total=False):
    area: float
    countryTelephoneCode: str
    dialingCode: str
    distanceKm: float
    elevation: float
    flagImage: str
    latitude: float
    longitude: float
    officialWebsite: str
    population: float
    postalCode: str
    timeZone: str


class CityLoadMatch(TypedDict):
    id: str


class CityDtoRequired(TypedDict):
    countryCode: str
    countryEmoji: str
    countryId: str
    countryName: str
    id: str
    localizedName: str
    name: str
    normalizedName: str
    regionCode: str
    regionId: str
    regionName: str
    translations: list
    wikidataId: str


class CityDto(CityDtoRequired, total=False):
    area: float
    countryTelephoneCode: str
    dialingCode: str
    distanceKm: float
    elevation: float
    flagImage: str
    latitude: float
    longitude: float
    officialWebsite: str
    population: float
    postalCode: str
    timeZone: str


class CityDtoListMatch(TypedDict, total=False):
    area: float
    countryCode: str
    countryEmoji: str
    countryId: str
    countryName: str
    countryTelephoneCode: str
    dialingCode: str
    distanceKm: float
    elevation: float
    flagImage: str
    id: str
    latitude: float
    localizedName: str
    longitude: float
    name: str
    normalizedName: str
    officialWebsite: str
    population: float
    postalCode: str
    regionCode: str
    regionId: str
    regionName: str
    timeZone: str
    translations: list
    wikidataId: str


class CityTranslationDto(TypedDict):
    cityId: str
    id: str
    language: str
    name: str
    nameNormalized: str


class CityTranslationDtoListMatch(TypedDict):
    id: str


class CountryRequired(TypedDict):
    drivingSide: str
    emoji: str
    headOfGovernment: str
    headOfState: str
    id: str
    isoCode: str
    licencePlateCode: str
    name: str
    preferredLanguageId: str
    regions: list
    telephoneCode: str
    translations: list
    trunkPrefix: str
    wikidataId: str


class Country(CountryRequired, total=False):
    localizedName: str


class CountryLoadMatch(TypedDict):
    id: str


class CountryListMatch(TypedDict, total=False):
    drivingSide: str
    emoji: str
    headOfGovernment: str
    headOfState: str
    id: str
    isoCode: str
    licencePlateCode: str
    localizedName: str
    name: str
    preferredLanguageId: str
    regions: list
    telephoneCode: str
    translations: list
    trunkPrefix: str
    wikidataId: str


class CountryTranslationDto(TypedDict):
    countryId: str
    id: str
    language: str
    name: str
    nameNormalized: str


class CountryTranslationDtoListMatch(TypedDict):
    id: str


class Distance(TypedDict):
    distanceKm: float


class DistanceLoadMatch(TypedDict, total=False):
    distanceKm: float


class Language(TypedDict):
    citiesCount: float
    id: str
    isoCode: str
    name: str
    wikidataId: str


class LanguageLoadMatch(TypedDict):
    id: str


class LanguageListMatch(TypedDict, total=False):
    citiesCount: float
    id: str
    isoCode: str
    name: str
    wikidataId: str


class OneshotRequired(TypedDict):
    emoji: dict
    id: str
    name: str
    population: dict


class Oneshot(OneshotRequired, total=False):
    en: str


class OneshotListMatch(TypedDict):
    city_name: str
    country: str
    language: str


class RegionRequired(TypedDict):
    code: str
    countryId: str
    drivingSide: str
    emoji: str
    headOfGovernment: str
    headOfState: str
    id: str
    isoCode: str
    latitude: float
    licencePlateCode: str
    longitude: float
    name: str
    population: float
    preferredLanguageId: str
    telephoneCode: str
    trunkPrefix: str
    wikidataId: str


class Region(RegionRequired, total=False):
    localizedName: str


class RegionLoadMatch(TypedDict):
    id: str


class RegionListMatch(TypedDict, total=False):
    country_id: str


class RegionTranslationDto(TypedDict):
    id: str
    language: str
    name: str
    nameNormalized: str
    regionId: str


class RegionTranslationDtoListMatch(TypedDict):
    id: str


class SettlementType(TypedDict):
    description: str
    id: str
    name: str
    nameNormalized: str
    wikidataId: str


class SettlementTypeListMatch(TypedDict):
    city_id: str
