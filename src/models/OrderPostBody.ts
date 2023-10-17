/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OrdersVariationLineItemInput } from './OrdersVariationLineItemInput';
import {
    OrdersVariationLineItemInputFromJSON,
    OrdersVariationLineItemInputFromJSONTyped,
    OrdersVariationLineItemInputToJSON,
} from './OrdersVariationLineItemInput';

/**
 * 
 * @export
 * @interface OrderPostBody
 */
export interface OrderPostBody {
    /**
     * 
     * @type {Array<OrdersVariationLineItemInput>}
     * @memberof OrderPostBody
     */
    variations?: Array<OrdersVariationLineItemInput> | null;
    /**
     * 
     * @type {string}
     * @memberof OrderPostBody
     */
    locationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderPostBody
     */
    idempotencyKey?: string | null;
}

/**
 * Check if a given object implements the OrderPostBody interface.
 */
export function instanceOfOrderPostBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderPostBodyFromJSON(json: any): OrderPostBody {
    return OrderPostBodyFromJSONTyped(json, false);
}

export function OrderPostBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderPostBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'variations': !exists(json, 'variations') ? undefined : (json['variations'] === null ? null : (json['variations'] as Array<any>).map(OrdersVariationLineItemInputFromJSON)),
        'locationId': !exists(json, 'locationId') ? undefined : json['locationId'],
        'idempotencyKey': !exists(json, 'idempotencyKey') ? undefined : json['idempotencyKey'],
    };
}

export function OrderPostBodyToJSON(value?: OrderPostBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variations': value.variations === undefined ? undefined : (value.variations === null ? null : (value.variations as Array<any>).map(OrdersVariationLineItemInputToJSON)),
        'locationId': value.locationId,
        'idempotencyKey': value.idempotencyKey,
    };
}

