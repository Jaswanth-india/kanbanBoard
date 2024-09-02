import { createSlice } from "@reduxjs/toolkit";

const toDoSlice=createSlice({
    name:"toDo",
    initialState:{
        items:[[1,"To-Do 1","description"],[2,"To-Do 2","description"],[3,"To-Do 3","description"],[4,"To-Do 4","description"]],
        counter:16,
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
        },
        increment:(state,action)=>{
            state.counter+=1;
        }
    }
})

export const {addItem,removeItem,increment}=toDoSlice.actions;
export default toDoSlice.reducer;