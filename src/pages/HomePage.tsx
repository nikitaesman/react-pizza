import React, {FC, useEffect, useState} from 'react';
import Product from "../components/ProductItem/ProductItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import { IPizza } from '../types';
import cs from '../styles/MainPage.module.scss'
import Pagination from "../components/Pagination/Pagination";
import ProductListLoader from '../components/ProductListLoader/ProductListLoader';
import Grouping from '../components/Grouping/Grouping';

const HomePage: FC = () => {
    const {fetchUsers} = useActions()
    const {products,loading,error} = useTypedSelector(state => state.products)
    const [groupBy, setGroupBy] = useState<number | string>("")
    const [page, setPage] = useState<number>(1)
    const limit = 4

    useEffect(() => {
        fetchUsers(page, limit, groupBy)
    }, [page, groupBy])


    return (
        <section>
            <Grouping groupBy={groupBy} setGroupBy={setGroupBy}/>
            <h2 className={cs.title}>
                Все пиццы
            </h2>
            <div className={cs.productsList}>
                {loading
                    ?
                    <ProductListLoader/>
                    :
                    products.map((product: IPizza) =>
                        <Product key={product.id} pizza={product}/>
                    )
                    }
            </div>
            <Pagination setPage={setPage} pageNum={page} limit={limit}/>
        </section>
    );
};

export default HomePage;