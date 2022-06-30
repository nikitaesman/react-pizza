import {Dispatch} from "redux";
import {IProductsAction, ProductsActionTypes} from "../../types";
import axios from "axios";


export const fetchUsers = (page: number, limit: number, groupBy: number | string) => {
    return async (dispatch: Dispatch<IProductsAction>) => {
        try {
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS})
            const response = await axios.get('https://62b83043f4cb8d63df59e6d6.mockapi.io/api/v1/pizza',
            {params: {
                        limit: limit,
                        page: page,
                        filter: `${"_category"+groupBy}`
                    }
                }
            )

            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
                payload: {
                    products: response.data.products,
                    totalCount: response.data.XTotalCount
                }
            })
        } catch (e) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: "Произошла ошибка при загрузке продуктов"
            })
        }
    }
}