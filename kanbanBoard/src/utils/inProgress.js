import { createSlice } from "@reduxjs/toolkit";

const inProgressSlice=createSlice({
    name:"inProgress",
    initialState:{
        items:[[9,"In Progress 1","description"],[10,"In Progress 2","description"],[11,"In Progress 3","description"],[12,"In Progress 4","description"]],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            for(let i=0;i<state.items.length;i++){
                if(state.items[i] && state.items[i][0]==action.payload[0]){
                    delete state.items[i];
                }
            }
        }
    }
})

export const {addItem,removeItem} =inProgressSlice.actions;
export default inProgressSlice.reducer;