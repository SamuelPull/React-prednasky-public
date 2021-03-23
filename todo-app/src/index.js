import React from 'react';
import ReactDOM from 'react-dom';

// Vypisat dlzku pola po pridani prvku, podobne ak v interaction-app
// vyrenderovat aplikaciu
// 1. Vytvorit renderovaciu funkciu
// 2. Zavolat ju hned
// 3. Zavolat ju po pridani todo

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

    console.log(todo)
    console.log(info.todos)
  }
}

const app = (
  <div>
    <h1>{info.title}</h1>
    {info.subtitle && <h2>{info.subtitle}</h2>}
    <p>{(info.todos.length > 0) ? 
    'Here is your todo list' : 
    'Nothing to do'}</p>
    <p>{info.todos.length}</p>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="newtodo" />
      <button>Add TODO</button>
    </form>
  </div>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);
