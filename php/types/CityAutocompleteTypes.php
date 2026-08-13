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
    public string $countryCode;
    public string $countryEmoji;
    public string $countryId;
    public string $countryName;
    public ?string $countryTelephoneCode = null;
    public ?string $dialingCode = null;
    public ?float $distanceKm = null;
    public ?float $elevation = null;
    public ?string $flagImage = null;
    public string $id;
    public ?float $latitude = null;
    public string $localizedName;
    public ?float $longitude = null;
    public string $name;
    public string $normalizedName;
    public ?string $officialWebsite = null;
    public ?float $population = null;
    public ?string $postalCode = null;
    public string $regionCode;
    public string $regionId;
    public string $regionName;
    public ?string $timeZone = null;
    public array $translations;
    public string $wikidataId;
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
    public string $countryCode;
    public string $countryEmoji;
    public string $countryId;
    public string $countryName;
    public ?string $countryTelephoneCode = null;
    public ?string $dialingCode = null;
    public ?float $distanceKm = null;
    public ?float $elevation = null;
    public ?string $flagImage = null;
    public string $id;
    public ?float $latitude = null;
    public string $localizedName;
    public ?float $longitude = null;
    public string $name;
    public string $normalizedName;
    public ?string $officialWebsite = null;
    public ?float $population = null;
    public ?string $postalCode = null;
    public string $regionCode;
    public string $regionId;
    public string $regionName;
    public ?string $timeZone = null;
    public array $translations;
    public string $wikidataId;
}

/** Request payload for CityDto#list. */
class CityDtoListMatch
{
    public ?float $area = null;
    public ?string $countryCode = null;
    public ?string $countryEmoji = null;
    public ?string $countryId = null;
    public ?string $countryName = null;
    public ?string $countryTelephoneCode = null;
    public ?string $dialingCode = null;
    public ?float $distanceKm = null;
    public ?float $elevation = null;
    public ?string $flagImage = null;
    public ?string $id = null;
    public ?float $latitude = null;
    public ?string $localizedName = null;
    public ?float $longitude = null;
    public ?string $name = null;
    public ?string $normalizedName = null;
    public ?string $officialWebsite = null;
    public ?float $population = null;
    public ?string $postalCode = null;
    public ?string $regionCode = null;
    public ?string $regionId = null;
    public ?string $regionName = null;
    public ?string $timeZone = null;
    public ?array $translations = null;
    public ?string $wikidataId = null;
}

/** CityTranslationDto entity data model. */
class CityTranslationDto
{
    public string $cityId;
    public string $id;
    public string $language;
    public string $name;
    public string $nameNormalized;
}

/** Request payload for CityTranslationDto#list. */
class CityTranslationDtoListMatch
{
    public string $id;
}

/** Country entity data model. */
class Country
{
    public string $drivingSide;
    public string $emoji;
    public string $headOfGovernment;
    public string $headOfState;
    public string $id;
    public string $isoCode;
    public string $licencePlateCode;
    public ?string $localizedName = null;
    public string $name;
    public string $preferredLanguageId;
    public array $regions;
    public string $telephoneCode;
    public array $translations;
    public string $trunkPrefix;
    public string $wikidataId;
}

/** Request payload for Country#load. */
class CountryLoadMatch
{
    public string $id;
}

/** Request payload for Country#list. */
class CountryListMatch
{
    public ?string $drivingSide = null;
    public ?string $emoji = null;
    public ?string $headOfGovernment = null;
    public ?string $headOfState = null;
    public ?string $id = null;
    public ?string $isoCode = null;
    public ?string $licencePlateCode = null;
    public ?string $localizedName = null;
    public ?string $name = null;
    public ?string $preferredLanguageId = null;
    public ?array $regions = null;
    public ?string $telephoneCode = null;
    public ?array $translations = null;
    public ?string $trunkPrefix = null;
    public ?string $wikidataId = null;
}

/** CountryTranslationDto entity data model. */
class CountryTranslationDto
{
    public string $countryId;
    public string $id;
    public string $language;
    public string $name;
    public string $nameNormalized;
}

/** Request payload for CountryTranslationDto#list. */
class CountryTranslationDtoListMatch
{
    public string $id;
}

/** Distance entity data model. */
class Distance
{
    public float $distanceKm;
}

/** Request payload for Distance#load. */
class DistanceLoadMatch
{
    public ?float $distanceKm = null;
}

/** Language entity data model. */
class Language
{
    public float $citiesCount;
    public string $id;
    public string $isoCode;
    public string $name;
    public string $wikidataId;
}

/** Request payload for Language#load. */
class LanguageLoadMatch
{
    public string $id;
}

/** Request payload for Language#list. */
class LanguageListMatch
{
    public ?float $citiesCount = null;
    public ?string $id = null;
    public ?string $isoCode = null;
    public ?string $name = null;
    public ?string $wikidataId = null;
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
    public string $countryId;
    public string $drivingSide;
    public string $emoji;
    public string $headOfGovernment;
    public string $headOfState;
    public string $id;
    public string $isoCode;
    public float $latitude;
    public string $licencePlateCode;
    public ?string $localizedName = null;
    public float $longitude;
    public string $name;
    public float $population;
    public string $preferredLanguageId;
    public string $telephoneCode;
    public string $trunkPrefix;
    public string $wikidataId;
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
    public string $nameNormalized;
    public string $regionId;
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
    public string $nameNormalized;
    public string $wikidataId;
}

/** Request payload for SettlementType#list. */
class SettlementTypeListMatch
{
    public string $city_id;
}

