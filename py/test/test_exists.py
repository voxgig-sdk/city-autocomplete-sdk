# ProjectName SDK exists test

import pytest
from cityautocomplete_sdk import CityAutocompleteSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CityAutocompleteSDK.test(None, None)
        assert testsdk is not None
