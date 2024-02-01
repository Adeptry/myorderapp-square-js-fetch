/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ThemeModeEnum } from './ThemeModeEnum';
import {
    ThemeModeEnumFromJSON,
    ThemeModeEnumFromJSONTyped,
    ThemeModeEnumToJSON,
} from './ThemeModeEnum';

/**
 * 
 * @export
 * @interface AppConfigUpdateBody
 */
export interface AppConfigUpdateBody {
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateBody
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigUpdateBody
     */
    enabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateBody
     */
    fontFamily?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateBody
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateBody
     */
    seedColor?: string | null;
    /**
     * 
     * @type {ThemeModeEnum}
     * @memberof AppConfigUpdateBody
     */
    themeMode?: ThemeModeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateBody
     */
    title?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigUpdateBody
     */
    useMaterial3?: boolean | null;
}

/**
 * Check if a given object implements the AppConfigUpdateBody interface.
 */
export function instanceOfAppConfigUpdateBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppConfigUpdateBodyFromJSON(json: any): AppConfigUpdateBody {
    return AppConfigUpdateBodyFromJSONTyped(json, false);
}

export function AppConfigUpdateBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppConfigUpdateBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'fontFamily': !exists(json, 'fontFamily') ? undefined : json['fontFamily'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'seedColor': !exists(json, 'seedColor') ? undefined : json['seedColor'],
        'themeMode': !exists(json, 'themeMode') ? undefined : ThemeModeEnumFromJSON(json['themeMode']),
        'title': !exists(json, 'title') ? undefined : json['title'],
        'useMaterial3': !exists(json, 'useMaterial3') ? undefined : json['useMaterial3'],
    };
}

export function AppConfigUpdateBodyToJSON(value?: AppConfigUpdateBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'enabled': value.enabled,
        'fontFamily': value.fontFamily,
        'name': value.name,
        'seedColor': value.seedColor,
        'themeMode': ThemeModeEnumToJSON(value.themeMode),
        'title': value.title,
        'useMaterial3': value.useMaterial3,
    };
}

