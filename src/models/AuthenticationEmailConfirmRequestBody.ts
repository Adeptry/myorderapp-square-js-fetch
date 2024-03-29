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
 * @interface AuthenticationEmailConfirmRequestBody
 */
export interface AuthenticationEmailConfirmRequestBody {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationEmailConfirmRequestBody
     */
    hash: string;
}

/**
 * Check if a given object implements the AuthenticationEmailConfirmRequestBody interface.
 */
export function instanceOfAuthenticationEmailConfirmRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "hash" in value;

    return isInstance;
}

export function AuthenticationEmailConfirmRequestBodyFromJSON(json: any): AuthenticationEmailConfirmRequestBody {
    return AuthenticationEmailConfirmRequestBodyFromJSONTyped(json, false);
}

export function AuthenticationEmailConfirmRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationEmailConfirmRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hash': json['hash'],
    };
}

export function AuthenticationEmailConfirmRequestBodyToJSON(value?: AuthenticationEmailConfirmRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hash': value.hash,
    };
}

