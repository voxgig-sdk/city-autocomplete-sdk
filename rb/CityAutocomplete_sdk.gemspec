Gem::Specification.new do |spec|
  spec.name          = "voxgig-sdk-city-autocomplete"
  spec.version       = "0.0.1"
  spec.authors       = ["Voxgig"]
  spec.summary       = "Unofficial generated Ruby SDK for the Geomelon public API. Not affiliated with or endorsed by the upstream API provider."
  spec.description   = "Unofficial generated Ruby SDK for the Geomelon public API. Not affiliated with or endorsed by the upstream API provider."
  spec.license       = "MIT"
  spec.homepage      = "https://github.com/voxgig-sdk/city-autocomplete-sdk"
  spec.metadata      = {
    "homepage_uri"          => "https://github.com/voxgig-sdk/city-autocomplete-sdk",
    "source_code_uri"       => "https://github.com/voxgig-sdk/city-autocomplete-sdk",
    "bug_tracker_uri"       => "https://github.com/voxgig-sdk/city-autocomplete-sdk/issues",
    "changelog_uri"         => "https://github.com/voxgig-sdk/city-autocomplete-sdk/blob/main/CHANGELOG.md",
    "rubygems_mfa_required" => "true"
  }

  spec.files         = Dir[
    "*.rb",
    "core/**/*.rb",
    "entity/**/*.rb",
    "feature/**/*.rb",
    "utility/**/*.rb",
    "LICENSE",
    "README.md",
    "REFERENCE.md"
  ]
  spec.require_paths = ["."]

  spec.required_ruby_version = ">= 3.0"
  spec.add_dependency "json", "~> 0"
  spec.add_dependency "voxgig-struct", "~> 0.0.10"

  spec.add_development_dependency "minitest", "~> 5.0"
  spec.add_development_dependency "rake", "~> 13.0"
end
