import Category from "./Category.jsx";

function KanbanBoard(){
    return(
        <section id="kanbanBoard">
            <section>
                <Category category="toDo"/>
                <Category category="inProgress"/>
                <Category category="peerReview"/>
                <Category category="done"/>
            </section>
        </section>
    )
}

export default KanbanBoard;