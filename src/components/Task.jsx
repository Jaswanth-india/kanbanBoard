import { useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { removeItem as removePeerReviewTask } from "../utils/peerReview.js";
import { removeItem as removeInProgressTask } from "../utils/inProgress.js";
import { removeItem as removeDoneTask} from "../utils/done.js";
import { removeItem as removeToDoTask } from "../utils/toDoSlice.js";

export let draggedTask;
function Task(props){
    let dispatch=useDispatch();
    draggedTask=useRef([]);

    // Remembering the dragged element
    function handleDrag(e){
        draggedTask.current=e.target;
    }

    // Removing the dragged task if it is dropped into a droppable zone
    function handleDragEnd(e){
        // Retrieving element in drop zone
        let dropElement=document.elementFromPoint(e.clientX,e.clientY);

        // Getting the element in to a variable if it is a category or else document
        while(!(dropElement==document) && !dropElement.classList.contains("category")){
            dropElement=dropElement.parentNode;
        }
        
        // Removing the task from the parent if it is dropped in a drop zone
        if(!(dropElement==document) && dropElement.classList.contains("category")){
            if(props.category=="toDo"){
                dispatch(removeToDoTask(props.task));
            }else if(props.category=="peerReview"){
                dispatch(removePeerReviewTask(props.task));
            }else if(props.category=="inProgress"){
                dispatch(removeInProgressTask(props.task));
            }else if(props.category=="done"){
                dispatch(removeDoneTask(props.task));
            }
        }
    }
    return(
        <div className="taskCard" draggable onDrag={(e)=>handleDrag(e)} onDragEnd={(e)=>{handleDragEnd(e)}}>
            <div><div>{props.task[1]}</div></div>
            <div><div>{props.task[2]}</div></div>
        </div>
    )
}

export default Task;