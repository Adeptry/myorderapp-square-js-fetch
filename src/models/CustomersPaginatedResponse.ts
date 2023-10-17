/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.1
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

/**
 * 
 * @export
 * @interface CustomersPaginatedResponse
 */
export interface CustomersPaginatedResponse {
    /**
     * 
     * @type {number}
     * @memberof CustomersPaginatedResponse
     */
    count: number;
    /**
     * 
     * @type {Array<CustomerEntity>}
     * @memberof CustomersPaginatedResponse
     */
    data?: Array<CustomerEntity> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomersPaginatedResponse
     */
    pages: number;
}

/**
 * Check if a given object implements the CustomersPaginatedResponse interface.
 */
export function instanceOfCustomersPaginatedResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "pages" in value;

    return isInstance;
}

export function CustomersPaginatedResponseFromJSON(json: any): CustomersPaginatedResponse {
    return CustomersPaginatedResponseFromJSONTyped(json, false);
}

export function CustomersPaginatedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomersPaginatedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(CustomerEntityFromJSON)),
        'pages': json['pages'],
    };
}

export function CustomersPaginatedResponseToJSON(value?: CustomersPaginatedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(CustomerEntityToJSON)),
        'pages': value.pages,
    };
}

