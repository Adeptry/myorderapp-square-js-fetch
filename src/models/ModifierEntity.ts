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
 * @interface ModifierEntity
 */
export interface ModifierEntity {
    /**
     * 
     * @type {string}
     * @memberof ModifierEntity
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModifierEntity
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ModifierEntity
     */
    ordinal?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ModifierEntity
     */
    priceMoneyAmount?: number | null;
}

/**
 * Check if a given object implements the ModifierEntity interface.
 */
export function instanceOfModifierEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModifierEntityFromJSON(json: any): ModifierEntity {
    return ModifierEntityFromJSONTyped(json, false);
}

export function ModifierEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModifierEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ordinal': !exists(json, 'ordinal') ? undefined : json['ordinal'],
        'priceMoneyAmount': !exists(json, 'priceMoneyAmount') ? undefined : json['priceMoneyAmount'],
    };
}

export function ModifierEntityToJSON(value?: ModifierEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'ordinal': value.ordinal,
        'priceMoneyAmount': value.priceMoneyAmount,
    };
}

