import React, {FC, useEffect} from 'react';
import './styles/index.scss'
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from "./components/AppRoutes";
import {useDispatch} from "react-redux";
import {BasketActionTypes} from "./types";
import {useTypedSelector} from "./hooks/useTypedSelector";


const App: FC = () => {
    const dispatch = useDispatch()
    const basketState = useTypedSelector(state => state.basket)

    useEffect(() => {
        dispatch({type: BasketActionTypes.BASKET_STORAGE_GET})
    }, [])

    useEffect(() => {
        dispatch({type: BasketActionTypes.BASKET_STORAGE_SET})
    }, [basketState])

  return (
    <BrowserRouter>
        <Navigation/>
        <AppRoutes/>
    </BrowserRouter>
  );
};

export default App;
