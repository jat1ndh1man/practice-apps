import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    item:[]
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const{ProductId, quantity}=(action.payload)
            state.item.push({ProductId, quantity})
        },
    }
})
export const{addToCart}=cartSlice.actions;
export default cartSlice.reducer;