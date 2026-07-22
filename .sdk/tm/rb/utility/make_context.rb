# CityAutocomplete SDK utility: make_context
require_relative '../core/context'
module CityAutocompleteUtilities
  MakeContext = ->(ctxmap, basectx) {
    CityAutocompleteContext.new(ctxmap, basectx)
  }
end
