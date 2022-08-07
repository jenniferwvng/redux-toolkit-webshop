import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchAPI = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    const products = await response.json();
    return products;
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
        return fetchAPI();
});

const initialState = {
    productList: [],
    isLoading: true,
    errorMessage: 'No error when fetching API'
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [getProducts.pending]: state => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.productList = action.payload; 
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error.message || 'Something went wrong';
        }
    }
});

export const productReducer = productSlice.reducer;

//Define this here instead of in useSelector in Products component file:
//If state structure somehow changes in the future, this will be the only you need to change
//(instead of having to change dot notation in each place which uses this state in components)
export const allProducts = state => state.products.productList;
