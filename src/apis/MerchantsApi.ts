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


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  MerchantEntity,
  SquarePostOauthBody,
  StripeBillingSessionResponse,
  StripePostCheckoutBody,
  StripePostCheckoutResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    MerchantEntityFromJSON,
    MerchantEntityToJSON,
    SquarePostOauthBodyFromJSON,
    SquarePostOauthBodyToJSON,
    StripeBillingSessionResponseFromJSON,
    StripeBillingSessionResponseToJSON,
    StripePostCheckoutBodyFromJSON,
    StripePostCheckoutBodyToJSON,
    StripePostCheckoutResponseFromJSON,
    StripePostCheckoutResponseToJSON,
} from '../models/index';

export interface DeleteMerchantMeRequest {
    xCustomLang?: string;
}

export interface GetMerchantRequest {
    idOrPath: string;
    xCustomLang?: string;
}

export interface GetMerchantMeRequest {
    user?: boolean;
    appConfig?: boolean;
    locations?: boolean;
    catalog?: boolean;
    xCustomLang?: string;
}

export interface GetSquareSyncMeRequest {
    xCustomLang?: string;
}

export interface GetStripeBillingSessionMeRequest {
    returnUrl: string;
    xCustomLang?: string;
}

export interface PostMerchantMeRequest {
    xCustomLang?: string;
}

export interface PostSquareOauthMeRequest {
    squarePostOauthBody: SquarePostOauthBody;
    xCustomLang?: string;
}

export interface PostStripeCheckoutMeRequest {
    stripePostCheckoutBody: StripePostCheckoutBody;
    xCustomLang?: string;
}

/**
 * 
 */
export class MerchantsApi extends runtime.BaseAPI {

    /**
     * Delete current Merchant
     */
    async deleteMerchantMeRaw(requestParameters: DeleteMerchantMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerchantEntity>> {
        const queryParameters: any = {};

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
            path: `/v2/merchants/me`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantEntityFromJSON(jsonValue));
    }

    /**
     * Delete current Merchant
     */
    async deleteMerchantMe(requestParameters: DeleteMerchantMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerchantEntity> {
        const response = await this.deleteMerchantMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Merchant
     */
    async getMerchantRaw(requestParameters: GetMerchantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerchantEntity>> {
        if (requestParameters.idOrPath === null || requestParameters.idOrPath === undefined) {
            throw new runtime.RequiredError('idOrPath','Required parameter requestParameters.idOrPath was null or undefined when calling getMerchant.');
        }

        const queryParameters: any = {};

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
            path: `/v2/merchants/{idOrPath}`.replace(`{${"idOrPath"}}`, encodeURIComponent(String(requestParameters.idOrPath))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantEntityFromJSON(jsonValue));
    }

    /**
     * Get Merchant
     */
    async getMerchant(requestParameters: GetMerchantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerchantEntity> {
        const response = await this.getMerchantRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get current Merchant
     */
    async getMerchantMeRaw(requestParameters: GetMerchantMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerchantEntity>> {
        const queryParameters: any = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        if (requestParameters.appConfig !== undefined) {
            queryParameters['appConfig'] = requestParameters.appConfig;
        }

        if (requestParameters.locations !== undefined) {
            queryParameters['locations'] = requestParameters.locations;
        }

        if (requestParameters.catalog !== undefined) {
            queryParameters['catalog'] = requestParameters.catalog;
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
            path: `/v2/merchants/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantEntityFromJSON(jsonValue));
    }

    /**
     * Get current Merchant
     */
    async getMerchantMe(requestParameters: GetMerchantMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerchantEntity> {
        const response = await this.getMerchantMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sync your Square Catalog
     */
    async getSquareSyncMeRaw(requestParameters: GetSquareSyncMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

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
            path: `/v2/merchants/me/square/sync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sync your Square Catalog
     */
    async getSquareSyncMe(requestParameters: GetSquareSyncMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getSquareSyncMeRaw(requestParameters, initOverrides);
    }

    /**
     * Start create billing session url
     */
    async getStripeBillingSessionMeRaw(requestParameters: GetStripeBillingSessionMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StripeBillingSessionResponse>> {
        if (requestParameters.returnUrl === null || requestParameters.returnUrl === undefined) {
            throw new runtime.RequiredError('returnUrl','Required parameter requestParameters.returnUrl was null or undefined when calling getStripeBillingSessionMe.');
        }

        const queryParameters: any = {};

        if (requestParameters.returnUrl !== undefined) {
            queryParameters['returnUrl'] = requestParameters.returnUrl;
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
            path: `/v2/merchants/me/stripe/billing-session`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StripeBillingSessionResponseFromJSON(jsonValue));
    }

    /**
     * Start create billing session url
     */
    async getStripeBillingSessionMe(requestParameters: GetStripeBillingSessionMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StripeBillingSessionResponse> {
        const response = await this.getStripeBillingSessionMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Merchant for current User
     */
    async postMerchantMeRaw(requestParameters: PostMerchantMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerchantEntity>> {
        const queryParameters: any = {};

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
            path: `/v2/merchants/me`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantEntityFromJSON(jsonValue));
    }

    /**
     * Create Merchant for current User
     */
    async postMerchantMe(requestParameters: PostMerchantMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerchantEntity> {
        const response = await this.postMerchantMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Confirm Square Oauth
     */
    async postSquareOauthMeRaw(requestParameters: PostSquareOauthMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.squarePostOauthBody === null || requestParameters.squarePostOauthBody === undefined) {
            throw new runtime.RequiredError('squarePostOauthBody','Required parameter requestParameters.squarePostOauthBody was null or undefined when calling postSquareOauthMe.');
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
            path: `/v2/merchants/me/square/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SquarePostOauthBodyToJSON(requestParameters.squarePostOauthBody),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Confirm Square Oauth
     */
    async postSquareOauthMe(requestParameters: PostSquareOauthMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSquareOauthMeRaw(requestParameters, initOverrides);
    }

    /**
     * Start Stripe checkout
     */
    async postStripeCheckoutMeRaw(requestParameters: PostStripeCheckoutMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StripePostCheckoutResponse>> {
        if (requestParameters.stripePostCheckoutBody === null || requestParameters.stripePostCheckoutBody === undefined) {
            throw new runtime.RequiredError('stripePostCheckoutBody','Required parameter requestParameters.stripePostCheckoutBody was null or undefined when calling postStripeCheckoutMe.');
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
            path: `/v2/merchants/me/stripe/checkout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StripePostCheckoutBodyToJSON(requestParameters.stripePostCheckoutBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StripePostCheckoutResponseFromJSON(jsonValue));
    }

    /**
     * Start Stripe checkout
     */
    async postStripeCheckoutMe(requestParameters: PostStripeCheckoutMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StripePostCheckoutResponse> {
        const response = await this.postStripeCheckoutMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
