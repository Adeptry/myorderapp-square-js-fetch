/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.1
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

/**
 * 
 * @export
 * @interface ItemPaginatedResponse
 */
export interface ItemPaginatedResponse {
    /**
     * 
     * @type {number}
     * @memberof ItemPaginatedResponse
     */
    count: number;
    /**
     * 
     * @type {Array<ItemEntity>}
     * @memberof ItemPaginatedResponse
     */
    data?: Array<ItemEntity> | null;
    /**
     * 
     * @type {number}
     * @memberof ItemPaginatedResponse
     */
    pages: number;
}

/**
 * Check if a given object implements the ItemPaginatedResponse interface.
 */
export function instanceOfItemPaginatedResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "pages" in value;

    return isInstance;
}

export function ItemPaginatedResponseFromJSON(json: any): ItemPaginatedResponse {
    return ItemPaginatedResponseFromJSONTyped(json, false);
}

export function ItemPaginatedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemPaginatedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(ItemEntityFromJSON)),
        'pages': json['pages'],
    };
}

export function ItemPaginatedResponseToJSON(value?: ItemPaginatedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(ItemEntityToJSON)),
        'pages': value.pages,
    };
}

