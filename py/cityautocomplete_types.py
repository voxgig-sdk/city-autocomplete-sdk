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
    country_code: str
    country_emoji: str
    country_id: str
    country_name: str
    id: str
    localized_name: str
    name: str
    normalized_name: str
    region_code: str
    region_id: str
    region_name: str
    translation: list
    wikidata_id: str


class City(CityRequired, total=False):
    area: float
    country_telephone_code: str
    dialing_code: str
    distance_km: float
    elevation: float
    flag_image: str
    latitude: float
    longitude: float
    official_website: str
    population: float
    postal_code: str
    time_zone: str


class CityLoadMatch(TypedDict):
    id: str


class CityDtoRequired(TypedDict):
    country_code: str
    country_emoji: str
    country_id: str
    country_name: str
    id: str
    localized_name: str
    name: str
    normalized_name: str
    region_code: str
    region_id: str
    region_name: str
    translation: list
    wikidata_id: str


class CityDto(CityDtoRequired, total=False):
    area: float
    country_telephone_code: str
    dialing_code: str
    distance_km: float
    elevation: float
    flag_image: str
    latitude: float
    longitude: float
    official_website: str
    population: float
    postal_code: str
    time_zone: str


class CityDtoListMatch(TypedDict, total=False):
    area: float
    country_code: str
    country_emoji: str
    country_id: str
    country_name: str
    country_telephone_code: str
    dialing_code: str
    distance_km: float
    elevation: float
    flag_image: str
    id: str
    latitude: float
    localized_name: str
    longitude: float
    name: str
    normalized_name: str
    official_website: str
    population: float
    postal_code: str
    region_code: str
    region_id: str
    region_name: str
    time_zone: str
    translation: list
    wikidata_id: str


class CityTranslationDto(TypedDict):
    city_id: str
    id: str
    language: str
    name: str
    name_normalized: str


class CityTranslationDtoListMatch(TypedDict):
    id: str


class CountryRequired(TypedDict):
    driving_side: str
    emoji: str
    head_of_government: str
    head_of_state: str
    id: str
    iso_code: str
    licence_plate_code: str
    name: str
    preferred_language_id: str
    region: list
    telephone_code: str
    translation: list
    trunk_prefix: str
    wikidata_id: str


class Country(CountryRequired, total=False):
    localized_name: str


class CountryLoadMatch(TypedDict):
    id: str


class CountryListMatch(TypedDict, total=False):
    driving_side: str
    emoji: str
    head_of_government: str
    head_of_state: str
    id: str
    iso_code: str
    licence_plate_code: str
    localized_name: str
    name: str
    preferred_language_id: str
    region: list
    telephone_code: str
    translation: list
    trunk_prefix: str
    wikidata_id: str


class CountryTranslationDto(TypedDict):
    country_id: str
    id: str
    language: str
    name: str
    name_normalized: str


class CountryTranslationDtoListMatch(TypedDict):
    id: str


class Distance(TypedDict):
    distance_km: float


class DistanceLoadMatch(TypedDict, total=False):
    distance_km: float


class Language(TypedDict):
    cities_count: float
    id: str
    iso_code: str
    name: str
    wikidata_id: str


class LanguageLoadMatch(TypedDict):
    id: str


class LanguageListMatch(TypedDict, total=False):
    cities_count: float
    id: str
    iso_code: str
    name: str
    wikidata_id: str


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


class Region(TypedDict):
    code: str
    country: Any
    country_id: str
    id: str
    latitude: float
    longitude: float
    name: str
    population: float
    wikidata_id: str


class RegionLoadMatch(TypedDict):
    id: str


class RegionListMatch(TypedDict, total=False):
    country_id: str


class RegionTranslationDto(TypedDict):
    id: str
    language: str
    name: str
    name_normalized: str
    region_id: str


class RegionTranslationDtoListMatch(TypedDict):
    id: str


class SettlementType(TypedDict):
    description: str
    id: str
    name: str
    name_normalized: str
    wikidata_id: str


class SettlementTypeListMatch(TypedDict):
    city_id: str
