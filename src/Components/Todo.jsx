import "./style.css"


const Todo = ({ text, setTodo, todo, item }) => {

    const deleteHandler = () => {
        setTodo(todo.filter((el) => el.id !== item.id))
    }

    const doneHandler = () => {
        setTodo(todo.map((el) => {
            if (el.id === item.id) {
                return {...el, completed : !el.completed}
            }
            return el
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${item.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={doneHandler}>
                <i></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i></i>
            </button>
        </div>
    );
};

export default Todo;