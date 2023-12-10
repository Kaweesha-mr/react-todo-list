import React, {useState} from 'react';
import './App.css';
import './styles/styles.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {

  const [todos,setTodos] = useState([
    {id: 1, text: "buy coffee", completed:false},
    { id: 2, text: "Clean the room", completed: false },
  ]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos,newTodo]);
  }

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };



  
  return (
    <div className="App">
      <h1 className='title'>React Todo List</h1>
      <AddTodo onAdd={handleAddTodo}/>
      <TodoList todos={todos} onToggle={handleToggle}/>
    </div>
  );
}

export default App;
