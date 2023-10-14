/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CategoryPatchBody
 */
export interface CategoryPatchBody {
    /**
     * 
     * @type {boolean}
     * @memberof CategoryPatchBody
     */
    moaEnabled?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CategoryPatchBody
     */
    moaOrdinal?: number | null;
}

/**
 * Check if a given object implements the CategoryPatchBody interface.
 */
export function instanceOfCategoryPatchBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CategoryPatchBodyFromJSON(json: any): CategoryPatchBody {
    return CategoryPatchBodyFromJSONTyped(json, false);
}

export function CategoryPatchBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryPatchBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moaEnabled': !exists(json, 'moaEnabled') ? undefined : json['moaEnabled'],
        'moaOrdinal': !exists(json, 'moaOrdinal') ? undefined : json['moaOrdinal'],
    };
}

export function CategoryPatchBodyToJSON(value?: CategoryPatchBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'moaEnabled': value.moaEnabled,
        'moaOrdinal': value.moaOrdinal,
    };
}

