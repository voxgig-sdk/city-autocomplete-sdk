package voxgigcityautocompletesdk

import (
	"github.com/voxgig-sdk/city-autocomplete-sdk/go/core"
	"github.com/voxgig-sdk/city-autocomplete-sdk/go/entity"
	"github.com/voxgig-sdk/city-autocomplete-sdk/go/feature"
	_ "github.com/voxgig-sdk/city-autocomplete-sdk/go/utility"
)

// Type aliases preserve external API.
type CityAutocompleteSDK = core.CityAutocompleteSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CityAutocompleteEntity = core.CityAutocompleteEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CityAutocompleteError = core.CityAutocompleteError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCityEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewCityEntity(client, entopts)
	}
	core.NewCityDtoEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewCityDtoEntity(client, entopts)
	}
	core.NewCityTranslationDtoEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewCityTranslationDtoEntity(client, entopts)
	}
	core.NewCountryEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewCountryEntity(client, entopts)
	}
	core.NewCountryTranslationDtoEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewCountryTranslationDtoEntity(client, entopts)
	}
	core.NewDistanceEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewDistanceEntity(client, entopts)
	}
	core.NewLanguageEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewLanguageEntity(client, entopts)
	}
	core.NewOneshotEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewOneshotEntity(client, entopts)
	}
	core.NewRegionEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewRegionEntity(client, entopts)
	}
	core.NewRegionTranslationDtoEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewRegionTranslationDtoEntity(client, entopts)
	}
	core.NewSettlementTypeEntityFunc = func(client *core.CityAutocompleteSDK, entopts map[string]any) core.CityAutocompleteEntity {
		return entity.NewSettlementTypeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCityAutocompleteSDK = core.NewCityAutocompleteSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCityAutocompleteSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CityAutocompleteSDK  { return NewCityAutocompleteSDK(nil) }
func Test() *CityAutocompleteSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
