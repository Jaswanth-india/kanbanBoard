function App() {

  return (
    <Provider store={kanbanBoardStore}>
      <Header/>
      <Search/>
      <KanbanBoard/>
      <AddToDo/>
    </Provider>
  )
}

export default App;