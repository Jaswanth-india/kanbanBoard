import { useDispatch } from "react-redux";
import { makeInput } from "../utils/searchSlice.js"

function Search(){
    let searchDispatch=useDispatch();
    
    function handleSearch(e){
        searchDispatch(makeInput(e.target.value)); // Making search Input available to other components
    }
    
    return(
        <div id="searchContainer">
            <input type="text" placeholder="Eg: Meeting with Sam" onChange={(e)=>handleSearch(e)}/>
        </div>
    )
}

export default Search;