import React, { useState } from 'react';
import '../styles/styles.css';

//onAdd is an function which is run whe Addtodo is executed
const AddTodo = ({ onAdd }) => {
    //useState defualt value is empty that why ''
    const [text, SetText] = useState('');


    //this function is called when form is submitted
    //checks if the entered text is not empty or not
    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() !== '') {
            onAdd(text);
            SetText('');
        }
    }

    return (
        <form className='addTodoForm' onSubmit={handleSubmit}>
            <input type="text"
                className='addTodoInput'
                placeholder='Add Todo'
                value={text}
                onChange={(e) => SetText(e.target.value)
                } />

            <input type="submit"
                value='Add'
                className='btn'
            />
        </form>
    );
}

export default AddTodo;