import React, {FC, useEffect, useRef, useState} from 'react';
import cs from './MySlider.module.scss'
import MyImage from "../UI/MyImage";

interface SliderProps {
    slides: any[];
    autoScroll?: boolean;
    autoScrollDelay?: number;
    speed?: number;
    controls?: boolean;
    width?: number;
    height?: number
}

const MySlider: FC<SliderProps> = ({
       slides,
       autoScroll = false,
       controls = true,
       autoScrollDelay= 3,
       speed = 0.4,
       width= 500,
       height= 500
}) => {
    const [cord, setCord] = useState<number>(0)
    const [handControl, setHandControl] = useState<boolean>(false)
    const sliderWidth: number = 500
    const sliderLayer = useRef<HTMLDivElement | null>(null)
    const [swipeDirection, setSwipeDirection] = useState<"next" | "prev">("next")
    const [oldSlideIndex, setOldSlideIndex] = useState<number | null>(null)

    // useEffect(() => {
    //     if (autoScroll) {
    //         const scrollInterval = setTimeout(() => {
    //             rightSwipeHandler()
    //         }, autoScrollDelay*1000)
    //         return () => clearInterval(scrollInterval)
    //     }
    // }, [cord])




    function leftSwipeHandler() {
        if (cord >= 0) {
            return setCord(-(slides.length-1)*sliderWidth)
        }
        setCord(cord+sliderWidth)
    }

    function rightSwipeHandler() {
        if (cord <= -(slides.length-1)*sliderWidth) {
            return setCord(0)
        }
        setCord(cord-sliderWidth)
    }

    function clickPointHandler(index: number) {
        setCord(-index*sliderWidth)
    }

    function draggableHandler(e: React.MouseEvent<HTMLDivElement>): void {
        e.preventDefault()
        if (e.buttons === 1) {
            if (e.movementX > 0) {
                setSwipeDirection("prev")
            }else {
                setSwipeDirection("next")
            }
            if (oldSlideIndex === null) {
                let slideIndex = Math.round(Math.abs(cord) / 500)
                setOldSlideIndex(slideIndex)
            }

            setHandControl(true)
            setCord(cord+e.movementX)
        }
    }

    function correctCordHandler() {
        if(handControl && oldSlideIndex !== null) {
            if (swipeDirection === "next") {
                if (oldSlideIndex >= slides.length - 1) {
                    clickPointHandler(0)
                }else {
                    clickPointHandler(oldSlideIndex + 1)
                }
            } else {
                if (oldSlideIndex <= 0) {
                    clickPointHandler(slides.length - 1)
                }else {
                    clickPointHandler(oldSlideIndex - 1)
                }

            }
            setHandControl(prev => false)
            setOldSlideIndex(prev => null)
        }
    }

    return (
        <div style={{width: width+100, height: height+40}} className={cs.slider}>
            <div onMouseOut={correctCordHandler} onMouseUp={correctCordHandler} onMouseMove={e => draggableHandler(e)} style={{width: width, height: height}} className={cs.sliderBox}>
                <div ref={sliderLayer}
                     style={handControl ? {left: cord} : {left: cord, transition: `all ${speed}s ease`}}
                     className={cs.sliderContent}
                >
                    {slides.map((slide: any, index) =>
                        <div style={{width: width}} key={index} className={cs.slide}>
                            <MyImage src={slide}/>
                        </div>
                    )}
                </div>
            </div>
            {controls&&
                <>
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
                            <div key={index+100} className={index === Math.round(Math.abs(cord)/500) ? cs.pointItem+" "+cs.activePointItem : cs.pointItem} onClick={e => clickPointHandler(index)}>
                                {index+1}
                            </div>
                        )}
                    </div>
                </>
            }

        </div>
    );
};

export default MySlider;