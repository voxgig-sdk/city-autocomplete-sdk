<?php
declare(strict_types=1);

// Typed models for the CityAutocomplete SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** City entity data model. */
class City
{
    public ?float $area = null;
    public string $country_code;
    public string $country_emoji;
    public string $country_id;
    public string $country_name;
    public ?string $country_telephone_code = null;
    public ?string $dialing_code = null;
    public ?float $distance_km = null;
    public ?float $elevation = null;
    public ?string $flag_image = null;
    public string $id;
    public ?float $latitude = null;
    public string $localized_name;
    public ?float $longitude = null;
    public string $name;
    public string $normalized_name;
    public ?string $official_website = null;
    public ?float $population = null;
    public ?string $postal_code = null;
    public string $region_code;
    public string $region_id;
    public string $region_name;
    public ?string $time_zone = null;
    public array $translation;
    public string $wikidata_id;
}

/** Request payload for City#load. */
class CityLoadMatch
{
    public string $id;
}

/** CityDto entity data model. */
class CityDto
{
    public ?float $area = null;
    public string $country_code;
    public string $country_emoji;
    public string $country_id;
    public string $country_name;
    public ?string $country_telephone_code = null;
    public ?string $dialing_code = null;
    public ?float $distance_km = null;
    public ?float $elevation = null;
    public ?string $flag_image = null;
    public string $id;
    public ?float $latitude = null;
    public string $localized_name;
    public ?float $longitude = null;
    public string $name;
    public string $normalized_name;
    public ?string $official_website = null;
    public ?float $population = null;
    public ?string $postal_code = null;
    public string $region_code;
    public string $region_id;
    public string $region_name;
    public ?string $time_zone = null;
    public array $translation;
    public string $wikidata_id;
}

/** Request payload for CityDto#list. */
class CityDtoListMatch
{
    public ?float $area = null;
    public ?string $country_code = null;
    public ?string $country_emoji = null;
    public ?string $country_id = null;
    public ?string $country_name = null;
    public ?string $country_telephone_code = null;
    public ?string $dialing_code = null;
    public ?float $distance_km = null;
    public ?float $elevation = null;
    public ?string $flag_image = null;
    public ?string $id = null;
    public ?float $latitude = null;
    public ?string $localized_name = null;
    public ?float $longitude = null;
    public ?string $name = null;
    public ?string $normalized_name = null;
    public ?string $official_website = null;
    public ?float $population = null;
    public ?string $postal_code = null;
    public ?string $region_code = null;
    public ?string $region_id = null;
    public ?string $region_name = null;
    public ?string $time_zone = null;
    public ?array $translation = null;
    public ?string $wikidata_id = null;
}

/** CityTranslationDto entity data model. */
class CityTranslationDto
{
    public string $city_id;
    public string $id;
    public string $language;
    public string $name;
    public string $name_normalized;
}

/** Request payload for CityTranslationDto#list. */
class CityTranslationDtoListMatch
{
    public string $id;
}

/** Country entity data model. */
class Country
{
    public string $driving_side;
    public string $emoji;
    public string $head_of_government;
    public string $head_of_state;
    public string $id;
    public string $iso_code;
    public string $licence_plate_code;
    public ?string $localized_name = null;
    public string $name;
    public string $preferred_language_id;
    public array $region;
    public string $telephone_code;
    public array $translation;
    public string $trunk_prefix;
    public string $wikidata_id;
}

/** Request payload for Country#load. */
class CountryLoadMatch
{
    public string $id;
}

/** Request payload for Country#list. */
class CountryListMatch
{
    public ?string $driving_side = null;
    public ?string $emoji = null;
    public ?string $head_of_government = null;
    public ?string $head_of_state = null;
    public ?string $id = null;
    public ?string $iso_code = null;
    public ?string $licence_plate_code = null;
    public ?string $localized_name = null;
    public ?string $name = null;
    public ?string $preferred_language_id = null;
    public ?array $region = null;
    public ?string $telephone_code = null;
    public ?array $translation = null;
    public ?string $trunk_prefix = null;
    public ?string $wikidata_id = null;
}

/** CountryTranslationDto entity data model. */
class CountryTranslationDto
{
    public string $country_id;
    public string $id;
    public string $language;
    public string $name;
    public string $name_normalized;
}

/** Request payload for CountryTranslationDto#list. */
class CountryTranslationDtoListMatch
{
    public string $id;
}

/** Distance entity data model. */
class Distance
{
    public float $distance_km;
}

/** Request payload for Distance#load. */
class DistanceLoadMatch
{
    public ?float $distance_km = null;
}

/** Language entity data model. */
class Language
{
    public float $cities_count;
    public string $id;
    public string $iso_code;
    public string $name;
    public string $wikidata_id;
}

/** Request payload for Language#load. */
class LanguageLoadMatch
{
    public string $id;
}

/** Request payload for Language#list. */
class LanguageListMatch
{
    public ?float $cities_count = null;
    public ?string $id = null;
    public ?string $iso_code = null;
    public ?string $name = null;
    public ?string $wikidata_id = null;
}

/** Oneshot entity data model. */
class Oneshot
{
    public array $emoji;
    public ?string $en = null;
    public string $id;
    public string $name;
    public array $population;
}

/** Request payload for Oneshot#list. */
class OneshotListMatch
{
    public string $city_name;
    public string $country;
    public string $language;
}

/** Region entity data model. */
class Region
{
    public string $code;
    public mixed $country;
    public string $country_id;
    public string $id;
    public float $latitude;
    public float $longitude;
    public string $name;
    public float $population;
    public string $wikidata_id;
}

/** Request payload for Region#load. */
class RegionLoadMatch
{
    public string $id;
}

/** Request payload for Region#list. */
class RegionListMatch
{
    public ?string $country_id = null;
}

/** RegionTranslationDto entity data model. */
class RegionTranslationDto
{
    public string $id;
    public string $language;
    public string $name;
    public string $name_normalized;
    public string $region_id;
}

/** Request payload for RegionTranslationDto#list. */
class RegionTranslationDtoListMatch
{
    public string $id;
}

/** SettlementType entity data model. */
class SettlementType
{
    public string $description;
    public string $id;
    public string $name;
    public string $name_normalized;
    public string $wikidata_id;
}

/** Request payload for SettlementType#list. */
class SettlementTypeListMatch
{
    public string $city_id;
}

