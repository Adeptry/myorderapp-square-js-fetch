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


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  LocationEntity,
  LocationPaginatedResponse,
  LocationPatchBody,
  LocationsPatchBody,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    LocationEntityFromJSON,
    LocationEntityToJSON,
    LocationPaginatedResponseFromJSON,
    LocationPaginatedResponseToJSON,
    LocationPatchBodyFromJSON,
    LocationPatchBodyToJSON,
    LocationsPatchBodyFromJSON,
    LocationsPatchBodyToJSON,
} from '../models/index';

export interface GetLocationRequest {
    id: string;
    actingAs: GetLocationActingAsEnum;
    merchantIdOrPath?: string;
    xCustomLang?: string;
}

export interface GetLocationsRequest {
    merchantIdOrPath: string;
    page?: number;
    limit?: number;
    address?: boolean;
    businessHours?: boolean;
    xCustomLang?: string;
}

export interface GetLocationsMeRequest {
    actingAs?: GetLocationsMeActingAsEnum;
    page?: number;
    limit?: number;
    address?: boolean;
    businessHours?: boolean;
    merchantIdOrPath?: string;
    xCustomLang?: string;
}

export interface PatchManyLocationsRequest {
    locationsPatchBody: Array<LocationsPatchBody>;
    xCustomLang?: string;
}

export interface PatchOneLocationRequest {
    id: string;
    locationPatchBody: LocationPatchBody;
    xCustomLang?: string;
}

/**
 * 
 */
export class LocationsApi extends runtime.BaseAPI {

    /**
     * Get a Location with ID
     */
    async getLocationRaw(requestParameters: GetLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getLocation.');
        }

        if (requestParameters.actingAs === null || requestParameters.actingAs === undefined) {
            throw new runtime.RequiredError('actingAs','Required parameter requestParameters.actingAs was null or undefined when calling getLocation.');
        }

        const queryParameters: any = {};

        if (requestParameters.actingAs !== undefined) {
            queryParameters['actingAs'] = requestParameters.actingAs;
        }

        if (requestParameters.merchantIdOrPath !== undefined) {
            queryParameters['merchantIdOrPath'] = requestParameters.merchantIdOrPath;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xCustomLang !== undefined && requestParameters.xCustomLang !== null) {
            headerParameters['x-custom-lang'] = String(requestParameters.xCustomLang);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // Api-Key authentication
        }

        const response = await this.request({
            path: `/v2/locations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationEntityFromJSON(jsonValue));
    }

    /**
     * Get a Location with ID
     */
    async getLocation(requestParameters: GetLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationEntity> {
        const response = await this.getLocationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Locations for Merchant
     */
    async getLocationsRaw(requestParameters: GetLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationPaginatedResponse>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling getLocations.');
        }

        const queryParameters: any = {};

        if (requestParameters.merchantIdOrPath !== undefined) {
            queryParameters['merchantIdOrPath'] = requestParameters.merchantIdOrPath;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.businessHours !== undefined) {
            queryParameters['businessHours'] = requestParameters.businessHours;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xCustomLang !== undefined && requestParameters.xCustomLang !== null) {
            headerParameters['x-custom-lang'] = String(requestParameters.xCustomLang);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // Api-Key authentication
        }

        const response = await this.request({
            path: `/v2/locations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationPaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Get Locations for Merchant
     */
    async getLocations(requestParameters: GetLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationPaginatedResponse> {
        const response = await this.getLocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all your Locations
     */
    async getLocationsMeRaw(requestParameters: GetLocationsMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationPaginatedResponse>> {
        const queryParameters: any = {};

        if (requestParameters.actingAs !== undefined) {
            queryParameters['actingAs'] = requestParameters.actingAs;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.businessHours !== undefined) {
            queryParameters['businessHours'] = requestParameters.businessHours;
        }

        if (requestParameters.merchantIdOrPath !== undefined) {
            queryParameters['merchantIdOrPath'] = requestParameters.merchantIdOrPath;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xCustomLang !== undefined && requestParameters.xCustomLang !== null) {
            headerParameters['x-custom-lang'] = String(requestParameters.xCustomLang);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // Api-Key authentication
        }

        const response = await this.request({
            path: `/v2/locations/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationPaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Get all your Locations
     */
    async getLocationsMe(requestParameters: GetLocationsMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationPaginatedResponse> {
        const response = await this.getLocationsMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Locations
     */
    async patchManyLocationsRaw(requestParameters: PatchManyLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LocationEntity>>> {
        if (requestParameters.locationsPatchBody === null || requestParameters.locationsPatchBody === undefined) {
            throw new runtime.RequiredError('locationsPatchBody','Required parameter requestParameters.locationsPatchBody was null or undefined when calling patchManyLocations.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xCustomLang !== undefined && requestParameters.xCustomLang !== null) {
            headerParameters['x-custom-lang'] = String(requestParameters.xCustomLang);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // Api-Key authentication
        }

        const response = await this.request({
            path: `/v2/locations`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationsPatchBody.map(LocationsPatchBodyToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LocationEntityFromJSON));
    }

    /**
     * Update Locations
     */
    async patchManyLocations(requestParameters: PatchManyLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LocationEntity>> {
        const response = await this.patchManyLocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a Location
     */
    async patchOneLocationRaw(requestParameters: PatchOneLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchOneLocation.');
        }

        if (requestParameters.locationPatchBody === null || requestParameters.locationPatchBody === undefined) {
            throw new runtime.RequiredError('locationPatchBody','Required parameter requestParameters.locationPatchBody was null or undefined when calling patchOneLocation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xCustomLang !== undefined && requestParameters.xCustomLang !== null) {
            headerParameters['x-custom-lang'] = String(requestParameters.xCustomLang);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // Api-Key authentication
        }

        const response = await this.request({
            path: `/v2/locations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: LocationPatchBodyToJSON(requestParameters.locationPatchBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationEntityFromJSON(jsonValue));
    }

    /**
     * Update a Location
     */
    async patchOneLocation(requestParameters: PatchOneLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationEntity> {
        const response = await this.patchOneLocationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetLocationActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetLocationActingAsEnum = typeof GetLocationActingAsEnum[keyof typeof GetLocationActingAsEnum];
/**
 * @export
 */
export const GetLocationsMeActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetLocationsMeActingAsEnum = typeof GetLocationsMeActingAsEnum[keyof typeof GetLocationsMeActingAsEnum];
