# CityAutocomplete SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CityAutocompleteUtility.registrar = ->(u) {
  u.clean = CityAutocompleteUtilities::Clean
  u.done = CityAutocompleteUtilities::Done
  u.make_error = CityAutocompleteUtilities::MakeError
  u.feature_add = CityAutocompleteUtilities::FeatureAdd
  u.feature_hook = CityAutocompleteUtilities::FeatureHook
  u.feature_init = CityAutocompleteUtilities::FeatureInit
  u.fetcher = CityAutocompleteUtilities::Fetcher
  u.make_fetch_def = CityAutocompleteUtilities::MakeFetchDef
  u.make_context = CityAutocompleteUtilities::MakeContext
  u.make_options = CityAutocompleteUtilities::MakeOptions
  u.make_request = CityAutocompleteUtilities::MakeRequest
  u.make_response = CityAutocompleteUtilities::MakeResponse
  u.make_result = CityAutocompleteUtilities::MakeResult
  u.make_point = CityAutocompleteUtilities::MakePoint
  u.make_spec = CityAutocompleteUtilities::MakeSpec
  u.make_url = CityAutocompleteUtilities::MakeUrl
  u.param = CityAutocompleteUtilities::Param
  u.prepare_auth = CityAutocompleteUtilities::PrepareAuth
  u.prepare_body = CityAutocompleteUtilities::PrepareBody
  u.prepare_headers = CityAutocompleteUtilities::PrepareHeaders
  u.prepare_method = CityAutocompleteUtilities::PrepareMethod
  u.prepare_params = CityAutocompleteUtilities::PrepareParams
  u.prepare_path = CityAutocompleteUtilities::PreparePath
  u.prepare_query = CityAutocompleteUtilities::PrepareQuery
  u.graphql_body = CityAutocompleteUtilities::GraphqlBody
  u.graphql_errors = CityAutocompleteUtilities::GraphqlErrors
  u.result_basic = CityAutocompleteUtilities::ResultBasic
  u.result_body = CityAutocompleteUtilities::ResultBody
  u.result_headers = CityAutocompleteUtilities::ResultHeaders
  u.transform_request = CityAutocompleteUtilities::TransformRequest
  u.transform_response = CityAutocompleteUtilities::TransformResponse
}
