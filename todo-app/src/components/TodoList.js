import React from 'react'

import './TodoList.css'

import { Todo } from './Todo'



export const TodoList = (props) => {
  const todos = props.todos;
  if (todos.length === 0) {
    return <p>Nothing to do</p>
  } else {
    return (
      <div className="todo-list">
        <div className="todo-header">
          <p>Here is your TODO list</p>
        </div>
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="todo-row">
              <Todo todo={todo} />
              <button className="button button-del" onClick={() => props.onRemove(todo.id)}>x</button>
              {!todo.completed && <button className="button button-done" onClick={() => { return props.onComplete(todo.id)}}>Hotovo!</button>}
            </div>
          )
        })}
     </div>);
  }
}