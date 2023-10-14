/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.6
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
    totalMoneyAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    totalMoneyDiscountAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    totalMoneyServiceChargeAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    totalMoneyTaxAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    totalMoneyTipAmount?: number | null;
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
        'pickupDate': !exists(json, 'pickupDate') ? undefined : (json['pickupDate'] === null ? null : new Date(json['pickupDate'])),
        'squareFulfillmentStatus': !exists(json, 'squareFulfillmentStatus') ? undefined : FulfillmentStatusEnumFromJSON(json['squareFulfillmentStatus']),
        'totalMoneyAmount': !exists(json, 'totalMoneyAmount') ? undefined : json['totalMoneyAmount'],
        'totalMoneyDiscountAmount': !exists(json, 'totalMoneyDiscountAmount') ? undefined : json['totalMoneyDiscountAmount'],
        'totalMoneyServiceChargeAmount': !exists(json, 'totalMoneyServiceChargeAmount') ? undefined : json['totalMoneyServiceChargeAmount'],
        'totalMoneyTaxAmount': !exists(json, 'totalMoneyTaxAmount') ? undefined : json['totalMoneyTaxAmount'],
        'totalMoneyTipAmount': !exists(json, 'totalMoneyTipAmount') ? undefined : json['totalMoneyTipAmount'],
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
        'pickupDate': value.pickupDate === undefined ? undefined : (value.pickupDate === null ? null : value.pickupDate.toISOString()),
        'squareFulfillmentStatus': FulfillmentStatusEnumToJSON(value.squareFulfillmentStatus),
        'totalMoneyAmount': value.totalMoneyAmount,
        'totalMoneyDiscountAmount': value.totalMoneyDiscountAmount,
        'totalMoneyServiceChargeAmount': value.totalMoneyServiceChargeAmount,
        'totalMoneyTaxAmount': value.totalMoneyTaxAmount,
        'totalMoneyTipAmount': value.totalMoneyTipAmount,
    };
}

