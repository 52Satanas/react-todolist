import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewTodoForm() {

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
        <button type="submit" />
    </form>
}

export default NewTodoForm;