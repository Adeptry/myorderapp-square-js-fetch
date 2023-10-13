/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.2
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
 * @interface SquareCard
 */
export interface SquareCard {
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    cardBrand?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    last4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    expMonth?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    expYear?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    cardholderName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    referenceId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SquareCard
     */
    enabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    cardType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    prepaidType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    bin?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    version?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    cardCoBrand?: string | null;
}

/**
 * Check if a given object implements the SquareCard interface.
 */
export function instanceOfSquareCard(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SquareCardFromJSON(json: any): SquareCard {
    return SquareCardFromJSONTyped(json, false);
}

export function SquareCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): SquareCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'cardBrand': !exists(json, 'cardBrand') ? undefined : json['cardBrand'],
        'last4': !exists(json, 'last4') ? undefined : json['last4'],
        'expMonth': !exists(json, 'expMonth') ? undefined : json['expMonth'],
        'expYear': !exists(json, 'expYear') ? undefined : json['expYear'],
        'cardholderName': !exists(json, 'cardholderName') ? undefined : json['cardholderName'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'cardType': !exists(json, 'cardType') ? undefined : json['cardType'],
        'prepaidType': !exists(json, 'prepaidType') ? undefined : json['prepaidType'],
        'bin': !exists(json, 'bin') ? undefined : json['bin'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'cardCoBrand': !exists(json, 'cardCoBrand') ? undefined : json['cardCoBrand'],
    };
}

export function SquareCardToJSON(value?: SquareCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'cardBrand': value.cardBrand,
        'last4': value.last4,
        'expMonth': value.expMonth,
        'expYear': value.expYear,
        'cardholderName': value.cardholderName,
        'referenceId': value.referenceId,
        'enabled': value.enabled,
        'cardType': value.cardType,
        'prepaidType': value.prepaidType,
        'bin': value.bin,
        'version': value.version,
        'cardCoBrand': value.cardCoBrand,
    };
}

