import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { CountryTranslationDto, CountryTranslationDtoListMatch } from '../CityAutocompleteTypes';
declare class CountryTranslationDtoEntity extends CityAutocompleteEntityBase<CountryTranslationDto> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: CountryTranslationDtoEntity): CountryTranslationDtoEntity;
    list(this: any, reqmatch?: CountryTranslationDtoListMatch, ctrl?: Control): Promise<CountryTranslationDtoEntity[]>;
}
export { CountryTranslationDtoEntity };
