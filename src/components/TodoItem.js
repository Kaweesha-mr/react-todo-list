import { ClassNames } from '@emotion/react';
import React from 'react';

const TodoItem = ({todo,onToggle}) => {
    return ( 
        <div className="todo-item">
            <input type='checkbox' className='checkbox' onChange={() => onToggle(todo.id) }/>
            <span className='description'> {todo.text} </span>
        </div>
     );
}
 
export default TodoItem;
