import React, {FC} from 'react';
import {IBasketItem} from "../../types";
import BasketItem from "../BasketItem/BasketItem";

interface BasketListProps {
    products: IBasketItem[];
}

const BasketList: FC<BasketListProps> = ({products}) => {
    return (
        <>
            {products.map((product: IBasketItem, index) =>
                <BasketItem key={index} product={product}/>
            )}
        </>
    );
};

export default BasketList;