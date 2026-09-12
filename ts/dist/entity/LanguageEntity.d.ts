import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { Language, LanguageLoadMatch, LanguageListMatch } from '../CityAutocompleteTypes';
declare class LanguageEntity extends CityAutocompleteEntityBase<Language> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: LanguageEntity): LanguageEntity;
    load(this: any, reqmatch?: LanguageLoadMatch, ctrl?: Control): Promise<LanguageEntity>;
    list(this: any, reqmatch?: LanguageListMatch, ctrl?: Control): Promise<LanguageEntity[]>;
}
export { LanguageEntity };
