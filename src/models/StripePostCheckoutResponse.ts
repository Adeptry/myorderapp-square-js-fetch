/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.5
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
 * @interface StripePostCheckoutResponse
 */
export interface StripePostCheckoutResponse {
    /**
     * 
     * @type {string}
     * @memberof StripePostCheckoutResponse
     */
    checkoutSessionId: string;
}

/**
 * Check if a given object implements the StripePostCheckoutResponse interface.
 */
export function instanceOfStripePostCheckoutResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "checkoutSessionId" in value;

    return isInstance;
}

export function StripePostCheckoutResponseFromJSON(json: any): StripePostCheckoutResponse {
    return StripePostCheckoutResponseFromJSONTyped(json, false);
}

export function StripePostCheckoutResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripePostCheckoutResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkoutSessionId': json['checkoutSessionId'],
    };
}

export function StripePostCheckoutResponseToJSON(value?: StripePostCheckoutResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checkoutSessionId': value.checkoutSessionId,
    };
}

