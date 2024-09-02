import Category from "./Category.jsx";

function KanbanBoard(){
    return(
        <section id="kanbanBoard">
            <section>
                {/* List of Columns or category of tasks */}
                <Category category="toDo"/>
                <Category category="inProgress"/>
                <Category category="peerReview"/>
                <Category category="done"/>
            </section>
        </section>
    )
}

export default KanbanBoard;