import React, {FC} from 'react';
import cs from "./CircleButton.module.scss"

interface CircleButtonProps {
    color: "grey" | "orange";
    type: "delete" | "increment" | "decrement";
    onClick(e: any): void
    className?: string;
}

const CircleButton: FC<CircleButtonProps> = ({color, type, onClick, className}) => {
    switch (type) {
        case "decrement":
            return (
                <div onClick={onClick} className={color === "orange" ? cs.button+" "+(className??className)+" "+cs.button_orange : cs.button+" "+(className??className)+" "+cs.button_grey}>
                    <div className={cs.figureBox}>
                        <div className={cs.figureLine}/>
                    </div>
                </div>
            )
            break
        case "increment":
            return (
                <div onClick={onClick} className={color === "orange" ? cs.button+" "+(className??className)+" "+cs.button_increment+" "+cs.button_orange : cs.button+" "+(className??className)+" "+cs.button_increment+" "+cs.button_grey}>
                    <div className={cs.figureBox}>
                        <div className={cs.figureLine}/>
                        <div className={cs.figureLine}/>
                    </div>
                </div>
            )
            break
        case "delete":
            return (
                <div onClick={onClick} className={color === "orange" ? cs.button+" "+(className??className)+" "+cs.button_delete+" "+cs.button_orange : cs.button+" "+(className??className)+" "+cs.button_delete+" "+cs.button_grey}>
                    <div className={cs.figureBox}>
                        <div className={cs.figureLine}/>
                        <div className={cs.figureLine}/>
                    </div>
                </div>
            )
            break
        default:
            return (
                <div onClick={onClick} className={color === "orange" ? cs.button+" "+cs.button_orange : cs.button+" "+cs.button_delete}>
                    <div className={cs.figureLine}/>
                </div>
            )
            break
    }
};

export default CircleButton;