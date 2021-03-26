import React, {useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

import './styles.css'

// root component
const App = () => {
  const [todos, setTodos] = useState([])

  const loadTodos = useCallback(async () => {
    await axios.get('http://localhost:3001/todos/').then(response => setTodos(response.data))
  }, [])
  
  useEffect(() => {
    loadTodos();
  }, [loadTodos])

  const addTodo = async (todo) => {
    const newTodo = {
      name: todo.name,
      description: todo.description,
      completed: false
    };
    await axios.post('http://localhost:3001/todos/', newTodo).then(loadTodos)
  }

  const removeTodo = async (id) => {
    console.log('removeTodo called')
    console.log('with id ' + id)
    await axios.delete(`http://localhost:3001/todos/${id}`).then(loadTodos)
  }

  const completeTodo = async (id) => {
    console.log('completeTodo called with id ' + id);
    await axios.put(`http://localhost:3001/todos/${id}`, {completed: true});
    loadTodos();
  }


  const removeAll = async () => {
    await axios.delete(`http://localhost:3001/todos/delete/all`);
    loadTodos();
  }


  return (
    <div className="app">
      <div className="container">
        <Header appName="UROB ZMENU 2021" title="TODO list" subtitle="Co mozes urobit zajtra, nerob dnes!" isVisible={true} />
        <div className="content">
          <TodoForm onAdd={addTodo} />
          <TodoList todos={todos} onRemove={removeTodo} onComplete={completeTodo} onRemoveAll={removeAll}/>    
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);