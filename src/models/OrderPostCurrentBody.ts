/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.19
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
 * @interface OrderPostCurrentBody
 */
export interface OrderPostCurrentBody {
    /**
     * 
     * @type {Array<OrdersVariationLineItemInput>}
     * @memberof OrderPostCurrentBody
     */
    variations?: Array<OrdersVariationLineItemInput> | null;
}

/**
 * Check if a given object implements the OrderPostCurrentBody interface.
 */
export function instanceOfOrderPostCurrentBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderPostCurrentBodyFromJSON(json: any): OrderPostCurrentBody {
    return OrderPostCurrentBodyFromJSONTyped(json, false);
}

export function OrderPostCurrentBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderPostCurrentBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'variations': !exists(json, 'variations') ? undefined : (json['variations'] === null ? null : (json['variations'] as Array<any>).map(OrdersVariationLineItemInputFromJSON)),
    };
}

export function OrderPostCurrentBodyToJSON(value?: OrderPostCurrentBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variations': value.variations === undefined ? undefined : (value.variations === null ? null : (value.variations as Array<any>).map(OrdersVariationLineItemInputToJSON)),
    };
}

