## Description
This project aims to demonstrate the use of Redux Toolkit (RTK) as recommended per best practice for state management, since it among other things implements Immer for immutability (in contrast to "regular" Redux). An e-commerce site is chosen as code idea as it encompasses opportunities to use other React features such as useEffect, React Router or simply the commonly used mapping over data into components. 

Focus is moreover on clear code folder structure + code structure.

## Notes and documentation along the way
Concluded with named exports for slice reducers being preferred (as opposed to some examples on the web) over default export, as in this case I have several exports from the file (e.g. productSlice.js). Also, it gives you the option of naming it directly in the export, which I find simplifies readability. Not sure (yet) why default export is used in many examples.

Tried optimizing the code by e.g. defining the precise state with its dot notations to be used, into a constant variable in the slice file, to be accessible for import for use in useSelector in all other files. If the initial state keys would somehow change, you would only have to change the dot notation in the corresponding slice files, instead of repeatedly having to change it directly in every spot where useSelector is applied. Thus, by conducting it this way, we are minimizing room for errors and increase development efficiency.

Also using useEffect hook to listen to changes in the dependency array, in which we listen for changes in the cart items state, for automatic updates of the displayed calculated total price.

Redux doesn't deal with asynchronous logic by default, instead we have to use middleware, in this case Redux Thunk - which is in fact included by default in Redux Toolkit. More specifically, we have to use createAsyncThunk to deal with asynchronous logic, such as fetching data from an API.

Error handling in the thunk does not really work as traditional JS error handling. E.g., there is no point in making a try...catch statement (as what I can see) inside the createAsyncThunk, similarly as there is not point in manually throwing an Error as those will be cleaned up from non-standard fields and end up in action.error (which you can handle in the rejected type in extraReducers) of the rejected action [https://stackoverflow.com/questions/70517819/redux-toolkit-not-checking-the-rejected-case] either way. Alternatively, one can manually return thunkAPI.rejectWithValue() with the error as argument, with thunkAPI being the default argument passed in createAsyncThunk, as the error would not be cleaned up and instead be passed the defined error value in the action.payload (i.e. for defining payload and meta manually). For these cases, try...catch can effectively be used in conjunction with rejectWithValue() as the customized error message will not be ignored.

createAsyncThunk accepts a second argument inside the payloadCreator (the callback function with async logic), commonly called thunkAPI which is an object, which you can use to access the current state (getState() method). Since state is not available outside the reducers, unless you use useSelector (which is only limited to use inside React component files) - and while I still wanted to have access to it inside the slice file for conditionally fetching the API based on user input of category choice, using the thunkAPI argument passed by createAsyncThunk enabled the option of retrieving the current category state and passing it further as an argument for use in the function handling the API fetching.

#### React Router
Used React Router for navigation and useNavigate to redirect user to confirmation page after submitting the order form, as well as clearing the cart and user state in setTimeOut. 

### Third party APIs
Used Fakestore API for product list, all data credited for the author https://fakestoreapi.com/products

### Live demo (not completely done yet):
https://webshop-simulation.netlify.app/
