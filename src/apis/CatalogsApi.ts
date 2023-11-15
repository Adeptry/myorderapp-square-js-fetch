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
  CatalogImageEntity,
  CategoriesPatchBody,
  CategoryEntity,
  CategoryPaginatedResponse,
  CategoryPatchBody,
  ErrorResponse,
  ItemEntity,
  ItemPaginatedResponse,
  ItemPatchBody,
  ItemsPatchBody,
  VariationEntity,
  VariationPatchBody,
} from '../models/index';
import {
    CatalogImageEntityFromJSON,
    CatalogImageEntityToJSON,
    CategoriesPatchBodyFromJSON,
    CategoriesPatchBodyToJSON,
    CategoryEntityFromJSON,
    CategoryEntityToJSON,
    CategoryPaginatedResponseFromJSON,
    CategoryPaginatedResponseToJSON,
    CategoryPatchBodyFromJSON,
    CategoryPatchBodyToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ItemEntityFromJSON,
    ItemEntityToJSON,
    ItemPaginatedResponseFromJSON,
    ItemPaginatedResponseToJSON,
    ItemPatchBodyFromJSON,
    ItemPatchBodyToJSON,
    ItemsPatchBodyFromJSON,
    ItemsPatchBodyToJSON,
    VariationEntityFromJSON,
    VariationEntityToJSON,
    VariationPatchBodyFromJSON,
    VariationPatchBodyToJSON,
} from '../models/index';

export interface GetCategoriesRequest {
    merchantIdOrPath: string;
    actingAs: GetCategoriesActingAsEnum;
    page?: number;
    limit?: number;
    locationId?: string;
    items?: boolean;
    images?: boolean;
    variations?: boolean;
    modifierLists?: boolean;
    xCustomLang?: string;
}

export interface GetCategoriesItemsRequest {
    id: string;
    actingAs?: GetCategoriesItemsActingAsEnum;
    page?: number;
    limit?: number;
    locationId?: string;
    images?: boolean;
    variations?: boolean;
    modifierLists?: boolean;
    merchantIdOrPath?: string;
    xCustomLang?: string;
}

export interface GetCategoriesMeRequest {
    page?: number;
    limit?: number;
    locationId?: string;
    items?: boolean;
    images?: boolean;
    variations?: boolean;
    modifierLists?: boolean;
    actingAs?: GetCategoriesMeActingAsEnum;
    merchantIdOrPath?: string;
    xCustomLang?: string;
}

export interface GetItemRequest {
    id: string;
    locationId?: string;
    xCustomLang?: string;
}

export interface GetVariationsForItemRequest {
    id: string;
    locationId?: string;
    xCustomLang?: string;
}

export interface PatchCategoriesRequest {
    categoriesPatchBody: Array<CategoriesPatchBody>;
    xCustomLang?: string;
}

export interface PatchCategoryRequest {
    id: string;
    categoryPatchBody: CategoryPatchBody;
    xCustomLang?: string;
}

export interface PatchItemRequest {
    id: string;
    itemPatchBody: ItemPatchBody;
    xCustomLang?: string;
}

export interface PatchItemsRequest {
    itemsPatchBody: Array<ItemsPatchBody>;
    xCustomLang?: string;
}

export interface PatchVariationRequest {
    id: string;
    variationPatchBody: VariationPatchBody;
    xCustomLang?: string;
}

export interface PostItemSquareImageUploadRequest {
    idempotencyKey: string;
    id: string;
    xCustomLang?: string;
    file?: Blob;
}

/**
 * 
 */
export class CatalogsApi extends runtime.BaseAPI {

    /**
     * Get Categories for Merchant ID with Items, Variations, and/or ModifierLists
     */
    async getCategoriesRaw(requestParameters: GetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoryPaginatedResponse>> {
        if (requestParameters.merchantIdOrPath === null || requestParameters.merchantIdOrPath === undefined) {
            throw new runtime.RequiredError('merchantIdOrPath','Required parameter requestParameters.merchantIdOrPath was null or undefined when calling getCategories.');
        }

        if (requestParameters.actingAs === null || requestParameters.actingAs === undefined) {
            throw new runtime.RequiredError('actingAs','Required parameter requestParameters.actingAs was null or undefined when calling getCategories.');
        }

        const queryParameters: any = {};

        if (requestParameters.merchantIdOrPath !== undefined) {
            queryParameters['merchantIdOrPath'] = requestParameters.merchantIdOrPath;
        }

        if (requestParameters.actingAs !== undefined) {
            queryParameters['actingAs'] = requestParameters.actingAs;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.locationId !== undefined) {
            queryParameters['locationId'] = requestParameters.locationId;
        }

        if (requestParameters.items !== undefined) {
            queryParameters['items'] = requestParameters.items;
        }

        if (requestParameters.images !== undefined) {
            queryParameters['images'] = requestParameters.images;
        }

        if (requestParameters.variations !== undefined) {
            queryParameters['variations'] = requestParameters.variations;
        }

        if (requestParameters.modifierLists !== undefined) {
            queryParameters['modifierLists'] = requestParameters.modifierLists;
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
            path: `/v2/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryPaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Get Categories for Merchant ID with Items, Variations, and/or ModifierLists
     */
    async getCategories(requestParameters: GetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoryPaginatedResponse> {
        const response = await this.getCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Items in Category
     */
    async getCategoriesItemsRaw(requestParameters: GetCategoriesItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ItemPaginatedResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCategoriesItems.');
        }

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

        if (requestParameters.locationId !== undefined) {
            queryParameters['locationId'] = requestParameters.locationId;
        }

        if (requestParameters.images !== undefined) {
            queryParameters['images'] = requestParameters.images;
        }

        if (requestParameters.variations !== undefined) {
            queryParameters['variations'] = requestParameters.variations;
        }

        if (requestParameters.modifierLists !== undefined) {
            queryParameters['modifierLists'] = requestParameters.modifierLists;
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
            path: `/v2/categories/{id}/items`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemPaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Get Items in Category
     */
    async getCategoriesItems(requestParameters: GetCategoriesItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ItemPaginatedResponse> {
        const response = await this.getCategoriesItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get your Categories with Items, Variations, and/or ModifierLists
     */
    async getCategoriesMeRaw(requestParameters: GetCategoriesMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoryPaginatedResponse>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.locationId !== undefined) {
            queryParameters['locationId'] = requestParameters.locationId;
        }

        if (requestParameters.items !== undefined) {
            queryParameters['items'] = requestParameters.items;
        }

        if (requestParameters.images !== undefined) {
            queryParameters['images'] = requestParameters.images;
        }

        if (requestParameters.variations !== undefined) {
            queryParameters['variations'] = requestParameters.variations;
        }

        if (requestParameters.modifierLists !== undefined) {
            queryParameters['modifierLists'] = requestParameters.modifierLists;
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
            path: `/v2/categories/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryPaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Get your Categories with Items, Variations, and/or ModifierLists
     */
    async getCategoriesMe(requestParameters: GetCategoriesMeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoryPaginatedResponse> {
        const response = await this.getCategoriesMeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Item with ID
     */
    async getItemRaw(requestParameters: GetItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ItemEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getItem.');
        }

        const queryParameters: any = {};

        if (requestParameters.locationId !== undefined) {
            queryParameters['locationId'] = requestParameters.locationId;
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
            path: `/v2/items/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemEntityFromJSON(jsonValue));
    }

    /**
     * Get Item with ID
     */
    async getItem(requestParameters: GetItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ItemEntity> {
        const response = await this.getItemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Item variations with ID
     */
    async getVariationsForItemRaw(requestParameters: GetVariationsForItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VariationEntity>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getVariationsForItem.');
        }

        const queryParameters: any = {};

        if (requestParameters.locationId !== undefined) {
            queryParameters['locationId'] = requestParameters.locationId;
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
            path: `/v2/items/{id}/variations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VariationEntityFromJSON));
    }

    /**
     * Get Item variations with ID
     */
    async getVariationsForItem(requestParameters: GetVariationsForItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VariationEntity>> {
        const response = await this.getVariationsForItemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update multiple Categories
     */
    async patchCategoriesRaw(requestParameters: PatchCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CategoryEntity>>> {
        if (requestParameters.categoriesPatchBody === null || requestParameters.categoriesPatchBody === undefined) {
            throw new runtime.RequiredError('categoriesPatchBody','Required parameter requestParameters.categoriesPatchBody was null or undefined when calling patchCategories.');
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
            path: `/v2/categories`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.categoriesPatchBody.map(CategoriesPatchBodyToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CategoryEntityFromJSON));
    }

    /**
     * Update multiple Categories
     */
    async patchCategories(requestParameters: PatchCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CategoryEntity>> {
        const response = await this.patchCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a Category
     */
    async patchCategoryRaw(requestParameters: PatchCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoryEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchCategory.');
        }

        if (requestParameters.categoryPatchBody === null || requestParameters.categoryPatchBody === undefined) {
            throw new runtime.RequiredError('categoryPatchBody','Required parameter requestParameters.categoryPatchBody was null or undefined when calling patchCategory.');
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
            path: `/v2/categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CategoryPatchBodyToJSON(requestParameters.categoryPatchBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryEntityFromJSON(jsonValue));
    }

    /**
     * Update a Category
     */
    async patchCategory(requestParameters: PatchCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoryEntity> {
        const response = await this.patchCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an Item
     */
    async patchItemRaw(requestParameters: PatchItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ItemEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchItem.');
        }

        if (requestParameters.itemPatchBody === null || requestParameters.itemPatchBody === undefined) {
            throw new runtime.RequiredError('itemPatchBody','Required parameter requestParameters.itemPatchBody was null or undefined when calling patchItem.');
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
            path: `/v2/items/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ItemPatchBodyToJSON(requestParameters.itemPatchBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemEntityFromJSON(jsonValue));
    }

    /**
     * Update an Item
     */
    async patchItem(requestParameters: PatchItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ItemEntity> {
        const response = await this.patchItemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update multiple Items
     */
    async patchItemsRaw(requestParameters: PatchItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ItemEntity>>> {
        if (requestParameters.itemsPatchBody === null || requestParameters.itemsPatchBody === undefined) {
            throw new runtime.RequiredError('itemsPatchBody','Required parameter requestParameters.itemsPatchBody was null or undefined when calling patchItems.');
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
            path: `/v2/items`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.itemsPatchBody.map(ItemsPatchBodyToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ItemEntityFromJSON));
    }

    /**
     * Update multiple Items
     */
    async patchItems(requestParameters: PatchItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ItemEntity>> {
        const response = await this.patchItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an Variation
     */
    async patchVariationRaw(requestParameters: PatchVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VariationEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchVariation.');
        }

        if (requestParameters.variationPatchBody === null || requestParameters.variationPatchBody === undefined) {
            throw new runtime.RequiredError('variationPatchBody','Required parameter requestParameters.variationPatchBody was null or undefined when calling patchVariation.');
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
            path: `/v2/variations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: VariationPatchBodyToJSON(requestParameters.variationPatchBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VariationEntityFromJSON(jsonValue));
    }

    /**
     * Update an Variation
     */
    async patchVariation(requestParameters: PatchVariationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VariationEntity> {
        const response = await this.patchVariationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Upload Square Catalog Image
     */
    async postItemSquareImageUploadRaw(requestParameters: PostItemSquareImageUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogImageEntity>> {
        if (requestParameters.idempotencyKey === null || requestParameters.idempotencyKey === undefined) {
            throw new runtime.RequiredError('idempotencyKey','Required parameter requestParameters.idempotencyKey was null or undefined when calling postItemSquareImageUpload.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling postItemSquareImageUpload.');
        }

        const queryParameters: any = {};

        if (requestParameters.idempotencyKey !== undefined) {
            queryParameters['idempotencyKey'] = requestParameters.idempotencyKey;
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
            path: `/v2/items/{id}/square/image/upload`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogImageEntityFromJSON(jsonValue));
    }

    /**
     * Upload Square Catalog Image
     */
    async postItemSquareImageUpload(requestParameters: PostItemSquareImageUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogImageEntity> {
        const response = await this.postItemSquareImageUploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetCategoriesActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetCategoriesActingAsEnum = typeof GetCategoriesActingAsEnum[keyof typeof GetCategoriesActingAsEnum];
/**
 * @export
 */
export const GetCategoriesItemsActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetCategoriesItemsActingAsEnum = typeof GetCategoriesItemsActingAsEnum[keyof typeof GetCategoriesItemsActingAsEnum];
/**
 * @export
 */
export const GetCategoriesMeActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetCategoriesMeActingAsEnum = typeof GetCategoriesMeActingAsEnum[keyof typeof GetCategoriesMeActingAsEnum];
