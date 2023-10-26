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
 * @interface AuthGoogleLoginDto
 */
export interface AuthGoogleLoginDto {
    /**
     * 
     * @type {string}
     * @memberof AuthGoogleLoginDto
     */
    idToken: string;
}

/**
 * Check if a given object implements the AuthGoogleLoginDto interface.
 */
export function instanceOfAuthGoogleLoginDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "idToken" in value;

    return isInstance;
}

export function AuthGoogleLoginDtoFromJSON(json: any): AuthGoogleLoginDto {
    return AuthGoogleLoginDtoFromJSONTyped(json, false);
}

export function AuthGoogleLoginDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthGoogleLoginDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'idToken': json['idToken'],
    };
}

export function AuthGoogleLoginDtoToJSON(value?: AuthGoogleLoginDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'idToken': value.idToken,
    };
}

