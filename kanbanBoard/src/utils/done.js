import { createSlice } from "@reduxjs/toolkit";

const doneSlice=createSlice({
    name:"done",
    initialState:{
        items:[[5,"Done 1","description"],[6,"Done 2","description"],[7,"Done 3","description"],[8,"Done 4","description"]],
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

export const {addItem,removeItem} = doneSlice.actions;
export default doneSlice.reducer;