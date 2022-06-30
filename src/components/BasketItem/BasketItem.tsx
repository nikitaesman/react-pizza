import React, {FC, useEffect} from 'react';
import cs from './BasketItem.module.scss'
import pizzaImage from '../../images/pizza.png'
import {BasketActionTypes, IBasketAction, IBasketItem} from "../../types";
import CircleButton from "../UI/CircleButton/CircleButton";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface BasketItemProps {
    product: IBasketItem;
}

const BasketItem: FC<BasketItemProps> = ({product}) => {
    const dispatch = useDispatch()
    const {products} = useTypedSelector(state => state.basket)

    function decrementItemHandler() {
        if (product.count > 1) {
            const decrementAction: IBasketAction = {
                type: BasketActionTypes.BASKET_DECREMENT,
                payload: product
            }
            return dispatch(decrementAction)
        }
    }

    function incrementItemHandler() {
        const incrementAction: IBasketAction = {
            type: BasketActionTypes.BASKET_ADD,
            payload: product
        }
        return dispatch(incrementAction)
    }

    function deleteItemHandler() {
        const deleteAction: IBasketAction = {
            type: BasketActionTypes.BASKET_DELETE,
            payload: product
        }
        return dispatch(deleteAction)
    }

    return (
        <div className={cs.box}>
            <div className={cs.info}>
                <img className={cs.image} src={pizzaImage}/>
                <div className={cs.infoTexts}>
                    <h3 className={cs.title}>
                        {product.pizza.title}
                    </h3>
                    <p className={cs.settings}>
                        {product.settings.thick === 0 ? "Тонкое" : "Традиционное"} тесто, {product.settings.size} см.
                    </p>
                </div>
            </div>
            <div className={cs.clarifying}>
                <div className={cs.counter}>
                    <CircleButton color={"orange"} type={"decrement"} onClick={decrementItemHandler}/>
                    <p className={cs.count}>
                        {product.count}
                    </p>
                    <CircleButton color={"orange"} type={"increment"} onClick={incrementItemHandler}/>
                </div>
                <p className={cs.price}>
                    {product.price} ₽
                </p>
                <CircleButton color={"grey"} type={"delete"} onClick={deleteItemHandler}/>
            </div>
        </div>
    );
};

export default BasketItem;