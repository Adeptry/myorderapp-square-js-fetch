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
 * @interface SquareCard
 */
export interface SquareCard {
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
    cardBrand?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    cardCoBrand?: string | null;
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
    cardholderName?: string | null;
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
    id?: string | null;
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
    prepaidType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareCard
     */
    version?: string | null;
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
        
        'bin': !exists(json, 'bin') ? undefined : json['bin'],
        'cardBrand': !exists(json, 'cardBrand') ? undefined : json['cardBrand'],
        'cardCoBrand': !exists(json, 'cardCoBrand') ? undefined : json['cardCoBrand'],
        'cardType': !exists(json, 'cardType') ? undefined : json['cardType'],
        'cardholderName': !exists(json, 'cardholderName') ? undefined : json['cardholderName'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'expMonth': !exists(json, 'expMonth') ? undefined : json['expMonth'],
        'expYear': !exists(json, 'expYear') ? undefined : json['expYear'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'last4': !exists(json, 'last4') ? undefined : json['last4'],
        'prepaidType': !exists(json, 'prepaidType') ? undefined : json['prepaidType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'version': !exists(json, 'version') ? undefined : json['version'],
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
        
        'bin': value.bin,
        'cardBrand': value.cardBrand,
        'cardCoBrand': value.cardCoBrand,
        'cardType': value.cardType,
        'cardholderName': value.cardholderName,
        'enabled': value.enabled,
        'expMonth': value.expMonth,
        'expYear': value.expYear,
        'id': value.id,
        'last4': value.last4,
        'prepaidType': value.prepaidType,
        'referenceId': value.referenceId,
        'version': value.version,
    };
}

