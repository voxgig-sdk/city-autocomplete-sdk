<?php
declare(strict_types=1);

// CityAutocomplete SDK base feature

class CityAutocompleteBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CityAutocompleteContext $ctx, array $options): void {}
    public function PostConstruct(CityAutocompleteContext $ctx): void {}
    public function PostConstructEntity(CityAutocompleteContext $ctx): void {}
    public function SetData(CityAutocompleteContext $ctx): void {}
    public function GetData(CityAutocompleteContext $ctx): void {}
    public function GetMatch(CityAutocompleteContext $ctx): void {}
    public function SetMatch(CityAutocompleteContext $ctx): void {}
    public function PrePoint(CityAutocompleteContext $ctx): void {}
    public function PreSpec(CityAutocompleteContext $ctx): void {}
    public function PreRequest(CityAutocompleteContext $ctx): void {}
    public function PreResponse(CityAutocompleteContext $ctx): void {}
    public function PreResult(CityAutocompleteContext $ctx): void {}
    public function PreDone(CityAutocompleteContext $ctx): void {}
    public function PreUnexpected(CityAutocompleteContext $ctx): void {}
}
