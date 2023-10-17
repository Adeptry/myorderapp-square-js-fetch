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
/**
 * 
 * @export
 * @interface BusinessHoursPeriodEntity
 */
export interface BusinessHoursPeriodEntity {
    /**
     * 
     * @type {string}
     * @memberof BusinessHoursPeriodEntity
     */
    id?: string | null;
    /**
     * Indicates the specific day  of the week.
     * @type {string}
     * @memberof BusinessHoursPeriodEntity
     */
    dayOfWeek?: string | null;
    /**
     * The start time of a business hours period, specified in local time using partial-time. RFC 3339 format. For example, `8:30:00` for a period starting at 8:30 in the morning. Note that the seconds value is always :00, but it is appended for conformance to the RFC.
     * @type {string}
     * @memberof BusinessHoursPeriodEntity
     */
    startLocalTime?: string | null;
    /**
     * The end time of a business hours period, specified in local time using partial-time. RFC 3339 format. For example, `21:00:00` for a period ending at 9:00 in the evening. Note that the seconds value is always :00, but it is appended for conformance to the RFC.
     * @type {string}
     * @memberof BusinessHoursPeriodEntity
     */
    endLocalTime?: string | null;
}

/**
 * Check if a given object implements the BusinessHoursPeriodEntity interface.
 */
export function instanceOfBusinessHoursPeriodEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BusinessHoursPeriodEntityFromJSON(json: any): BusinessHoursPeriodEntity {
    return BusinessHoursPeriodEntityFromJSONTyped(json, false);
}

export function BusinessHoursPeriodEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessHoursPeriodEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'dayOfWeek': !exists(json, 'dayOfWeek') ? undefined : json['dayOfWeek'],
        'startLocalTime': !exists(json, 'startLocalTime') ? undefined : json['startLocalTime'],
        'endLocalTime': !exists(json, 'endLocalTime') ? undefined : json['endLocalTime'],
    };
}

export function BusinessHoursPeriodEntityToJSON(value?: BusinessHoursPeriodEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'dayOfWeek': value.dayOfWeek,
        'startLocalTime': value.startLocalTime,
        'endLocalTime': value.endLocalTime,
    };
}

