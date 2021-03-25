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

## Pouzivanie zatvoriek v Reacte

### kedy pouzivame ake zatvorky??
 
#### klasicke okruhle zatvorky () pouzivame v tychto pripadoch:
 
 - v podmienkach
  ```
    if ( a > 5 ) { ... }
    (a > 5) ? true : false
 ```
 - v JSX za return ktore obsahuje html elementy alebo React komponenty
  ```
    return (<div>ahoj</div>)
    return (<TodoList todos={} />)
 ```
 
 - obaluju argumenty funkcie (ale tiez nemusia ak je len 1 argument)```
    (meno, priezivsko) => { ...telo funkcie... }
    (meno) => {}
    ```
    `meno => {}` ... toto je ten pripad ze nemusi byt zatvorka ak je jeden argument
 
 - volanie funkcie (napr. pri funkcii map alebo renderApp)
  ```
    [1,2,3].map( () => {} )
    renderApp()
```
#### zlozene zatvorky { } pouzivame v tychto pripadoch:
 
 - primarne to sluzi na oddelenie nejakeho bloku kodu napriklad telo funkcie
    () => { ..telo funkcie, tu moze byt hocijaky kod.. }

 - definicia objektu 
  ```
    const obj = {
      meno: 'Jozko',
      priezvisko: 'Mrkva'
    }
```
 - v if-else na oddelenie kodu v jednodlivych vetvach (true a false)
    if (podmienka) { ...kod ak truthy... } else { ...kod ak falsy... }

 - pri zadavani hodnoty do props (ak je hodnota text, staci pouzit uvodzovky)
  ```
    <MojKomponent meno={info.meno} priezvisko={info.priezvisko} />
    <form onSubmit={..nejaka funkcia...} >
    <div key={id} />
```

 - vypisanie hodnoty alebo vykonanie a nasledne vypisanie hodnoty (v jsx)
  ```
    <div>{ myName }<div> // toto vypise hodnotu ktora je v const myName. ak const myName = 'Jozko', tak vypise Jozko
    <div>{ 1 + 1 }<div> // toto vypise 2
    <div>{ 'abc' + ' ' + 'def' }</div> // toto vypise abc def (s medzerou)
```

#### zatvorky [ ] pouzivame v tychto pripadoch:

- definicia pola:
```
    const pole = [ 'samo', 'brano', 'peto'];
```

- vyber jedneho prvku pola:
    pole[0] // toto vyberie prvok na indexe 0, ma hodnotu 'samo'

#### tieto zobacikove zatvorky < > pouzivame v tychto pripadoch:

- pouzitie html elementu:
```
    <div>
    <h1>
    <p>
```

- pouzitie React komponentu:
```
    <MojKomponent>
    <TodoList>
```

## State

Momentalne bez manualneho renderu, volania `renderApp()`, nefunguje buttony v aplikacii. Ked si pridame `console.log` do tela funkcii, ktore su volane po kliknuti na tlacitko, vidime, zepracuju spravne, ale v aplikacii nie su viditelne ziadne zmeny. Stav komponentov sa nemeni. State v React componentoch je v podstate spojenie pamati a pozornosti. Komponent udrziava neaky stav, a zaroven, ked sa stav zmeni, komponent sa vyrenderuje nanovo. 

Pre nazornu ilustraciu pouzitia state sa vratme k starsej aplikacii `interaction-app` (`pocitadlo`).
Volali sme render po kazdej zmene, ale konecne je na case, aby React zacal renderovat tie komponenty, co treba a vtedy, ked treba. 

V Reacte existuje viac sposobov pouzitia state, prvy ktory si ukazeme sa vola `useState hook`. Prve, co musime je importovat v subore
```
import React, { useState } from 'react';
```

Sposob pouzitia je vzdy 
```
const [x, setX] = useState(initialValueForX)
```

kde `useState` je "hook" ktory nastavuje stav. Dostava neaky argument `initialValueForX`, ktory nastavuje pociatocny stav komponentu. Vracia pole, v ktorom `x` je stav, `setX` je funkcia, ktora nastavuje stav.

Pociatocna hodnota moze byt cokolvek, napr. `useState(0)`, `useState({})`, `useState([])`, `useState("ponozka")`, `useState()`, `useState(undefined)`, ...

### interaction-app nanovo

```
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// button pre -1 
// button pre vynulovanie
// inline funkcie alebo samostatne 

  
const App = () => {

  const [count, setCount] = useState(0)

  // priklad funkcie
  // const plusOne = () => {
  //   setCount(count+1)
  // }

  return (
  <div>
    <h1>INTERACTION APP</h1>
    <h2>Count: {count}</h2>
    <button id="plus-button" className="button" 
     onClick={() => setCount(count+1)}>+1</button>  
  </div>
  )
 }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

V pripade, ze handler buttonu napiseme 
```
<button onClick={setCount(count+1)}>+1</button>
```
Dostaneme velke mnozstvo errorov. onClick sa snazi nastavit ako handler vysledok volania funkcie setCount, ktora sposobuje zmenu stavu, apo zmene stavu re-render, a teda opatovne nastavenie handlera, vysledok volania funkcie setCount, ktora sposobuje zmenu stavu atd. Aplikacia sa dostane do nekonecnej spiraly.

Spravne ma byt inline funkcia
```
<button id="plus-button" className="button" 
     onClick={() => setCount(count+1)}>+1</button>
```

## useState v TODO aplikacii

```
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
```

### Spread operator

V `setTodos([...todos, todo])` su tri bodky. Volaju sa `spread operator`, a ulahcuju spajanie objektov a arrayov.
Znamena "zober vsetky prvky z toho co nasleduje za tromi bodkami a 'rozprestri' ich.
Najlahsie je to ukazat nazorne, pripadne vyskusat v konzole weboveho prehliadaca.
```
const arr = [1, 2, 3]
[...arr, 4] 
 -> [1, 2, 3, 4]
```
```
arr1 = ['a', 'b']
arr2 = ['c', 'd']
[...arr1, ...arr2] 
-> ['a', 'b', 'c', 'd']
```

Pouzivame ho preto, lebo ked pridavame todo, chceme vytvorit nove pole, v ktorom budu vsetky existujuce to-do poznamky, aj nova.
Predtym sme pouzili `info.todos.push`. Tymto sposobom by sme  nedosiahli zmenu stavu komponentu. Ak chceme aby sa pri zmene udajov nanovo zobrazil sam, musime pouzit na zmenu stavu `setState`, teda `setTodos`.


## STVRTOK

### Callbacky

```
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

const TodoForm = (props) => {

  const onFormSubmit = (e) => {
    e.preventDefault(); // prevent full page refresh
  
    const todo = e.target.elements.newtodo.value;
    if (todo) {
      props.onAdd(todo)
      e.target.elements.newtodo.value = "";
    }
  }

  return (
    <form onSubmit={onFormSubmit} >
        <input type="text" name="newtodo" />
        <button>Add TODO</button>
    </form>
  )
}


const App = () => {

  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    console.log('addTodo called')    
    setTodos([...todos, todo]);
  }
  
  const removeAllClick = () => {
    setTodos([])
  }

  return  (
    <div>
      <Header title="TODO LIST" isVisible={true}></Header>
      <Subtitle subtitle='Co mozes urobit zajtra, nerob dnes!' ></Subtitle>      
      <p>{todos.length}</p>
      <TodoList todos={todos}/>      
      <TodoForm onAdd={addTodo}></TodoForm>
      <button onClick={removeAllClick}>Remove All</button>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

```

### Pomaly rozsirujeme TODOS z pola stringov na pole objektov

V HTML formularoch, prvky formulara ako `<input>`,`<textare>` udrziavaju svoj vlastny stav a updatuju sa na zaklade vstupu pouzivatela.

V Reacte je stav drzany v stavovych premennych, a meni sa cez `setState` (`setTodos`, `setName`,...)

(https://reactjs.org/docs/forms.html)



```
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
          return <Todo todo={todo} key={todo.name}/>
        })}
     </div>);
  }
}

const Todo = (props) => {
  console.log(props.todo)
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

  const onFormSubmit = (e) => {
    e.preventDefault(); // prevent full page refresh  
      props.onAdd({name})
      setName('')
  }

  return (
    <form onSubmit={onFormSubmit} >
        <input type="text" name="newtodo" value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <textarea value={''} onChange={() => {}}></textarea>
        <button>Add TODO</button>
    </form>
  )
}


const App = () => {

  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    console.log('addTodo called')    
    setTodos([...todos, todo]);
  }
  
  const removeAllClick = () => {
    setTodos([])
  }

  return  (
    <div>
      <Header title="TODO LIST" isVisible={true}></Header>
      <Subtitle subtitle='Co mozes urobit zajtra, nerob dnes!' ></Subtitle>      
      <p>{todos.length}</p>
      <TodoList todos={todos}/>      
      <TodoForm onAdd={addTodo}></TodoForm>
      <button onClick={removeAllClick}>Remove All</button>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

```

### Spojenie HTML formulara a Reactu

```
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
          return <Todo todo={todo} key={todo.name}/>
        })}
     </div>);
  }
}

const Todo = (props) => {
  console.log(props.todo)
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
  
  const removeAllClick = () => {
    setTodos([])
  }

  return  (
    <div>
      <Header title="TODO LIST" isVisible={true}></Header>
      <Subtitle subtitle='Co mozes urobit zajtra, nerob dnes!' ></Subtitle>      
      <p>{todos.length}</p>
      <TodoList todos={todos}/>      
      <TodoForm onAdd={addTodo}></TodoForm>
      <button onClick={removeAllClick}>Remove All</button>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

Stale nam chyba odstranovanie jednotlivych todos a oznacovanie tych, ktore mame done. Vyborna prilezitost viac sa venovat callbackom!
```
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
```
Poznamka: Tym, ze nepouzivame unikatny `key` pre itemy v `TodoList`, moze dojst k roznym problemom, ak budeme mat dve TODO s rovnakym nazvom.
To mozeme vyriesit docasne napriklad tak, ze budeme pouzivat generator unikatnych keys. 
```
let ID = 1;
const getId = () => ID++;
```
Rovnako, ak mame dve TODO s rovnakym `name`, a vymazavame podla `name`, prideme o obidve. Lepsie je vymazavat podla unikatnej property, napriklad `id`.


V komponente `App` vo funkcii `addTodo`, ked vytvarame novy objekt TODO, nenastavujeme stav, ci je todo spravene alebo nie. Kedze nema zmysel vytvarat todo, ktore je done, pridame property `completed` s hodnotou `false`: 

```
    const newTodo = {
      name: todo.name,
      description: todo.description,
      completed: false
    }
```

Komponent Todo:
```
const Todo = (props) => {
  return (
    <div>
      <h3>{props.todo.name}</h3>
      <p>{props.todo.description}</p>
      {props.todo.completed && <p>DONE</p>}
    </div>);
}
```

Este nam chyba oznacovanie, co z nasho listu povinnosti mame za sebou. To bude vasa dalsia uloha.
### Aktivita - Implementacia callbacku

- V komponente `App`, v ktorom mame o.i. `removeTodo`, napisat funkciu `completeTodo`, ktora ma parameter `name` a do konzoly vypise, ze bola volana, a s akym argumentom.
- v JSX, ktore `App` vracia, v casti  `<TodoList todos={todos} onRemove={removeTodo} />` doplnit prop `onComplete` a passnut don novu funkciu - callback
- v komponente `TodoList`, kde najnovsie pribudol button na vymazavanie jednotlivych todo, pridat button, ktory po stlaceni zavola novu funkciu
- Vysledok overite v konzole
- BONUS: Po overeni, ze sa `completeTodo` spusta po kliknuti na tlacidlo, implementovat zmenu completed z false na true

Pomocka: 
```
setTodos(todos.map((t) => {
      if (t.name === name) { 
        return {...t, completed: true};
      } else return t;
    }))
```

### Kostra kodu
```
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
              <button onClick={() => {}}>Hotovo!</button>
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
  
  const addTodo = (todo) => {   
    setTodos([...todos, todo]);
  }

  const removeTodo = (name) => {
    const updatedTodos = todos.filter(prvokPola => { return prvokPola.name !== name }) 
    setTodos(updatedTodos);
  }

  const completeTodo = (name) => {
    console.log('completeTodo called with ' + name)
  }
  
  const removeAllClick = () => {
    setTodos([])
  }

  return  (
    <div>
      <Header title="TODO LIST" isVisible={true}></Header>
      <Subtitle subtitle='Co mozes urobit zajtra, nerob dnes!' ></Subtitle>      
      <p>{todos.length}</p>
      <TodoList todos={todos} onRemove={removeTodo} />      
      <TodoForm onAdd={addTodo}></TodoForm>
      <button onClick={removeAllClick}>Remove All</button>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

### Riesenie
```
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
              {!todo.completed &&
              <button onClick={() => { return props.onComplete(todo.name)}}>Hotovo!</button>}
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
  
  const addTodo = (todo) => {   
    setTodos([...todos, todo]);
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
      <p>{todos.length}</p>
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
```

