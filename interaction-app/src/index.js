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