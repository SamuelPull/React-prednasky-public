import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

const Header = (props) => {
  if (props.isVisible === true) {
    return <h1>{props.title}</h1>
  } else {
    return null;
  }
}

// druhy sposob
const Subtitle = (props) => {
  const subtitle = props.subtitle;
  return subtitle ? <h2>{subtitle}</h2> : null;
}


const TodoList = (props) => {
  const todos = props.todos;
  if (todos.length === 0) {
    return <p>Nothing to do</p>
  } else {
    return (
      <div>
        <p>Here is your TODO list</p>
        {todos.map((todo) => {
          return (
            <div key={todo.name}>
              <Todo todo={todo} />
              <button onClick={() => props.onRemove(todo.name)}>x</button>
              {!todo.completed && <button onClick={() => { return props.onComplete(todo.name)}}>Hotovo!</button>}
            </div>
          )
        })}
     </div>);
  }
}

const Todo = (props) => {
  return (
  <div>
    <h3>{props.todo.name}</h3>
    <p>{props.todo.description}</p>
    {props.todo.completed && <p>DONE</p>}
  </div>)
}

// {
//   id,
//   name,
//   description,
//   completed: true/false
// }

const TodoForm = (props) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault(); // prevent full page refresh  
      props.onAdd({name, description})
      setName('')
      setDescription('')
  }

  return (
    <form onSubmit={onFormSubmit} >
        <input type="text" value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <textarea value={description} 
        onChange={(e) => setDescription(e.target.value)}></textarea>
        <button>Add TODO</button>
    </form>
  )
}


const App = () => {

  const [todos, setTodos] = useState([])
  
  const addTodo = async (todo) => {   
    // setTodos([...todos, todo]);
    const newTodo ={
      name: todo.name,
      description: todo.description,
      completed: false
    }
    await axios.post('http://localhost:3001/todos', newTodo)
  }

  const removeTodo = (name) => {
    const updatedTodos = todos.filter(prvokPola => { return prvokPola.name !== name }) 
    setTodos(updatedTodos);
  }

  const completeTodo = (name) => {
    setTodos(todos.map((t) => {
      if (t.name === name) { 
        return {...t, completed: true};
      } else return t;
    }))
  }
  
  const removeAllClick = () => {
    setTodos([])
  }

  return  (
    <div>
      <Header title="TODO LIST" isVisible={true}></Header>
      <Subtitle subtitle='Co mozes urobit zajtra, nerob dnes!' ></Subtitle>      
      <TodoList todos={todos} onRemove={removeTodo} onComplete={completeTodo}/>      
      <TodoForm onAdd={addTodo}></TodoForm>
      <button onClick={removeAllClick}>Remove All</button>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

