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
          return <Todo todo={todo} key={todo}/>
        })}
     </div>);
  }
}

const Todo = (props) => {
  return <div>{props.todo}</div>
}


const App = () => {

  const [todos, setTodos] = useState([])
  
  const onFormSubmit = (e) => {
    e.preventDefault(); // prevent full page refresh
  
    const todo = e.target.elements.newtodo.value;
    if (todo) {
      setTodos([...todos, todo])
      e.target.elements.newtodo.value = "";
    }
  }
  
  const removeAllClick = () => {
    // ULOHA
    // zfunkcit Remove All button
    // vynulovat TODO list pomocou setTodos
    // ako argument do funkcie vlozit prazdny array []
  }

  return  (
    <div>
      <Header title="TODO LIST" isVisible={true}></Header>
      <Subtitle subtitle='Co mozes urobit zajtra, nerob dnes!' ></Subtitle>      
      <p>{todos.length}</p>
      <TodoList todos={todos}/>      
      <form onSubmit={onFormSubmit} >
        <input type="text" name="newtodo" />
        <button>Add TODO</button>
      </form>
      <button onClick={removeAllClick}>Remove All</button>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

