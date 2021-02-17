import React from 'react';
import './style.css';

const Todo = ({ id, title, deleteTask }) => {
    return (
        <div className="todo">
            <span className="text">{ title }</span>
            <button onClick={() => deleteTask(id)}>Удалить</button>
        </div>
    );
};

export default Todo;