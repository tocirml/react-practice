import React, { useState } from 'react';

const TodoForm = ({ addTodo, changeFilter }) => {
  const [textValue, setTextValue] = useState('');

  const submitTodoHandler = (e) => {
    e.preventDefault();
    addTodo({
      value: textValue,
      id: Math.random() * 10000,
      completed: false,
    });
    setTextValue('');
  };

  const inputChangeHandler = (e) => {
    setTextValue(e.target.value);
  };

  const filterHandler = (e) => {
    changeFilter(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={submitTodoHandler}>
      <input
        onChange={inputChangeHandler}
        type="text"
        id="todo-input"
        value={textValue}
      />
      <button className="todo-submit" type="submit">
        <i className="icon icon-plus"></i>
      </button>
      <select
        name="todo-filter"
        className="todo-filter"
        onChange={filterHandler}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default TodoForm;
