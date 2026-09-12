import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { CityTranslationDto, CityTranslationDtoListMatch } from '../CityAutocompleteTypes';
declare class CityTranslationDtoEntity extends CityAutocompleteEntityBase<CityTranslationDto> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: CityTranslationDtoEntity): CityTranslationDtoEntity;
    list(this: any, reqmatch?: CityTranslationDtoListMatch, ctrl?: Control): Promise<CityTranslationDtoEntity[]>;
}
export { CityTranslationDtoEntity };
