import { CityAutocompleteEntityBase } from '../CityAutocompleteEntityBase';
import type { CityAutocompleteSDK } from '../CityAutocompleteSDK';
import type { Control } from '../types';
import type { Distance, DistanceLoadMatch } from '../CityAutocompleteTypes';
declare class DistanceEntity extends CityAutocompleteEntityBase<Distance> {
    constructor(client: CityAutocompleteSDK, entopts: any);
    make(this: DistanceEntity): DistanceEntity;
    load(this: any, reqmatch?: DistanceLoadMatch, ctrl?: Control): Promise<DistanceEntity>;
}
export { DistanceEntity };
