import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchAPI = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    const products = await response.json();
    return products;
}

export const getProducts = createAsyncThunk('products/getProducts', async (thunkAPI) => {
    // return fetch('https://dummyjson.com/products')
    // .then((res) => res.json())
    // .catch((err) => {
    //     console.log(err);
    //     return thunkAPI.RejectWithValue(err);
    // })
    return fetchAPI()
    // const response = await fetch('https://dummyjson.com/products');
    // console.log(response);
    // const data = await response.json();
    // return data;
});

const initialState = {
    productList: [],
    isLoading: true
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
        [getProducts.rejected]: state => {
            state.isLoading = false;
        }
    }
});

export const productReducer = productSlice.reducer;

//Define this here instead of in useSelector in Products component file:
//If state structure somehow changes in the future, this will be the only you need to change
//(instead of having to change dot notation in each place which uses this state in components)
export const allProducts = state => state.products.productList;
