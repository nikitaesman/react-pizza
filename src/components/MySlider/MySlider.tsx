import React, {FC, useState} from 'react';
import cs from './MySlider.module.scss'
import MyImage from "../UI/MyImage";

interface SliderProps {
    slides: any[];
}

const MySlider: FC<SliderProps> = ({slides}) => {
    const [cord, setCord] = useState<number>(0)


    function leftSwipeHandler() {
        if (cord >= 0) {
            return setCord(-(slides.length-1)*480)
        }
        setCord(cord+480)
    }

    function rightSwipeHandler() {
        if (cord <= -(slides.length-1)*480) {
            return setCord(0)
        }
        setCord(cord-480)
    }

    function swipeLinkHandler(index: number) {
        setCord(-index*480)
    }

    return (
        <div className={cs.slider}>
            <div className={cs.sliderBox}>
                <div style={{left: cord}} className={cs.sliderContent}>
                    {slides.map((slide: any, index) =>
                        <div key={index} style={{left: cord}} className={cs.slide}>
                            <MyImage src={slide}/>
                        </div>
                    )}
                </div>
            </div>
            <div className={cs.controls}>
                <div className={cs.control} onClick={leftSwipeHandler}>
                    ❰
                </div>
                <div className={cs.control} onClick={rightSwipeHandler}>
                    ❱
                </div>
            </div>
            <div className={cs.points}>
                {slides.map((slide: any, index) =>
                    <div key={index+100} className={cord === -index*480 ? cs.pointItem+" "+cs.activePointItem : cs.pointItem} onClick={e => swipeLinkHandler(index)}>
                        {index+1}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MySlider;