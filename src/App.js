import React, {useEffect, useState} from 'react';
import { Typography } from '@material-ui/core';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";


const LOCAL_KEY = "todo-list"

function App() {
 const [todos, setTodos] = useState([]);
 const [filter, setFilter] = useState('all');

 useEffect(() => {
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_KEY))
  if(storageTodos) {
    setTodos(storageTodos);
  }
}, []);
 

 useEffect(() => {
   localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
 }, [todos]);
 
 function addTodo(todo) {
    return setTodos([todo, ...todos]);
 }


function setCompleted(id) {
   setTodos(
    todos.map( todo => {
      if(todo.id === id) {
        return {
          ...todo,
        done: !todo.done
        };
      }
    return todo;
    })
  );
}

function filterChange(newfilter) {
  console.log(filter);
  return setFilter(newfilter);
}

  return (
    <div className="App">
        <Typography variant="h1">Todos</Typography>
        <FilterButtons filterChange={ filterChange }/>        
        <NewTodoForm addTodo={addTodo} />
        <TodoList className="Todo-List" todos={ todos } filter={filter} setCompleted={ setCompleted } />
    </div>
  );
}

export default App;
