import React, {FC} from 'react';
import cs from "./Button.module.scss"

interface ButtonProps {
    className?: string;
    onClick(state: any): void;
    children: any;
}

const Button: FC<ButtonProps> = ({className, onClick, children}) => {
    return (
        <div className={className? cs.button+" "+className : cs.button}
             onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;