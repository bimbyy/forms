import React, { useState } from 'react';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task, id: Math.random().toString() });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={handleChange} 
        placeholder="Enter a new todo" 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
