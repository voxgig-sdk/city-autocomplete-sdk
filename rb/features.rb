# CityAutocomplete SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CityAutocompleteFeatures
  def self.make_feature(name)
    case name
    when "base"
      CityAutocompleteBaseFeature.new
    when "ratelimit"
      CityAutocompleteRatelimitFeature.new
    when "retry"
      CityAutocompleteRetryFeature.new
    when "test"
      CityAutocompleteTestFeature.new
    when "timeout"
      CityAutocompleteTimeoutFeature.new
    else
      CityAutocompleteBaseFeature.new
    end
  end
end
