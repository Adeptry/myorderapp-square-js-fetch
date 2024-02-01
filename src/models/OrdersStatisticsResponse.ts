/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StatisticsOutput } from './StatisticsOutput';
import {
    StatisticsOutputFromJSON,
    StatisticsOutputFromJSONTyped,
    StatisticsOutputToJSON,
} from './StatisticsOutput';

/**
 * 
 * @export
 * @interface OrdersStatisticsResponse
 */
export interface OrdersStatisticsResponse {
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    appFeeMoneyAmount?: StatisticsOutput | null;
    /**
     * 
     * @type {number}
     * @memberof OrdersStatisticsResponse
     */
    count?: number | null;
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    moneyAmount?: StatisticsOutput | null;
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    serviceChargeMoneyAmount?: StatisticsOutput | null;
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    taxMoneyAmount?: StatisticsOutput | null;
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    tipMoneyAmount?: StatisticsOutput | null;
}

/**
 * Check if a given object implements the OrdersStatisticsResponse interface.
 */
export function instanceOfOrdersStatisticsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrdersStatisticsResponseFromJSON(json: any): OrdersStatisticsResponse {
    return OrdersStatisticsResponseFromJSONTyped(json, false);
}

export function OrdersStatisticsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrdersStatisticsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appFeeMoneyAmount': !exists(json, 'appFeeMoneyAmount') ? undefined : StatisticsOutputFromJSON(json['appFeeMoneyAmount']),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'moneyAmount': !exists(json, 'moneyAmount') ? undefined : StatisticsOutputFromJSON(json['moneyAmount']),
        'serviceChargeMoneyAmount': !exists(json, 'serviceChargeMoneyAmount') ? undefined : StatisticsOutputFromJSON(json['serviceChargeMoneyAmount']),
        'taxMoneyAmount': !exists(json, 'taxMoneyAmount') ? undefined : StatisticsOutputFromJSON(json['taxMoneyAmount']),
        'tipMoneyAmount': !exists(json, 'tipMoneyAmount') ? undefined : StatisticsOutputFromJSON(json['tipMoneyAmount']),
    };
}

export function OrdersStatisticsResponseToJSON(value?: OrdersStatisticsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appFeeMoneyAmount': StatisticsOutputToJSON(value.appFeeMoneyAmount),
        'count': value.count,
        'moneyAmount': StatisticsOutputToJSON(value.moneyAmount),
        'serviceChargeMoneyAmount': StatisticsOutputToJSON(value.serviceChargeMoneyAmount),
        'taxMoneyAmount': StatisticsOutputToJSON(value.taxMoneyAmount),
        'tipMoneyAmount': StatisticsOutputToJSON(value.tipMoneyAmount),
    };
}

