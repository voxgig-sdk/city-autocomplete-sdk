import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { Country, CountryLoadMatch, CountryListMatch } from '../CityAutocompleteTypes';
declare class CountryEntity extends CityAutocompleteEntityBase<Country> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: CountryEntity): CountryEntity;
    load(this: any, reqmatch?: CountryLoadMatch, ctrl?: Control): Promise<CountryEntity>;
    list(this: any, reqmatch?: CountryListMatch, ctrl?: Control): Promise<CountryEntity[]>;
}
export { CountryEntity };
