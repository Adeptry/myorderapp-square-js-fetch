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
import type { UserEntity } from './UserEntity';
import {
    UserEntityFromJSON,
    UserEntityFromJSONTyped,
    UserEntityToJSON,
} from './UserEntity';

/**
 * 
 * @export
 * @interface AuthenticationResponse
 */
export interface AuthenticationResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResponse
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResponse
     */
    refreshToken: string;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationResponse
     */
    tokenExpires: number;
    /**
     * 
     * @type {UserEntity}
     * @memberof AuthenticationResponse
     */
    user?: UserEntity | null;
}

/**
 * Check if a given object implements the AuthenticationResponse interface.
 */
export function instanceOfAuthenticationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "token" in value;
    isInstance = isInstance && "refreshToken" in value;
    isInstance = isInstance && "tokenExpires" in value;

    return isInstance;
}

export function AuthenticationResponseFromJSON(json: any): AuthenticationResponse {
    return AuthenticationResponseFromJSONTyped(json, false);
}

export function AuthenticationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': json['token'],
        'refreshToken': json['refreshToken'],
        'tokenExpires': json['tokenExpires'],
        'user': !exists(json, 'user') ? undefined : UserEntityFromJSON(json['user']),
    };
}

export function AuthenticationResponseToJSON(value?: AuthenticationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
        'refreshToken': value.refreshToken,
        'tokenExpires': value.tokenExpires,
        'user': UserEntityToJSON(value.user),
    };
}

