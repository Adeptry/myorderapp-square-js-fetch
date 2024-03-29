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
 * @interface AuthenticationUpdateRequestBody
 */
export interface AuthenticationUpdateRequestBody {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationUpdateRequestBody
     */
    oldPassword: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationUpdateRequestBody
     */
    password: string;
}

/**
 * Check if a given object implements the AuthenticationUpdateRequestBody interface.
 */
export function instanceOfAuthenticationUpdateRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "oldPassword" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function AuthenticationUpdateRequestBodyFromJSON(json: any): AuthenticationUpdateRequestBody {
    return AuthenticationUpdateRequestBodyFromJSONTyped(json, false);
}

export function AuthenticationUpdateRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationUpdateRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oldPassword': json['oldPassword'],
        'password': json['password'],
    };
}

export function AuthenticationUpdateRequestBodyToJSON(value?: AuthenticationUpdateRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oldPassword': value.oldPassword,
        'password': value.password,
    };
}

