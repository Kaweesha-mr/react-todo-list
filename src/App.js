import React, {useState} from 'react';
import './App.css';
import './styles/styles.css';
import AddTodo from './components/AddTodo';

function App() {

  const [todos,setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos,newTodo]);
  }

  
  return (
    <div className="App">
      <h1 className='title'>React Todo List</h1>
      <AddTodo onAdd={handleAddTodo}/>
      
    </div>
  );
}

export default App;
