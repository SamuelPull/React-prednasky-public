import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;

const plusOne = () => {
  count++;
  renderApp();
}

const minusOne = () => {
  count--;
  renderApp();
}

const resetToZero = () => {
  count = 0;
  renderApp();
}


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

const prestavka = (<div>
  <h1>Prestavka do 9:30</h1>
</div>)

ReactDOM.render(
  prestavka,
  document.getElementById('root')
);
}

renderApp();