import React from "react";

const TodoApp = () => {
    const [task, setTask] = React.useState([]);
    const [input, setInput] = React.useState("");



    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleTask = (e) => {
        const todoList = {
            id: task.length + 1,
            todo: input
        }
        setTask([...task, todoList])
    }

    const handleDelete = (id) => {
        const removedTask = task.filter((task) => task.id !== id);
        setTask(removedTask);
    }


    return (
        <div className="todo-app">
            <div>
                <input onChange={handleInput} type="text"></input>
                <button onClick={handleTask}>Add Task</button>
                {task.map(({ id, todo }) =>
                (
                    <div key={id}>
                        <div >{todo}</div>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                        <hr />
                    </div>

                ))}
            </div>
        </div>
    )

}

export default TodoApp;