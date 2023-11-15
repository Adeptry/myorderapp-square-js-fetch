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
  OrderEntity,
  OrderPatchBody,
  OrderPostBody,
  OrderPostCurrentBody,
  OrdersPaginatedResponse,
  OrdersPostPaymentBody,
  OrdersStatisticsResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    OrderEntityFromJSON,
    OrderEntityToJSON,
    OrderPatchBodyFromJSON,
    OrderPatchBodyToJSON,
    OrderPostBodyFromJSON,
    OrderPostBodyToJSON,
    OrderPostCurrentBodyFromJSON,
    OrderPostCurrentBodyToJSON,
    OrdersPaginatedResponseFromJSON,
    OrdersPaginatedResponseToJSON,
    OrdersPostPaymentBodyFromJSON,
    OrdersPostPaymentBodyToJSON,
    OrdersStatisticsResponseFromJSON,
    OrdersStatisticsResponseToJSON,
} from '../models/index';

export interface DeleteLineItemCurrentRequest {
    id: string;
    merchantIdOrPath: string;
    lineItems?: boolean;
    location?: boolean;
    xCustomLang?: string;
}

export interface DeleteOrderCurrentRequest {
    merchantIdOrPath: string;
    xCustomLang?: string;
}

export interface GetOrderRequest {
    id: string;
    lineItems?: boolean;
    location?: boolean;
    actingAs?: GetOrderActingAsEnum;
    merchantIdOrPath?: string;
    xCustomLang?: string;
}

export interface GetOrderCurrentRequest {
    merchantIdOrPath: string;
    lineItems?: boolean;
    location?: boolean;
    xCustomLang?: string;
}

export interface GetOrderStatisticsMeRequest {
    startDate?: string;
    endDate?: string;
    xCustomLang?: string;
}

export interface GetOrdersRequest {
    page?: number;
    limit?: number;
    closed?: boolean;
    lineItems?: boolean;
    location?: boolean;
    customer?: boolean;
    orderField?: GetOrdersOrderFieldEnum;
    orderSort?: GetOrdersOrderSortEnum;
    startDate?: string;
    endDate?: string;
    actingAs?: GetOrdersActingAsEnum;
    merchantIdOrPath?: string;
    xCustomLang?: string;
}

export interface PatchOrderCurrentRequest {
    orderPatchBody: OrderPatchBody;
    lineItems?: boolean;
    location?: boolean;
    idempotencyKey?: string;
    merchantIdOrPath?: string;
    xCustomLang?: string;
}

export interface PostOrderRequest {
    merchantIdOrPath: string;
    orderPostBody: OrderPostBody;
    lineItems?: boolean;
    location?: boolean;
    xCustomLang?: string;
}

export interface PostOrderCurrentRequest {
    merchantIdOrPath: string;
    orderPostCurrentBody: OrderPostCurrentBody;
    lineItems?: boolean;
    location?: boolean;
    idempotencyKey?: string;
    xCustomLang?: string;
}

export interface PostSquarePaymentOrderCurrentRequest {
    merchantIdOrPath: string;
    ordersPostPaymentBody: OrdersPostPaymentBody;
    lineItems?: boolean;
    location?: boolean;
    xCustomLang?: string;
}

/**
 * 
 */
export class OrdersApi extends runtime.BaseAPI {

    /**
     * Remove Line Items from Order
     */
    async deleteLineItemCurrentRaw(requestParameters: DeleteLineItemCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteLineItemCurrent.');
        }

        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling deleteLineItemCurrent.');
        }

        const queryParameters: any = {};

        if (requestParameters.lineItems !== undefined) {
            queryParameters['lineItems'] = requestParameters.lineItems;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
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
            path: `/v2/orders/current/line-item/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderEntityFromJSON(jsonValue));
    }

    /**
     * Remove Line Items from Order
     */
    async deleteLineItemCurrent(requestParameters: DeleteLineItemCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderEntity> {
        const response = await this.deleteLineItemCurrentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Order
     */
    async deleteOrderCurrentRaw(requestParameters: DeleteOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling deleteOrderCurrent.');
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
            path: `/v2/orders/current`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Order
     */
    async deleteOrderCurrent(requestParameters: DeleteOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteOrderCurrentRaw(requestParameters, initOverrides);
    }

    /**
     * Get Order
     */
    async getOrderRaw(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getOrder.');
        }

        const queryParameters: any = {};

        if (requestParameters.lineItems !== undefined) {
            queryParameters['lineItems'] = requestParameters.lineItems;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
        }

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
            path: `/v2/orders/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderEntityFromJSON(jsonValue));
    }

    /**
     * Get Order
     */
    async getOrder(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderEntity> {
        const response = await this.getOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get current Order
     */
    async getOrderCurrentRaw(requestParameters: GetOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderEntity>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling getOrderCurrent.');
        }

        const queryParameters: any = {};

        if (requestParameters.lineItems !== undefined) {
            queryParameters['lineItems'] = requestParameters.lineItems;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
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
            path: `/v2/orders/current`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderEntityFromJSON(jsonValue));
    }

    /**
     * Get current Order
     */
    async getOrderCurrent(requestParameters: GetOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderEntity> {
        const response = await this.getOrderCurrentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get your statistics
     */
    async getOrderStatisticsMeRaw(requestParameters: GetOrderStatisticsMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrdersStatisticsResponse>> {
        const queryParameters: any = {};

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
            path: `/v2/orders/statistics/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrdersStatisticsResponseFromJSON(jsonValue));
    }

    /**
     * Get your statistics
     */
    async getOrderStatisticsMe(requestParameters: GetOrderStatisticsMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrdersStatisticsResponse> {
        const response = await this.getOrderStatisticsMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get my Orders
     */
    async getOrdersRaw(requestParameters: GetOrdersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrdersPaginatedResponse>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.closed !== undefined) {
            queryParameters['closed'] = requestParameters.closed;
        }

        if (requestParameters.lineItems !== undefined) {
            queryParameters['lineItems'] = requestParameters.lineItems;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
        }

        if (requestParameters.customer !== undefined) {
            queryParameters['customer'] = requestParameters.customer;
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
            path: `/v2/orders/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrdersPaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Get my Orders
     */
    async getOrders(requestParameters: GetOrdersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrdersPaginatedResponse> {
        const response = await this.getOrdersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch update Order, e.g. modify Location
     */
    async patchOrderCurrentRaw(requestParameters: PatchOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderEntity>> {
        if (requestParameters.orderPatchBody === null || requestParameters.orderPatchBody === undefined) {
            throw new runtime.RequiredError('orderPatchBody','Required parameter requestParameters.orderPatchBody was null or undefined when calling patchOrderCurrent.');
        }

        const queryParameters: any = {};

        if (requestParameters.lineItems !== undefined) {
            queryParameters['lineItems'] = requestParameters.lineItems;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
        }

        if (requestParameters.idempotencyKey !== undefined) {
            queryParameters['idempotencyKey'] = requestParameters.idempotencyKey;
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
            path: `/v2/orders/current`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: OrderPatchBodyToJSON(requestParameters.orderPatchBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderEntityFromJSON(jsonValue));
    }

    /**
     * Patch update Order, e.g. modify Location
     */
    async patchOrderCurrent(requestParameters: PatchOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderEntity> {
        const response = await this.patchOrderCurrentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Order
     */
    async postOrderRaw(requestParameters: PostOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderEntity>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling postOrder.');
        }

        if (requestParameters.orderPostBody === null || requestParameters.orderPostBody === undefined) {
            throw new runtime.RequiredError('orderPostBody','Required parameter requestParameters.orderPostBody was null or undefined when calling postOrder.');
        }

        const queryParameters: any = {};

        if (requestParameters.lineItems !== undefined) {
            queryParameters['lineItems'] = requestParameters.lineItems;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
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
            path: `/v2/orders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrderPostBodyToJSON(requestParameters.orderPostBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderEntityFromJSON(jsonValue));
    }

    /**
     * Create Order
     */
    async postOrder(requestParameters: PostOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderEntity> {
        const response = await this.postOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Post update Order, e.g. add Variations & Modifiers in Line Items
     */
    async postOrderCurrentRaw(requestParameters: PostOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderEntity>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling postOrderCurrent.');
        }

        if (requestParameters.orderPostCurrentBody === null || requestParameters.orderPostCurrentBody === undefined) {
            throw new runtime.RequiredError('orderPostCurrentBody','Required parameter requestParameters.orderPostCurrentBody was null or undefined when calling postOrderCurrent.');
        }

        const queryParameters: any = {};

        if (requestParameters.lineItems !== undefined) {
            queryParameters['lineItems'] = requestParameters.lineItems;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
        }

        if (requestParameters.idempotencyKey !== undefined) {
            queryParameters['idempotencyKey'] = requestParameters.idempotencyKey;
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
            path: `/v2/orders/current`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrderPostCurrentBodyToJSON(requestParameters.orderPostCurrentBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderEntityFromJSON(jsonValue));
    }

    /**
     * Post update Order, e.g. add Variations & Modifiers in Line Items
     */
    async postOrderCurrent(requestParameters: PostOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderEntity> {
        const response = await this.postOrderCurrentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pay for Order
     */
    async postSquarePaymentOrderCurrentRaw(requestParameters: PostSquarePaymentOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderEntity>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling postSquarePaymentOrderCurrent.');
        }

        if (requestParameters.ordersPostPaymentBody === null || requestParameters.ordersPostPaymentBody === undefined) {
            throw new runtime.RequiredError('ordersPostPaymentBody','Required parameter requestParameters.ordersPostPaymentBody was null or undefined when calling postSquarePaymentOrderCurrent.');
        }

        const queryParameters: any = {};

        if (requestParameters.lineItems !== undefined) {
            queryParameters['lineItems'] = requestParameters.lineItems;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
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
            path: `/v2/orders/current/payment/square`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrdersPostPaymentBodyToJSON(requestParameters.ordersPostPaymentBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderEntityFromJSON(jsonValue));
    }

    /**
     * Pay for Order
     */
    async postSquarePaymentOrderCurrent(requestParameters: PostSquarePaymentOrderCurrentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderEntity> {
        const response = await this.postSquarePaymentOrderCurrentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetOrderActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetOrderActingAsEnum = typeof GetOrderActingAsEnum[keyof typeof GetOrderActingAsEnum];
/**
 * @export
 */
export const GetOrdersOrderFieldEnum = {
    Id: 'id',
    SquareId: 'squareId',
    PickupDate: 'pickupDate',
    ClosedDate: 'closedDate',
    CustomerId: 'customerId',
    LocationId: 'locationId',
    TotalMoneyAmount: 'totalMoneyAmount',
    TotalTaxMoneyAmount: 'totalTaxMoneyAmount',
    TotalDiscountMoneyAmount: 'totalDiscountMoneyAmount',
    TotalTipMoneyAmount: 'totalTipMoneyAmount',
    TotalServiceChargeMoneyAmount: 'totalServiceChargeMoneyAmount',
    AppFeeMoneyAmount: 'appFeeMoneyAmount'
} as const;
export type GetOrdersOrderFieldEnum = typeof GetOrdersOrderFieldEnum[keyof typeof GetOrdersOrderFieldEnum];
/**
 * @export
 */
export const GetOrdersOrderSortEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GetOrdersOrderSortEnum = typeof GetOrdersOrderSortEnum[keyof typeof GetOrdersOrderSortEnum];
/**
 * @export
 */
export const GetOrdersActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetOrdersActingAsEnum = typeof GetOrdersActingAsEnum[keyof typeof GetOrdersActingAsEnum];
