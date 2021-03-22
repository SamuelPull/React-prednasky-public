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