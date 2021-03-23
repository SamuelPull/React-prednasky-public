import React from 'react';
import ReactDOM from 'react-dom';

// funkcny react component
// zaciatocne velke pismeno
// const Header = () => {
//   return <h1>Rambo III opat v kinach!!!</h1>
// }

// const Header = (props) => {
//   return (
//     <div>
//     <h1>{props.nazov}</h1>
//     <h2>{props.title}</h2>
//    </div>
//   )
// }

const Header = (props) => {
  if (props.isVisible === true) {
    return <h1>{props.title}</h1>
  } else {
    return null;
  }
}

// prvy sposob
// const Subtitle = (props) => {
//   return props.subtitle ? <h2>{props.subtitle}</h2> : null;
// }

// druhy sposob
const Subtitle = (props) => {
  const subtitle = props.subtitle;
  return subtitle ? <h2>{subtitle}</h2> : null;
}

// ULOHA
// Vytvorit komponent s nazvom Todo
// dostava argument props
// ktory dostane napr. todo="naucit sa React"
// v definicii komponentu k premennej pristupujeme pomocou props.todo
// a vrati <div>{todo}</div>

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

const renderApp = () => {
  const app = (
    <div>
      <Header title={info.title} isVisible={true}></Header>
      <Subtitle subtitle={info.subtitle} ></Subtitle>
      <p>{(info.todos.length > 0) ? 
      'Here is your todo list' : 
      'Nothing to do'}</p>
      <p>{info.todos.length}</p>
      <div>
        {
          info.todos.map(x => {
            return (<p key={x}>{x}</p>)
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