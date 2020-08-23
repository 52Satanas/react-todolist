import React from "react";
import { List } from '@material-ui/core';
import Todo from "./Todo";
import '../App.css';

function TodoList( { todos, filter, setCompleted }) {
    let list;
    switch (filter) {
        case "completed":
            list = todos.filter( (todo) => 
                todo.done === true
            )
            
            break;
        
        case "active":
            list = todos.filter( (todo) => 
                todo.done === false
            )

            break;        
        default:
            list = todos;
            break;
    }


    return (
        <List className="Todo-List">
            {list.map( todo => (
                <Todo key={todo.id} todo={todo} setCompleted={ setCompleted }/>
            ))}
        </List>
    );

}

export default TodoList;