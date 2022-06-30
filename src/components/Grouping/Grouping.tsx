import React, {FC} from 'react';
import cs from './Grouping.module.scss'

interface GroupingProps {
    groupBy: number | string
    setGroupBy(state: number | string): void;
}

const Grouping: FC<GroupingProps> = ({groupBy,setGroupBy}) => {
    return (
        <div className={cs.box}>
            <div className={groupBy === "" ? cs.item+" "+cs.activeItem: cs.item} onClick={e => setGroupBy("")}>
                Все
            </div>
            <div className={groupBy === 1 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => setGroupBy(1)}>
                Мясные
            </div>
            <div className={groupBy === 2 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => setGroupBy(2)}>
                Вегетарианская
            </div>
            <div className={groupBy === 3 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => setGroupBy(3)}>
                Гриль
            </div>
            <div className={groupBy === 4 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => setGroupBy(4)}>
                Острые
            </div>
            <div className={groupBy === 5 ? cs.item+" "+cs.activeItem: cs.item} onClick={e => setGroupBy(5)}>
                Закрытые
            </div>
        </div>
    );
};

export default Grouping;