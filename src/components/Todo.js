import React from "react";
import { Checkbox, ListItem, Typography, Divider, Container } from '@material-ui/core';

function Todo({ todo, setCompleted }) {

    function handleComplete() {
        setCompleted(todo.id);
    }

    return (
        <Container>
            <ListItem >
                <Checkbox 
                    color= "primary"
                    checked={todo.done}
                    onClick= { handleComplete }
                />
                <Typography
                variant="body1"
                style={{
                    fontWeight: "bolder",
                    textDecoration: todo.done ? "line-through" : null
                }}
                > 
                {todo.description} </Typography>
            </ListItem>
            <Divider />
        </Container>
    );
}

export default Todo;