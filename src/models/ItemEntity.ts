/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CatalogImageEntity } from './CatalogImageEntity';
import {
    CatalogImageEntityFromJSON,
    CatalogImageEntityFromJSONTyped,
    CatalogImageEntityToJSON,
} from './CatalogImageEntity';
import type { ItemModifierListEntity } from './ItemModifierListEntity';
import {
    ItemModifierListEntityFromJSON,
    ItemModifierListEntityFromJSONTyped,
    ItemModifierListEntityToJSON,
} from './ItemModifierListEntity';
import type { VariationEntity } from './VariationEntity';
import {
    VariationEntityFromJSON,
    VariationEntityFromJSONTyped,
    VariationEntityToJSON,
} from './VariationEntity';

/**
 * 
 * @export
 * @interface ItemEntity
 */
export interface ItemEntity {
    /**
     * 
     * @type {string}
     * @memberof ItemEntity
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ItemEntity
     */
    id?: string | null;
    /**
     * 
     * @type {Array<CatalogImageEntity>}
     * @memberof ItemEntity
     */
    images?: Array<CatalogImageEntity> | null;
    /**
     * 
     * @type {Array<ItemModifierListEntity>}
     * @memberof ItemEntity
     */
    itemModifierLists?: Array<ItemModifierListEntity> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ItemEntity
     */
    moaEnabled?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof ItemEntity
     */
    moaOrdinal?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ItemEntity
     */
    name?: string | null;
    /**
     * 
     * @type {Array<VariationEntity>}
     * @memberof ItemEntity
     */
    variations?: Array<VariationEntity> | null;
}

/**
 * Check if a given object implements the ItemEntity interface.
 */
export function instanceOfItemEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemEntityFromJSON(json: any): ItemEntity {
    return ItemEntityFromJSONTyped(json, false);
}

export function ItemEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'images': !exists(json, 'images') ? undefined : (json['images'] === null ? null : (json['images'] as Array<any>).map(CatalogImageEntityFromJSON)),
        'itemModifierLists': !exists(json, 'itemModifierLists') ? undefined : (json['itemModifierLists'] === null ? null : (json['itemModifierLists'] as Array<any>).map(ItemModifierListEntityFromJSON)),
        'moaEnabled': !exists(json, 'moaEnabled') ? undefined : json['moaEnabled'],
        'moaOrdinal': !exists(json, 'moaOrdinal') ? undefined : json['moaOrdinal'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'variations': !exists(json, 'variations') ? undefined : (json['variations'] === null ? null : (json['variations'] as Array<any>).map(VariationEntityFromJSON)),
    };
}

export function ItemEntityToJSON(value?: ItemEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': value.id,
        'images': value.images === undefined ? undefined : (value.images === null ? null : (value.images as Array<any>).map(CatalogImageEntityToJSON)),
        'itemModifierLists': value.itemModifierLists === undefined ? undefined : (value.itemModifierLists === null ? null : (value.itemModifierLists as Array<any>).map(ItemModifierListEntityToJSON)),
        'moaEnabled': value.moaEnabled,
        'moaOrdinal': value.moaOrdinal,
        'name': value.name,
        'variations': value.variations === undefined ? undefined : (value.variations === null ? null : (value.variations as Array<any>).map(VariationEntityToJSON)),
    };
}

