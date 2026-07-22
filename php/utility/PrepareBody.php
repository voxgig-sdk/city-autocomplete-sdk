<?php
declare(strict_types=1);

// CityAutocomplete SDK utility: prepare_body

class CityAutocompletePrepareBody
{
    public static function call(CityAutocompleteContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
