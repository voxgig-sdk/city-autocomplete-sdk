import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { City, CityLoadMatch } from '../CityAutocompleteTypes';
declare class CityEntity extends CityAutocompleteEntityBase<City> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: CityEntity): CityEntity;
    load(this: any, reqmatch?: CityLoadMatch, ctrl?: Control): Promise<CityEntity>;
}
export { CityEntity };
