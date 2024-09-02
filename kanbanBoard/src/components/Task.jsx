function Task(props){
    return(
        <div className="taskCard" draggable>
            <div><div>{props.task[1]}</div></div>
            <div><div>{props.task[2]}</div></div>
        </div>
    )
}