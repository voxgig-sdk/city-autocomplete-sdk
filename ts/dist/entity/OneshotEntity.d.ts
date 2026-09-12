import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { Oneshot, OneshotListMatch } from '../CityAutocompleteTypes';
declare class OneshotEntity extends CityAutocompleteEntityBase<Oneshot> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: OneshotEntity): OneshotEntity;
    list(this: any, reqmatch?: OneshotListMatch, ctrl?: Control): Promise<OneshotEntity[]>;
}
export { OneshotEntity };
