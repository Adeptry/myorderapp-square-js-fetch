/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.12
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
 * @interface AuthenticationEmailLoginRequestBody
 */
export interface AuthenticationEmailLoginRequestBody {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationEmailLoginRequestBody
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationEmailLoginRequestBody
     */
    password: string;
}

/**
 * Check if a given object implements the AuthenticationEmailLoginRequestBody interface.
 */
export function instanceOfAuthenticationEmailLoginRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function AuthenticationEmailLoginRequestBodyFromJSON(json: any): AuthenticationEmailLoginRequestBody {
    return AuthenticationEmailLoginRequestBodyFromJSONTyped(json, false);
}

export function AuthenticationEmailLoginRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationEmailLoginRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
    };
}

export function AuthenticationEmailLoginRequestBodyToJSON(value?: AuthenticationEmailLoginRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}

