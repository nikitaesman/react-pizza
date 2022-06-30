import React from 'react';
import cs from './Basket.module.scss'
import basketImage from '../../images/basket.png'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from 'react-router-dom'

const Basket = () => {
    const {totalPrice, totalCount} = useTypedSelector(state => state.basket)
    const navigate = useNavigate()
    return (
        <div className={cs.basket} onClick={e => navigate('/basket')}>
            <div className={cs.price}>
                {totalPrice} ₽
            </div>
            <div className={cs.dash}/>
            <div className={cs.count}>
                <img src={basketImage} className={cs.img}/>
                {totalCount}
            </div>
        </div>
    );
};

export default Basket;