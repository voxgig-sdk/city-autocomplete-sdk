import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { SettlementType, SettlementTypeListMatch } from '../CityAutocompleteTypes';
declare class SettlementTypeEntity extends CityAutocompleteEntityBase<SettlementType> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: SettlementTypeEntity): SettlementTypeEntity;
    list(this: any, reqmatch?: SettlementTypeListMatch, ctrl?: Control): Promise<SettlementTypeEntity[]>;
}
export { SettlementTypeEntity };
