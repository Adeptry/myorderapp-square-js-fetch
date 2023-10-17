/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MoaSelectionType } from './MoaSelectionType';
import {
    MoaSelectionTypeFromJSON,
    MoaSelectionTypeFromJSONTyped,
    MoaSelectionTypeToJSON,
} from './MoaSelectionType';
import type { ModifierEntity } from './ModifierEntity';
import {
    ModifierEntityFromJSON,
    ModifierEntityFromJSONTyped,
    ModifierEntityToJSON,
} from './ModifierEntity';

/**
 * 
 * @export
 * @interface ModifierListEntity
 */
export interface ModifierListEntity {
    /**
     * 
     * @type {string}
     * @memberof ModifierListEntity
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModifierListEntity
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ModifierListEntity
     */
    ordinal?: number | null;
    /**
     * 
     * @type {MoaSelectionType}
     * @memberof ModifierListEntity
     */
    selectionType?: MoaSelectionType;
    /**
     * 
     * @type {Array<ModifierEntity>}
     * @memberof ModifierListEntity
     */
    modifiers?: Array<ModifierEntity> | null;
}

/**
 * Check if a given object implements the ModifierListEntity interface.
 */
export function instanceOfModifierListEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModifierListEntityFromJSON(json: any): ModifierListEntity {
    return ModifierListEntityFromJSONTyped(json, false);
}

export function ModifierListEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModifierListEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ordinal': !exists(json, 'ordinal') ? undefined : json['ordinal'],
        'selectionType': !exists(json, 'selectionType') ? undefined : MoaSelectionTypeFromJSON(json['selectionType']),
        'modifiers': !exists(json, 'modifiers') ? undefined : (json['modifiers'] === null ? null : (json['modifiers'] as Array<any>).map(ModifierEntityFromJSON)),
    };
}

export function ModifierListEntityToJSON(value?: ModifierListEntity | null): any {
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
        'selectionType': MoaSelectionTypeToJSON(value.selectionType),
        'modifiers': value.modifiers === undefined ? undefined : (value.modifiers === null ? null : (value.modifiers as Array<any>).map(ModifierEntityToJSON)),
    };
}

