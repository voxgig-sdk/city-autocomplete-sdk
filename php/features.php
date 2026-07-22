<?php
declare(strict_types=1);

// CityAutocomplete SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CityAutocompleteFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CityAutocompleteBaseFeature();
            case "test":
                return new CityAutocompleteTestFeature();
            default:
                return new CityAutocompleteBaseFeature();
        }
    }
}
