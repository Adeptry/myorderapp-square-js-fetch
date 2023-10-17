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
     * @type {string}
     * @memberof LineItemEntity
     */
    id?: string | null;
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
    quantity?: string | null;
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
    variationName?: string | null;
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
    variationTotalMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    grossSalesMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    totalTaxMoneyAmount?: number | null;
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
     * @type {Array<LineItemModifierEntity>}
     * @memberof LineItemEntity
     */
    modifiers?: Array<LineItemModifierEntity> | null;
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
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'variationName': !exists(json, 'variationName') ? undefined : json['variationName'],
        'basePriceMoneyAmount': !exists(json, 'basePriceMoneyAmount') ? undefined : json['basePriceMoneyAmount'],
        'variationTotalMoneyAmount': !exists(json, 'variationTotalMoneyAmount') ? undefined : json['variationTotalMoneyAmount'],
        'grossSalesMoneyAmount': !exists(json, 'grossSalesMoneyAmount') ? undefined : json['grossSalesMoneyAmount'],
        'totalTaxMoneyAmount': !exists(json, 'totalTaxMoneyAmount') ? undefined : json['totalTaxMoneyAmount'],
        'totalDiscountMoneyAmount': !exists(json, 'totalDiscountMoneyAmount') ? undefined : json['totalDiscountMoneyAmount'],
        'totalMoneyAmount': !exists(json, 'totalMoneyAmount') ? undefined : json['totalMoneyAmount'],
        'totalServiceChargeMoneyAmount': !exists(json, 'totalServiceChargeMoneyAmount') ? undefined : json['totalServiceChargeMoneyAmount'],
        'modifiers': !exists(json, 'modifiers') ? undefined : (json['modifiers'] === null ? null : (json['modifiers'] as Array<any>).map(LineItemModifierEntityFromJSON)),
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
        
        'id': value.id,
        'name': value.name,
        'quantity': value.quantity,
        'note': value.note,
        'variationName': value.variationName,
        'basePriceMoneyAmount': value.basePriceMoneyAmount,
        'variationTotalMoneyAmount': value.variationTotalMoneyAmount,
        'grossSalesMoneyAmount': value.grossSalesMoneyAmount,
        'totalTaxMoneyAmount': value.totalTaxMoneyAmount,
        'totalDiscountMoneyAmount': value.totalDiscountMoneyAmount,
        'totalMoneyAmount': value.totalMoneyAmount,
        'totalServiceChargeMoneyAmount': value.totalServiceChargeMoneyAmount,
        'modifiers': value.modifiers === undefined ? undefined : (value.modifiers === null ? null : (value.modifiers as Array<any>).map(LineItemModifierEntityToJSON)),
    };
}

