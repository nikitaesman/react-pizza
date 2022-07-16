import React, {FC, useEffect, useState} from 'react';
import Product from "../components/ProductItem/ProductItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import { IPizza } from '../types';
import cs from '../styles/HomePage.module.scss'
import Pagination from "../components/Pagination/Pagination";
import ProductListLoader from '../components/ProductListLoader/ProductListLoader';
import Categories from '../components/Categories/Categories';
import Sorting from "../components/Sorting/Sorting";
import Search from "../components/Search/Search";
import NotFoundedProduct from "../components/NotFoundedProduct/NotFoundedProduct";
import DiscountForm from '../components/DiscountForm/DiscountForm';

const HomePage: FC = () => {
    const {fetchUsers} = useActions()
    const {products,loading} = useTypedSelector(state => state.products)
    const [search, setSearch] = useState<string>("")
    const [category, setCategory] = useState<number | string>("")
    const [sortBy, setSortBy] = useState<string>("rating")
    const [page, setPage] = useState<number>(1)
    const limit = 4

    useEffect(() => {
        fetchUsers(page, limit, category, sortBy, search)
    }, [page, category, sortBy,search])


    return (
        <section className={cs.section}>
            <DiscountForm/>
            <Search search={search} setSearch={setSearch}/>
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
                    products.length === 0
                        ? <NotFoundedProduct searchValue={search}/>
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