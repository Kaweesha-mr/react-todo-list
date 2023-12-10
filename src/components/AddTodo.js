import React, { useState } from 'react';
import '../styles/styles.css';

//onAdd is an function which is run whe Addtodo is executed
const AddTodo = ({ onAdd }) => {
    //useState defualt value is empty that why ''
    const [text, setText] = useState('');


    //this function is called when form is submitted
    //checks if the entered text is not empty or not
    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() !== '') {
            const newTodo = { id: Date.now(), text: text, completed: false };
            onAdd(newTodo);
            setText('');
        }
    }

    return (
        <form className='addTodoForm' onSubmit={handleSubmit}>
            <input type="text"
                className='addTodoInput'
                placeholder='Add Todo'
                value={text}
                onChange={(e) => setText(e.target.value)
                } />

            <input type="submit"
                value='Add'
                className='btn'
            />
        </form>
    );
}

export default AddTodo;