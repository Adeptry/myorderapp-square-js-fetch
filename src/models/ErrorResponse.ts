/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.7
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
     * @type {{ [key: string]: string; }}
     * @memberof ErrorResponse
     */
    fields?: { [key: string]: string; } | null;
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
    method?: string | null;
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
    timestamp?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    url?: string | null;
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
        
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'statusCode': !exists(json, 'statusCode') ? undefined : json['statusCode'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'url': !exists(json, 'url') ? undefined : json['url'],
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
        
        'fields': value.fields,
        'message': value.message,
        'method': value.method,
        'statusCode': value.statusCode,
        'timestamp': value.timestamp,
        'url': value.url,
    };
}

