// Column or category component of kanban board
import Task from "./Task.jsx";
import { draggedTask } from "./Task.jsx";

// Redux
import { useSelector,useDispatch } from "react-redux";
import { increment } from "../utils/toDoSlice.js";
import { addItem as  addPeerReviewTask} from "../utils/peerReview.js";
import { addItem as  addInProgressTask} from "../utils/inProgress.js";
import { addItem as addDoneTask} from "../utils/done.js";
import { addItem as addToDoTask } from "../utils/toDoSlice.js";

function Category(props){
    let textToFilter=useSelector((store)=>store.searchInput.searchInput);// Taking search value into a variable
    let title;
    let tasks=[];
    let length=useSelector((store)=>store.toDoTasks.counter);
    let dispatch=useDispatch();

    // Taking tasks data from redux store to variable
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
    
    // Filtering tasks based on search input
    let filteredTasks=[];
    for(let i=0;i<tasks.length;i++){
        if(tasks[i] && tasks[i][1].toLowerCase().includes(textToFilter.toLowerCase())){
            filteredTasks[filteredTasks.length]=tasks[i];
        };
    }

    // Preventing firing of element
    function handleDragOver(e){
        e.preventDefault();
    }

    //Adding the task into dropped element
    function handleDrop(e){
        let dropTarget=e.target;
        e.preventDefault();

        // Taking out the category in which the task is dropped
        while(!dropTarget.classList.contains("category")){
            dropTarget=dropTarget.parentNode;
        }

        // Adding task in to the category or column and incrementing the counter
        if(dropTarget.id=="toDo"){
            let task=[length+1,draggedTask.current.children[0].children[0].innerHTML,draggedTask.current.children[1].children[0].innerHTML];
            dispatch(addToDoTask(task));
            dispatch(increment());
        }else if(dropTarget.id=="inProgress"){
            let task=[length+1,draggedTask.current.children[0].children[0].innerHTML,draggedTask.current.children[1].children[0].innerHTML];
            dispatch(addInProgressTask(task));
            dispatch(increment());
        }else if(dropTarget.id=="peerReview"){
            let task=[length+1,draggedTask.current.children[0].children[0].innerHTML,draggedTask.current.children[1].children[0].innerHTML];
            dispatch(addPeerReviewTask(task));
            dispatch(increment());
        }else if(dropTarget.id=="done"){
            let task=[length+1,draggedTask.current.children[0].children[0].innerHTML,draggedTask.current.children[1].children[0].innerHTML];
            dispatch(addDoneTask(task));
            dispatch(increment());
        }
    }
    return(
        <div id={props.category} className="category" onDragOver={(e)=>{handleDragOver(e)}} onDrop={(e)=>handleDrop(e)}>
            <h2>{title}</h2>
            <div>
                {filteredTasks.map((task)=>task && <Task key={task[0]} task={task} category={props.category}/>)}
            </div>
        </div>
    )
}

export default Category;