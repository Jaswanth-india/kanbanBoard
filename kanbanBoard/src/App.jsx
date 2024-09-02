// Styling
import './App.css';
// Components
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import KanbanBoard from "./components/KanbanBoard.jsx";
import AddToDo from './components/AddToDo.jsx';

// Redux
import kanbanBoardStore from './utils/reduxStore.js';
import { Provider } from "react-redux";
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