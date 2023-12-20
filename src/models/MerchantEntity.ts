/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.12
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
     * @type {AppConfigEntity}
     * @memberof MerchantEntity
     */
    appConfig?: AppConfigEntity | null;
    /**
     * 
     * @type {CatalogEntity}
     * @memberof MerchantEntity
     */
    catalog?: CatalogEntity | null;
    /**
     * Indicates the country associated with another entity, such as a business. Values are in ISO 3166-1-alpha-2 format.
     * @type {object}
     * @memberof MerchantEntity
     */
    countryCode?: object | null;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to ISO 4217.
     * @type {object}
     * @memberof MerchantEntity
     */
    currencyCode?: object | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantEntity
     */
    id?: string | null;
    /**
     * The code indicating the language preferences of the merchant, in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A). For example, `en-US` or `fr-CA`. 
     * @type {object}
     * @memberof MerchantEntity
     */
    languageCode?: object | null;
    /**
     * 
     * @type {number}
     * @memberof MerchantEntity
     */
    pickupLeadDurationMinutes?: number | null;
    /**
     * The name of the merchant's overall business.
     * @type {string}
     * @memberof MerchantEntity
     */
    squareBusinessName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof MerchantEntity
     */
    squareConnected?: boolean | null;
    /**
     * 
     * @type {object}
     * @memberof MerchantEntity
     */
    squareId?: object | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantEntity
     */
    stripeId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MerchantEntity
     */
    tier?: number | null;
    /**
     * 
     * @type {UserEntity}
     * @memberof MerchantEntity
     */
    user?: UserEntity | null;
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
        
        'appConfig': !exists(json, 'appConfig') ? undefined : AppConfigEntityFromJSON(json['appConfig']),
        'catalog': !exists(json, 'catalog') ? undefined : CatalogEntityFromJSON(json['catalog']),
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'languageCode': !exists(json, 'languageCode') ? undefined : json['languageCode'],
        'pickupLeadDurationMinutes': !exists(json, 'pickupLeadDurationMinutes') ? undefined : json['pickupLeadDurationMinutes'],
        'squareBusinessName': !exists(json, 'squareBusinessName') ? undefined : json['squareBusinessName'],
        'squareConnected': !exists(json, 'squareConnected') ? undefined : json['squareConnected'],
        'squareId': !exists(json, 'squareId') ? undefined : json['squareId'],
        'stripeId': !exists(json, 'stripeId') ? undefined : json['stripeId'],
        'tier': !exists(json, 'tier') ? undefined : json['tier'],
        'user': !exists(json, 'user') ? undefined : UserEntityFromJSON(json['user']),
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
        
        'appConfig': AppConfigEntityToJSON(value.appConfig),
        'catalog': CatalogEntityToJSON(value.catalog),
        'countryCode': value.countryCode,
        'currencyCode': value.currencyCode,
        'id': value.id,
        'languageCode': value.languageCode,
        'pickupLeadDurationMinutes': value.pickupLeadDurationMinutes,
        'squareBusinessName': value.squareBusinessName,
        'squareConnected': value.squareConnected,
        'squareId': value.squareId,
        'stripeId': value.stripeId,
        'tier': value.tier,
        'user': UserEntityToJSON(value.user),
    };
}

