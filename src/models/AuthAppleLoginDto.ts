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
 * @interface AuthAppleLoginDto
 */
export interface AuthAppleLoginDto {
    /**
     * 
     * @type {string}
     * @memberof AuthAppleLoginDto
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthAppleLoginDto
     */
    idToken: string;
    /**
     * 
     * @type {string}
     * @memberof AuthAppleLoginDto
     */
    lastName?: string | null;
}

/**
 * Check if a given object implements the AuthAppleLoginDto interface.
 */
export function instanceOfAuthAppleLoginDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "idToken" in value;

    return isInstance;
}

export function AuthAppleLoginDtoFromJSON(json: any): AuthAppleLoginDto {
    return AuthAppleLoginDtoFromJSONTyped(json, false);
}

export function AuthAppleLoginDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthAppleLoginDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'idToken': json['idToken'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
    };
}

export function AuthAppleLoginDtoToJSON(value?: AuthAppleLoginDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'idToken': value.idToken,
        'lastName': value.lastName,
    };
}

