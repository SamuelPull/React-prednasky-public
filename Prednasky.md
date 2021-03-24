# REACT

## PONDELOK

## React intro

JavaScript kniznica na vytvaranie user interfacov (UIs).

Facebook, Instagram, Netflix, WhatsApp, Dropbox ...

## Aktivita: Rozbehanie pracovneho prostredia

* [ ] Visual Studio Code (<https://code.visualstudio.com/>)
* [ ] Node.js + NPM (<https://nodejs.org/en/download/>)
* [ ] Chrome + React developer tools
* [ ] React boilerplate: Aktivita 1-1

## Prednasky, materialy, kod, ulohy, riesenia

Budeme postupne pridavat do tohoto public repa.

* `https://github.com/SamuelPull/React-prednasky-public`

## Aktivita 1-1: (<https://create-react-app.dev/docs/getting-started>)

1. `npx create-react-app hello-react-world`
2. `cd hello-react-world`
3. `yarn start`

## JSX

JSX je syntakticke rozsirenie JavaScriptu, ktore sa podoba na HTML.

Vytvorte JSX element s nazvom 'element',
ktory obsahuje nasledovne prvky:

* h1 -> Name: meno
* p -> Town: mesto
* p -> Animal: oblubene zviera
* p -> Food: oblubene jedlo

```
const element = (
  <div>
    <h1>Name: Samuel</h1>
    <p>Town: Bratislava</p>
    <p>Animal: dogs</p>
    <p>Food: Hamburger</p>
  </div>
)
```

## JSX Expressions

Premenne v JSX musia byt pouzite v *curly braces* zatvorkach.

```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

V "kuceravych" zatvorkach mozeme volat aj funkcie:

```
const name = 'Josh Perez';
const element = <h1>Hello, {name.toUpperCase()}</h1>;
```

V `{ }` zatvorkach moze byt pouzity lubovolny platny JavaScript vyraz, napr. funkcia:

```
function makeGreeting(name) {
  return "Hello, " + name + "!"
}

const user = "Bill Gates";
const element = (
  <h1>
    Hello, {makeGreeting(user)}!  
  </h1>);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

V jednom JSX prvku mozeme pouzit viacero vyrazov:

```
const name = "Samuel";
const town = "Bratislava"
const animal = "komar";
const food = "cheesecake"
const element = (
  <div>
    <h2>Name: {name}</h2>
    <p>Town: {town}</p>
    <p>Animal: {animal}</p>
    <p>food: hamburger</p>
  </div>
);
```

Ak mame tieto udaje v jednom objekte, napriklad ked dostaneme tieto udaje z databazy, mozeme pouzit `.` operator.

```
const user = {
  name = "Samuel",
  const town = "Bratislava",
  const animal = "komar",
  const food = "cheesecake"
};
const element = (
  <div>
    <h2>Name: {user.name}</h2>
    <p>Town: {user.town}</p>
    <p>Animal: {user.animal}</p>
    <p>food: hamburger</p>
  </div>
);
```

## Conditional rendering

Bez podmieneho renderovania a podmienok vseobecne sa v developemnte daleko nedostaneme.
if toto, then hento, if not, do tamto.
Priklady: ak je user lognuty, ukaz log out button. ak nie je, ukaz log in button.

```
const futureWeather = {
  location: "Trencin",
  humidity: "60%"
  // temperature: 20
}

const predpovedPocasia = (
  <div>
    <h1>Weather in {futureWeather.location}:</h1>
    <p>Humidity: {futureWeather.humidity}</p>
    <p>Temperature: {futureWeather.temperature}</p>
  </div>
);

const getTemperature1 = (weather) => {
  return weather.temperature;
}

<p>Temperature: {getTemperature(weather)}</p>


const getTemperature2 = (weather) => {
  if (weather.temperature) {
    return temperature;
  } 
  return 'unknown';
}

...

const getTemperature3 = (weather) => {
  if (weather.temperature) {
    return <p>Temperature: {weather.temperature}</p>
  } 
  return undefined;
}

const predpovedPocasia3 = (
  <div>
    <h1>Weather in {futureWeather.location}:</h1>
    <p>Humidity: {futureWeather.humidity}</p>
    {getTemperature(futureWeather)}
  </div>
);
```

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

Otvor konzolu v prehliadaci:

`true ? "jablko" : undefined`
`false ? "jablko" : undefined`

`true && "jablko"`
`false && "jablko"`

```
{futureWeather.temperature > 25 && "😅"}
```

Moze nastat situacia ked nemame objekt `futureWeather`:

```
{(futureWeather && futureWeather.temperature > 25) && "😅"}
```

Vo vseobecnosti pouzivame v Reacte `&&` ked pri splneni podmienky chceme nieco ukazat a pri nesplneni nic,
ternary `a ? b : c` ked chceme ukazat nieco ine pri splneni a nieco ine pri nesplneni podmienky.

```
{futureWeather.temperature > 25 ? "😅" : "🥶"}
```

## Events, inputs and forms

* vytvorit novu react aplikaciu a vymazat nepotrebne subory
* pozor aby sme boli v spravnom foldri
`npx create-react-app interaction-app`

```
import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;
const element = (
  <div>
    <h1>INTERACTION APP</h1>
    <h2>Count: {count}</h2>
    <button id="plus-button" class="button">+1</button>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Ked pridame `button` a vyrenderujeme, v konzole dostaneme error `Unknown DOM property class`. Tu vidime jeden z rozdielov JSX oproti HTML.
Niektore properties boli premenovane - `class` je rezervovany keyword v JavaScripte.

Podobne onclick v HTML

```
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

je v Reacte

```
<button onClick={activateLasers}>  Activate Lasers
</button>
```

### Uloha

```
import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;

const plusOne = () => {
  count++;
  renderApp();
}

const minusOne = () => {
  console.log('minusOne')
}

const resetToZero = () => {
  console.log('reset')
}

// vo funkcii minusOne znizit count o 1
// a zavolat renderApp

// vo funkcii resetToZero zmenit count na 0
// zavolat renderApp


const renderApp = () => {
const element = (
  <div>
    <h1>INTERACTION APP</h1>
    <h2>Count: {count}</h2>
    <button id="plus-button" className="button" 
     onClick={plusOne}>+1</button>
    <button onClick={minusOne}>-1</button> 
    <button onClick={resetToZero}>reset</button>   
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);
}

renderApp();
```

### Problem s databindingom

Ak zmenime funkciu plusOne na

```
const plusOne = () => {
  count++;
  alert('plusOne:' + count)
}
```

vidime, ze premenna count sa zvysuje, ale h2 Count stale ukazuje 0. Aplikacia bola vyrenderovana a neobnovuje sa.

V elements paneli vidime prvky ktore pri renderovani blikaju.

## UTOROK

### Inputs and forms

* Vytvorit novu aplikaciu
    * - vytvorit novu react aplikaciu a vymazat nepotrebne subory
* pozor aby sme boli v spravnom foldri
* `npx create-react-app todo-app`

```
import React from 'react';
import ReactDOM from 'react-dom';

const info = {
  title: 'TO DO list',
  subtitle: 'Co mozes urobit zajtra, nerob dnes!',
  todos: ['Upiect pizzu', 'Ist do lekarne']
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
  </div>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);
```

### full page refresh

```
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
```

`e` je event. Eventy su "veci" ktore sa deju HTML prvkom. Pomocou JavaScriptu vieme na taketo eventy reagovat.
Eventy spusta prehliadac alebo pouzivatel.
Napriklad: HTML stranka dokoncila nacitavanie, HTML input field bol zmeneny, HTML button bol kliknuty.

V nasom pripade pouzivatel klikne na button a tym spusti event, ku ktoremu prisupujeme v handler funkcii `onFormSubmit` cez argument `e`.

### Uloha na renderovanie todo

```
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
```

### Riesenie

```
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

const renderApp = () => {
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
}

renderApp()
```

### Renderovanie pola

```
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
```

### Renderovane todos

```
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
  }
}

const removeAllClick = () => {
  info.todos = []
  renderApp();
}

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
```

## REACT komponenty

* React pouziva "component based architecture"
* Komplexne aplikacie su "rozbite" na jednotlive komponenty, ktore su samostatne jednoduche
* Kazdy komponent zodpoveda za svoje JSX
* Ako rozbit stranku do komponentov  
* Priklad z praxe: open-source TruBudget

* V Reacte existuju dva hlavne druhy komponentov: function a class components, k detailom neskor

* Zmyslom Reactu nie je pisat aplikaciu ako HTML webstranku v JSX, ale v komponentoch ako stavebnicu
  
## Vytvaranie komponentov

Zozaciatku budeme pouzivat hlavne funkcne React komponenty.

```
const Header = () => {
  return <h1>Rambo III opat v kinach!</h1>
}
```

Toto je function component, lebo je to funckia ktora vracia JSX. Nazov funkcie je nazvom komponentu. V Reacte sa nazov komponentu zacina vzdy velkym pismenom.
Tymto menom je potom pouzity v JSX ineho komponentu, uzavrety v zobacikovych zatvorkach `<` `>`, podobne ako stare zname `<div>`, `<p>`, `<h1>` a dalsie HTML prvky.
Takyto komponent mozeme povazovat za user-defined HTML prvok. Velke pismeno je dolezite! React ho pouziva na odlisenie medzi HTML prvkami a React komponentmi.

Priklad pouzitia:

```
import React from 'react';
import ReactDOM from 'react-dom';


const header = () => {
  return <h1>Rambo III opat v kinach!</h1>
}

const jsx = (
  <div>
    <h3>Fantasticka sprava</h3>
    <!-- Tu je pouzity nas vlastny React komponent!    -->
    <Header />
  </div>
);

ReactDOM.render(
  jsx,
  document.getElementById('root')
);
```

React je c00L, lebo komponenty su reusable. Mozeme ich pouzit viackrat na lubovolne miesto:

```
const jsx = (
  <div>
    <h3>Fantasticka sprava</h3>
    <Header />
    <Header />
    <Header />
    <Header />
    <ul>
      <li><Header /></li>
      <li><Header /></li>
    </ul>
    <Header />   
  </div>
);
```

Pozor, vzdy musime mat jeden prvok, ktory ostatne uzatvara. V nasom pripade je to `div`.

Vsetky `Header` komponenty ukazuju rovnaky nadpis. Co s tym?

## Props

Rovnako ako funkcie, funkcne React komponenty mozu dostavat argumenty. V svete Reaktu sa volaju `props` (properties).

```
const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

V nasom priklade si vyskusame

```
<Header title="Jablkovy ocot"></Header>
<Header title="Jablkovy kolac"></Header>
...
const Header = (props) => {
  return <h1>{props.title}</h1>
}
```

Vstupov do `props` moze byt viacero:

```
const Header = (props) => {
  if (props.isVisible) {
   return <h1>{props.title}</h1>
  } else return '';
}
...
<Header title="Jablkovy ocot" isVisible={false}></Header>
```

`false` v `isVisible={false}` je zabalene do curly braceov, lebo stale sa pohybujeme v JSX. `isVisible="false"` by bolo brane ako string._

Z toho, ako pristupujeme k hodnotam `props.isVisible` a `props.title` vidime, ze `props` je objekt, a premenne, ku ktorym sa chceme dostat su properties toho objektu.

Vstupy do props nemusia byt len stringy alebo booleany, moze to byt hocico.

```
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
```

## STREDA

### Uloha so startovacim kodom

```
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
  // 3. potom <div> </div>, vovnutri ktoreho mapovanie todos pola na jednotlive Todo komponenty:
  // todos.map(prvok pola => { return ... })
}

const Todo = (props) => {
  return <p>{props.todo}</p>
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
```

### Riesenia
```
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
          return <Todo todo={todo}/>
        })}
     </div>);
  }

  // return (
  //   <div>
  //     {todos.length === 0 ? <p>Nothing to do</p> : <p>Here is your TODO list</p>}
  //     <div>
  //       {todos.map( prvokPola => {
  //         return <Todo todo={prvokPola}></Todo>
  //       })}
  //     </div>
  //   </div>
  // 1. ak je dlzka todos 0, vratit <p> -> Nothing to do  
  // 2. inak vratit <p> -> Here is your TODO list: 
  // 3. vovnutri mapovanie todos pola na jednotlive Todo komponenty
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

const renderApp = () => {
  const app = (
    <div>
      <Header title={info.title} isVisible={true}></Header>
      <Subtitle subtitle={info.subtitle} ></Subtitle>      
      <p>{(info.todos.length > 0) ? 
      'Here is your todo list' : 
      'Nothing to do'}</p>
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
```

### Odstranenie komentarov a errorov

```
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
```
