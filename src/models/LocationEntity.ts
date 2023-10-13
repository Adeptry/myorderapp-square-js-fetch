/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressEntity } from './AddressEntity';
import {
    AddressEntityFromJSON,
    AddressEntityFromJSONTyped,
    AddressEntityToJSON,
} from './AddressEntity';
import type { BusinessHoursPeriodEntity } from './BusinessHoursPeriodEntity';
import {
    BusinessHoursPeriodEntityFromJSON,
    BusinessHoursPeriodEntityFromJSONTyped,
    BusinessHoursPeriodEntityToJSON,
} from './BusinessHoursPeriodEntity';

/**
 * 
 * @export
 * @interface LocationEntity
 */
export interface LocationEntity {
    /**
     * 
     * @type {AddressEntity}
     * @memberof LocationEntity
     */
    address?: AddressEntity | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    businessEmail?: string | null;
    /**
     * 
     * @type {Array<BusinessHoursPeriodEntity>}
     * @memberof LocationEntity
     */
    businessHours?: Array<BusinessHoursPeriodEntity> | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    businessName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    currency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    facebookUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    fullFormatLogoUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    instagramUsername?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationEntity
     */
    isMain: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    languageCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationEntity
     */
    latitude?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    logoUrl?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationEntity
     */
    longitude?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    mcc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationEntity
     */
    moaEnabled?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof LocationEntity
     */
    moaOrdinal?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    posBackgroundUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    timezone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    twitterUsername?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    websiteUrl?: string | null;
}

/**
 * Check if a given object implements the LocationEntity interface.
 */
export function instanceOfLocationEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isMain" in value;

    return isInstance;
}

export function LocationEntityFromJSON(json: any): LocationEntity {
    return LocationEntityFromJSONTyped(json, false);
}

export function LocationEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressEntityFromJSON(json['address']),
        'businessEmail': !exists(json, 'businessEmail') ? undefined : json['businessEmail'],
        'businessHours': !exists(json, 'businessHours') ? undefined : (json['businessHours'] === null ? null : (json['businessHours'] as Array<any>).map(BusinessHoursPeriodEntityFromJSON)),
        'businessName': !exists(json, 'businessName') ? undefined : json['businessName'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'facebookUrl': !exists(json, 'facebookUrl') ? undefined : json['facebookUrl'],
        'fullFormatLogoUrl': !exists(json, 'fullFormatLogoUrl') ? undefined : json['fullFormatLogoUrl'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'instagramUsername': !exists(json, 'instagramUsername') ? undefined : json['instagramUsername'],
        'isMain': json['isMain'],
        'languageCode': !exists(json, 'languageCode') ? undefined : json['languageCode'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'logoUrl': !exists(json, 'logoUrl') ? undefined : json['logoUrl'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'mcc': !exists(json, 'mcc') ? undefined : json['mcc'],
        'moaEnabled': !exists(json, 'moaEnabled') ? undefined : json['moaEnabled'],
        'moaOrdinal': !exists(json, 'moaOrdinal') ? undefined : json['moaOrdinal'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'posBackgroundUrl': !exists(json, 'posBackgroundUrl') ? undefined : json['posBackgroundUrl'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'twitterUsername': !exists(json, 'twitterUsername') ? undefined : json['twitterUsername'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'websiteUrl': !exists(json, 'websiteUrl') ? undefined : json['websiteUrl'],
    };
}

export function LocationEntityToJSON(value?: LocationEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressEntityToJSON(value.address),
        'businessEmail': value.businessEmail,
        'businessHours': value.businessHours === undefined ? undefined : (value.businessHours === null ? null : (value.businessHours as Array<any>).map(BusinessHoursPeriodEntityToJSON)),
        'businessName': value.businessName,
        'country': value.country,
        'currency': value.currency,
        'description': value.description,
        'facebookUrl': value.facebookUrl,
        'fullFormatLogoUrl': value.fullFormatLogoUrl,
        'id': value.id,
        'instagramUsername': value.instagramUsername,
        'isMain': value.isMain,
        'languageCode': value.languageCode,
        'latitude': value.latitude,
        'logoUrl': value.logoUrl,
        'longitude': value.longitude,
        'mcc': value.mcc,
        'moaEnabled': value.moaEnabled,
        'moaOrdinal': value.moaOrdinal,
        'name': value.name,
        'phoneNumber': value.phoneNumber,
        'posBackgroundUrl': value.posBackgroundUrl,
        'status': value.status,
        'timezone': value.timezone,
        'twitterUsername': value.twitterUsername,
        'type': value.type,
        'websiteUrl': value.websiteUrl,
    };
}

