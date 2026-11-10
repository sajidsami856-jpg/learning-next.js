
import { createSlice} from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "../data/items";

const itemSlice =createSlice({
    name:"items",
    initialState:[],
    reducers:{
        addInitialItems:(state,action)=>{
            console.log("reducer",state,action);
            return action.payload;
        },
    }
});

export const itmesActions =itemSlice.actions;

export default itemSlice;
