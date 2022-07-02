import React, {FC, useEffect, useState} from 'react';
import cs from './ProductItem.module.scss'
import {BasketActionTypes, IBasketItem, IOption, IPizza, ISettings} from "../../types";
import HorizontalSelect from "../UI/HorizontalSelect/HorizontalSelect";
import {useDispatch} from "react-redux";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ProductLoader from "../ProductLoader";
import {useNavigate} from "react-router-dom";

interface ProductProps {
    pizza: IPizza
}

const ProductItem: FC<ProductProps> = ({pizza}) => {
    const dispatch = useDispatch()
    const {products} = useTypedSelector(state => state.basket)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [settings, setSettings] = useState<ISettings>({
        thick: 0, size: 25
    })
    const [actualPrice, setActualPrice] = useState<number>(pizza.price)
    const navigate = useNavigate()

    const thickOptionsArray: IOption[] = [
        {title: "тонкое", value: 0},
        {title: "традиционное", value: 1},
    ]
    const sizeOptionsArray: IOption[] = [
        {title: "25 см.", value: 25},
        {title: "30 см.", value: 30},
        {title: "40 см.", value: 40}
    ]

    useEffect(() => {
        if (settings.size === 25) {
            setActualPrice(pizza.price)
        }
        if (settings.size === 30) {
            setActualPrice(Math.round(pizza.price*1.3))
        }
        if (settings.size === 40) {
            setActualPrice(Math.round(pizza.price*1.6))
        }
    }, [settings])

    function addProductToBasket():void {
        const newBasketItem: IBasketItem = {
            pizza: pizza,
            settings: settings,
            price: actualPrice,
            count: 1
        }
        dispatch({type: BasketActionTypes.BASKET_ADD, payload: newBasketItem})
    }

    function addedToBasketCounter(): number {
        let countAdded:number = 0
        products.forEach((item:IBasketItem) => {
            if (item.pizza.id === pizza.id) {
                countAdded += item.count
            }
        })
        return countAdded
    }

    return (
        <>
        {isLoading ? <ProductLoader/>: ""}
        <div className={isLoading ? cs.loading : cs.product}>
            <img alt={pizza.title} src={`${pizza.imageUrl}`} onLoad={e => setIsLoading(false)}   className={cs.image} onClick={e => navigate(`/pizza/${pizza.id}`)}/>
            <h3 className={cs.title}>
                {pizza.title}
            </h3>
            <div className={cs.customize}>
                <HorizontalSelect options={thickOptionsArray} onChange={e => setSettings({...settings, thick: e})}/>
                <HorizontalSelect options={sizeOptionsArray} onChange={e => setSettings({...settings, size: e})}/>
            </div>
            <div className={cs.wrapper}>
                <h4 className={cs.price}>
                    от {actualPrice} ₽
                </h4>
                <div className={cs.addBasket} onClick={addProductToBasket}>
                    <div className={cs.figureBox}>
                        <div className={cs.figureLine}/>
                        <div className={cs.figureLine}/>
                    </div>
                    <p>Добавить</p>
                    {addedToBasketCounter() !== 0
                        ? <div className={cs.countAdded}>
                            {addedToBasketCounter()}
                          </div>
                        : ""
                    }

                </div>
            </div>
        </div>
        </>
    );
};

export default ProductItem;