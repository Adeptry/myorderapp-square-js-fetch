/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SquareCard } from './SquareCard';
import {
    SquareCardFromJSON,
    SquareCardFromJSONTyped,
    SquareCardToJSON,
} from './SquareCard';
import type { SquareError } from './SquareError';
import {
    SquareErrorFromJSON,
    SquareErrorFromJSONTyped,
    SquareErrorToJSON,
} from './SquareError';

/**
 * 
 * @export
 * @interface SquareListCardsResponse
 */
export interface SquareListCardsResponse {
    /**
     * 
     * @type {Array<SquareCard>}
     * @memberof SquareListCardsResponse
     */
    cards?: Array<SquareCard> | null;
    /**
     * 
     * @type {string}
     * @memberof SquareListCardsResponse
     */
    cursor?: string | null;
    /**
     * 
     * @type {Array<SquareError>}
     * @memberof SquareListCardsResponse
     */
    errors?: Array<SquareError> | null;
}

/**
 * Check if a given object implements the SquareListCardsResponse interface.
 */
export function instanceOfSquareListCardsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SquareListCardsResponseFromJSON(json: any): SquareListCardsResponse {
    return SquareListCardsResponseFromJSONTyped(json, false);
}

export function SquareListCardsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SquareListCardsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cards': !exists(json, 'cards') ? undefined : (json['cards'] === null ? null : (json['cards'] as Array<any>).map(SquareCardFromJSON)),
        'cursor': !exists(json, 'cursor') ? undefined : json['cursor'],
        'errors': !exists(json, 'errors') ? undefined : (json['errors'] === null ? null : (json['errors'] as Array<any>).map(SquareErrorFromJSON)),
    };
}

export function SquareListCardsResponseToJSON(value?: SquareListCardsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cards': value.cards === undefined ? undefined : (value.cards === null ? null : (value.cards as Array<any>).map(SquareCardToJSON)),
        'cursor': value.cursor,
        'errors': value.errors === undefined ? undefined : (value.errors === null ? null : (value.errors as Array<any>).map(SquareErrorToJSON)),
    };
}

