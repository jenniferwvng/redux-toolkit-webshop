import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { allProducts, getProducts } from "./productSlice";
import { addToCart } from "../cart/cartSlice";


export const Products = () => {
    const productsArray = useSelector(allProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const renderProducts = productsArray.map(product => 
        (
        <div style={{backgroundColor: 'orange'}}>
        <p>{product.title}</p>
        <p>{product.price}</p> 
        <img src={product.image} width={100} alt={product.title}/>
        <p>{product.description}</p>    
        <button onClick={() => dispatch(addToCart({
            productId: product.id, 
            productCount: 1,
            productName: product.title, 
            productPrice: product.price,
            productImage: product.image
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
