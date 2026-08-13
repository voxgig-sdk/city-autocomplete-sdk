# CityAutocomplete SDK feature factory

from cityautocomplete_sdk.feature.base_feature import CityAutocompleteBaseFeature
from cityautocomplete_sdk.feature.test_feature import CityAutocompleteTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CityAutocompleteBaseFeature(),
        "test": lambda: CityAutocompleteTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
