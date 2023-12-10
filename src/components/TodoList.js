import React from 'react';
import TodoItem from './TodoItem';
import '../styles/styles.css';

const TodoList = ({ todos, onToggle }) => {
    return ( 
        <div className="todoList">
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
            })}
        </div>
     );
}
 
export default TodoList;
