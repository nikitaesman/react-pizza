import {BasketActionTypes, basketState, IBasketAction, IBasketItem, isBasketState} from "../../types";

const defaultState: basketState  = {
    products: [],
    totalCount: 0,
    totalPrice: 0
}

export const basketReducer = (state = defaultState, action: IBasketAction): basketState => {
    switch (action.type) {
        //добавление нового элемента в корзину или обновление уже имеющегося токого же
        case BasketActionTypes.BASKET_ADD:
            const isNewBasketItem = state.products.find(
                product => product.pizza.id === action.payload.pizza.id
                    && product.settings.size === action.payload.settings.size
                    && product.settings.thick === action.payload.settings.thick
            )
            if (isNewBasketItem !== undefined) {
                let incrementedBasketProducts: IBasketItem[] = state.products.map((product: IBasketItem) => {
                    if (product.pizza.id === action.payload.pizza.id
                        && product.settings.size === action.payload.settings.size
                        && product.settings.thick === action.payload.settings.thick
                    ) {
                        let updateProduct: IBasketItem = {
                            pizza: action.payload.pizza,
                            count: product.count + 1,
                            price: product.price + action.payload.pizza.price,
                            settings: product.settings
                        }
                        return updateProduct
                    }
                    return product
                })
                return {products: incrementedBasketProducts, totalCount: state.totalCount+1,totalPrice: state.totalPrice+action.payload.pizza.price}
            }
            return {products: [...state.products, action.payload], totalCount: state.totalCount+1,totalPrice: state.totalPrice+action.payload.price}

        //удаление элемента из корзины
        case BasketActionTypes.BASKET_DELETE:
            let insertedBasketProducts: IBasketItem[]  = state.products.filter(
                    (product: IBasketItem) =>
                        product.pizza.id !== action.payload.pizza.id
                        || product.settings.size !== action.payload.settings.size
                        || product.settings.thick !== action.payload.settings.thick
                )
            return {products: insertedBasketProducts, totalCount: state.totalCount-action.payload.count,totalPrice: state.totalPrice-action.payload.price}

        case BasketActionTypes.BASKET_CLEAR:
            return defaultState

        case BasketActionTypes.BASKET_DECREMENT:
            let decrementedBasketProducts: IBasketItem[] = state.products.map((product: IBasketItem) => {
                if (product.pizza.id === action.payload.pizza.id
                    && product.settings.size === action.payload.settings.size
                    && product.settings.thick === action.payload.settings.thick
                ) {
                    let updateProduct: IBasketItem = {
                        pizza: action.payload.pizza,
                        count: product.count -1,
                        price: product.price - action.payload.pizza.price,
                        settings: product.settings
                    }
                    return updateProduct
                }
                return product
            })
            return {products: decrementedBasketProducts, totalCount: state.totalCount-1,totalPrice: state.totalPrice-action.payload.pizza.price}

        case BasketActionTypes.BASKET_STORAGE_GET:
            const basketData = JSON.parse(localStorage.getItem('basketData') || '{}')
            if (isBasketState(basketData)) {
                return basketData
            }
            return state

        case BasketActionTypes.BASKET_STORAGE_SET:
            localStorage.setItem("basketData", JSON.stringify(state))
            return state
        default:
            return state
    }
}