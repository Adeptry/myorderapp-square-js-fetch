/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const ThemeModeEnum = {
    System: 'system',
    Light: 'light',
    Dark: 'dark'
} as const;
export type ThemeModeEnum = typeof ThemeModeEnum[keyof typeof ThemeModeEnum];


export function ThemeModeEnumFromJSON(json: any): ThemeModeEnum {
    return ThemeModeEnumFromJSONTyped(json, false);
}

export function ThemeModeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThemeModeEnum {
    return json as ThemeModeEnum;
}

export function ThemeModeEnumToJSON(value?: ThemeModeEnum | null): any {
    return value as any;
}

