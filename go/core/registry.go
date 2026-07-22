package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCityEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewCityDtoEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewCityTranslationDtoEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewCountryEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewCountryTranslationDtoEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewDistanceEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewLanguageEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewOneshotEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewRegionEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewRegionTranslationDtoEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

var NewSettlementTypeEntityFunc func(client *CityAutocompleteSDK, entopts map[string]any) CityAutocompleteEntity

