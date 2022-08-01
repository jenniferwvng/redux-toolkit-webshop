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
            console.log(action.payload)
        }
    }
});

export const { addToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const allCartItems = state => state.cart;
