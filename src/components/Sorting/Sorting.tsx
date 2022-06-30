import React, {FC} from 'react';
import cs from "./Sorting.module.scss"

interface SortingProps {
    sortBy: string;
    setSortBy(state: string): void;
}

const Sorting: FC<SortingProps> = ({sortBy, setSortBy}) => {
    const translateSortByAlphabet: object = {
        "rating": "популярности",
        "price": "цене",
        "title": "алфавиту"
    }

    function translateSortBy(name: string):string {
        // @ts-ignore
        return translateSortByAlphabet[name]
    }

    function changeSortByHandler(sortStr: string):void {
        setSortBy(sortStr)
    }

    return (
        <div className={cs.box}>
            <img/>
            <p>
                Сортировка по:
                <span>
                    {translateSortBy(sortBy)}
                </span>
            </p>
            <div className={cs.selectSort}>
                <div className={cs.optionSort} onClick={e => changeSortByHandler("rating")}>
                    популярности
                </div>
                <div className={cs.optionSort} onClick={e => changeSortByHandler("price")}>
                    по цене
                </div>
                <div className={cs.optionSort} onClick={e => changeSortByHandler("title")}>
                    по алфавиту
                </div>
            </div>
        </div>
    );
};

export default Sorting;