# CityAutocomplete SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CityAutocompleteFeatures
  def self.make_feature(name)
    case name
    when "base"
      CityAutocompleteBaseFeature.new
    when "test"
      CityAutocompleteTestFeature.new
    else
      CityAutocompleteBaseFeature.new
    end
  end
end
