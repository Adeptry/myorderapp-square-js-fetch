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


import * as runtime from '../runtime';
import type {
  ContactPostBody,
  ErrorResponse,
  SupportRequestPostBody,
} from '../models/index';
import {
    ContactPostBodyFromJSON,
    ContactPostBodyToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SupportRequestPostBodyFromJSON,
    SupportRequestPostBodyToJSON,
} from '../models/index';

export interface PostContactRequest {
    contactPostBody: ContactPostBody;
    xCustomLang?: string;
}

export interface PostSupportRequest {
    supportRequestPostBody: SupportRequestPostBody;
    xCustomLang?: string;
}

/**
 * 
 */
export class MailApi extends runtime.BaseAPI {

    /**
     * Send contact
     */
    async postContactRaw(requestParameters: PostContactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.contactPostBody === null || requestParameters.contactPostBody === undefined) {
            throw new runtime.RequiredError('contactPostBody','Required parameter requestParameters.contactPostBody was null or undefined when calling postContact.');
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
            path: `/v2/users/contact`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ContactPostBodyToJSON(requestParameters.contactPostBody),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Send contact
     */
    async postContact(requestParameters: PostContactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postContactRaw(requestParameters, initOverrides);
    }

    /**
     * Send support request
     */
    async postSupportRaw(requestParameters: PostSupportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.supportRequestPostBody === null || requestParameters.supportRequestPostBody === undefined) {
            throw new runtime.RequiredError('supportRequestPostBody','Required parameter requestParameters.supportRequestPostBody was null or undefined when calling postSupport.');
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
            path: `/v2/users/support`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SupportRequestPostBodyToJSON(requestParameters.supportRequestPostBody),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Send support request
     */
    async postSupport(requestParameters: PostSupportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSupportRaw(requestParameters, initOverrides);
    }

}
