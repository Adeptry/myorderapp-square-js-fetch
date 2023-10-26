/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { LineItemModifierEntity } from './LineItemModifierEntity';
import {
    LineItemModifierEntityFromJSON,
    LineItemModifierEntityFromJSONTyped,
    LineItemModifierEntityToJSON,
} from './LineItemModifierEntity';

/**
 * 
 * @export
 * @interface LineItemEntity
 */
export interface LineItemEntity {
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    basePriceMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    grossSalesMoneyAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    id?: string | null;
    /**
     * 
     * @type {Array<LineItemModifierEntity>}
     * @memberof LineItemEntity
     */
    modifiers?: Array<LineItemModifierEntity> | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    quantity?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    totalDiscountMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    totalMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    totalServiceChargeMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    totalTaxMoneyAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    variationName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    variationTotalMoneyAmount?: number | null;
}

/**
 * Check if a given object implements the LineItemEntity interface.
 */
export function instanceOfLineItemEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LineItemEntityFromJSON(json: any): LineItemEntity {
    return LineItemEntityFromJSONTyped(json, false);
}

export function LineItemEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'basePriceMoneyAmount': !exists(json, 'basePriceMoneyAmount') ? undefined : json['basePriceMoneyAmount'],
        'grossSalesMoneyAmount': !exists(json, 'grossSalesMoneyAmount') ? undefined : json['grossSalesMoneyAmount'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'modifiers': !exists(json, 'modifiers') ? undefined : (json['modifiers'] === null ? null : (json['modifiers'] as Array<any>).map(LineItemModifierEntityFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'totalDiscountMoneyAmount': !exists(json, 'totalDiscountMoneyAmount') ? undefined : json['totalDiscountMoneyAmount'],
        'totalMoneyAmount': !exists(json, 'totalMoneyAmount') ? undefined : json['totalMoneyAmount'],
        'totalServiceChargeMoneyAmount': !exists(json, 'totalServiceChargeMoneyAmount') ? undefined : json['totalServiceChargeMoneyAmount'],
        'totalTaxMoneyAmount': !exists(json, 'totalTaxMoneyAmount') ? undefined : json['totalTaxMoneyAmount'],
        'variationName': !exists(json, 'variationName') ? undefined : json['variationName'],
        'variationTotalMoneyAmount': !exists(json, 'variationTotalMoneyAmount') ? undefined : json['variationTotalMoneyAmount'],
    };
}

export function LineItemEntityToJSON(value?: LineItemEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'basePriceMoneyAmount': value.basePriceMoneyAmount,
        'grossSalesMoneyAmount': value.grossSalesMoneyAmount,
        'id': value.id,
        'modifiers': value.modifiers === undefined ? undefined : (value.modifiers === null ? null : (value.modifiers as Array<any>).map(LineItemModifierEntityToJSON)),
        'name': value.name,
        'note': value.note,
        'quantity': value.quantity,
        'totalDiscountMoneyAmount': value.totalDiscountMoneyAmount,
        'totalMoneyAmount': value.totalMoneyAmount,
        'totalServiceChargeMoneyAmount': value.totalServiceChargeMoneyAmount,
        'totalTaxMoneyAmount': value.totalTaxMoneyAmount,
        'variationName': value.variationName,
        'variationTotalMoneyAmount': value.variationTotalMoneyAmount,
    };
}

