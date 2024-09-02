import addIcon from "../assets/addIcon.png";
import { useSelector, useDispatch } from "react-redux";
import { addItem,increment } from "../utils/toDoSlice.js";
function AddToDo (){
    let length=useSelector((store)=>store.toDoTasks.counter);
    let dispatch=useDispatch()
    function handleAddToDoConfirm(){
        if(document.querySelector("#addToDo div input:nth-of-type(1)").value && document.querySelector("#addToDo div input:nth-of-type(2)").value){
            document.querySelector("#addToDo div").style.display="none";
            document.querySelector("#addToDo button").style.display="unset";
            document.querySelector("#addToDo div input:nth-of-type(1)").style.border="";
            document.querySelector("#addToDo div input:nth-of-type(2)").style.border="";
            dispatch(addItem([
                length+1,
                document.querySelector("#addToDo div input:nth-of-type(1)").value,
                document.querySelector("#addToDo div input:nth-of-type(2)").value,
            ]));
            dispatch(increment());
            document.querySelector("#addToDo div input:nth-of-type(1)").value="";
            document.querySelector("#addToDo div input:nth-of-type(2)").value="";
        }else{
            document.querySelector("#addToDo div input:nth-of-type(1)").style.border="2px solid red";
            document.querySelector("#addToDo div input:nth-of-type(2)").style.border="2px solid red";
        }
    }
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