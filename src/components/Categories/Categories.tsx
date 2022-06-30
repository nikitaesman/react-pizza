import React, {FC} from 'react';
import cs from './Categories.module.scss'

interface GroupingProps {
    category: number | string
    setCategory(state: number | string): void;
    setPage(state: number): void;
}

const Categories: FC<GroupingProps> = ({category,setCategory, setPage}) => {

    function changeCategoryHandler(category: number | string):void {
        setCategory(category)
        setPage(1)
    }

    return (
        <div className={cs.box}>
            <div className={category === "" ? cs.item+" "+cs.activeItem: cs.item} onClick={e => changeCategoryHandler("")}>
                Все
            </div>
            <div className={category === 1 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => changeCategoryHandler(1)}>
                Мясные
            </div>
            <div className={category === 2 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => changeCategoryHandler(2)}>
                Вегетарианская
            </div>
            <div className={category === 3 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => changeCategoryHandler(3)}>
                Гриль
            </div>
            <div className={category === 4 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => changeCategoryHandler(4)}>
                Острые
            </div>
            <div className={category === 5 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => changeCategoryHandler(5)}>
                Смешанные
            </div>
        </div>
    );
};

export default Categories;