/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.5
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
 * @interface OrdersVariationLineItemInput
 */
export interface OrdersVariationLineItemInput {
    /**
     * 
     * @type {string}
     * @memberof OrdersVariationLineItemInput
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrdersVariationLineItemInput
     */
    modifierIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof OrdersVariationLineItemInput
     */
    note?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrdersVariationLineItemInput
     */
    quantity: number;
}

/**
 * Check if a given object implements the OrdersVariationLineItemInput interface.
 */
export function instanceOfOrdersVariationLineItemInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "quantity" in value;

    return isInstance;
}

export function OrdersVariationLineItemInputFromJSON(json: any): OrdersVariationLineItemInput {
    return OrdersVariationLineItemInputFromJSONTyped(json, false);
}

export function OrdersVariationLineItemInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrdersVariationLineItemInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'modifierIds': !exists(json, 'modifierIds') ? undefined : json['modifierIds'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'quantity': json['quantity'],
    };
}

export function OrdersVariationLineItemInputToJSON(value?: OrdersVariationLineItemInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'modifierIds': value.modifierIds,
        'note': value.note,
        'quantity': value.quantity,
    };
}

