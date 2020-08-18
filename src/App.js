import React, {useState} from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';

function App() {
 const [todos, setTodos] = useState([]);
 
 
 
  return (
    <div className="App">
      <header className="App-header">
        <p>Todos</p>
        <NewTodoForm />
        
      </header>
    </div>
  );
}

export default App;
