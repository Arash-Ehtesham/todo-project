import "./style.css"


const Form = ({ setValue, value, setTodo, todo, setStatus, status }) => {

    const changeHandler = (e) => {
        setValue(e.target.value)
    };

    const todoHandler = (ev) => {
        ev.preventDefault()
        if (value !== "") {
            setTodo([...todo,
            {
                text: value,
                completed: false,
                id: Math.random() * 1000
            }]),
                setValue("")
        }
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
        console.log(status);

    }
    return (
        <form>
            <input
                type="text"
                className="todo-input"
                placeholder="type a todo!"
                onChange={changeHandler}
                autoFocus
                value={value}
                onBlur={({ target }) => target.focus()}
            />

            <button className="todo-button" type="submit" onClick={todoHandler}>
                +<i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
};

export default Form;