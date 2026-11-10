import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./ItemsSlice";
import fetchStatusSlice from "./fetchStatus";
const mintraStore=configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
    }
});

export default mintraStore;