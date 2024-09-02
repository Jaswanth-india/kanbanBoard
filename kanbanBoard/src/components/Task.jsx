import { useRef } from "react";
import { useDispatch } from "react-redux";
import { removeItem as removePeerReviewTask } from "../utils/peerReview.js";
import { removeItem as removeInProgressTask } from "../utils/inProgress.js";
import { removeItem as removeDoneTask} from "../utils/done.js";
import { removeItem as removeToDoTask } from "../utils/toDoSlice.js";
export let draggedTask;
function Task(props){
    let dispatch=useDispatch();
    draggedTask=useRef([]);
    function handleDrag(e){
        draggedTask.current=e.target;
    }
    function handleDragEnd(e){
        let dropElement=document.elementFromPoint(e.clientX,e.clientY);
        
        while(!(dropElement==document) && !dropElement.classList.contains("category")){
            dropElement=dropElement.parentNode;
        }
        
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