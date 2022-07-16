import React, {FC} from 'react';
import cs from './Input.module.scss'

interface InputProps {
    placeholder: string;
    onChange?(state: any): void;
    required?: boolean;
}

const Input: FC<InputProps> = ({placeholder, onChange, required = false}) => {
    return (
        <div className={cs.box}>
            <label className={cs.label}>
                {placeholder}
            </label>
            <input className={cs.input} onChange={onChange ? e => onChange(e.target.value) : undefined} required={required}/>
        </div>
    );
};

export default Input;