import { createSlice} from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "../data/items";

const fetchStatusSlice =createSlice({
    name:"fetchStatus",
    initialState:{
        fetchDone:false,
        currentlyFetching:true,
    },
    reducers:{
        markFetchDone:(state,action)=>{
             state.fetchDone=true;
        },
        markFetchingStarted:(state,action)=>{
            state.currentlyFetching=true;
        },
        markFetchingFinished:(state,action)=>{
            state.currentlyFetching=false;
        }
    }
});



export const fetchStatusActions =fetchStatusSlice.actions;

export default fetchStatusSlice;
