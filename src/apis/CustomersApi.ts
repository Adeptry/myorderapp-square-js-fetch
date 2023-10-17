/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AppInstallPostBody,
  CustomerEntity,
  CustomerPatchBody,
  CustomersPaginatedResponse,
  ErrorResponse,
} from '../models/index';
import {
    AppInstallPostBodyFromJSON,
    AppInstallPostBodyToJSON,
    CustomerEntityFromJSON,
    CustomerEntityToJSON,
    CustomerPatchBodyFromJSON,
    CustomerPatchBodyToJSON,
    CustomersPaginatedResponseFromJSON,
    CustomersPaginatedResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface DeleteCustomerMeRequest {
    merchantIdOrPath: string;
    xCustomLang?: string;
}

export interface GetCustomerMeRequest {
    merchantIdOrPath: string;
    user?: boolean;
    merchant?: boolean;
    currentOrder?: boolean;
    preferredLocation?: boolean;
    preferredSquareCard?: boolean;
    xCustomLang?: string;
}

export interface GetCustomersRequest {
    page?: number;
    limit?: number;
    user?: boolean;
    merchant?: boolean;
    currentOrder?: boolean;
    preferredLocation?: boolean;
    orderField?: GetCustomersOrderFieldEnum;
    orderSort?: GetCustomersOrderSortEnum;
    startDate?: string;
    endDate?: string;
    xCustomLang?: string;
}

export interface PatchCustomerMeRequest {
    merchantIdOrPath: string;
    customerPatchBody: CustomerPatchBody;
    user?: boolean;
    merchant?: boolean;
    currentOrder?: boolean;
    preferredLocation?: boolean;
    preferredSquareCard?: boolean;
    xCustomLang?: string;
}

export interface PostCustomerMeRequest {
    merchantIdOrPath: string;
    user?: boolean;
    merchant?: boolean;
    currentOrder?: boolean;
    preferredLocation?: boolean;
    xCustomLang?: string;
}

export interface UpdateAppInstallMeRequest {
    merchantIdOrPath: string;
    appInstallPostBody: AppInstallPostBody;
    xCustomLang?: string;
}

/**
 * 
 */
export class CustomersApi extends runtime.BaseAPI {

    /**
     * Delete current Customer
     */
    async deleteCustomerMeRaw(requestParameters: DeleteCustomerMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerEntity>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling deleteCustomerMe.');
        }

        const queryParameters: any = {};

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
            path: `/v2/customers/me`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerEntityFromJSON(jsonValue));
    }

    /**
     * Delete current Customer
     */
    async deleteCustomerMe(requestParameters: DeleteCustomerMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerEntity> {
        const response = await this.deleteCustomerMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get current Customer
     */
    async getCustomerMeRaw(requestParameters: GetCustomerMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerEntity>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling getCustomerMe.');
        }

        const queryParameters: any = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        if (requestParameters.merchant !== undefined) {
            queryParameters['merchant'] = requestParameters.merchant;
        }

        if (requestParameters.currentOrder !== undefined) {
            queryParameters['currentOrder'] = requestParameters.currentOrder;
        }

        if (requestParameters.preferredLocation !== undefined) {
            queryParameters['preferredLocation'] = requestParameters.preferredLocation;
        }

        if (requestParameters.preferredSquareCard !== undefined) {
            queryParameters['preferredSquareCard'] = requestParameters.preferredSquareCard;
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
            path: `/v2/customers/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerEntityFromJSON(jsonValue));
    }

    /**
     * Get current Customer
     */
    async getCustomerMe(requestParameters: GetCustomerMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerEntity> {
        const response = await this.getCustomerMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get my Customers
     */
    async getCustomersRaw(requestParameters: GetCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomersPaginatedResponse>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        if (requestParameters.merchant !== undefined) {
            queryParameters['merchant'] = requestParameters.merchant;
        }

        if (requestParameters.currentOrder !== undefined) {
            queryParameters['currentOrder'] = requestParameters.currentOrder;
        }

        if (requestParameters.preferredLocation !== undefined) {
            queryParameters['preferredLocation'] = requestParameters.preferredLocation;
        }

        if (requestParameters.orderField !== undefined) {
            queryParameters['orderField'] = requestParameters.orderField;
        }

        if (requestParameters.orderSort !== undefined) {
            queryParameters['orderSort'] = requestParameters.orderSort;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = requestParameters.startDate;
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['endDate'] = requestParameters.endDate;
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
            path: `/v2/customers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomersPaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Get my Customers
     */
    async getCustomers(requestParameters: GetCustomersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomersPaginatedResponse> {
        const response = await this.getCustomersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update your Customer
     */
    async patchCustomerMeRaw(requestParameters: PatchCustomerMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerEntity>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling patchCustomerMe.');
        }

        if (requestParameters.customerPatchBody === null || requestParameters.customerPatchBody === undefined) {
            throw new runtime.RequiredError('customerPatchBody','Required parameter requestParameters.customerPatchBody was null or undefined when calling patchCustomerMe.');
        }

        const queryParameters: any = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        if (requestParameters.merchant !== undefined) {
            queryParameters['merchant'] = requestParameters.merchant;
        }

        if (requestParameters.currentOrder !== undefined) {
            queryParameters['currentOrder'] = requestParameters.currentOrder;
        }

        if (requestParameters.preferredLocation !== undefined) {
            queryParameters['preferredLocation'] = requestParameters.preferredLocation;
        }

        if (requestParameters.preferredSquareCard !== undefined) {
            queryParameters['preferredSquareCard'] = requestParameters.preferredSquareCard;
        }

        if (requestParameters.merchantIdOrPath !== undefined) {
            queryParameters['merchantIdOrPath'] = requestParameters.merchantIdOrPath;
        }

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
            path: `/v2/customers/me`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerPatchBodyToJSON(requestParameters.customerPatchBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerEntityFromJSON(jsonValue));
    }

    /**
     * Update your Customer
     */
    async patchCustomerMe(requestParameters: PatchCustomerMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerEntity> {
        const response = await this.patchCustomerMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Customer for current User
     */
    async postCustomerMeRaw(requestParameters: PostCustomerMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerEntity>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling postCustomerMe.');
        }

        const queryParameters: any = {};

        if (requestParameters.merchantIdOrPath !== undefined) {
            queryParameters['merchantIdOrPath'] = requestParameters.merchantIdOrPath;
        }

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        if (requestParameters.merchant !== undefined) {
            queryParameters['merchant'] = requestParameters.merchant;
        }

        if (requestParameters.currentOrder !== undefined) {
            queryParameters['currentOrder'] = requestParameters.currentOrder;
        }

        if (requestParameters.preferredLocation !== undefined) {
            queryParameters['preferredLocation'] = requestParameters.preferredLocation;
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
            path: `/v2/customers/me`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerEntityFromJSON(jsonValue));
    }

    /**
     * Create Customer for current User
     */
    async postCustomerMe(requestParameters: PostCustomerMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerEntity> {
        const response = await this.postCustomerMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create or update Customer App Install
     */
    async updateAppInstallMeRaw(requestParameters: UpdateAppInstallMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling updateAppInstallMe.');
        }

        if (requestParameters.appInstallPostBody === null || requestParameters.appInstallPostBody === undefined) {
            throw new runtime.RequiredError('appInstallPostBody','Required parameter requestParameters.appInstallPostBody was null or undefined when calling updateAppInstallMe.');
        }

        const queryParameters: any = {};

        if (requestParameters.merchantIdOrPath !== undefined) {
            queryParameters['merchantIdOrPath'] = requestParameters.merchantIdOrPath;
        }

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
            path: `/v2/customers/me/app-install`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppInstallPostBodyToJSON(requestParameters.appInstallPostBody),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create or update Customer App Install
     */
    async updateAppInstallMe(requestParameters: UpdateAppInstallMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateAppInstallMeRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GetCustomersOrderFieldEnum = {
    Id: 'id',
    CreateDate: 'createDate'
} as const;
export type GetCustomersOrderFieldEnum = typeof GetCustomersOrderFieldEnum[keyof typeof GetCustomersOrderFieldEnum];
/**
 * @export
 */
export const GetCustomersOrderSortEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GetCustomersOrderSortEnum = typeof GetCustomersOrderSortEnum[keyof typeof GetCustomersOrderSortEnum];
