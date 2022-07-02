import {Dispatch} from "redux";
import {IProductsAction, ProductsActionTypes} from "../../types";
import axios from "axios";


export const fetchUsers = (page: number, limit: number, category: number | string, sortBy: string, search: string) => {
    return async (dispatch: Dispatch<IProductsAction>) => {
        try {
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS})
            let response
            if (search === "") {
                response = await axios.get('https://62b83043f4cb8d63df59e6d6.mockapi.io/api/v1/pizza',
                    {params: {
                            limit: limit,
                            page: page,
                            category: category,
                            sortBy: sortBy,

                        }
                    }
                )
            }else {
                response = await axios.get('https://62b83043f4cb8d63df59e6d6.mockapi.io/api/v1/pizza',
                    {params: {
                            limit: limit,
                            page: page,
                            search: search,
                        }
                    }
                )
            }



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