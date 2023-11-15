/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.9
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
 * @interface AddressEntity
 */
export interface AddressEntity {
    /**
     * The first line of the address.
     * @type {string}
     * @memberof AddressEntity
     */
    addressLine1?: string | null;
    /**
     * The second line of the address, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    addressLine2?: string | null;
    /**
     * The third line of the address, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    addressLine3?: string | null;
    /**
     * A civil entity within the address's country. In the US, this is the state.
     * @type {string}
     * @memberof AddressEntity
     */
    administrativeDistrictLevel1?: string | null;
    /**
     * A civil entity within the address's `administrative_district_level_1`. In the US, this is the county.
     * @type {string}
     * @memberof AddressEntity
     */
    administrativeDistrictLevel2?: string | null;
    /**
     * A civil entity within the address's `administrative_district_level_2`, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    administrativeDistrictLevel3?: string | null;
    /**
     * Indicates the country associated with another entity, such as a business. Values are in ISO 3166-1-alpha-2 format.
     * @type {string}
     * @memberof AddressEntity
     */
    country?: string | null;
    /**
     * Optional first name when it's representing recipient.
     * @type {string}
     * @memberof AddressEntity
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressEntity
     */
    id?: string | null;
    /**
     * Optional last name when it's representing recipient.
     * @type {string}
     * @memberof AddressEntity
     */
    lastName?: string | null;
    /**
     * The city or town of the address.
     * @type {string}
     * @memberof AddressEntity
     */
    locality?: string | null;
    /**
     * The address's postal code.
     * @type {string}
     * @memberof AddressEntity
     */
    postalCode?: string | null;
    /**
     * A civil region within the address's `locality`, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    sublocality?: string | null;
    /**
     * A civil region within the address's `sublocality`, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    sublocality2?: string | null;
    /**
     * A civil region within the address's `sublocality_2`, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    sublocality3?: string | null;
}

/**
 * Check if a given object implements the AddressEntity interface.
 */
export function instanceOfAddressEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressEntityFromJSON(json: any): AddressEntity {
    return AddressEntityFromJSONTyped(json, false);
}

export function AddressEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressLine1': !exists(json, 'addressLine1') ? undefined : json['addressLine1'],
        'addressLine2': !exists(json, 'addressLine2') ? undefined : json['addressLine2'],
        'addressLine3': !exists(json, 'addressLine3') ? undefined : json['addressLine3'],
        'administrativeDistrictLevel1': !exists(json, 'administrativeDistrictLevel1') ? undefined : json['administrativeDistrictLevel1'],
        'administrativeDistrictLevel2': !exists(json, 'administrativeDistrictLevel2') ? undefined : json['administrativeDistrictLevel2'],
        'administrativeDistrictLevel3': !exists(json, 'administrativeDistrictLevel3') ? undefined : json['administrativeDistrictLevel3'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'locality': !exists(json, 'locality') ? undefined : json['locality'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'sublocality': !exists(json, 'sublocality') ? undefined : json['sublocality'],
        'sublocality2': !exists(json, 'sublocality2') ? undefined : json['sublocality2'],
        'sublocality3': !exists(json, 'sublocality3') ? undefined : json['sublocality3'],
    };
}

export function AddressEntityToJSON(value?: AddressEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressLine1': value.addressLine1,
        'addressLine2': value.addressLine2,
        'addressLine3': value.addressLine3,
        'administrativeDistrictLevel1': value.administrativeDistrictLevel1,
        'administrativeDistrictLevel2': value.administrativeDistrictLevel2,
        'administrativeDistrictLevel3': value.administrativeDistrictLevel3,
        'country': value.country,
        'firstName': value.firstName,
        'id': value.id,
        'lastName': value.lastName,
        'locality': value.locality,
        'postalCode': value.postalCode,
        'sublocality': value.sublocality,
        'sublocality2': value.sublocality2,
        'sublocality3': value.sublocality3,
    };
}

