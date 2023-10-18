/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.5
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
 * @interface CatalogImageEntity
 */
export interface CatalogImageEntity {
    /**
     * 
     * @type {string}
     * @memberof CatalogImageEntity
     */
    caption?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogImageEntity
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogImageEntity
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogImageEntity
     */
    squareId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogImageEntity
     */
    url?: string | null;
}

/**
 * Check if a given object implements the CatalogImageEntity interface.
 */
export function instanceOfCatalogImageEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogImageEntityFromJSON(json: any): CatalogImageEntity {
    return CatalogImageEntityFromJSONTyped(json, false);
}

export function CatalogImageEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogImageEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caption': !exists(json, 'caption') ? undefined : json['caption'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'squareId': !exists(json, 'squareId') ? undefined : json['squareId'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function CatalogImageEntityToJSON(value?: CatalogImageEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caption': value.caption,
        'id': value.id,
        'name': value.name,
        'squareId': value.squareId,
        'url': value.url,
    };
}

