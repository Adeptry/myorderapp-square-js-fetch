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


/**
 * 
 * @export
 */
export const MoaSelectionType = {
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type MoaSelectionType = typeof MoaSelectionType[keyof typeof MoaSelectionType];


export function MoaSelectionTypeFromJSON(json: any): MoaSelectionType {
    return MoaSelectionTypeFromJSONTyped(json, false);
}

export function MoaSelectionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoaSelectionType {
    return json as MoaSelectionType;
}

export function MoaSelectionTypeToJSON(value?: MoaSelectionType | null): any {
    return value as any;
}

