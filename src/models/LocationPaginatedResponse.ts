/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { LocationEntity } from './LocationEntity';
import {
    LocationEntityFromJSON,
    LocationEntityFromJSONTyped,
    LocationEntityToJSON,
} from './LocationEntity';

/**
 * 
 * @export
 * @interface LocationPaginatedResponse
 */
export interface LocationPaginatedResponse {
    /**
     * 
     * @type {number}
     * @memberof LocationPaginatedResponse
     */
    count: number;
    /**
     * 
     * @type {Array<LocationEntity>}
     * @memberof LocationPaginatedResponse
     */
    data?: Array<LocationEntity> | null;
    /**
     * 
     * @type {number}
     * @memberof LocationPaginatedResponse
     */
    pages: number;
}

/**
 * Check if a given object implements the LocationPaginatedResponse interface.
 */
export function instanceOfLocationPaginatedResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "pages" in value;

    return isInstance;
}

export function LocationPaginatedResponseFromJSON(json: any): LocationPaginatedResponse {
    return LocationPaginatedResponseFromJSONTyped(json, false);
}

export function LocationPaginatedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationPaginatedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(LocationEntityFromJSON)),
        'pages': json['pages'],
    };
}

export function LocationPaginatedResponseToJSON(value?: LocationPaginatedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(LocationEntityToJSON)),
        'pages': value.pages,
    };
}

