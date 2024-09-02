// Adding new Task component

import addIcon from "../assets/addIcon.png";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { addItem,increment } from "../utils/toDoSlice.js";

function AddToDo (){
    let length=useSelector((store)=>store.toDoTasks.counter);
    let dispatch=useDispatch();

    // Function to confirm adding of task.
    function handleAddToDoConfirm(){
        if(document.querySelector("#addToDo div input:nth-of-type(1)").value && document.querySelector("#addToDo div input:nth-of-type(2)").value){// Ensuring valid Inputs
            // Making input fields invisible and button visible
            document.querySelector("#addToDo div").style.display="none";
            document.querySelector("#addToDo button").style.display="unset";
            //Clearing alert from input boxes if valid inputs are provided
            document.querySelector("#addToDo div input:nth-of-type(1)").style.border="";
            document.querySelector("#addToDo div input:nth-of-type(2)").style.border="";
            // Dispatching action to redux store
            // Adding the task
            dispatch(addItem([
                length+1,
                document.querySelector("#addToDo div input:nth-of-type(1)").value,
                document.querySelector("#addToDo div input:nth-of-type(2)").value,
            ]));
            // Increasing the counter value in redux
            dispatch(increment());
            // Clearing the inputs.
            document.querySelector("#addToDo div input:nth-of-type(1)").value="";
            document.querySelector("#addToDo div input:nth-of-type(2)").value="";
        }else{
            // Alerting the user for invalid inputs
            document.querySelector("#addToDo div input:nth-of-type(1)").style.border="2px solid red";
            document.querySelector("#addToDo div input:nth-of-type(2)").style.border="2px solid red";
        }
    }

    // Function to display input boxes and button to add new task when the add icon button clicked
    function handleAddToDo(){
        document.querySelector("#addToDo button").style.display="none";
        document.querySelector("#addToDo div").style.display="flex";        
    }
    
    return (
        <>
            <div id="addToDo">
                <button onClick={handleAddToDo}><img src={addIcon} alt ="Add icon"/></button>
                <div>
                    <input placeholder="Title" type="text"/>
                    <input type="text" placeholder="Description"/>
                    <button onClick={handleAddToDoConfirm}>Add</button>
                </div>
            </div>
        </>
    )
}

export default AddToDo;