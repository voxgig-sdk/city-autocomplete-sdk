<?php
declare(strict_types=1);

// CityAutocomplete SDK utility: result_body

class CityAutocompleteResultBody
{
    public static function call(CityAutocompleteContext $ctx): ?CityAutocompleteResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
