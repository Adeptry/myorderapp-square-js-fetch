/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.2
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
 * @interface VariationPatchBody
 */
export interface VariationPatchBody {
    /**
     * 
     * @type {boolean}
     * @memberof VariationPatchBody
     */
    moaEnabled: boolean;
}

/**
 * Check if a given object implements the VariationPatchBody interface.
 */
export function instanceOfVariationPatchBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "moaEnabled" in value;

    return isInstance;
}

export function VariationPatchBodyFromJSON(json: any): VariationPatchBody {
    return VariationPatchBodyFromJSONTyped(json, false);
}

export function VariationPatchBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariationPatchBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moaEnabled': json['moaEnabled'],
    };
}

export function VariationPatchBodyToJSON(value?: VariationPatchBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'moaEnabled': value.moaEnabled,
    };
}

