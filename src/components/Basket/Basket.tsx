import React from 'react';
import cs from './Basket.module.scss'
import basketImage from '../../images/basket.png'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useLocation, useNavigate} from 'react-router-dom'

const Basket = () => {
    const {totalCost, totalCount} = useTypedSelector(state => state.basket)
    const navigate = useNavigate()
    let location = useLocation();

    if (location.pathname === "/basket") {
        return <></>
    }

    return (
        <div className={cs.basket} onClick={e => navigate('/basket')}>
            <div className={cs.price}>
                {totalCost} ₽
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