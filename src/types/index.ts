export interface IPizza {
    id: number;
    title: string;
    types: number[];
    imageUrl: string;
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export interface ISettings {
    thick: number
    size: number
}

export interface IOption {
    value: any,
    title: string
}

export interface productsState {
    products: IPizza[];
    loading: boolean;
    error: null | string;
    totalCount: number;
}

export enum ProductsActionTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",

}

interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS
}

interface FetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: {
        products: IPizza[];
        totalCount: number;
    }
}

interface FetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR
    payload: string
}

export type IProductsAction = FetchProductsAction | FetchProductsErrorAction | FetchProductsSuccessAction

///--------------------------------------------------------------------------------------------------------------------------------

export interface IBasketItem {
    productId: number | string;
    price: number;
    cost: number;
    settings: ISettings;
    count: number;
}

export interface basketState {
    products: IBasketItem[];
    totalCount: number;
    totalCost: number;
}

export function isBasketState(obj: any): obj is basketState {
    return (obj as basketState).totalCount !== undefined
        && (obj as basketState).totalCost !== undefined
        && (obj as basketState).products !== undefined
}

export enum BasketActionTypes {
    BASKET_ADD = "BASKET_ADD",
    BASKET_DELETE = "BASKET_DELETE",
    BASKET_CLEAR = "BASKET_CLEAR",
    BASKET_DECREMENT = "BASKET_DECREMENT",
    BASKET_STORAGE_GET = "BASKET_STORAGE_GET",
    BASKET_STORAGE_SET = "BASKET_STORAGE_SET",
}


interface BasketAddAction {
    type: BasketActionTypes.BASKET_ADD
    payload: IBasketItem
}

interface BasketDeleteAction {
    type: BasketActionTypes.BASKET_DELETE
    payload: IBasketItem
}
interface BasketClearAction {
    type: BasketActionTypes.BASKET_CLEAR
}

interface BasketDecrementAction {
    type: BasketActionTypes.BASKET_DECREMENT
    payload: IBasketItem
}

interface BasketStorageGetAction {
    type: BasketActionTypes.BASKET_STORAGE_GET
}

interface BasketStorageSetAction {
    type: BasketActionTypes.BASKET_STORAGE_SET
}


export type IBasketAction = BasketAddAction
                            | BasketDeleteAction
                            | BasketClearAction
                            | BasketDecrementAction
                            | BasketStorageGetAction
                            | BasketStorageSetAction