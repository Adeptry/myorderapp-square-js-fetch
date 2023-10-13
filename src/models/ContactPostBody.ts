/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.5
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
 * @interface ContactPostBody
 */
export interface ContactPostBody {
    /**
     * 
     * @type {string}
     * @memberof ContactPostBody
     */
    subject?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactPostBody
     */
    text?: string | null;
}

/**
 * Check if a given object implements the ContactPostBody interface.
 */
export function instanceOfContactPostBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContactPostBodyFromJSON(json: any): ContactPostBody {
    return ContactPostBodyFromJSONTyped(json, false);
}

export function ContactPostBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactPostBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function ContactPostBodyToJSON(value?: ContactPostBody | null): any {
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

