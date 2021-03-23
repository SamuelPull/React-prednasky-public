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
  - - vytvorit novu react aplikaciu a vymazat nepotrebne subory
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