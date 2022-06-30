import React from 'react';
import cs from './Navigation.module.scss'
import logoImage from '../../images/logo.png'
import Basket from "../Basket/Basket";
import {useNavigate} from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate()
    return (
        <header>
            <div className={cs.logo} onClick={e => navigate('/home')}>
                <img src={logoImage}/>
                <div className={cs.logoWrapper}>
                    <h2 className={cs.logoTitle}>
                        react pizza
                    </h2>
                    <p className={cs.slogan}>
                        самая вкусная пицца во вселенной
                    </p>
                </div>
            </div>
            <Basket/>
        </header>
    );
};

export default Navigation;