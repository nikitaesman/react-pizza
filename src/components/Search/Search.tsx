import React, {FC, useEffect, useRef, useState} from 'react';
import cs from './Search.module.scss'

interface SearchProps {
    search: string;
    setSearch(state: any): void;
}

const Search: FC<SearchProps> = ({search, setSearch}) => {
    const [inputValue, setInputValue] = useState<string>(search)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const timeOutId = setTimeout(changeValueHandler, 500);
        return () => clearTimeout(timeOutId);
    }, [inputValue])

    function changeValueHandler(): void {
        setSearch(inputValue)
    }

    function clearInput():void {
        setSearch("")
        setInputValue("")
        inputRef.current?.focus()
    }

    return (
        <div className={cs.box}>
            <svg
                className={cs.icon}
                enableBackground="new 0 0 32 32"
                id="EditableLine"
                version="1.1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="14"
                    cy="14"
                    fill="none"
                    id="XMLID_42_"
                    r="9"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />
                <line
                    fill="none"
                    id="XMLID_44_"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    x1="27"
                    x2="20.366"
                    y1="27"
                    y2="20.366"
                />
            </svg>
            <input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)} className={cs.input} type={"text"} placeholder="Поиск пицц"/>
            {inputValue !== "" &&
                <div className={cs.clearBtn} onClick={clearInput}>
                    <div className={cs.figureLine}/>
                    <div className={cs.figureLine}/>
                </div>
            }
        </div>
    );
};

export default Search;