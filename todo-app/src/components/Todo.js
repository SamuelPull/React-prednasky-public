import React from 'react';

import './Todo.css'

export const Todo = (props) => {
  return (
  <div>
    <h3>{props.todo.name}</h3>
    <p>{props.todo.description}</p>
    {props.todo.completed && <p>DONE</p>}
  </div>)
}