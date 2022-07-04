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

    useEffect(() => {
        //console.log("cord----------------------------------------------",cord)
        if (autoScroll) {
            const scrollInterval = setTimeout(() => {
                rightSwipeHandler()
            }, autoScrollDelay*1000)
            return () => clearInterval(scrollInterval)
        }
    }, [cord])




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

            setHandControl(true)
            setCord(cord+e.movementX)
        }
    }

    function correctCordHandler() {
        setHandControl(false)
        let slideIndex = Math.round(Math.abs(cord)/500)

        if (swipeDirection === "next") {
            if (slideIndex >= slides.length-1) {
                return clickPointHandler(0)
            }
            clickPointHandler(slideIndex+1)
        }else {
            if (slideIndex <= 0) {
                return clickPointHandler(slides.length-1)
            }
            clickPointHandler(slideIndex-1)
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