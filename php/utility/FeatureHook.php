<?php
declare(strict_types=1);

// CityAutocomplete SDK utility: feature_hook

class CityAutocompleteFeatureHook
{
    public static function call(CityAutocompleteContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
