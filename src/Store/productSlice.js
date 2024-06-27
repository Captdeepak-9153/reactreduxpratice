import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 export const STATUSES = Object.freeze({
    IDLE : "idle",
    ERROR:"error",
    LOADING:'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data:[],
        status: STATUSES.IDLE,

    },
    reducers: {
        setProducts(state, action) {
            // const res = await fetch('https://fakestoreapi.com/products') we can not call like this as reducers can not work asynchronously they work as synchronous

            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
       
    }
    // 2nd way to use thunk for that reducers
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(fetchProducts.pending,(state,action)=> {
    //         state.status = STATUSES.LOADING;
    //     })
    //     .addCase(fetchProducts.fulfilled,(state,action)=> {
    //         state.data = action.payload;
    //         state.status = STATUSES.IDLE;
    //     })
    //     .addCase(fetchProducts.rejected,(state,action)=>{
    //         state.status = STATUSES.ERROR;
    //     })
    // }
});

export const { setProducts,setStatus } = productSlice.actions; // Variable.action will create actions for these functionalities
export default productSlice.reducer; // It will export the reducers

//thunks it is a middleware and there is a two way to do this

export function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE));
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}

//2nd way

// export const fetchProducts = createAsyncThunk('products/fetch',async () =>{
//     const res = await fetch('https://fakestoreapi.com/products')
//     const data = await res.json();
//     return data;
// })
