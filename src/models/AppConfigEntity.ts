/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.13
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
 * @interface AppConfigEntity
 */
export interface AppConfigEntity {
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    bannerFileContentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    bannerFileDisplayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    bannerFileFullUrl?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppConfigEntity
     */
    categoryCollapseThreshold?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigEntity
     */
    enabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    fontFamily?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    iconFileContentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    iconFileDisplayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    iconFileFullUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    seedColor?: string | null;
    /**
     * 
     * @type {ThemeModeEnum}
     * @memberof AppConfigEntity
     */
    themeMode?: ThemeModeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    title?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigEntity
     */
    useAdaptiveScaffold?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigEntity
     */
    useMaterial3?: boolean | null;
}

/**
 * Check if a given object implements the AppConfigEntity interface.
 */
export function instanceOfAppConfigEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppConfigEntityFromJSON(json: any): AppConfigEntity {
    return AppConfigEntityFromJSONTyped(json, false);
}

export function AppConfigEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppConfigEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bannerFileContentType': !exists(json, 'bannerFileContentType') ? undefined : json['bannerFileContentType'],
        'bannerFileDisplayName': !exists(json, 'bannerFileDisplayName') ? undefined : json['bannerFileDisplayName'],
        'bannerFileFullUrl': !exists(json, 'bannerFileFullUrl') ? undefined : json['bannerFileFullUrl'],
        'categoryCollapseThreshold': !exists(json, 'categoryCollapseThreshold') ? undefined : json['categoryCollapseThreshold'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'fontFamily': !exists(json, 'fontFamily') ? undefined : json['fontFamily'],
        'iconFileContentType': !exists(json, 'iconFileContentType') ? undefined : json['iconFileContentType'],
        'iconFileDisplayName': !exists(json, 'iconFileDisplayName') ? undefined : json['iconFileDisplayName'],
        'iconFileFullUrl': !exists(json, 'iconFileFullUrl') ? undefined : json['iconFileFullUrl'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'seedColor': !exists(json, 'seedColor') ? undefined : json['seedColor'],
        'themeMode': !exists(json, 'themeMode') ? undefined : ThemeModeEnumFromJSON(json['themeMode']),
        'title': !exists(json, 'title') ? undefined : json['title'],
        'useAdaptiveScaffold': !exists(json, 'useAdaptiveScaffold') ? undefined : json['useAdaptiveScaffold'],
        'useMaterial3': !exists(json, 'useMaterial3') ? undefined : json['useMaterial3'],
    };
}

export function AppConfigEntityToJSON(value?: AppConfigEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bannerFileContentType': value.bannerFileContentType,
        'bannerFileDisplayName': value.bannerFileDisplayName,
        'bannerFileFullUrl': value.bannerFileFullUrl,
        'categoryCollapseThreshold': value.categoryCollapseThreshold,
        'description': value.description,
        'enabled': value.enabled,
        'fontFamily': value.fontFamily,
        'iconFileContentType': value.iconFileContentType,
        'iconFileDisplayName': value.iconFileDisplayName,
        'iconFileFullUrl': value.iconFileFullUrl,
        'name': value.name,
        'path': value.path,
        'seedColor': value.seedColor,
        'themeMode': ThemeModeEnumToJSON(value.themeMode),
        'title': value.title,
        'useAdaptiveScaffold': value.useAdaptiveScaffold,
        'useMaterial3': value.useMaterial3,
    };
}

