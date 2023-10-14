/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ItemEntity } from './ItemEntity';
import {
    ItemEntityFromJSON,
    ItemEntityFromJSONTyped,
    ItemEntityToJSON,
} from './ItemEntity';
import type { ModifierListEntity } from './ModifierListEntity';
import {
    ModifierListEntityFromJSON,
    ModifierListEntityFromJSONTyped,
    ModifierListEntityToJSON,
} from './ModifierListEntity';

/**
 * 
 * @export
 * @interface ItemModifierListEntity
 */
export interface ItemModifierListEntity {
    /**
     * 
     * @type {boolean}
     * @memberof ItemModifierListEntity
     */
    enabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ItemModifierListEntity
     */
    id?: string | null;
    /**
     * 
     * @type {ItemEntity}
     * @memberof ItemModifierListEntity
     */
    item?: ItemEntity | null;
    /**
     * 
     * @type {number}
     * @memberof ItemModifierListEntity
     */
    maxSelectedModifiers?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ItemModifierListEntity
     */
    minSelectedModifiers?: number | null;
    /**
     * 
     * @type {ModifierListEntity}
     * @memberof ItemModifierListEntity
     */
    modifierList?: ModifierListEntity | null;
}

/**
 * Check if a given object implements the ItemModifierListEntity interface.
 */
export function instanceOfItemModifierListEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemModifierListEntityFromJSON(json: any): ItemModifierListEntity {
    return ItemModifierListEntityFromJSONTyped(json, false);
}

export function ItemModifierListEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemModifierListEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'item': !exists(json, 'item') ? undefined : ItemEntityFromJSON(json['item']),
        'maxSelectedModifiers': !exists(json, 'maxSelectedModifiers') ? undefined : json['maxSelectedModifiers'],
        'minSelectedModifiers': !exists(json, 'minSelectedModifiers') ? undefined : json['minSelectedModifiers'],
        'modifierList': !exists(json, 'modifierList') ? undefined : ModifierListEntityFromJSON(json['modifierList']),
    };
}

export function ItemModifierListEntityToJSON(value?: ItemModifierListEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'id': value.id,
        'item': ItemEntityToJSON(value.item),
        'maxSelectedModifiers': value.maxSelectedModifiers,
        'minSelectedModifiers': value.minSelectedModifiers,
        'modifierList': ModifierListEntityToJSON(value.modifierList),
    };
}

