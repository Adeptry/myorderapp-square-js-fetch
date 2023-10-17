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
 * @interface AuthenticationPasswordResetRequestBody
 */
export interface AuthenticationPasswordResetRequestBody {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationPasswordResetRequestBody
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationPasswordResetRequestBody
     */
    hash: string;
}

/**
 * Check if a given object implements the AuthenticationPasswordResetRequestBody interface.
 */
export function instanceOfAuthenticationPasswordResetRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "hash" in value;

    return isInstance;
}

export function AuthenticationPasswordResetRequestBodyFromJSON(json: any): AuthenticationPasswordResetRequestBody {
    return AuthenticationPasswordResetRequestBodyFromJSONTyped(json, false);
}

export function AuthenticationPasswordResetRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationPasswordResetRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': json['password'],
        'hash': json['hash'],
    };
}

export function AuthenticationPasswordResetRequestBodyToJSON(value?: AuthenticationPasswordResetRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
        'hash': value.hash,
    };
}

