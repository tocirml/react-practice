import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteHandler, statusHandler }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteHandler={deleteHandler}
              statusHandler={statusHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
