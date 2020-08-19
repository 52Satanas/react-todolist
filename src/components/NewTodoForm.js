import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewTodoForm( {addTodo}) {

    const [todo,setTodo] = useState({
        id: "",
        description: "",
        done: false,   
    });


    function handleTodoInput(e) {
        setTodo({...todo, description: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.description.trim()) {
            addTodo({...todo, id:uuidv4()} )
            setTodo({ ...todo, description:"" });
        }

    }

    return <form onSubmit={handleSubmit}>
        <input
        name="newTodo"
        type="text"
        value={todo.description}
        onChange={handleTodoInput}
        />
        <button type="submit" >Add</button>
    </form>
}

export default NewTodoForm;