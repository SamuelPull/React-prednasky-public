import React from 'react';
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

const info = {
  title: 'Pokracujeme 11:05',
  subtitle: 'Co mozes urobit zajtra, nerob dnes!',
  todos: ['Upiect pizzu', 'Ist do lekarne']
}

const onFormSubmit = (e) => {
  e.preventDefault(); // prevenet full page refresh

  const todo = e.target.elements.newtodo.value;
  if (todo) {
    info.todos.push(todo);
    e.target.elements.newtodo.value = "";
    renderApp();
  }
}

const removeAllClick = () => {
  info.todos = []
  renderApp();
}

const renderApp = () => {
  const app = (
    <div>
      <Header title={info.title} isVisible={true}></Header>
      <Subtitle subtitle={info.subtitle} ></Subtitle>      
      <p>{info.todos.length}</p>
      <TodoList todos={info.todos}/>      
      <form onSubmit={onFormSubmit} >
        <input type="text" name="newtodo" />
        <button>Add TODO</button>
      </form>
      <button onClick={removeAllClick}>Remove All</button>
    </div>
  )

  ReactDOM.render(
      app,
    document.getElementById('root')
  );
}

renderApp();