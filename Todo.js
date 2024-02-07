import React, { useState } from 'react';
import './Todo.scss';

function Todo({ id, task, removeTodo, toggleComplete, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // State to control deletion animation

  const handleEdit = (e) => {
    e.preventDefault();
    updateTask(id, editTask);
    setIsEditing(false);
  };

  const toggleForm = () => setIsEditing(!isEditing);
  const handleChange = (e) => setEditTask(e.target.value);
  const handleComplete = () => {
    toggleComplete(id);
    setIsCompleted(!isCompleted);
  };
  const handleDelete = () => {
    // Assuming Todo.scss has the fadeOut animation defined
    document.getElementById(`todo-${id}`).classList.add('fadeOut');
    setTimeout(() => removeTodo(id), 1000); // Wait for the animation to complete before deleting
  };

  return (
    <div id={`todo-${id}`} className={`Todo ${isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span onClick={handleComplete} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
            {task}
          </span>
          <button onClick={toggleForm}>Edit</button>
          <button onClick={handleDelete}>X</button>
        </>
      )}
    </div>
  );
}

export default Todo;
