import React, {FC} from 'react';
import cs from "./Button.module.scss"

interface ButtonProps {
    className?: string;
    onClick(state: any): void;
    children: any;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = ({className, onClick, children, type = "button"}) => {
    return (
        <button type={type} className={className? cs.button+" "+className : cs.button}
             onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;