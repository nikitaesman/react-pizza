import React, {FC} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import BasketPage from "../pages/BasketPage";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/basket" element={<BasketPage/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
};

export default AppRoutes;