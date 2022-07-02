import React, {FC} from 'react';
import logoImage from '../../images/logo.png'
import cs from './Loader.module.scss'

const Loader: FC = () => {
    return (
        <div className={cs.box}>
            <img alt={"loading"} className={cs.loader} src={logoImage}/>
        </div>
    );
};

export default Loader;