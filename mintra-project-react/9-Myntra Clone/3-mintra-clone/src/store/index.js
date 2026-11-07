import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./ItemsSlice";
const mintraStore=configureStore({
    reducer:{
        items:itemSlice.reducer
    }
});

export default mintraStore;