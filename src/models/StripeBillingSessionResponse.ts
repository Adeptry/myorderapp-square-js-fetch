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
/**
 * 
 * @export
 * @interface StripeBillingSessionResponse
 */
export interface StripeBillingSessionResponse {
    /**
     * 
     * @type {string}
     * @memberof StripeBillingSessionResponse
     */
    url: string;
}

/**
 * Check if a given object implements the StripeBillingSessionResponse interface.
 */
export function instanceOfStripeBillingSessionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function StripeBillingSessionResponseFromJSON(json: any): StripeBillingSessionResponse {
    return StripeBillingSessionResponseFromJSONTyped(json, false);
}

export function StripeBillingSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeBillingSessionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function StripeBillingSessionResponseToJSON(value?: StripeBillingSessionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}

