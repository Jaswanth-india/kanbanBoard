import Task from "./Task.jsx";
import { useSelector } from "react-redux";

function Category(props){
    let tasks=[];
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

    return(
        <div id={props.category} className="category">
            <h2>{title}</h2>
            <div>
                {filteredTasks.map((task)=>task && <Task key={task[0]} task={task} category={props.category}/>)}
            </div>
        </div>
    )
}