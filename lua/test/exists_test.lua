-- CityAutocomplete SDK exists test

local sdk = require("city-autocomplete_sdk")

describe("CityAutocompleteSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
