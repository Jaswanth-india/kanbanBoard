import { createSlice } from "@reduxjs/toolkit";

let searchSlice=createSlice({
    name:"search",
    initialState:{
        searchInput:"",
    },
    reducers:{
        makeInput:(state,action)=>{
            state.searchInput=action.payload;
        }
    }
});

export const {makeInput}=searchSlice.actions;
export default searchSlice.reducer;