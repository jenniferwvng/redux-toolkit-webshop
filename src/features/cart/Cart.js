import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromCart, emptyCart, increaseCartItemAmount, decreaseCartItemAmount, calculateCheckoutTotals } from "./cartSlice";
import { allCartItems, cartTotalPrice } from "./cartSlice";

export const Cart = () => {    
    const cartArray = useSelector(allCartItems);
    const checkoutTotalPrice = useSelector(cartTotalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateCheckoutTotals());
    }, [dispatch, cartArray]);

    const renderCartItems = cartArray.map(cartItem => (
        <div>            
            <p>Product id: {cartItem.productId}</p>
            <p>Product count: {cartItem.productCount}</p>
            <img src={cartItem.productImage} width={50} alt={cartItem.productName}/>
            <p>{cartItem.productName}</p>
            <p>{cartItem.productPrice}</p>
            <button onClick={() => dispatch(removeFromCart(cartItem.productId))}>Remove from cart</button>
            <button onClick={() => dispatch(increaseCartItemAmount(cartItem.productId))}>Increase amount</button>
            <button onClick={() => dispatch(decreaseCartItemAmount(cartItem.productId))}>Decrease amount</button>
        </div>
    ))

    return (
        <div>
            <h1>Checkout cart</h1>
            {renderCartItems}                        
            <div style={{backgroundColor:'red'}}>
                <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
                <p>Total: {checkoutTotalPrice} SEK</p>                
                <Link to="/checkout">
                    <button style={{backgroundColor: 'green', border: 'none'}}>Go to checkout</button>
                </Link>
            </div>
        </div>
    )
}
