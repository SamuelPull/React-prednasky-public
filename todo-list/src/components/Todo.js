import React from 'react'
import './Todo.css';

const Todo = (props) => {
  return (
    <div className="todo">
      <h5 className="todo-name">{props.todo.name}</h5>
      <p className="todo-description">{props.todo.description}</p>
      {props.todo.completed && <p className="todo-done">DONE</p>}
    </div>);
}

export { Todo }