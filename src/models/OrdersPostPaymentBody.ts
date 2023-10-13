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
import type { FulfillmentRecipientInput } from './FulfillmentRecipientInput';
import {
    FulfillmentRecipientInputFromJSON,
    FulfillmentRecipientInputFromJSONTyped,
    FulfillmentRecipientInputToJSON,
} from './FulfillmentRecipientInput';

/**
 * 
 * @export
 * @interface OrdersPostPaymentBody
 */
export interface OrdersPostPaymentBody {
    /**
     * If not provided, prepare ASAP, else will validate it's within business hours and schedule. Represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     * @type {string}
     * @memberof OrdersPostPaymentBody
     */
    pickupDateString?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrdersPostPaymentBody
     */
    paymentSquareId: string;
    /**
     * 
     * @type {string}
     * @memberof OrdersPostPaymentBody
     */
    note?: string | null;
    /**
     * Should be generated on checkout screen presentation.
     * @type {string}
     * @memberof OrdersPostPaymentBody
     */
    idempotencyKey: string;
    /**
     * 
     * @type {number}
     * @memberof OrdersPostPaymentBody
     */
    tipMoneyAmount: number;
    /**
     * 
     * @type {FulfillmentRecipientInput}
     * @memberof OrdersPostPaymentBody
     */
    recipient?: FulfillmentRecipientInput | null;
}

/**
 * Check if a given object implements the OrdersPostPaymentBody interface.
 */
export function instanceOfOrdersPostPaymentBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "paymentSquareId" in value;
    isInstance = isInstance && "idempotencyKey" in value;
    isInstance = isInstance && "tipMoneyAmount" in value;

    return isInstance;
}

export function OrdersPostPaymentBodyFromJSON(json: any): OrdersPostPaymentBody {
    return OrdersPostPaymentBodyFromJSONTyped(json, false);
}

export function OrdersPostPaymentBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrdersPostPaymentBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pickupDateString': !exists(json, 'pickupDateString') ? undefined : json['pickupDateString'],
        'paymentSquareId': json['paymentSquareId'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'idempotencyKey': json['idempotencyKey'],
        'tipMoneyAmount': json['tipMoneyAmount'],
        'recipient': !exists(json, 'recipient') ? undefined : FulfillmentRecipientInputFromJSON(json['recipient']),
    };
}

export function OrdersPostPaymentBodyToJSON(value?: OrdersPostPaymentBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pickupDateString': value.pickupDateString,
        'paymentSquareId': value.paymentSquareId,
        'note': value.note,
        'idempotencyKey': value.idempotencyKey,
        'tipMoneyAmount': value.tipMoneyAmount,
        'recipient': FulfillmentRecipientInputToJSON(value.recipient),
    };
}

