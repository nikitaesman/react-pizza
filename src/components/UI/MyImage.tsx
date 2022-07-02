import React, {FC, useState} from 'react';

interface ImageProps {
    src: string;
    className?: string;
}

const MyImage: FC<ImageProps> = ({src, className}) => {
    const [pending, setPending] = useState<boolean>(true)
    return (
        <>
            <img style={pending?{visibility: "hidden"}:{visibility: "visible"}} alt={"image"} onLoad={e => setPending(false)} src={src} className={className? className : ""}/>
            {pending && <div className={className? className : ""}>Image is loading</div>}
        </>
    );
};

export default MyImage;