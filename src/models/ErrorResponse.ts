/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.3
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
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    statusCode?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    method?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    timestamp?: string | null;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ErrorResponse
     */
    fields?: { [key: string]: string; } | null;
}

/**
 * Check if a given object implements the ErrorResponse interface.
 */
export function instanceOfErrorResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorResponseFromJSON(json: any): ErrorResponse {
    return ErrorResponseFromJSONTyped(json, false);
}

export function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': !exists(json, 'statusCode') ? undefined : json['statusCode'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
    };
}

export function ErrorResponseToJSON(value?: ErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'message': value.message,
        'url': value.url,
        'method': value.method,
        'timestamp': value.timestamp,
        'fields': value.fields,
    };
}

