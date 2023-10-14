/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.6
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
 * @interface AuthenticationPasswordForgotRequestBody
 */
export interface AuthenticationPasswordForgotRequestBody {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationPasswordForgotRequestBody
     */
    email: string;
}

/**
 * Check if a given object implements the AuthenticationPasswordForgotRequestBody interface.
 */
export function instanceOfAuthenticationPasswordForgotRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function AuthenticationPasswordForgotRequestBodyFromJSON(json: any): AuthenticationPasswordForgotRequestBody {
    return AuthenticationPasswordForgotRequestBodyFromJSONTyped(json, false);
}

export function AuthenticationPasswordForgotRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationPasswordForgotRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
    };
}

export function AuthenticationPasswordForgotRequestBodyToJSON(value?: AuthenticationPasswordForgotRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
    };
}

