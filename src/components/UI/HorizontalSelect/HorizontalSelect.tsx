import React, {FC, useEffect, useState} from 'react';
import cs from "./HorizontalSelect.module.scss";
import {IOption} from "../../../types";

interface HorizontalSelectProps {
    options: IOption[];
    onChange(e: any): void
}

const HorizontalSelect: FC<HorizontalSelectProps> = ({options,onChange}) => {
    const [position, setPosition] = useState<number>(0)
    let positionArray = [cs.visual_left,  cs.visual_right]
    if (options.length === 3) {
        positionArray = [cs.visual_left, cs.visual_center, cs.visual_right]
    }

    function changePosition(value: any, newPosition: number) {
        setPosition(newPosition)
        onChange(value)
    }

    return (
        <div className={cs.select}>
            {options.map((option: IOption, index) =>
                <div key={option.value} onClick={e => changePosition(option.value, index)} className={position === index? cs.option+" "+cs.option_active : cs.option}>
                    {option.title}
                </div>
            )}
            <div className={options.length === 3? cs.visual+" "+cs.visual_small+" "+positionArray[position] : cs.visual+" "+positionArray[position]}/>
        </div>
    );
};

export default HorizontalSelect;