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
 * @interface OrderPatchBody
 */
export interface OrderPatchBody {
    /**
     * 
     * @type {string}
     * @memberof OrderPatchBody
     */
    locationId?: string | null;
}

/**
 * Check if a given object implements the OrderPatchBody interface.
 */
export function instanceOfOrderPatchBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderPatchBodyFromJSON(json: any): OrderPatchBody {
    return OrderPatchBodyFromJSONTyped(json, false);
}

export function OrderPatchBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderPatchBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locationId': !exists(json, 'locationId') ? undefined : json['locationId'],
    };
}

export function OrderPatchBodyToJSON(value?: OrderPatchBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locationId': value.locationId,
    };
}

