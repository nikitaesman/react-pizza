import React, {FC, useState} from 'react';
import cs from '../styles/BasketPage.module.scss'
import basketImage from '../images/basket-black.png'
import deleteImage from '../images/delete.png'
import {useNavigate} from 'react-router-dom'
import {useTypedSelector} from "../hooks/useTypedSelector";
import EmptyBasket from "../components/EmptyBasket/EmptyBasket";
import BasketList from "../components/BasketList/BasketList";
import {BasketActionTypes, IBasketAction} from "../types";
import {useDispatch} from "react-redux";
import Payment from "../components/Payment/Payment";
import Button from "../components/UI/Button/Button";

const BasketPage: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {totalCount, products, totalCost} = useTypedSelector(state => state.basket)
    const [modalOpen, setModalOpen] = useState<boolean>(true)


    function clearBasketHandler() {
        const clearAction: IBasketAction = {
            type: BasketActionTypes.BASKET_CLEAR
        }
        return dispatch(clearAction)
    }

    return (
        totalCount === 0?
            <EmptyBasket/>
            :
            <section className={cs.Basket}>
                <Payment modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                <div className={cs.header}>
                    <div className={cs.titleBox}>
                        <img src={basketImage}/>
                        <h2>
                            Корзина
                        </h2>
                    </div>
                    <div className={cs.clearButton} onClick={clearBasketHandler}>
                        <img src={deleteImage}/>
                        <p>
                            Очистить корзину
                        </p>
                    </div>
                </div>
                <div className={cs.itemsList}>
                    <BasketList products={products}/>
                </div>
                <div className={cs.result}>
                    <div className={cs.count}>
                        Всего пицц: <span>{totalCount} шт</span>
                    </div>
                    <div className={cs.sum}>
                        Сумма заказа: <span>{totalCost} ₽</span>
                    </div>
                </div>
                <div className={cs.actions}>
                    <div className={cs.backButton} onClick={e => navigate('/home')}>
                        <div className={cs.arrow}/>
                        Вернуться назад
                    </div>
                    <Button className={cs.paymentBtn} onClick={e => setModalOpen(true)}>
                        Оплатить заказ
                    </Button>
                </div>
            </section>

    );
};

export default BasketPage;