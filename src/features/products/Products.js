import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { allProducts, getProducts } from "./productSlice";
import { addToCart } from "../cart/cartSlice";
import { sortByCategory } from "./productSlice";

import styles from '../../styles/Products.module.css'

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
        <div>
        <div className={styles.centerFlexItems}>
        <img src={product.image} width={200} height={300} alt={product.title}/>
        <button     
        className={styles.addToCartBtn} 
        onClick={() => dispatch(addToCart({
            productId: product.id, 
            productCount: 1,
            productName: product.title, 
            productPrice: product.price,
            productImage: product.image
        }))}>Add to cart</button>
        </div>
        <span>
            <p className={styles.productTitle}>{product.title}</p>
            <p>{product.price} &#x20AC;</p> 
        </span>
        </div>
        )
    )

    return (
        <div>
            <p>Sort by:</p>
            <select value={value} onChange={handleCategoryChange}>
                <option value="all">All</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
            </select>
            <div className={styles.gridItemDisplay}>                
                {renderProducts}                
            </div>
        </div>
    )
}
