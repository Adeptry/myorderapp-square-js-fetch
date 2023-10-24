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
import type { CustomerEntity } from './CustomerEntity';
import {
    CustomerEntityFromJSON,
    CustomerEntityFromJSONTyped,
    CustomerEntityToJSON,
} from './CustomerEntity';
import type { FulfillmentStatusEnum } from './FulfillmentStatusEnum';
import {
    FulfillmentStatusEnumFromJSON,
    FulfillmentStatusEnumFromJSONTyped,
    FulfillmentStatusEnumToJSON,
} from './FulfillmentStatusEnum';
import type { LineItemEntity } from './LineItemEntity';
import {
    LineItemEntityFromJSON,
    LineItemEntityFromJSONTyped,
    LineItemEntityToJSON,
} from './LineItemEntity';
import type { LocationEntity } from './LocationEntity';
import {
    LocationEntityFromJSON,
    LocationEntityFromJSONTyped,
    LocationEntityToJSON,
} from './LocationEntity';

/**
 * 
 * @export
 * @interface OrderEntity
 */
export interface OrderEntity {
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    appFeeMoneyAmount?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof OrderEntity
     */
    closedDate?: Date | null;
    /**
     * 
     * @type {CustomerEntity}
     * @memberof OrderEntity
     */
    customer?: CustomerEntity | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    displayId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    id?: string | null;
    /**
     * 
     * @type {Array<LineItemEntity>}
     * @memberof OrderEntity
     */
    lineItems?: Array<LineItemEntity> | null;
    /**
     * 
     * @type {LocationEntity}
     * @memberof OrderEntity
     */
    location?: LocationEntity | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    note?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof OrderEntity
     */
    pickupDate?: Date | null;
    /**
     * 
     * @type {FulfillmentStatusEnum}
     * @memberof OrderEntity
     */
    squareFulfillmentStatus?: FulfillmentStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    subtotalMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    totalDiscountMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    totalMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    totalServiceChargeMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    totalTaxMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    totalTipMoneyAmount?: number | null;
}

/**
 * Check if a given object implements the OrderEntity interface.
 */
export function instanceOfOrderEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderEntityFromJSON(json: any): OrderEntity {
    return OrderEntityFromJSONTyped(json, false);
}

export function OrderEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appFeeMoneyAmount': !exists(json, 'appFeeMoneyAmount') ? undefined : json['appFeeMoneyAmount'],
        'closedDate': !exists(json, 'closedDate') ? undefined : (json['closedDate'] === null ? null : new Date(json['closedDate'])),
        'customer': !exists(json, 'customer') ? undefined : CustomerEntityFromJSON(json['customer']),
        'displayId': !exists(json, 'displayId') ? undefined : json['displayId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lineItems': !exists(json, 'lineItems') ? undefined : (json['lineItems'] === null ? null : (json['lineItems'] as Array<any>).map(LineItemEntityFromJSON)),
        'location': !exists(json, 'location') ? undefined : LocationEntityFromJSON(json['location']),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'pickupDate': !exists(json, 'pickupDate') ? undefined : (json['pickupDate'] === null ? null : new Date(json['pickupDate'])),
        'squareFulfillmentStatus': !exists(json, 'squareFulfillmentStatus') ? undefined : FulfillmentStatusEnumFromJSON(json['squareFulfillmentStatus']),
        'subtotalMoneyAmount': !exists(json, 'subtotalMoneyAmount') ? undefined : json['subtotalMoneyAmount'],
        'totalDiscountMoneyAmount': !exists(json, 'totalDiscountMoneyAmount') ? undefined : json['totalDiscountMoneyAmount'],
        'totalMoneyAmount': !exists(json, 'totalMoneyAmount') ? undefined : json['totalMoneyAmount'],
        'totalServiceChargeMoneyAmount': !exists(json, 'totalServiceChargeMoneyAmount') ? undefined : json['totalServiceChargeMoneyAmount'],
        'totalTaxMoneyAmount': !exists(json, 'totalTaxMoneyAmount') ? undefined : json['totalTaxMoneyAmount'],
        'totalTipMoneyAmount': !exists(json, 'totalTipMoneyAmount') ? undefined : json['totalTipMoneyAmount'],
    };
}

export function OrderEntityToJSON(value?: OrderEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appFeeMoneyAmount': value.appFeeMoneyAmount,
        'closedDate': value.closedDate === undefined ? undefined : (value.closedDate === null ? null : value.closedDate.toISOString()),
        'customer': CustomerEntityToJSON(value.customer),
        'displayId': value.displayId,
        'id': value.id,
        'lineItems': value.lineItems === undefined ? undefined : (value.lineItems === null ? null : (value.lineItems as Array<any>).map(LineItemEntityToJSON)),
        'location': LocationEntityToJSON(value.location),
        'note': value.note,
        'pickupDate': value.pickupDate === undefined ? undefined : (value.pickupDate === null ? null : value.pickupDate.toISOString()),
        'squareFulfillmentStatus': FulfillmentStatusEnumToJSON(value.squareFulfillmentStatus),
        'subtotalMoneyAmount': value.subtotalMoneyAmount,
        'totalDiscountMoneyAmount': value.totalDiscountMoneyAmount,
        'totalMoneyAmount': value.totalMoneyAmount,
        'totalServiceChargeMoneyAmount': value.totalServiceChargeMoneyAmount,
        'totalTaxMoneyAmount': value.totalTaxMoneyAmount,
        'totalTipMoneyAmount': value.totalTipMoneyAmount,
    };
}

