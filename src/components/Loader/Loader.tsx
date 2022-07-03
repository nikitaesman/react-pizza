import React, {FC} from 'react';
import logoImage from '../../images/logo.png'
import cs from './Loader.module.scss'

interface LoaderProps {
    className?: string;
}

const Loader: FC<LoaderProps> = ({className}) => {
    return (
        <div className={cs.box}>
            <img alt={"loading"} className={cs.loader + cs.className} src={logoImage}/>
        </div>
    );
};

export default Loader;