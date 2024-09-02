import { createSlice } from "@reduxjs/toolkit";

const toDoSlice=createSlice({
    name:"toDo",
    initialState:{
        items:[[1,"To-Do 1","description"],[2,"To-Do 2","description"],[3,"To-Do 3","description"],[4,"To-Do 4","description"]],
        counter:16,
    },
    reducers:{
        // Function to add new task details to slice
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        // Function to remove task details from slice
        removeItem:(state,action)=>{
            for(let i=0;i<state.items.length;i++){
                if(state.items[i] && state.items[i][0]==action.payload[0]){
                    delete state.items[i];
                }
            }
        },
        // Function to keep track of number of tasks
        increment:(state,action)=>{
            state.counter+=1;
        }
    }
})

export const {addItem,removeItem,increment}=toDoSlice.actions;
export default toDoSlice.reducer;