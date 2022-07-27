import React from "react";
import { allProducts } from "./productSlice";
import { useSelector } from "react-redux";

export const Products = () => {
    const productsArray = useSelector(allProducts);

    const renderProducts = productsArray.map(product => 
        (
        <div style={{backgroundColor: 'orange'}}>
        <p>{product.title}</p>
        <p>{product.price}</p>    
        </div>
        )
    )

    return (
        <div>
            {renderProducts}
        </div>
    )
}
