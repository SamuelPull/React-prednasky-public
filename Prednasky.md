# REACT

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
 - h1 -> Name: meno
 - p -> Town: mesto
 - p -> Animal: oblubene zviera
 - p -> Food: oblubene jedlo
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

## Events, inputs and forms

- vytvorit novu react aplikaciu a vymazat nepotrebne subory
- pozor aby sme boli v spravnom foldri
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

### Uloha: 
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

