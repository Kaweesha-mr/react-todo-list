import React from 'react';

const TodoItem = () => {
    return ( 
        <div className="todo-item">
            <input type='checkbox' onChange={() => ontoggle(todo.id)}/>
            <span className='description'> {todo.text} </span>
        </div>
     );
}
 
export default TodoItem;
