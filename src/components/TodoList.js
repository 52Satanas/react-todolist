import React from "react";
import Todo from "./Todo"

function TodoList( { todos, filter, setCompleted }) {
    let list;
    switch (filter) {
        case "completed":
            list = todos.filter( (todo) => 
                todo.completed === true
            )
            
            break;
        
        case "active":
            list = todos.filter( (todo) => 
                todo.completed === false
            )

            break;        
        default:
            list = todos;
            break;
    }


    return (
        <ul>
            {list.map( todo => (
                <Todo key={todo.id} todo={todo} setCompleted={ setCompleted }/>
            ))}
        </ul>
    );

}

export default TodoList;