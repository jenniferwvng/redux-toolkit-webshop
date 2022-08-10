import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { allProducts, getProducts } from "./productSlice";
import { addToCart } from "../cart/cartSlice";
import { sortByCategory } from "./productSlice";


export const Products = () => {
    const productsArray = useSelector(allProducts);
    const dispatch = useDispatch();

    const [value, setValue] = useState('all');

    useEffect(() => {
        dispatch(sortByCategory(value));
        dispatch(getProducts(value));
    }, [dispatch, value]);

    const handleCategoryChange = (e) => {
        setValue(e.target.value);
    }

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
            <select value={value} onChange={handleCategoryChange}>
                <option value="all">All</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
            </select>
            {renderProducts}
        </div>
    )
}
