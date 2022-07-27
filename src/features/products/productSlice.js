import { createSlice } from "@reduxjs/toolkit";

const productList = [
    { id: 1, title: 'iPad', price: 3000 },
    { id: 2, title: 'Samsung TV', price: 7000 },
    { id: 3, title: 'iPhone', price: 12000 },
    { id: 4, title: 'Speakers', price: 4000 }
]

const productSlice = createSlice({
    name: 'products',
    initialState: productList,
    reducers: {}
});

export const productReducer = productSlice.reducer;

//Define this here instead of in useSelector in Products component file:
//If state structure somehow changes in the future, this will be the only you need to change
//(instead of having to change dot notation in each place which uses this state in components)
export const allProducts = state => state.products;
