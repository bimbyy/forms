import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTask = (id, newTask) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task: newTask } : todo));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          updateTask={updateTask}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
}

export default TodoList;