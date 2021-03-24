import React, { useState } from 'react';
import ReactDOM from 'react-dom';

let count = 0;

const plusOne = () => {
  count++;
  console.log(count)
}

const minusOne = () => {
  count--;
  console.log(count)
}

const resetToZero = () => {
  count = 0;
  console.log(count)
}

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