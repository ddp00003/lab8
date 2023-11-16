import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    document.title = 'To do list';
  }, []); // Make sure to pass an empty dependency array to run it only once

  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      todoInputRef.current.value = '';
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <h1>To do List App</h1>
      <div className="input-container">
        <input type="text" ref={todoInputRef} placeholder="Enter your to do" />
        <button className="add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="close-button" onClick={() => handleRemoveTodo(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
