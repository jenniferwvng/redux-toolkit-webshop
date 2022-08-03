import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {            
            const filterDuplicateItemsInArray = state.cartItems.filter(cartItem => cartItem.productId === action.payload.productId);
            const productExistsInArray = filterDuplicateItemsInArray.length >= 1;

            if (!productExistsInArray) {
                state.cartItems.push(action.payload);
            } else {
                const cartItem = state.cartItems.find(cartItem => cartItem.productId === action.payload.productId);
                cartItem.productCount += 1;
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.productId !== action.payload);            
        },
        emptyCart: state => {
            state.cartItems = [];
        },
        increaseCartItemAmount: (state, action) => {
            const cartItem = state.cartItems.find(cartItem => cartItem.productId === action.payload);
            cartItem.productCount += 1;
        },
        decreaseCartItemAmount: (state, action) => {    
            const cartItem = state.cartItems.find(cartItem => cartItem.productId === action.payload);
            
            if (cartItem.productCount <= 1) {
                const indexToRemoveFromCartArray = state.cartItems.indexOf(cartItem);
                state.cartItems.splice(indexToRemoveFromCartArray, 1);
            } else {
                cartItem.productCount -= 1;
            }
        },
        calculateCheckoutTotals: state => {
            let quantity = 0;
            let totalPrice = 0;

            state.cartItems.forEach(cartItem => {
                quantity += cartItem.productCount;
                totalPrice += cartItem.productCount * cartItem.productPrice;
            })

            state.quantity = quantity;
            state.totalPrice = totalPrice;    
        }
    }
});

export const { addToCart, removeFromCart, emptyCart, increaseCartItemAmount, decreaseCartItemAmount, calculateCheckoutTotals } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const allCartItems = state => state.cart.cartItems;
export const cartTotalPrice = state => state.cart.totalPrice;
