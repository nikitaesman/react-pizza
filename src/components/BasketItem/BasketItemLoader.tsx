import React from "react"
import ContentLoader from "react-content-loader"

const BasketItemLoader = () => (
    <ContentLoader
        speed={2}
        width={820}
        height={140}
        viewBox="0 0 820 140"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="40" cy="70" r="40" />
        <rect x="95" y="44" rx="5" ry="5" width="300" height="30" />
        <rect x="95" y="82" rx="5" ry="5" width="280" height="22" />
        <rect x="476" y="56" rx="93" ry="93" width="32" height="32" />
        <rect x="540" y="56" rx="56" ry="56" width="32" height="32" />
        <rect x="517" y="60" rx="5" ry="5" width="20" height="25" />
        <rect x="645" y="60" rx="5" ry="5" width="60" height="30" />
        <rect x="789" y="54" rx="93" ry="93" width="32" height="32" />
    </ContentLoader>
)

export default BasketItemLoader