# CityAutocomplete SDK utility: prepare_body
require_relative 'media'
module CityAutocompleteUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return CityAutocompleteUtilities.raw_body(ctx.reqdata) if CityAutocompleteUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
