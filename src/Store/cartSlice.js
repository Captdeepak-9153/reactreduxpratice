import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [], // Corrected typo and ensured the initial state is provided
    reducers: {
        add(state, action) {
            state.push(action.payload); // It will push the new data into the array of initialState
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload); // It will return a new state array without the item that matches the condition
        },
    }
});

export const { add, remove } = cartSlice.actions; // Variable.action will create actions for these functionalities
export default cartSlice.reducer; // It will export the reducers
