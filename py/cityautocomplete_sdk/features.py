# CityAutocomplete SDK feature factory

from cityautocomplete_sdk.feature.base_feature import CityAutocompleteBaseFeature
from cityautocomplete_sdk.feature.ratelimit_feature import CityAutocompleteRatelimitFeature
from cityautocomplete_sdk.feature.retry_feature import CityAutocompleteRetryFeature
from cityautocomplete_sdk.feature.test_feature import CityAutocompleteTestFeature
from cityautocomplete_sdk.feature.timeout_feature import CityAutocompleteTimeoutFeature


_FEATURES = {
    "base": lambda: CityAutocompleteBaseFeature(),
    "ratelimit": lambda: CityAutocompleteRatelimitFeature(),
    "retry": lambda: CityAutocompleteRetryFeature(),
    "test": lambda: CityAutocompleteTestFeature(),
    "timeout": lambda: CityAutocompleteTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
