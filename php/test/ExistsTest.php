<?php
declare(strict_types=1);

// CityAutocomplete SDK exists test

require_once __DIR__ . '/../cityautocomplete_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CityAutocompleteSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
