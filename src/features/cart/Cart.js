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
        <div style={{backgroundColor: 'white', padding: '10px', display: 'flex', justifyContent: 'center'}}>            
            <span>
                <img src={cartItem.productImage} width={50} alt={cartItem.productName}/>
                <p>{cartItem.productName}</p>
                <p style={{fontWeight: 'bold'}}>{cartItem.productPrice}</p>            
            </span>

            <span className={styles.cartIconFlex}>
                <button onClick={() => dispatch(increaseCartItemAmount(cartItem.productId))}>
                    <img src="/arrowup.png" alt="increase-quantity" width={20} />
                </button>
                <p>{cartItem.productCount}</p>
                <button onClick={() => dispatch(decreaseCartItemAmount(cartItem.productId))}>
                    <img src="/arrowdown.png" alt="decrease-quantity" width={20} />
                </button>
                <button onClick={() => dispatch(removeFromCart(cartItem.productId))}>
                    <img src="/deleteicon.png" alt="decrease-quantity" width={15} />
                </button>
            </span>
        </div>
    ))

    return (
        <div style={{border: '1px solid lightgrey', backgroundColor: '#F9F7F5'}}>
            <h1>Checkout cart</h1>
            {renderCartItems}                        
            <div style={{padding: '20px'}}>
                <button onClick={() => dispatch(emptyCart())} className={styles.emptyCartIcon}>Empty cart</button>
                <p>Total: {checkoutTotalPrice} SEK</p>                
                <Link to="/checkout">
                    <button className={styles.checkoutBtnLink}>Go to checkout</button>
                </Link>
            </div>
        </div>
    )
}
