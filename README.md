## Description
This project aims to demonstrate the use of Redux Toolkit (RTK) as recommended per best practice for state management, since it among other things implements Immer for immutability (in contrast to "regular" Redux). An e-commerce site is chosen as code idea as it encompasses opportunities to use other React features such as useEffect or the commonly used mapping over data into components. 

## Notes and documentation along the way
Concluded with named exports for slice reducers being preferred (as opposed to some examples on the web) over default export, as in this case I have several exports from the file (e.g. productSlice.js). Also, it gives you the option of naming it directly in the export, which I find simplifies readability. Not sure (yet) why default export is used in many examples.

Tried optimizing the code by e.g. defining the precise state with its dot notations to be used, into a constant variable in the slice file, to be accessible for import for use in useSelector in all other files. If the initial state keys would somehow change, you would only have to change the dot notation in the corresponding slice files, instead of repeatedly having to change it directly in every spot where useSelector is applied. Thus, by conducting it this way, we are minimizing room for errors and increase development efficiency.

Also using useEffect hook to listen to changes in the dependency array, in which we listen for changes in the cart items state, for automatic updates of the displayed calculated total price.

Redux doesn't deal with asynchronous logic by default, instead we have to use middleware, in this case Redux Thunk - which is in fact included by default in Redux Toolkit. More specifically, we have to use createAsyncThunk to deal with asynchronous logic, such as fetching data from an API.