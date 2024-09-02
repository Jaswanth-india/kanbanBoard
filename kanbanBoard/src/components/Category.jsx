import Task from "./Task.jsx";
import { useSelector,useDispatch } from "react-redux";
import { draggedTask } from "./Task.jsx";
import { increment } from "../utils/toDoSlice.js";
import { addItem as  addPeerReviewTask} from "../utils/peerReview.js";
import { addItem as  addInProgressTask} from "../utils/inProgress.js";
import { addItem as addDoneTask} from "../utils/done.js";
import { addItem as addToDoTask } from "../utils/toDoSlice.js";

function Category(props){
    let textToFilter=useSelector((store)=>store.searchInput.searchInput);
    let title;
    let tasks=[];
    let length=useSelector((store)=>store.toDoTasks.counter);
    let dispatch=useDispatch();
    if(props.category=="toDo"){
        title="To-Do";
        tasks=useSelector((store)=>store.toDoTasks.items);
    }else if(props.category=="inProgress"){
        title="In Progress";
        tasks=useSelector((store)=>store.inProgressTasks.items);
    }else if(props.category=="peerReview"){
        title="Peer Review";
        tasks=useSelector((store)=>store.peerReviewTasks.items);
    }else if(props.category=="done"){
        title="Done"
        tasks=useSelector((store)=>store.doneTasks.items);
    }
    
    let filteredTasks=[];
    for(let i=0;i<tasks.length;i++){
        if(tasks[i] && tasks[i][1].toLowerCase().includes(textToFilter.toLowerCase())){
            filteredTasks[filteredTasks.length]=tasks[i];
        };
    }
    function handleDragOver(e){
        e.preventDefault();
    }
    function handleDrop(e){
        let dropTarget=e.target;
        e.preventDefault();
        while(!dropTarget.parentNode.classList.contains("category")){
            dropTarget=dropTarget.parentNode;
        }
        if(dropTarget.parentNode.id=="toDo"){
            let task=[length+1,draggedTask.current.children[0].children[0].innerHTML,draggedTask.current.children[1].children[0].innerHTML];
            dispatch(addToDoTask(task));
            dispatch(increment());
        }else if(dropTarget.parentNode.id=="inProgress"){
            let task=[length+1,draggedTask.current.children[0].children[0].innerHTML,draggedTask.current.children[1].children[0].innerHTML];
            dispatch(addInProgressTask(task));
            dispatch(increment());
        }else if(dropTarget.parentNode.id=="peerReview"){
            let task=[length+1,draggedTask.current.children[0].children[0].innerHTML,draggedTask.current.children[1].children[0].innerHTML];
            dispatch(addPeerReviewTask(task));
            dispatch(increment());
        }else if(dropTarget.parentNode.id=="done"){
            let task=[length+1,draggedTask.current.children[0].children[0].innerHTML,draggedTask.current.children[1].children[0].innerHTML];
            dispatch(addDoneTask(task));
            dispatch(increment());
        }
    }
    return(
        <div id={props.category} className="category">
            <h2>{title}</h2>
            <div onDragOver={(e)=>{handleDragOver(e)}} onDrop={(e)=>handleDrop(e)}>
                {filteredTasks.map((task)=>task && <Task key={task[0]} task={task} category={props.category}/>)}
            </div>
        </div>
    )
}

export default Category;