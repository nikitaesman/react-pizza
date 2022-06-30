import React, {FC, useEffect, useState} from 'react';
import ContentLoader from 'react-content-loader';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import cs from './Pagination.module.scss'

interface PaginationProps {
    pageNum: number;
    limit: number;
    setPage(state: number): void;
}

const Pagination: FC<PaginationProps> = ({pageNum, limit, setPage}) => {
    const {totalCount,loading} = useTypedSelector(state => state.products)
    const [pagesCount, setPagesCount] = useState<number>(0)
    const [pagesArray, setPagesArray] = useState<number[]>([])

    useEffect(() => {
        let pagesCount = Math.ceil(totalCount / limit)
        setPagesCount(pagesCount)
        let newPagesArray = []
        for (let i = 1; i <= pagesCount; i++) {
            newPagesArray.push(i)
        }
        setPagesArray(newPagesArray)
    }, [totalCount])

    function prevNextChange(vix: "plus"|"minus"): void {
        if (vix === "minus") {
            if (pageNum !== 1) {
                setPage(pageNum-1)
            }
        }
        if (vix === "plus") {
            if (pageNum+1 <= pagesCount) {
                setPage(pageNum+1)
            }
        }
    }
    if (loading) {
        return (
            <ContentLoader
                speed={2}
                width={225}
                height={35}
                viewBox="0 0 225 35"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="17" cy="17" r="17" />
                <circle cx="62" cy="17" r="17" />
                <circle cx="107" cy="17" r="17" />
                <circle cx="152" cy="17" r="17" />
                <circle cx="197" cy="17" r="17" />
            </ContentLoader>
        )
    }

    return (
        <div className={cs.box}>
            <div className={cs.item} onClick={e => prevNextChange("minus")}>
                ❮
            </div>
            {pagesArray.map((item: number) =>
                <div key={item} className={item === pageNum ? cs.item+" "+cs.activeItem: cs.item} onClick={e => setPage(item)}>
                    {item}
                </div>
            )}
            <div className={cs.item} onClick={e => prevNextChange("plus")}>
                ❯
            </div>
        </div>
    );
};

export default Pagination;