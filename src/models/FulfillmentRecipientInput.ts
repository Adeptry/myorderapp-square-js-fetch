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
 * @interface FulfillmentRecipientInput
 */
export interface FulfillmentRecipientInput {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentRecipientInput
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentRecipientInput
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentRecipientInput
     */
    phoneNumber?: string | null;
}

/**
 * Check if a given object implements the FulfillmentRecipientInput interface.
 */
export function instanceOfFulfillmentRecipientInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentRecipientInputFromJSON(json: any): FulfillmentRecipientInput {
    return FulfillmentRecipientInputFromJSONTyped(json, false);
}

export function FulfillmentRecipientInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentRecipientInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    };
}

export function FulfillmentRecipientInputToJSON(value?: FulfillmentRecipientInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'phoneNumber': value.phoneNumber,
    };
}

