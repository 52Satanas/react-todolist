import React from "react";

function Todo({ todo, setCompleted }) {

    function handleComplete() {
        setCompleted(todo.id);
    }

    return (
        <div style = {{ display: "flex" }}>
            <input type="checkbox" onClick= { handleComplete }/>
            <li
            style={{
                color: "white",
                textDecoration: todo.done ? "line-through" : null
            }}
            > 
            {todo.description} </li>
        </div>
    );
}

export default Todo;