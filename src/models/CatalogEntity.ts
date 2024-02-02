/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CategoryEntity } from './CategoryEntity';
import {
    CategoryEntityFromJSON,
    CategoryEntityFromJSONTyped,
    CategoryEntityToJSON,
} from './CategoryEntity';

/**
 * 
 * @export
 * @interface CatalogEntity
 */
export interface CatalogEntity {
    /**
     * 
     * @type {Array<CategoryEntity>}
     * @memberof CatalogEntity
     */
    categories?: Array<CategoryEntity> | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntity
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntity
     */
    merchantId?: string | null;
}

/**
 * Check if a given object implements the CatalogEntity interface.
 */
export function instanceOfCatalogEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogEntityFromJSON(json: any): CatalogEntity {
    return CatalogEntityFromJSONTyped(json, false);
}

export function CatalogEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categories': !exists(json, 'categories') ? undefined : (json['categories'] === null ? null : (json['categories'] as Array<any>).map(CategoryEntityFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'merchantId': !exists(json, 'merchantId') ? undefined : json['merchantId'],
    };
}

export function CatalogEntityToJSON(value?: CatalogEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categories': value.categories === undefined ? undefined : (value.categories === null ? null : (value.categories as Array<any>).map(CategoryEntityToJSON)),
        'id': value.id,
        'merchantId': value.merchantId,
    };
}

