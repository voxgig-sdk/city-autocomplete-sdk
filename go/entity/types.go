// Typed models for the CityAutocomplete SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// City is the typed data model for the city entity.
type City struct {
	Area *float64 `json:"area,omitempty"`
	CountryCode string `json:"country_code"`
	CountryEmoji string `json:"country_emoji"`
	CountryId string `json:"country_id"`
	CountryName string `json:"country_name"`
	CountryTelephoneCode *string `json:"country_telephone_code,omitempty"`
	DialingCode *string `json:"dialing_code,omitempty"`
	DistanceKm *float64 `json:"distance_km,omitempty"`
	Elevation *float64 `json:"elevation,omitempty"`
	FlagImage *string `json:"flag_image,omitempty"`
	Id string `json:"id"`
	Latitude *float64 `json:"latitude,omitempty"`
	LocalizedName string `json:"localized_name"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name string `json:"name"`
	NormalizedName string `json:"normalized_name"`
	OfficialWebsite *string `json:"official_website,omitempty"`
	Population *float64 `json:"population,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	RegionCode string `json:"region_code"`
	RegionId string `json:"region_id"`
	RegionName string `json:"region_name"`
	TimeZone *string `json:"time_zone,omitempty"`
	Translation []any `json:"translation"`
	WikidataId string `json:"wikidata_id"`
}

// CityLoadMatch is the typed request payload for City.LoadTyped.
type CityLoadMatch struct {
	Id string `json:"id"`
}

// CityDto is the typed data model for the city_dto entity.
type CityDto struct {
	Area *float64 `json:"area,omitempty"`
	CountryCode string `json:"country_code"`
	CountryEmoji string `json:"country_emoji"`
	CountryId string `json:"country_id"`
	CountryName string `json:"country_name"`
	CountryTelephoneCode *string `json:"country_telephone_code,omitempty"`
	DialingCode *string `json:"dialing_code,omitempty"`
	DistanceKm *float64 `json:"distance_km,omitempty"`
	Elevation *float64 `json:"elevation,omitempty"`
	FlagImage *string `json:"flag_image,omitempty"`
	Id string `json:"id"`
	Latitude *float64 `json:"latitude,omitempty"`
	LocalizedName string `json:"localized_name"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name string `json:"name"`
	NormalizedName string `json:"normalized_name"`
	OfficialWebsite *string `json:"official_website,omitempty"`
	Population *float64 `json:"population,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	RegionCode string `json:"region_code"`
	RegionId string `json:"region_id"`
	RegionName string `json:"region_name"`
	TimeZone *string `json:"time_zone,omitempty"`
	Translation []any `json:"translation"`
	WikidataId string `json:"wikidata_id"`
}

// CityDtoListMatch is the typed request payload for CityDto.ListTyped.
type CityDtoListMatch struct {
	Area *float64 `json:"area,omitempty"`
	CountryCode *string `json:"country_code,omitempty"`
	CountryEmoji *string `json:"country_emoji,omitempty"`
	CountryId *string `json:"country_id,omitempty"`
	CountryName *string `json:"country_name,omitempty"`
	CountryTelephoneCode *string `json:"country_telephone_code,omitempty"`
	DialingCode *string `json:"dialing_code,omitempty"`
	DistanceKm *float64 `json:"distance_km,omitempty"`
	Elevation *float64 `json:"elevation,omitempty"`
	FlagImage *string `json:"flag_image,omitempty"`
	Id *string `json:"id,omitempty"`
	Latitude *float64 `json:"latitude,omitempty"`
	LocalizedName *string `json:"localized_name,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name *string `json:"name,omitempty"`
	NormalizedName *string `json:"normalized_name,omitempty"`
	OfficialWebsite *string `json:"official_website,omitempty"`
	Population *float64 `json:"population,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	RegionCode *string `json:"region_code,omitempty"`
	RegionId *string `json:"region_id,omitempty"`
	RegionName *string `json:"region_name,omitempty"`
	TimeZone *string `json:"time_zone,omitempty"`
	Translation *[]any `json:"translation,omitempty"`
	WikidataId *string `json:"wikidata_id,omitempty"`
}

// CityTranslationDto is the typed data model for the city_translation_dto entity.
type CityTranslationDto struct {
	CityId string `json:"city_id"`
	Id string `json:"id"`
	Language string `json:"language"`
	Name string `json:"name"`
	NameNormalized string `json:"name_normalized"`
}

// CityTranslationDtoListMatch is the typed request payload for CityTranslationDto.ListTyped.
type CityTranslationDtoListMatch struct {
	Id string `json:"id"`
}

// Country is the typed data model for the country entity.
type Country struct {
	DrivingSide string `json:"driving_side"`
	Emoji string `json:"emoji"`
	HeadOfGovernment string `json:"head_of_government"`
	HeadOfState string `json:"head_of_state"`
	Id string `json:"id"`
	IsoCode string `json:"iso_code"`
	LicencePlateCode string `json:"licence_plate_code"`
	LocalizedName *string `json:"localized_name,omitempty"`
	Name string `json:"name"`
	PreferredLanguageId string `json:"preferred_language_id"`
	Region []any `json:"region"`
	TelephoneCode string `json:"telephone_code"`
	Translation []any `json:"translation"`
	TrunkPrefix string `json:"trunk_prefix"`
	WikidataId string `json:"wikidata_id"`
}

// CountryLoadMatch is the typed request payload for Country.LoadTyped.
type CountryLoadMatch struct {
	Id string `json:"id"`
}

// CountryListMatch is the typed request payload for Country.ListTyped.
type CountryListMatch struct {
	DrivingSide *string `json:"driving_side,omitempty"`
	Emoji *string `json:"emoji,omitempty"`
	HeadOfGovernment *string `json:"head_of_government,omitempty"`
	HeadOfState *string `json:"head_of_state,omitempty"`
	Id *string `json:"id,omitempty"`
	IsoCode *string `json:"iso_code,omitempty"`
	LicencePlateCode *string `json:"licence_plate_code,omitempty"`
	LocalizedName *string `json:"localized_name,omitempty"`
	Name *string `json:"name,omitempty"`
	PreferredLanguageId *string `json:"preferred_language_id,omitempty"`
	Region *[]any `json:"region,omitempty"`
	TelephoneCode *string `json:"telephone_code,omitempty"`
	Translation *[]any `json:"translation,omitempty"`
	TrunkPrefix *string `json:"trunk_prefix,omitempty"`
	WikidataId *string `json:"wikidata_id,omitempty"`
}

// CountryTranslationDto is the typed data model for the country_translation_dto entity.
type CountryTranslationDto struct {
	CountryId string `json:"country_id"`
	Id string `json:"id"`
	Language string `json:"language"`
	Name string `json:"name"`
	NameNormalized string `json:"name_normalized"`
}

// CountryTranslationDtoListMatch is the typed request payload for CountryTranslationDto.ListTyped.
type CountryTranslationDtoListMatch struct {
	Id string `json:"id"`
}

// Distance is the typed data model for the distance entity.
type Distance struct {
	DistanceKm float64 `json:"distance_km"`
}

// DistanceLoadMatch is the typed request payload for Distance.LoadTyped.
type DistanceLoadMatch struct {
	DistanceKm *float64 `json:"distance_km,omitempty"`
}

// Language is the typed data model for the language entity.
type Language struct {
	CitiesCount float64 `json:"cities_count"`
	Id string `json:"id"`
	IsoCode string `json:"iso_code"`
	Name string `json:"name"`
	WikidataId string `json:"wikidata_id"`
}

// LanguageLoadMatch is the typed request payload for Language.LoadTyped.
type LanguageLoadMatch struct {
	Id string `json:"id"`
}

// LanguageListMatch is the typed request payload for Language.ListTyped.
type LanguageListMatch struct {
	CitiesCount *float64 `json:"cities_count,omitempty"`
	Id *string `json:"id,omitempty"`
	IsoCode *string `json:"iso_code,omitempty"`
	Name *string `json:"name,omitempty"`
	WikidataId *string `json:"wikidata_id,omitempty"`
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
	Country any `json:"country"`
	CountryId string `json:"country_id"`
	Id string `json:"id"`
	Latitude float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
	Name string `json:"name"`
	Population float64 `json:"population"`
	WikidataId string `json:"wikidata_id"`
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
	NameNormalized string `json:"name_normalized"`
	RegionId string `json:"region_id"`
}

// RegionTranslationDtoListMatch is the typed request payload for RegionTranslationDto.ListTyped.
type RegionTranslationDtoListMatch struct {
	Id string `json:"id"`
}

// SettlementType is the typed data model for the settlement_type entity.
type SettlementType struct {
	Description string `json:"description"`
	Id string `json:"id"`
	Name string `json:"name"`
	NameNormalized string `json:"name_normalized"`
	WikidataId string `json:"wikidata_id"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
