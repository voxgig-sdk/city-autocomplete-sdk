<?php
declare(strict_types=1);

// CityAutocomplete SDK utility: result_headers

class CityAutocompleteResultHeaders
{
    public static function call(CityAutocompleteContext $ctx): ?CityAutocompleteResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
