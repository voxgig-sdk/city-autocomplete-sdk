import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { RegionTranslationDto, RegionTranslationDtoListMatch } from '../CityAutocompleteTypes';
declare class RegionTranslationDtoEntity extends CityAutocompleteEntityBase<RegionTranslationDto> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: RegionTranslationDtoEntity): RegionTranslationDtoEntity;
    list(this: any, reqmatch?: RegionTranslationDtoListMatch, ctrl?: Control): Promise<RegionTranslationDtoEntity[]>;
}
export { RegionTranslationDtoEntity };
