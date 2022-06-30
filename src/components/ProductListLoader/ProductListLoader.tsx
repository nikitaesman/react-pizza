import React from 'react';
import ProductLoader from "../ProductLoader";
import cs from './ProductListLoader.module.scss'

const ProductListLoader = () => {
    return (
        <div className={cs.list}>
            <ProductLoader/>
            <ProductLoader/>
            <ProductLoader/>
            <ProductLoader/>
        </div>
    );
};

export default ProductListLoader;