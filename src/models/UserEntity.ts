/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.17
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
 * @interface UserEntity
 */
export interface UserEntity {
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    fullName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    language?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    provider?: UserEntityProviderEnum;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    socialId?: string | null;
}


/**
 * @export
 */
export const UserEntityProviderEnum = {
    Email: 'email',
    Facebook: 'facebook',
    Google: 'google',
    Twitter: 'twitter',
    Apple: 'apple'
} as const;
export type UserEntityProviderEnum = typeof UserEntityProviderEnum[keyof typeof UserEntityProviderEnum];


/**
 * Check if a given object implements the UserEntity interface.
 */
export function instanceOfUserEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function UserEntityFromJSON(json: any): UserEntity {
    return UserEntityFromJSONTyped(json, false);
}

export function UserEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'id': json['id'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'socialId': !exists(json, 'socialId') ? undefined : json['socialId'],
    };
}

export function UserEntityToJSON(value?: UserEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'firstName': value.firstName,
        'fullName': value.fullName,
        'id': value.id,
        'language': value.language,
        'lastName': value.lastName,
        'phoneNumber': value.phoneNumber,
        'provider': value.provider,
        'socialId': value.socialId,
    };
}

