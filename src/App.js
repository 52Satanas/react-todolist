import React, {useEffect, useState} from 'react';
import { Typography } from '@material-ui/core';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

//local storage Key (melhor como dovenv para casos mais sérios)
const LOCAL_KEY = 'todo-list'

function App() {

  //States
 const [todos, setTodos] = useState([]);
 const [filter, setFilter] = useState('all');

 // useEffect para carregar os Todos anteriormente definidos
 useEffect(() => {
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_KEY))
  if(storageTodos) {
    setTodos(storageTodos);
  }
}, []);
 
// useEffect para ir guardando os Todos em memória caso um restart subito
 useEffect(() => {
   localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
 }, [todos]);
 
 //função responsável pela adição de um novo Todo
 function addTodo(todo) {
    return setTodos([todo, ...todos]);
 }

// função para marcar um Todo como realizado
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

//função para alterar o estado do filtro ['all', 'completed', 'active'] 
function filterChange(newfilter) {
  console.log(filter);
  return setFilter(newfilter);
}

  return (
    <div className='App'>
        <Typography position='absolute' className='Title' variant='h1'>Todos</Typography>
        <FilterButtons filterChange={ filterChange }/>        
        <NewTodoForm addTodo={addTodo} />
        <TodoList className='Todo-List' todos={ todos } filter={filter} setCompleted={ setCompleted } />
    </div>
  );
}

export default App;
