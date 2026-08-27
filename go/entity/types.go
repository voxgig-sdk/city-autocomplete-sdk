// Typed models for the CityAutocomplete SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/city-autocomplete-sdk/go/core"
)

// City is the typed data model for the city entity.
type City struct {
	Area *float64 `json:"area,omitempty"`
	CountryCode string `json:"countryCode"`
	CountryEmoji string `json:"countryEmoji"`
	CountryId string `json:"countryId"`
	CountryName string `json:"countryName"`
	CountryTelephoneCode *string `json:"countryTelephoneCode,omitempty"`
	DialingCode *string `json:"dialingCode,omitempty"`
	DistanceKm *float64 `json:"distanceKm,omitempty"`
	Elevation *float64 `json:"elevation,omitempty"`
	FlagImage *string `json:"flagImage,omitempty"`
	Id string `json:"id"`
	Latitude *float64 `json:"latitude,omitempty"`
	LocalizedName string `json:"localizedName"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name string `json:"name"`
	NormalizedName string `json:"normalizedName"`
	OfficialWebsite *string `json:"officialWebsite,omitempty"`
	Population *float64 `json:"population,omitempty"`
	PostalCode *string `json:"postalCode,omitempty"`
	RegionCode string `json:"regionCode"`
	RegionId string `json:"regionId"`
	RegionName string `json:"regionName"`
	TimeZone *string `json:"timeZone,omitempty"`
	Translations []any `json:"translations"`
	WikidataId string `json:"wikidataId"`
}

// CityLoadMatch is the typed request payload for City.LoadTyped.
type CityLoadMatch struct {
	Id string `json:"id"`
}

// CityDto is the typed data model for the city_dto entity.
type CityDto struct {
	Area *float64 `json:"area,omitempty"`
	CountryCode string `json:"countryCode"`
	CountryEmoji string `json:"countryEmoji"`
	CountryId string `json:"countryId"`
	CountryName string `json:"countryName"`
	CountryTelephoneCode *string `json:"countryTelephoneCode,omitempty"`
	DialingCode *string `json:"dialingCode,omitempty"`
	DistanceKm *float64 `json:"distanceKm,omitempty"`
	Elevation *float64 `json:"elevation,omitempty"`
	FlagImage *string `json:"flagImage,omitempty"`
	Id string `json:"id"`
	Latitude *float64 `json:"latitude,omitempty"`
	LocalizedName string `json:"localizedName"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name string `json:"name"`
	NormalizedName string `json:"normalizedName"`
	OfficialWebsite *string `json:"officialWebsite,omitempty"`
	Population *float64 `json:"population,omitempty"`
	PostalCode *string `json:"postalCode,omitempty"`
	RegionCode string `json:"regionCode"`
	RegionId string `json:"regionId"`
	RegionName string `json:"regionName"`
	TimeZone *string `json:"timeZone,omitempty"`
	Translations []any `json:"translations"`
	WikidataId string `json:"wikidataId"`
}

// CityDtoListMatch is the typed request payload for CityDto.ListTyped.
type CityDtoListMatch struct {
	CountryCode *string `json:"country_code,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	MaxPopulation *float64 `json:"max_population,omitempty"`
	MinPopulation *float64 `json:"min_population,omitempty"`
	Name *string `json:"name,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	PreferredLanguage *string `json:"preferred_language,omitempty"`
	RegionId *string `json:"region_id,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// CityTranslationDto is the typed data model for the city_translation_dto entity.
type CityTranslationDto struct {
	CityId string `json:"cityId"`
	Id string `json:"id"`
	Language string `json:"language"`
	Name string `json:"name"`
	NameNormalized string `json:"nameNormalized"`
}

// CityTranslationDtoListMatch is the typed request payload for CityTranslationDto.ListTyped.
type CityTranslationDtoListMatch struct {
	Id string `json:"id"`
}

// Country is the typed data model for the country entity.
type Country struct {
	DrivingSide string `json:"drivingSide"`
	Emoji string `json:"emoji"`
	HeadOfGovernment string `json:"headOfGovernment"`
	HeadOfState string `json:"headOfState"`
	Id string `json:"id"`
	IsoCode string `json:"isoCode"`
	LicencePlateCode string `json:"licencePlateCode"`
	LocalizedName *string `json:"localizedName,omitempty"`
	Name string `json:"name"`
	PreferredLanguageId string `json:"preferredLanguageId"`
	Regions []any `json:"regions"`
	TelephoneCode string `json:"telephoneCode"`
	Translations []any `json:"translations"`
	TrunkPrefix string `json:"trunkPrefix"`
	WikidataId string `json:"wikidataId"`
}

// CountryLoadMatch is the typed request payload for Country.LoadTyped.
type CountryLoadMatch struct {
	Id string `json:"id"`
}

// CountryListMatch is the typed request payload for Country.ListTyped.
type CountryListMatch struct {
	Limit *float64 `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	PreferredLanguage *string `json:"preferred_language,omitempty"`
	TelephoneCode *string `json:"telephone_code,omitempty"`
}

// CountryTranslationDto is the typed data model for the country_translation_dto entity.
type CountryTranslationDto struct {
	CountryId string `json:"countryId"`
	Id string `json:"id"`
	Language string `json:"language"`
	Name string `json:"name"`
	NameNormalized string `json:"nameNormalized"`
}

// CountryTranslationDtoListMatch is the typed request payload for CountryTranslationDto.ListTyped.
type CountryTranslationDtoListMatch struct {
	Id string `json:"id"`
	PreferredLanguage *string `json:"preferred_language,omitempty"`
}

// Distance is the typed data model for the distance entity.
type Distance struct {
	DistanceKm float64 `json:"distanceKm"`
}

// DistanceLoadMatch is the typed request payload for Distance.LoadTyped.
type DistanceLoadMatch struct {
	City1 string `json:"city1"`
	City2 string `json:"city2"`
}

// Language is the typed data model for the language entity.
type Language struct {
	CitiesCount float64 `json:"citiesCount"`
	Id string `json:"id"`
	IsoCode string `json:"isoCode"`
	Name string `json:"name"`
	WikidataId string `json:"wikidataId"`
}

// LanguageLoadMatch is the typed request payload for Language.LoadTyped.
type LanguageLoadMatch struct {
	Id string `json:"id"`
}

// LanguageListMatch is the typed request payload for Language.ListTyped.
type LanguageListMatch struct {
	Limit *float64 `json:"limit,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
}

// Oneshot is the typed data model for the oneshot entity.
type Oneshot struct {
	Emoji map[string]any `json:"emoji"`
	En *string `json:"en,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Population map[string]any `json:"population"`
}

// OneshotListMatch is the typed request payload for Oneshot.ListTyped.
type OneshotListMatch struct {
	CityName string `json:"city_name"`
	Country string `json:"country"`
	Language string `json:"language"`
}

// Region is the typed data model for the region entity.
type Region struct {
	Code string `json:"code"`
	CountryId string `json:"countryId"`
	DrivingSide string `json:"drivingSide"`
	Emoji string `json:"emoji"`
	HeadOfGovernment string `json:"headOfGovernment"`
	HeadOfState string `json:"headOfState"`
	Id string `json:"id"`
	IsoCode string `json:"isoCode"`
	Latitude float64 `json:"latitude"`
	LicencePlateCode string `json:"licencePlateCode"`
	LocalizedName *string `json:"localizedName,omitempty"`
	Longitude float64 `json:"longitude"`
	Name string `json:"name"`
	Population float64 `json:"population"`
	PreferredLanguageId string `json:"preferredLanguageId"`
	TelephoneCode string `json:"telephoneCode"`
	TrunkPrefix string `json:"trunkPrefix"`
	WikidataId string `json:"wikidataId"`
}

// RegionLoadMatch is the typed request payload for Region.LoadTyped.
type RegionLoadMatch struct {
	Id string `json:"id"`
}

// RegionListMatch is the typed request payload for Region.ListTyped.
type RegionListMatch struct {
	CountryId *string `json:"country_id,omitempty"`
}

// RegionTranslationDto is the typed data model for the region_translation_dto entity.
type RegionTranslationDto struct {
	Id string `json:"id"`
	Language string `json:"language"`
	Name string `json:"name"`
	NameNormalized string `json:"nameNormalized"`
	RegionId string `json:"regionId"`
}

// RegionTranslationDtoListMatch is the typed request payload for RegionTranslationDto.ListTyped.
type RegionTranslationDtoListMatch struct {
	Id string `json:"id"`
	PreferredLanguage *string `json:"preferred_language,omitempty"`
}

// SettlementType is the typed data model for the settlement_type entity.
type SettlementType struct {
	Description string `json:"description"`
	Id string `json:"id"`
	Name string `json:"name"`
	NameNormalized string `json:"nameNormalized"`
	WikidataId string `json:"wikidataId"`
}

// SettlementTypeListMatch is the typed request payload for SettlementType.ListTyped.
type SettlementTypeListMatch struct {
	CityId string `json:"city_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
