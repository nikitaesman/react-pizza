import React, {FC, useEffect, useState} from 'react';
import Product from "../components/ProductItem/ProductItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import { IPizza } from '../types';
import cs from '../styles/MainPage.module.scss'
import Pagination from "../components/Pagination/Pagination";
import ProductListLoader from '../components/ProductListLoader/ProductListLoader';
import Categories from '../components/Categories/Categories';
import Sorting from "../components/Sorting/Sorting";

const HomePage: FC = () => {
    const {fetchUsers} = useActions()
    const {products,loading,error} = useTypedSelector(state => state.products)
    const [category, setCategory] = useState<number | string>("")
    const [sortBy, setSortBy] = useState<string>("rating")
    const [page, setPage] = useState<number>(1)
    const limit = 4

    useEffect(() => {
        fetchUsers(page, limit, category, sortBy)
    }, [page, category, sortBy])


    return (
        <section>
            <div className={cs.outputSettings}>
                <Categories category={category} setCategory={setCategory} setPage={setPage}/>
                <Sorting sortBy={sortBy} setSortBy={setSortBy}/>
            </div>
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