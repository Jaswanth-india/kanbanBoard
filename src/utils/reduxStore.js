import { configureStore } from "@reduxjs/toolkit";

// Slices

import toDoReducer from "./toDoSlice.js"
import inProgressReducer from "./inProgress.js";
import peerReviewReducer from "./peerReview.js";
import doneReducer from "./done.js";
import searchInputReducer from "./searchSlice.js";

let kanbanBoardStore=configureStore({
    reducer:{
        toDoTasks:toDoReducer,
        inProgressTasks:inProgressReducer,
        peerReviewTasks:peerReviewReducer,
        doneTasks:doneReducer,
        searchInput:searchInputReducer
    },
})

export default kanbanBoardStore;