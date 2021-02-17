import React, { useState } from 'react';
import Todo from './components/Todo';
import Input from './components/Input';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
    { id: 4, title: 'Task 4' },
    { id: 5, title: 'Task 5' },
  ]);

  const deleteTask = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };

  const addTask = (title) => {
    const newTodos = [{ id: todos.length + 1, title }, ...todos];
    setTodos(newTodos);
  };

  return (
    <div>
      <Input addTask={addTask}/>
      {
        todos.map((todo) => (
          <Todo id={todo.id} title={todo.title} key={todo.id} deleteTask={deleteTask} />
        ))
      }
    </div>
  );
}

export default App;
