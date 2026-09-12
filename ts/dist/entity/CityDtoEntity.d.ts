import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { CityDto, CityDtoListMatch } from '../CityAutocompleteTypes';
declare class CityDtoEntity extends CityAutocompleteEntityBase<CityDto> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: CityDtoEntity): CityDtoEntity;
    list(this: any, reqmatch?: CityDtoListMatch, ctrl?: Control): Promise<CityDtoEntity[]>;
}
export { CityDtoEntity };
