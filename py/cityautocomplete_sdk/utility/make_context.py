# CityAutocomplete SDK utility: make_context

from cityautocomplete_sdk.core.context import CityAutocompleteContext


def make_context_util(ctxmap, basectx):
    return CityAutocompleteContext(ctxmap, basectx)
