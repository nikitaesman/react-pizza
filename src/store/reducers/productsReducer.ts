import {IProductsAction, ProductsActionTypes, productsState} from "../../types";


const defaultState: productsState = {
    products: [],
    loading: false,
    error: null,
    totalCount: 0
}

export const productsReducer = (state = defaultState, action: IProductsAction): productsState => {
    switch (action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS:
            return {products: [], loading: true, error: null, totalCount: 0}

        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {products: [...action.payload.products], loading: false, error: null, totalCount: action.payload.totalCount}

        case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
            return {products: [], loading: false, error: action.payload, totalCount: 0}

        default:
            return state
    }
}