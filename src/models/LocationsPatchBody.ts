/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.6
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
 * @interface LocationsPatchBody
 */
export interface LocationsPatchBody {
    /**
     * 
     * @type {string}
     * @memberof LocationsPatchBody
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationsPatchBody
     */
    moaEnabled?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof LocationsPatchBody
     */
    moaOrdinal?: number | null;
}

/**
 * Check if a given object implements the LocationsPatchBody interface.
 */
export function instanceOfLocationsPatchBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function LocationsPatchBodyFromJSON(json: any): LocationsPatchBody {
    return LocationsPatchBodyFromJSONTyped(json, false);
}

export function LocationsPatchBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationsPatchBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'moaEnabled': !exists(json, 'moaEnabled') ? undefined : json['moaEnabled'],
        'moaOrdinal': !exists(json, 'moaOrdinal') ? undefined : json['moaOrdinal'],
    };
}

export function LocationsPatchBodyToJSON(value?: LocationsPatchBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'moaEnabled': value.moaEnabled,
        'moaOrdinal': value.moaOrdinal,
    };
}

