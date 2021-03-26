import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'

import './styles.css'


const App = () => {

  const [todos, setTodos] = useState([])
  
  const loadTodos = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/todos');
    setTodos(response.data)
  }, [])

  useEffect(() => {
   loadTodos(); 
  }, [loadTodos])
  
  

  const addTodo = async (todo) => {  
    const newTodo ={
      name: todo.name,
      description: todo.description,
      completed: false
    }
    await axios.post('http://localhost:3001/todos', newTodo)
    loadTodos()
  }

  const removeTodo = async (id) => {
    await axios.delete('http://localhost:3001/todos/' + id)
    loadTodos();
  }

  const completeTodo = async (id) => {
    await axios.put('http://localhost:3001/todos/' + id, {completed: true})
    loadTodos();
  }
  
  const removeAllClick = async () => {
    await axios.delete('http://localhost:3001/todos/delete/all/')
    loadTodos()

  }

  return  (
    <div className="app">
      <div className="container">
        <Header title="TODO LIST" isVisible={true} subtitle='Co mozes urobit zajtra, nerob dnes!'></Header>
        <div className="content"> 
          <TodoForm onAdd={addTodo}></TodoForm>
          <TodoList todos={todos} onRemove={removeTodo} onComplete={completeTodo}/>                
          <button onClick={removeAllClick}>Remove All</button>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

