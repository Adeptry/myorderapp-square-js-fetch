/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AppConfigEntity,
  AppConfigUpdateBody,
  ErrorResponse,
} from '../models/index';
import {
    AppConfigEntityFromJSON,
    AppConfigEntityToJSON,
    AppConfigUpdateBodyFromJSON,
    AppConfigUpdateBodyToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface GetAppConfigRequest {
    merchantIdOrPath: string;
    xCustomLang?: string;
}

export interface GetAppConfigMeRequest {
    merchantIdOrPath?: string;
    actingAs?: GetAppConfigMeActingAsEnum;
    xCustomLang?: string;
}

export interface PatchAppConfigMeRequest {
    appConfigUpdateBody: AppConfigUpdateBody;
    xCustomLang?: string;
}

export interface PostAppConfigMeRequest {
    appConfigUpdateBody: AppConfigUpdateBody;
    xCustomLang?: string;
}

export interface PostBannerUploadMeRequest {
    xCustomLang?: string;
    file?: Blob;
}

export interface PostIconUploadMeRequest {
    xCustomLang?: string;
    file?: Blob;
}

/**
 * 
 */
export class AppConfigsApi extends runtime.BaseAPI {

    /**
     * Get Config for Merchant ID
     */
    async getAppConfigRaw(requestParameters: GetAppConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppConfigEntity>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling getAppConfig.');
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
            path: `/v2/app-config`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppConfigEntityFromJSON(jsonValue));
    }

    /**
     * Get Config for Merchant ID
     */
    async getAppConfig(requestParameters: GetAppConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppConfigEntity> {
        const response = await this.getAppConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get your Config
     */
    async getAppConfigMeRaw(requestParameters: GetAppConfigMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppConfigEntity>> {
        const queryParameters: any = {};

        if (requestParameters.merchantIdOrPath !== undefined) {
            queryParameters['merchantIdOrPath'] = requestParameters.merchantIdOrPath;
        }

        if (requestParameters.actingAs !== undefined) {
            queryParameters['actingAs'] = requestParameters.actingAs;
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
            path: `/v2/app-config/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppConfigEntityFromJSON(jsonValue));
    }

    /**
     * Get your Config
     */
    async getAppConfigMe(requestParameters: GetAppConfigMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppConfigEntity> {
        const response = await this.getAppConfigMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update your Config
     */
    async patchAppConfigMeRaw(requestParameters: PatchAppConfigMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppConfigEntity>> {
        if (requestParameters.appConfigUpdateBody === null || requestParameters.appConfigUpdateBody === undefined) {
            throw new runtime.RequiredError('appConfigUpdateBody','Required parameter requestParameters.appConfigUpdateBody was null or undefined when calling patchAppConfigMe.');
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
            path: `/v2/app-config/me`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppConfigUpdateBodyToJSON(requestParameters.appConfigUpdateBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppConfigEntityFromJSON(jsonValue));
    }

    /**
     * Update your Config
     */
    async patchAppConfigMe(requestParameters: PatchAppConfigMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppConfigEntity> {
        const response = await this.patchAppConfigMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create your Config
     */
    async postAppConfigMeRaw(requestParameters: PostAppConfigMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppConfigEntity>> {
        if (requestParameters.appConfigUpdateBody === null || requestParameters.appConfigUpdateBody === undefined) {
            throw new runtime.RequiredError('appConfigUpdateBody','Required parameter requestParameters.appConfigUpdateBody was null or undefined when calling postAppConfigMe.');
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
            path: `/v2/app-config/me`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppConfigUpdateBodyToJSON(requestParameters.appConfigUpdateBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppConfigEntityFromJSON(jsonValue));
    }

    /**
     * Create your Config
     */
    async postAppConfigMe(requestParameters: PostAppConfigMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppConfigEntity> {
        const response = await this.postAppConfigMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Upload banner
     */
    async postBannerUploadMeRaw(requestParameters: PostBannerUploadMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/v2/app-config/me/banner/upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Upload banner
     */
    async postBannerUploadMe(requestParameters: PostBannerUploadMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postBannerUploadMeRaw(requestParameters, initOverrides);
    }

    /**
     * Upload icon
     */
    async postIconUploadMeRaw(requestParameters: PostIconUploadMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/v2/app-config/me/icon/upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Upload icon
     */
    async postIconUploadMe(requestParameters: PostIconUploadMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postIconUploadMeRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GetAppConfigMeActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetAppConfigMeActingAsEnum = typeof GetAppConfigMeActingAsEnum[keyof typeof GetAppConfigMeActingAsEnum];
