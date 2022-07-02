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