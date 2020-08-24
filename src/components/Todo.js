import React from 'react';
import { Checkbox, ListItem, Typography, Divider, Container, colors } from '@material-ui/core';
import './Components.css';

function Todo({ todo, setCompleted }) {

    function handleComplete() {
        setCompleted(todo.id);
    }

    return (
        <Container>
            <ListItem className='Todo'>
                <Checkbox 
                    style ={ {
                        color: colors.green[400],
                        '&$checked': {
                          color: colors.green[600],
                    }}}
                    checked={todo.done}
                    onClick= { handleComplete }
                />
                <Typography
                variant='body1'
                style={{
                    fontFamily:'Helvetica Neue',
                    fontSize:30,
                    fontWeight: todo.done ? 'bolder' : 'lighter',
                    textDecoration: todo.done ? 'line-through' : null,
                }}
                > 
                {todo.description} </Typography>
            </ListItem>
            <Divider />
        </Container>
    );
}

export default Todo;