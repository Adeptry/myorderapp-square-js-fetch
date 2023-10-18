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
import type { CategoryEntity } from './CategoryEntity';
import {
    CategoryEntityFromJSON,
    CategoryEntityFromJSONTyped,
    CategoryEntityToJSON,
} from './CategoryEntity';

/**
 * 
 * @export
 * @interface CategoryPaginatedResponse
 */
export interface CategoryPaginatedResponse {
    /**
     * 
     * @type {number}
     * @memberof CategoryPaginatedResponse
     */
    count: number;
    /**
     * 
     * @type {Array<CategoryEntity>}
     * @memberof CategoryPaginatedResponse
     */
    data?: Array<CategoryEntity> | null;
    /**
     * 
     * @type {number}
     * @memberof CategoryPaginatedResponse
     */
    pages: number;
}

/**
 * Check if a given object implements the CategoryPaginatedResponse interface.
 */
export function instanceOfCategoryPaginatedResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "pages" in value;

    return isInstance;
}

export function CategoryPaginatedResponseFromJSON(json: any): CategoryPaginatedResponse {
    return CategoryPaginatedResponseFromJSONTyped(json, false);
}

export function CategoryPaginatedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryPaginatedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(CategoryEntityFromJSON)),
        'pages': json['pages'],
    };
}

export function CategoryPaginatedResponseToJSON(value?: CategoryPaginatedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(CategoryEntityToJSON)),
        'pages': value.pages,
    };
}

