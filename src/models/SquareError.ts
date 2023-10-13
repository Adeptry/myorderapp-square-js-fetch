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
/**
 * 
 * @export
 * @interface SquareError
 */
export interface SquareError {
    /**
     * Indicates the specific error that occurred during a request to a Square API.
     * @type {string}
     * @memberof SquareError
     */
    category?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareError
     */
    code?: string | null;
    /**
     * A human-readable description of the error for debugging purposes.
     * @type {string}
     * @memberof SquareError
     */
    detail?: string | null;
    /**
     * The name of the field provided in the original request (if any) that the error pertains to.
     * @type {string}
     * @memberof SquareError
     */
    field?: string | null;
}

/**
 * Check if a given object implements the SquareError interface.
 */
export function instanceOfSquareError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SquareErrorFromJSON(json: any): SquareError {
    return SquareErrorFromJSONTyped(json, false);
}

export function SquareErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SquareError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : json['category'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'field': !exists(json, 'field') ? undefined : json['field'],
    };
}

export function SquareErrorToJSON(value?: SquareError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': value.category,
        'code': value.code,
        'detail': value.detail,
        'field': value.field,
    };
}

