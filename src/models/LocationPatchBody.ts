/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.9
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
 * @interface LocationPatchBody
 */
export interface LocationPatchBody {
    /**
     * 
     * @type {boolean}
     * @memberof LocationPatchBody
     */
    moaEnabled?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof LocationPatchBody
     */
    moaOrdinal?: number | null;
}

/**
 * Check if a given object implements the LocationPatchBody interface.
 */
export function instanceOfLocationPatchBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocationPatchBodyFromJSON(json: any): LocationPatchBody {
    return LocationPatchBodyFromJSONTyped(json, false);
}

export function LocationPatchBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationPatchBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moaEnabled': !exists(json, 'moaEnabled') ? undefined : json['moaEnabled'],
        'moaOrdinal': !exists(json, 'moaOrdinal') ? undefined : json['moaOrdinal'],
    };
}

export function LocationPatchBodyToJSON(value?: LocationPatchBody | null): any {
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

