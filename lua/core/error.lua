-- CityAutocomplete SDK error

local json = require("dkjson")

local CityAutocompleteError = {}
CityAutocompleteError.__index = CityAutocompleteError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function CityAutocompleteError.new(code, msg, ctx)
  local self = setmetatable({}, CityAutocompleteError)
  self.is_sdk_error = true
  self.sdk = "CityAutocomplete"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  CONTEXT[self] = ctx
  return self
end


function CityAutocompleteError:context()
  return CONTEXT[self]
end


function CityAutocompleteError:error()
  return self.msg
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function CityAutocompleteError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function CityAutocompleteError:to_json()
  return json.encode(self:to_table())
end


function CityAutocompleteError:__tostring()
  return self.msg
end


function CityAutocompleteError.__tojson(self)
  return self:to_json()
end


return CityAutocompleteError
