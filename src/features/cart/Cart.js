import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, emptyCart, increaseCartItemAmount, decreaseCartItemAmount, calculateCheckoutTotals } from "./cartSlice";
import { allCartItems, cartTotalPrice } from "./cartSlice";

export const Cart = () => {    
    const cartArray = useSelector(allCartItems);
    const checkoutTotalPrice = useSelector(cartTotalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateCheckoutTotals());
    }, [cartArray]);

    const renderCartItems = cartArray.map(cartItem => (
        <div style={{backgroundColor: 'orange'}}>
            <p>Product id: {cartItem.productId}</p>
            <p>Product count: {cartItem.productCount}</p>
            <p>{cartItem.productName}</p>
            <p>{cartItem.productPrice}</p>
            <button onClick={() => dispatch(removeFromCart(cartItem.productId))}>Remove from cart</button>
            <button onClick={() => dispatch(increaseCartItemAmount(cartItem.productId))}>Increase amount</button>
            <button onClick={() => dispatch(decreaseCartItemAmount(cartItem.productId))}>Decrease amount</button>
        </div>
    ))

    return (
        <div>
            {renderCartItems}                        
            <div style={{backgroundColor:'red'}}>
                <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
                <p>Total: {checkoutTotalPrice} SEK</p>
            </div>
        </div>
    )
}
