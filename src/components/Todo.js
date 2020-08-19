import React from "react";

function Todo({ todo }) {
    return (
        <div style = {{ display: "flex" }}>
            <input type="checkbox" />
            <li
            style={{
                color: "white",
                textDecoration: todo.completed ? "line-through" : null
            }}
            > 
            {todo.description} </li>
        </div>
    );
}

export default Todo;