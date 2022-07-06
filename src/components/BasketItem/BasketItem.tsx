import React, {FC, useEffect, useState} from 'react';
import cs from './BasketItem.module.scss'
import {BasketActionTypes, IBasketAction, IBasketItem, IPizza} from "../../types";
import CircleButton from "../UI/CircleButton/CircleButton";
import {useDispatch} from "react-redux";
import MyImage from "../UI/MyImage";
import {useHttp} from "../../hooks/useHttp";
import BasketItemLoader from "./BasketItemLoader";
import { Link } from 'react-router-dom';

interface BasketItemProps {
    product: IBasketItem;
}

const BasketItem: FC<BasketItemProps> = ({product}) => {
    const dispatch = useDispatch()
    const {request,loading,error} = useHttp()
    const [pizza, setPizza] = useState<IPizza>()

    useEffect(() => {
        fetchProduct()
    }, [])

    async function fetchProduct() {
        try {
            const data: IPizza = await request(`https://62b83043f4cb8d63df59e6d6.mockapi.io/api/v1/pizza/${product.productId}`, "GET", null, {})
            setPizza(data)
        } catch (e) {}
    }

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

    if (loading) {
        return (
            <BasketItemLoader/>
        )
    }

    return (
        <div className={cs.box}>
            <Link to={`../pizza/${product.productId}`} className={cs.info}>
                <MyImage className={cs.image} src={pizza? pizza?.imageUrl:""}/>
                <div className={cs.infoTexts}>
                    <h3 className={cs.title}>
                        {pizza?.title}
                    </h3>
                    <p className={cs.settings}>
                        {product.settings.thick === 0 ? "Тонкое" : "Традиционное"} тесто, {product.settings.size} см.
                    </p>
                </div>
            </Link>
            <div className={cs.clarifying}>
                <div className={cs.counter}>
                    <CircleButton color={"orange"} type={"decrement"} onClick={decrementItemHandler}/>
                    <p className={cs.count}>
                        {product.count}
                    </p>
                    <CircleButton color={"orange"} type={"increment"} onClick={incrementItemHandler}/>
                </div>
                <p className={cs.price}>
                    {product.cost} ₽
                </p>
                <CircleButton color={"grey"} type={"delete"} onClick={deleteItemHandler}/>
            </div>
        </div>
    );
};

export default BasketItem;