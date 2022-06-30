import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {basketReducer} from "./basketReducer";


export const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer
})


export type RootState = ReturnType<typeof rootReducer>