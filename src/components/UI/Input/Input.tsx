import React, {FC} from 'react';
import cs from './Input.module.scss'

interface InputProps {
    placeholder: string;
    onChange(state: any): void;
}

const Input: FC<InputProps> = ({placeholder, onChange}) => {
    return (
        <div className={cs.box}>
            <label className={cs.label}>
                {placeholder}
            </label>
            <input className={cs.input} onChange={e => onChange(e.target.value)} />
        </div>
    );
};

export default Input;