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
 * @interface LineItemModifierEntity
 */
export interface LineItemModifierEntity {
    /**
     * 
     * @type {number}
     * @memberof LineItemModifierEntity
     */
    baseMoneyAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemModifierEntity
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemModifierEntity
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemModifierEntity
     */
    quantity?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemModifierEntity
     */
    totalMoneyAmount?: number | null;
}

/**
 * Check if a given object implements the LineItemModifierEntity interface.
 */
export function instanceOfLineItemModifierEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LineItemModifierEntityFromJSON(json: any): LineItemModifierEntity {
    return LineItemModifierEntityFromJSONTyped(json, false);
}

export function LineItemModifierEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemModifierEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseMoneyAmount': !exists(json, 'baseMoneyAmount') ? undefined : json['baseMoneyAmount'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'totalMoneyAmount': !exists(json, 'totalMoneyAmount') ? undefined : json['totalMoneyAmount'],
    };
}

export function LineItemModifierEntityToJSON(value?: LineItemModifierEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baseMoneyAmount': value.baseMoneyAmount,
        'id': value.id,
        'name': value.name,
        'quantity': value.quantity,
        'totalMoneyAmount': value.totalMoneyAmount,
    };
}

