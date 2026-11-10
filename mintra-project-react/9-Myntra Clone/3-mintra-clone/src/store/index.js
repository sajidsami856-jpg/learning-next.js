import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./ItemsSlice";
import fetchStatusSlice from "./fetchStatus";
import bagSlice from "./BagSlice";
const mintraStore=configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer,
    }
});

export default mintraStore;