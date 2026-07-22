<?php
declare(strict_types=1);

// CityAutocomplete SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CityAutocompleteMakeContext
{
    public static function call(array $ctxmap, ?CityAutocompleteContext $basectx): CityAutocompleteContext
    {
        return new CityAutocompleteContext($ctxmap, $basectx);
    }
}
