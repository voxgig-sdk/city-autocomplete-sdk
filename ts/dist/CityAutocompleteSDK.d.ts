import { CityEntity } from './entity/CityEntity';
import { CityDtoEntity } from './entity/CityDtoEntity';
import { CityTranslationDtoEntity } from './entity/CityTranslationDtoEntity';
import { CountryEntity } from './entity/CountryEntity';
import { CountryTranslationDtoEntity } from './entity/CountryTranslationDtoEntity';
import { DistanceEntity } from './entity/DistanceEntity';
import { LanguageEntity } from './entity/LanguageEntity';
import { OneshotEntity } from './entity/OneshotEntity';
import { RegionEntity } from './entity/RegionEntity';
import { RegionTranslationDtoEntity } from './entity/RegionTranslationDtoEntity';
import { SettlementTypeEntity } from './entity/SettlementTypeEntity';
export type * from './CityAutocompleteTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CityAutocompleteEntityBase } from './CityAutocompleteEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CityAutocompleteSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    City(entopts?: Record<string, any>): CityEntity;
    CityDto(entopts?: Record<string, any>): CityDtoEntity;
    CityTranslationDto(entopts?: Record<string, any>): CityTranslationDtoEntity;
    Country(entopts?: Record<string, any>): CountryEntity;
    CountryTranslationDto(entopts?: Record<string, any>): CountryTranslationDtoEntity;
    Distance(entopts?: Record<string, any>): DistanceEntity;
    Language(entopts?: Record<string, any>): LanguageEntity;
    Oneshot(entopts?: Record<string, any>): OneshotEntity;
    Region(entopts?: Record<string, any>): RegionEntity;
    RegionTranslationDto(entopts?: Record<string, any>): RegionTranslationDtoEntity;
    SettlementType(entopts?: Record<string, any>): SettlementTypeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CityAutocompleteSDK;
    tester(testopts?: any, sdkopts?: any): CityAutocompleteSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CityAutocompleteSDK;
export { stdutil, config, BaseFeature, CityAutocompleteEntityBase, CityAutocompleteSDK, SDK, };
