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

// ULOHA
const TodoList = (props) => {
  const todos = props.todos;
  // 1. ak je dlzka todos 0, vratit <p> -> Nothing to do  
  // 2. inak vratit <p> -> Here is your TODO list: 
  // 3. vovnutri mapovanie todos pola na jednotlive Todo komponenty, ktore treba vytvorit:
  // todos.map(prvok pola => { return ... })
}

const Todo = (props) => {
  return <div>{props.todo}</div>
}

const info = {
  title: 'TO DO list',
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

const data = ['papier', 'kava','noznice'];

const renderApp = () => {
  const app = (
    <div>
      <Header title={info.title} isVisible={true}></Header>
      <Subtitle subtitle={info.subtitle} ></Subtitle>      
      <p>{(info.todos.length > 0) ? 
      'Here is your todo list' : 
      'Nothing to do'}</p>
      <p>{info.todos.length}</p>
      {/* 
          nahradit div s info.todos.map novym TodoList komponentom
          <TodoList todos={info.todos} ...
      */}
      <div>
        {
          info.todos.map(x => {
            return (<p key={x}>{x}</p>)
          })
        }
      </div>
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