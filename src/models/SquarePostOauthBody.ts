/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.6
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
 * @interface SquarePostOauthBody
 */
export interface SquarePostOauthBody {
    /**
     * 
     * @type {string}
     * @memberof SquarePostOauthBody
     */
    oauthAccessCode: string;
}

/**
 * Check if a given object implements the SquarePostOauthBody interface.
 */
export function instanceOfSquarePostOauthBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "oauthAccessCode" in value;

    return isInstance;
}

export function SquarePostOauthBodyFromJSON(json: any): SquarePostOauthBody {
    return SquarePostOauthBodyFromJSONTyped(json, false);
}

export function SquarePostOauthBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SquarePostOauthBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oauthAccessCode': json['oauthAccessCode'],
    };
}

export function SquarePostOauthBodyToJSON(value?: SquarePostOauthBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oauthAccessCode': value.oauthAccessCode,
    };
}

