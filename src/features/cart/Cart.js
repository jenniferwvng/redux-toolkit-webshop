import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

import { allCartItems } from "./cartSlice";

export const Cart = () => {    
    const cartArray = useSelector(allCartItems);
    const dispatch = useDispatch();
    console.log(cartArray)

    const renderCartItems = cartArray.map(cartItem => (
        <div style={{backgroundColor: 'orange'}}>
            <p>{cartItem.productId}</p>
            <p>{cartItem.productName}</p>
            <p>{cartItem.productPrice}</p>
            <button onClick={() => dispatch(removeFromCart(cartItem.productId))}>Remove from cart</button>
        </div>
    ))

    return (
        <div>
            {renderCartItems}
        </div>
    )
}
