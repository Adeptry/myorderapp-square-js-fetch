/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppConfigEntity } from './AppConfigEntity';
import {
    AppConfigEntityFromJSON,
    AppConfigEntityFromJSONTyped,
    AppConfigEntityToJSON,
} from './AppConfigEntity';
import type { CatalogEntity } from './CatalogEntity';
import {
    CatalogEntityFromJSON,
    CatalogEntityFromJSONTyped,
    CatalogEntityToJSON,
} from './CatalogEntity';
import type { UserEntity } from './UserEntity';
import {
    UserEntityFromJSON,
    UserEntityFromJSONTyped,
    UserEntityToJSON,
} from './UserEntity';

/**
 * 
 * @export
 * @interface MerchantEntity
 */
export interface MerchantEntity {
    /**
     * 
     * @type {string}
     * @memberof MerchantEntity
     */
    id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MerchantEntity
     */
    tier?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MerchantEntity
     */
    pickupLeadDurationMinutes?: number | null;
    /**
     * 
     * @type {UserEntity}
     * @memberof MerchantEntity
     */
    user?: UserEntity | null;
    /**
     * 
     * @type {AppConfigEntity}
     * @memberof MerchantEntity
     */
    appConfig?: AppConfigEntity | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantEntity
     */
    squareId?: string | null;
    /**
     * The name of the merchant's overall business.
     * @type {object}
     * @memberof MerchantEntity
     */
    squareBusinessName?: object | null;
    /**
     * Indicates the country associated with another entity, such as a business. Values are in ISO 3166-1-alpha-2 format.
     * @type {string}
     * @memberof MerchantEntity
     */
    countryCode?: string | null;
    /**
     * The code indicating the language preferences of the merchant, in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A). For example, `en-US` or `fr-CA`. 
     * @type {object}
     * @memberof MerchantEntity
     */
    languageCode?: object | null;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to ISO 4217.
     * @type {string}
     * @memberof MerchantEntity
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantEntity
     */
    stripeId?: string | null;
    /**
     * 
     * @type {CatalogEntity}
     * @memberof MerchantEntity
     */
    catalog?: CatalogEntity | null;
}

/**
 * Check if a given object implements the MerchantEntity interface.
 */
export function instanceOfMerchantEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MerchantEntityFromJSON(json: any): MerchantEntity {
    return MerchantEntityFromJSONTyped(json, false);
}

export function MerchantEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'tier': !exists(json, 'tier') ? undefined : json['tier'],
        'pickupLeadDurationMinutes': !exists(json, 'pickupLeadDurationMinutes') ? undefined : json['pickupLeadDurationMinutes'],
        'user': !exists(json, 'user') ? undefined : UserEntityFromJSON(json['user']),
        'appConfig': !exists(json, 'appConfig') ? undefined : AppConfigEntityFromJSON(json['appConfig']),
        'squareId': !exists(json, 'squareId') ? undefined : json['squareId'],
        'squareBusinessName': !exists(json, 'squareBusinessName') ? undefined : json['squareBusinessName'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'languageCode': !exists(json, 'languageCode') ? undefined : json['languageCode'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'stripeId': !exists(json, 'stripeId') ? undefined : json['stripeId'],
        'catalog': !exists(json, 'catalog') ? undefined : CatalogEntityFromJSON(json['catalog']),
    };
}

export function MerchantEntityToJSON(value?: MerchantEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'tier': value.tier,
        'pickupLeadDurationMinutes': value.pickupLeadDurationMinutes,
        'user': UserEntityToJSON(value.user),
        'appConfig': AppConfigEntityToJSON(value.appConfig),
        'squareId': value.squareId,
        'squareBusinessName': value.squareBusinessName,
        'countryCode': value.countryCode,
        'languageCode': value.languageCode,
        'currencyCode': value.currencyCode,
        'stripeId': value.stripeId,
        'catalog': CatalogEntityToJSON(value.catalog),
    };
}
