import "./style.css"


import Todo from "./Todo";

const TodoList = ({ todo, setTodo, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(item => (
                    <Todo key={item.id} item={item} text={item.text} todo={todo} setTodo={setTodo} />
                ))}
            </ul>
        </div>
    );
};


export default TodoList;