-- CityAutocomplete SDK error

local CityAutocompleteError = {}
CityAutocompleteError.__index = CityAutocompleteError


function CityAutocompleteError.new(code, msg, ctx)
  local self = setmetatable({}, CityAutocompleteError)
  self.is_sdk_error = true
  self.sdk = "CityAutocomplete"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CityAutocompleteError:error()
  return self.msg
end


function CityAutocompleteError:__tostring()
  return self.msg
end


return CityAutocompleteError
