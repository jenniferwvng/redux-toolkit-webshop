import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromCart, emptyCart, increaseCartItemAmount, decreaseCartItemAmount, calculateCheckoutTotals } from "./cartSlice";
import { allCartItems, cartTotalPrice } from "./cartSlice";
import styles from '../../styles/Cart.module.css'

export const Cart = () => {    
    const cartArray = useSelector(allCartItems);
    const checkoutTotalPrice = useSelector(cartTotalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateCheckoutTotals());
    }, [dispatch, cartArray]);

    const renderCartItems = cartArray.map(cartItem => (
        <div style={{backgroundColor: 'white', padding: '10px'}}>            
            <p>Product id: {cartItem.productId}</p>
            <p>Quantity: {cartItem.productCount}</p>
            <img src={cartItem.productImage} width={50} alt={cartItem.productName}/>
            <p>{cartItem.productName}</p>
            <p>{cartItem.productPrice}</p>            
            <button onClick={() => dispatch(removeFromCart(cartItem.productId))}>Remove from cart</button>
            <button onClick={() => dispatch(increaseCartItemAmount(cartItem.productId))}>Increase amount</button>
            <button onClick={() => dispatch(decreaseCartItemAmount(cartItem.productId))}>Decrease amount</button>
        </div>
    ))

    return (
        <div style={{border: '1px solid lightgrey', backgroundColor: '#F9F7F5'}}>
            <h1>Checkout cart</h1>
            {renderCartItems}                        
            <div style={{padding: '20px'}}>
                <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
                <p>Total: {checkoutTotalPrice} SEK</p>                
                <Link to="/checkout">
                    <button className={styles.checkoutBtnLink}>Go to checkout</button>
                </Link>
            </div>
        </div>
    )
}
