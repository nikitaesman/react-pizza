import React, {FC} from 'react';
import cs from './Payment.module.scss'
import visaImage from '../../images/payment/visa.png'
import mastercardImage from '../../images/payment/mastercard.png'
import mirImage from '../../images/payment/mir.png'
import iconCardImage from '../../images/payment/icons/card.png'
import iconCalendarImage from '../../images/payment/icons/calendar.png'
import iconLockImage from '../../images/payment/icons/lock.png'
import Modal from "../UI/Modal/Modal";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from "../UI/Button/Button";
import {BasketActionTypes, IBasketAction} from "../../types";
import {useDispatch} from "react-redux";

interface PaymentProps {
    modalOpen: boolean;
    setModalOpen(state: boolean): void;
}

const Payment: FC<PaymentProps> = ({modalOpen, setModalOpen}) => {
    const dispatch = useDispatch()
    const {totalCost, totalCount} = useTypedSelector(state => state.basket)

    function clearBasketHandler() {
        const clearAction: IBasketAction = {
            type: BasketActionTypes.BASKET_CLEAR
        }
        return dispatch(clearAction)
    }

    return (
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className={cs.body}>
                <section className={cs.description}>
                    <div className={cs.container}>
                        <div className={cs.description__content}>
                            <div className={cs.description__info}>
                                <p className={cs.description__course}>
                                    Заказ номер: {Math.random().toString().substring(2, 8)}
                                </p>
                                <p className={cs.description__email}>
                                    Количество позиций в заказе: {totalCount}
                                </p>
                            </div>
                            <div className={cs.description__money}>
                                <div className={cs.description__price}>
                                    <p className={cs.sumInput}>
                                        {totalCost}
                                    </p>
                                    <span className={cs.grey__text +" "+cs.rubSymbol}>₽</span>
                                </div>
                                <div className={cs.description__additionally}>
                                    <div className={cs.additionally__title}>
                                        Описание
                                    </div>
                                    <div className={cs.additionally__text}>
                                        Дополнитеьная информация
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={cs.payment}>
                    <div className={cs.container}>
                        <h2 className={cs.payment__title}>
                            Оплата банковской картой
                        </h2>
                        <form className={cs.payment__form}>
                            <div className={cs.payment__systems}>
                                <h3 className={cs.systems__title}>
                                    Поддерживаемые платёжные системы
                                </h3>
                                <div className={cs.systems__images}>
                                    <img src={visaImage} className={cs.systems__img} alt="visa"/>
                                    <img src={mastercardImage} className={cs.systems__img} alt="mastercard"/>
                                    <img src={mirImage} className={cs.systems__img} alt="mir"/>
                                </div>
                            </div>
                            <div className={cs.payment__credentials}>
                                <div className={cs.input__box}>
                                    <input className={cs.payment__input} placeholder="Card number" maxLength={12} required/>
                                        <label className={cs.payment__input__label} htmlFor="card__number">
                                            <img src={iconCardImage}/>
                                        </label>
                                </div>
                                <div className={cs.credentials__wrap}>
                                    <div className={cs.input__box}>
                                        <input className={cs.payment__input + ' ' + cs.credentials__wrap_input1} placeholder="MM / YY" maxLength={4} required/>
                                        <label className={cs.payment__input__label} htmlFor="card__date">
                                            <img src={iconCalendarImage}/>
                                        </label>
                                    </div>
                                    <div className={cs.input__box}>
                                        <input className={cs.payment__input + ' ' + cs.credentials__wrap_input2} id="card__cvc" placeholder="CVC" maxLength={3} required/>
                                        <label className={cs.payment__input__label} htmlFor="card__cvc">
                                            <img src={iconLockImage}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <p className={cs.payment__text}>
                                Data is protected under the PCI DSS standard. We do not store your data and do not share it with the
                                merchant.
                            </p>
                            <Button onClick={clearBasketHandler}>
                                Оплатить
                            </Button>
                        </form>
                    </div>
                </section>
            </div>
        </Modal>
    );
};

export default Payment;
