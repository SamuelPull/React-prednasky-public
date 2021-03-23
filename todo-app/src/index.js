import React from 'react';
import ReactDOM from 'react-dom';

const info = {
  title: 'TO DO list',
  subtitle: 'Co mozes urobit zajtra, nerob dnes!',
  todos: ['Upiect pizzu', 'Ist do lekarne']
}

const onFormSubmit = (e) => {
  e.preventDefault(); // prevenet full page refresh

  console.log("form submitted")
}

const app = (
  <div>
    <h1>{info.title}</h1>
    {info.subtitle && <h2>{info.subtitle}</h2>}
    <p>{(info.todos.length > 0) ? 
    'Here is your todo list' : 
    'Nothing to do'}</p>
    <ol>
      <li>Prva vec</li>
      <li>Druha vec</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="new-todo" />
      <button>Add TODO</button>
    </form>
  </div>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);
