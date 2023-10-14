/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { LocationEntity } from './LocationEntity';
import {
    LocationEntityFromJSON,
    LocationEntityFromJSONTyped,
    LocationEntityToJSON,
} from './LocationEntity';
import type { SquareCard } from './SquareCard';
import {
    SquareCardFromJSON,
    SquareCardFromJSONTyped,
    SquareCardToJSON,
} from './SquareCard';
import type { UserEntity } from './UserEntity';
import {
    UserEntityFromJSON,
    UserEntityFromJSONTyped,
    UserEntityToJSON,
} from './UserEntity';

/**
 * 
 * @export
 * @interface CustomerEntity
 */
export interface CustomerEntity {
    /**
     * 
     * @type {Date}
     * @memberof CustomerEntity
     */
    createDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerEntity
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerEntity
     */
    mailNotifications?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerEntity
     */
    merchantId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerEntity
     */
    messageNotifications?: boolean | null;
    /**
     * 
     * @type {LocationEntity}
     * @memberof CustomerEntity
     */
    preferredLocation?: LocationEntity | null;
    /**
     * 
     * @type {SquareCard}
     * @memberof CustomerEntity
     */
    preferredSquareCard?: SquareCard | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerEntity
     */
    pushNotifications?: boolean | null;
    /**
     * 
     * @type {UserEntity}
     * @memberof CustomerEntity
     */
    user?: UserEntity | null;
}

/**
 * Check if a given object implements the CustomerEntity interface.
 */
export function instanceOfCustomerEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerEntityFromJSON(json: any): CustomerEntity {
    return CustomerEntityFromJSONTyped(json, false);
}

export function CustomerEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createDate': !exists(json, 'createDate') ? undefined : (json['createDate'] === null ? null : new Date(json['createDate'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'mailNotifications': !exists(json, 'mailNotifications') ? undefined : json['mailNotifications'],
        'merchantId': !exists(json, 'merchantId') ? undefined : json['merchantId'],
        'messageNotifications': !exists(json, 'messageNotifications') ? undefined : json['messageNotifications'],
        'preferredLocation': !exists(json, 'preferredLocation') ? undefined : LocationEntityFromJSON(json['preferredLocation']),
        'preferredSquareCard': !exists(json, 'preferredSquareCard') ? undefined : SquareCardFromJSON(json['preferredSquareCard']),
        'pushNotifications': !exists(json, 'pushNotifications') ? undefined : json['pushNotifications'],
        'user': !exists(json, 'user') ? undefined : UserEntityFromJSON(json['user']),
    };
}

export function CustomerEntityToJSON(value?: CustomerEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createDate': value.createDate === undefined ? undefined : (value.createDate === null ? null : value.createDate.toISOString()),
        'id': value.id,
        'mailNotifications': value.mailNotifications,
        'merchantId': value.merchantId,
        'messageNotifications': value.messageNotifications,
        'preferredLocation': LocationEntityToJSON(value.preferredLocation),
        'preferredSquareCard': SquareCardToJSON(value.preferredSquareCard),
        'pushNotifications': value.pushNotifications,
        'user': UserEntityToJSON(value.user),
    };
}

