import { useState, useEffect } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

//styles
import "./Components/style.css"



const App = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [todo, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todo.filter(item => item.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todo.filter(item => item.completed === false))
        break;
      default:
        setFilteredTodos(todo)
        break;
    }
  }

  return (
    <div>
      <header>
        <h1>Hossein's Todo List</h1>
      </header>

      <Form
        value={value}
        setValue={setValue}
        setTodo={setTodo}
        todo={todo}
        setStatus={setStatus}
        status={status}
      />

      <TodoList
        todo={todo}
        setTodo={setTodo}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;