import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import '../../styles/TodoApp.scss';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [filter, todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeCompleteStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }; // todo.completed = !todo.completed
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <p>Add todos to the list</p>
      <TodoForm addTodo={addTodo} changeFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        deleteHandler={deleteTodo}
        statusHandler={changeCompleteStatus}
      />
    </div>
  );
};

export default TodoApp;
