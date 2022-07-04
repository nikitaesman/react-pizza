import React, {FC} from 'react';
import logoImage from '../../images/logo.png'
import cs from './Loader.module.scss'

interface LoaderProps {
    className?: string;
    fullPage?: boolean;
}

const Loader: FC<LoaderProps> = ({className= "",fullPage = false}) => {
    return (
        <div className={fullPage ? cs.box+" "+cs.fullPage+" "+ cs.className : cs.box+" "+ cs.className}>
            <img alt={"loading"} className={cs.loader} src={logoImage}/>
        </div>
    );
};

export default Loader;