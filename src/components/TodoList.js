import React from "react";
import Todo from "./Todo"

function TodoList( { todos, filter}) {
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
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    );

}

export default TodoList;