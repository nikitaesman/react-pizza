import React, {FC} from 'react';
import cs from './NotFoundedProduct.module.scss'

interface NotFoundedProductProps {
    searchValue: string;
}

const NotFoundedProduct: FC<NotFoundedProductProps> = ({searchValue}) => {
    return (
        <div className={cs.box}>
            <span className={cs.image}>😕</span>
            <p className={cs.text}>
                Упс, кажется мы не смогли найти пиццу по запросу <span>{searchValue}</span>
            </p>
            <p className={cs.smallText}>
                Попробуйте изменить поисковой запрос )
            </p>
        </div>
    );
};

export default NotFoundedProduct;