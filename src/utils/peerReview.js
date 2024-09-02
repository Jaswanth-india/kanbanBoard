import { createSlice } from "@reduxjs/toolkit";

const peerReviewSlice=createSlice({
    name:"peerReview",
    initialState:{
        items:[[13,"Peer Review 1","description"],[14,"Peer Review 2","description"],[15,"Peer Review 3","description"],[16,"Peer Review 4","description"]],
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

export const {addItem,removeItem} =peerReviewSlice.actions;
export default peerReviewSlice.reducer;