// https://reactjs.org
import React from 'react';
// https://reactjs.org/docs/react-dom.html
import ReactDOM from 'react-dom';

// Vytvorte JSX element s nazvom 'element',
// ktory obsahuje nasledovne prvky:
// - h1 -> Name: meno
// - p -> Town: mesto
// - p -> Animal: oblubene zviera
// - p -> Food: oblubene jedlo


// JSX expression
// premenne v JSX musia byt pouzite 
// v *curly braces* zatvrokach
// const name = 'Josh Perez';

function makeGreeting(name) {
  return "Hello, " + name + "!";
}

// const element  = (
//   <div>
//     <p>{makeGreeting('albert')}</p>
//   </div>
// )

const name = "Samuel"
const town = "Stare mesto";
const animal = "bunnies";
const food = "pizza"

const element = (
  <div>
    <h1>Name: {name}</h1>
    <p>Town: {town}</p>
    <p>Animal: {animal}</p>
    <p>Food: {food}</p>
  </div>
)

const prestavka = (
  <div>
    <h1>Prestavka do 10:40</h1>
    <p>{makeGreeting('prestavka')}</p>
  </div>
)

ReactDOM.render(
  prestavka,
  document.getElementById('root')
);


