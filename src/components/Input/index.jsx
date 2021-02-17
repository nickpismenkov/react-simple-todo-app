import React, { useState } from 'react';
import './style.css';

const Input = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const addNewTask = () => {
        addTask(title);
        setTitle('');
    }

    return (
        <div className="inputForm">
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={addNewTask}>Добавить</button>
        </div>
    );
};

export default Input;