import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { Region, RegionLoadMatch, RegionListMatch } from '../CityAutocompleteTypes';
declare class RegionEntity extends CityAutocompleteEntityBase<Region> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: RegionEntity): RegionEntity;
    load(this: any, reqmatch?: RegionLoadMatch, ctrl?: Control): Promise<RegionEntity>;
    list(this: any, reqmatch?: RegionListMatch, ctrl?: Control): Promise<RegionEntity[]>;
}
export { RegionEntity };
