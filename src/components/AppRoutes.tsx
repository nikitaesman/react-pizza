import React, {FC, Suspense} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Loader from "./Loader/Loader";

const BasketPage = React.lazy(() => import('../pages/BasketPage'));
const PizzaPage = React.lazy(() => import('../pages/PizzaPage'));

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/basket" element={
                <Suspense fallback={<Loader fullPage={true}/>}>
                    <BasketPage/>
                </Suspense>
            }/>
            <Route path="/pizza/:id" element={
                <Suspense fallback={<Loader fullPage={true}/>}>
                    <PizzaPage/>
                </Suspense>
            }/>
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
};

export default AppRoutes;