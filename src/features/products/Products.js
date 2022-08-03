import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { allProducts } from "./productSlice";
import { addToCart } from "../cart/cartSlice";


export const Products = () => {
    const productsArray = useSelector(allProducts);
    const dispatch = useDispatch();

    const renderProducts = productsArray.map(product => 
        (
        <div style={{backgroundColor: 'orange'}}>
        <p>{product.title}</p>
        <p>{product.price}</p>    
        <button onClick={() => dispatch(addToCart({
            productId: product.id, 
            productCount: 1,
            productName: product.title, 
            productPrice: product.price
        }))}>Add to cart</button>
        </div>
        )
    )

    return (
        <div>
            {renderProducts}
        </div>
    )
}
