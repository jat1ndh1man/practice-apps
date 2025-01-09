import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/Carttab/Carttab";

export  const store = configureStore({
    reducer :{
        cart: cartReducer,

    }
})