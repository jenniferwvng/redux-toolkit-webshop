import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.productId !== action.payload);            
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const allCartItems = state => state.cart.cartItems;
