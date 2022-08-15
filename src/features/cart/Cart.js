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
                <button style={{backgroundColor: 'green', border: 'none'}}>Go to checkout</button>
            </div>
            {/* react router to another component page (checkout component: create) onclick go to checkout btn, where user fill in info in form and when accept, proceed to redirect to another component (confirmation component, create) (also need form validation applied to button before accepting onclick)*/}
            {/* check react navigation, might omit need to user router since only small part of app using this? */}
        </div>
    )
}
