import React, {useEffect, useState} from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoList from "./components/TodoList"

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

  return (
    <div className="App">
      <header className="App-header">
        <p>Todos</p>
        <NewTodoForm addTodo={addTodo} />
        <TodoList todos={ todos } filter={filter}/>
      </header>
    </div>
  );
}

export default App;
