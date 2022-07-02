import React, {FC, useEffect, useState} from 'react';
import cs from '../styles/PizzaPage.module.scss'
import {IPizza} from "../types";
import {useHttp} from "../hooks/useHttp";
import {useParams} from "react-router-dom";
import MySlider from "../components/MySlider/MySlider";

const PizzaPage: FC = () => {
    const [pizza, setPizza] = useState<IPizza | null>(null)
    const {request, loading} = useHttp()
    const params = useParams()

    useEffect(() => {
        fetchPizzaItem()
    }, [])

    async function fetchPizzaItem() {
        try {
            const data: IPizza = await request(`https://62b83043f4cb8d63df59e6d6.mockapi.io/api/v1/pizza/${params.id}`, "GET", null, {})
            setPizza(data)
        } catch (e) {}
    }



    return (
        loading
        ? <h2>Pizza id loading</h2>
        :
        <div className={cs.section}>
            <div className={cs.wrapBox}>
                <MySlider slides={[pizza?.imageUrl,pizza?.imageUrl,pizza?.imageUrl,pizza?.imageUrl,pizza?.imageUrl]}/>
            </div>
            <div className={cs.wrapBox}>
                <h2 className={cs.title}>
                    {pizza?.title}
                </h2>
                <p className={cs.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
                    animi asperiores debitis dignissimos doloribus dolorum eligendi ex,
                    incidunt itaque minima nam necessitatibus nisi numquam officia provident quia temporibus vel voluptas!
                </p>
                <ol className={cs.ingredients}>
                    <h3 className={cs.head}>
                        Ингредиенты
                    </h3>
                    <span className={cs.group+" "+cs.orangeSpan}>Тесто :</span>
                    <li><p>500 г муки</p></li>
                    <li><p>30 г свежих дрожжей</p></li>
                    <li><p>3-4 столовые ложки оливкового масла</p></li>
                    <li><p>1/3 и 1 стакана теплой водой (240 мл + 60 мл)</p></li>
                    <li><p>500 г муки</p></li>
                    <span className={cs.group+" "+cs.orangeSpan}>Томатный соус :</span>
                    <li><p>3 помидора, очищенных и нарезанных</p></li>
                    <li><p>5 зубчиков чеснока, измельчить</p></li>
                    <li><p>Пучок свежего базилика</p></li>
                    <li><p>1/2 чайной ложки сахара</p></li>
                    <li><p>1 чайная ложка оливкового масла</p></li>
                    <span className={cs.group+" "+cs.orangeSpan}>Добавки :</span>
                    <li><p>300 г тертого твердого сыра любого</p></li>
                    <li><p>грибы, оливки, сыр фета и базилик (факультативно )</p></li>
                </ol>
            </div>
        </div>
    );
};

export default PizzaPage;