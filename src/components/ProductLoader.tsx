import React, {FC} from "react"
import ContentLoader from 'react-content-loader'

interface IProps {}

const ProductLoader:FC<IProps> = () => (
    <ContentLoader
        speed={1}
        width={280}
        height={478}
        viewBox="0 0 280 478"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="271" rx="5" ry="5" width="280" height="24" />
        <rect x="0" y="317" rx="10" ry="10" width="280" height="99" />
        <rect x="0" y="440" rx="5" ry="5" width="90" height="30" />
        <rect x="120" y="433" rx="25" ry="25" width="160" height="45" />
        <circle cx="135" cy="120" r="120" />
    </ContentLoader>
)

export default ProductLoader