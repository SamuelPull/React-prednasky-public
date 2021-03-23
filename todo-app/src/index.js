import React from 'react';
import ReactDOM from 'react-dom';

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
    console.log(todo)
    console.log(info.todos)
  }
}

const removeAllClick = () => {
  info.todos = []
  renderApp();
  console.log(info.todos)
}

const things = ['a','b','c',92]

// V aplikacii zobrazovat prvky info.todos
// nezbudnite na kucerave zatvorky
// error si nevsimajte


const renderApp = () => {
  const app = (
    <div>
      <h1>{info.title}</h1>
      {info.subtitle && <h2>{info.subtitle}</h2>}
      <p>{(info.todos.length > 0) ? 
      'Here is your todo list' : 
      'Nothing to do'}</p>
      <p>{info.todos.length}</p>
      <div>
        {
          things.map(x => {
            return (<p>{x}</p>)
          })
        }
      </div>
      <form onSubmit={onFormSubmit}>
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