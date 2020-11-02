import React from 'react';

const Todo = (props) => {
  return (
    <div className="todo-todo">
      <li className={`todo-li ${props.todo.completed ? 'todo-checked' : ''}`}>
        {props.todo.value}
      </li>
      <button
        value="check"
        onClick={() => {
          props.statusHandler(props.todo.id);
        }}
      >
        <i className="icon icon-check"></i>
      </button>
      <button
        value="delete"
        onClick={() => {
          props.deleteHandler(props.todo.id);
        }}
      >
        <i className="icon icon-delete"></i>
      </button>
    </div>
  );
};

export default Todo;
