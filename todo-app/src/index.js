import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
              <button onClick={
                () => props.onRemove(todo.name)}>x</button>
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
  </div>)
}

// {
//   id,
//   name,
//   description
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
  
  const addTodo = (todo) => {   
    setTodos([...todos, todo]);
  }

  const removeTodo = (name) => {
    const updatedTodos = todos.filter(prvokPola => { return prvokPola.name !== name }) 
    setTodos(updatedTodos);
  }
  
  const removeAllClick = () => {
    setTodos([])
  }

  return  (
    <div>
      <Header title="TODO LIST" isVisible={true}></Header>
      <Subtitle subtitle='Co mozes urobit zajtra, nerob dnes!' ></Subtitle>      
      <p>{todos.length}</p>
      <TodoList todos={todos} onRemove={removeTodo}/>      
      <TodoForm onAdd={addTodo}></TodoForm>
      <button onClick={removeAllClick}>Remove All</button>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

