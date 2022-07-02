import React from 'react';
import cs from './EmptyBasket.module.scss'
import smileImage from '../../images/smile.png'
import personWithImage from '../../images/people-with-basket.png'
import {useNavigate} from 'react-router-dom'
import MyImage from "../UI/MyImage";

const EmptyBasket = () => {
    const navigate = useNavigate()
    return (
        <div className={cs.box}>
            <div className={cs.head}>
                <h2 className={cs.title}>
                    Корзина пустая
                </h2>
                <img src={smileImage}/>
            </div>
            <p className={cs.text}>
                Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <MyImage src={personWithImage} className={cs.image}/>
            <div className={cs.backButton} onClick={e => navigate('/home')}>
                Вернуться назад
            </div>
        </div>
    );
};

export default EmptyBasket;