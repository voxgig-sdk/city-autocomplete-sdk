// Typed models for the CityAutocomplete SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/city-autocomplete-sdk/go/core"
)

// City is the typed data model for the city entity.
type City struct {
}

// CityLoadMatch is the typed request payload for City.LoadTyped.
type CityLoadMatch struct {
	Id string `json:"id"`
}

// CityDto is the typed data model for the city_dto entity.
type CityDto struct {
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
}

// CityTranslationDtoListMatch is the typed request payload for CityTranslationDto.ListTyped.
type CityTranslationDtoListMatch struct {
	Id string `json:"id"`
}

// Country is the typed data model for the country entity.
type Country struct {
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
}

// CountryTranslationDtoListMatch is the typed request payload for CountryTranslationDto.ListTyped.
type CountryTranslationDtoListMatch struct {
	Id string `json:"id"`
	PreferredLanguage *string `json:"preferred_language,omitempty"`
}

// Distance is the typed data model for the distance entity.
type Distance struct {
}

// DistanceLoadMatch is the typed request payload for Distance.LoadTyped.
type DistanceLoadMatch struct {
	City1 string `json:"city1"`
	City2 string `json:"city2"`
}

// Language is the typed data model for the language entity.
type Language struct {
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
}

// OneshotListMatch is the typed request payload for Oneshot.ListTyped.
type OneshotListMatch struct {
	CityName string `json:"city_name"`
	Country string `json:"country"`
	Language string `json:"language"`
}

// Region is the typed data model for the region entity.
type Region struct {
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
}

// RegionTranslationDtoListMatch is the typed request payload for RegionTranslationDto.ListTyped.
type RegionTranslationDtoListMatch struct {
	Id string `json:"id"`
	PreferredLanguage *string `json:"preferred_language,omitempty"`
}

// SettlementType is the typed data model for the settlement_type entity.
type SettlementType struct {
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
