import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField} from '@material-ui/core';

function NewTodoForm( {addTodo}) {

    const [todo,setTodo] = useState({
        id: '',
        description: '',
        done: false,   
    });


    function handleTodoInput(e) {
        setTodo({...todo, description: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.description.trim()) {
            addTodo({...todo, id:uuidv4()} )
            setTodo({ ...todo, description:'' });
        }

    }

    return <form className='New-Todo' style={{padding: '20px' }}onSubmit={handleSubmit}>
        <TextField
        name='newTodo'
        type='text'
        size= 'medium'
        value={todo.description}
        onChange={handleTodoInput}
        placeholder= "What's need to be done?"
        />
        <Button
            variant='contained' 
            color='primary'
            type='submit' >
        Add</Button>
    </form>
}

export default NewTodoForm;