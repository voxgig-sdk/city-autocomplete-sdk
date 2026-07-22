# CityAutocomplete SDK exists test

require "minitest/autorun"
require_relative "../CityAutocomplete_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CityAutocompleteSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
