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
 * @interface AppInstallPostBody
 */
export interface AppInstallPostBody {
    /**
     * 
     * @type {string}
     * @memberof AppInstallPostBody
     */
    firebaseCloudMessagingToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppInstallPostBody
     */
    firebaseInstallationId?: string | null;
}

/**
 * Check if a given object implements the AppInstallPostBody interface.
 */
export function instanceOfAppInstallPostBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInstallPostBodyFromJSON(json: any): AppInstallPostBody {
    return AppInstallPostBodyFromJSONTyped(json, false);
}

export function AppInstallPostBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInstallPostBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firebaseCloudMessagingToken': !exists(json, 'firebaseCloudMessagingToken') ? undefined : json['firebaseCloudMessagingToken'],
        'firebaseInstallationId': !exists(json, 'firebaseInstallationId') ? undefined : json['firebaseInstallationId'],
    };
}

export function AppInstallPostBodyToJSON(value?: AppInstallPostBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firebaseCloudMessagingToken': value.firebaseCloudMessagingToken,
        'firebaseInstallationId': value.firebaseInstallationId,
    };
}

