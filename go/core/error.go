package core

type CityAutocompleteError struct {
	IsCityAutocompleteError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCityAutocompleteError(code string, msg string, ctx *Context) *CityAutocompleteError {
	return &CityAutocompleteError{
		IsCityAutocompleteError: true,
		Sdk:              "CityAutocomplete",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CityAutocompleteError) Error() string {
	return e.Msg
}
