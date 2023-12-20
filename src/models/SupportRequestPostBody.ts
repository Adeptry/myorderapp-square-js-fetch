/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.13
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
 * @interface SupportRequestPostBody
 */
export interface SupportRequestPostBody {
    /**
     * 
     * @type {string}
     * @memberof SupportRequestPostBody
     */
    subject?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SupportRequestPostBody
     */
    text?: string | null;
}

/**
 * Check if a given object implements the SupportRequestPostBody interface.
 */
export function instanceOfSupportRequestPostBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SupportRequestPostBodyFromJSON(json: any): SupportRequestPostBody {
    return SupportRequestPostBodyFromJSONTyped(json, false);
}

export function SupportRequestPostBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupportRequestPostBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function SupportRequestPostBodyToJSON(value?: SupportRequestPostBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subject': value.subject,
        'text': value.text,
    };
}

