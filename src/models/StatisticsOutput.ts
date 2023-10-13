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
 * @interface StatisticsOutput
 */
export interface StatisticsOutput {
    /**
     * 
     * @type {number}
     * @memberof StatisticsOutput
     */
    average?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StatisticsOutput
     */
    maximum?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StatisticsOutput
     */
    minimum?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StatisticsOutput
     */
    sum?: number | null;
}

/**
 * Check if a given object implements the StatisticsOutput interface.
 */
export function instanceOfStatisticsOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatisticsOutputFromJSON(json: any): StatisticsOutput {
    return StatisticsOutputFromJSONTyped(json, false);
}

export function StatisticsOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatisticsOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'average': !exists(json, 'average') ? undefined : json['average'],
        'maximum': !exists(json, 'maximum') ? undefined : json['maximum'],
        'minimum': !exists(json, 'minimum') ? undefined : json['minimum'],
        'sum': !exists(json, 'sum') ? undefined : json['sum'],
    };
}

export function StatisticsOutputToJSON(value?: StatisticsOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'average': value.average,
        'maximum': value.maximum,
        'minimum': value.minimum,
        'sum': value.sum,
    };
}

