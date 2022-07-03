import React, {FC, useState} from 'react';
import Loader from "../Loader/Loader";

interface ImageProps {
    src: string;
    className?: string;
    alt?: string;
}

const MyImage: FC<ImageProps> = ({src, className, alt}) => {
    const [pending, setPending] = useState<boolean>(true)
    return (
        <>
            <img alt={alt? alt:"Image"} style={pending?{visibility: "hidden"}:{visibility: "visible"}} onLoad={e => setPending(false)} src={src} className={className? className : ""}/>
            {pending && <Loader className={className? className : ""}/>}
        </>
    );
};

export default MyImage;