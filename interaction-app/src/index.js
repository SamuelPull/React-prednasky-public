import React, { useState } from 'react';
import ReactDOM from 'react-dom';
  
const App = () => {

  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>INTERACTION APP</h1>
    <h2>Count: {count}</h2>
    <button id="plus-button" className="button" 
     onClick={() => setCount(count+1)}>+1</button> 
    <button onClick={() => setCount(count-1)}>-1</button>
    <button onClick={() => setCount(0)}>reset</button> 
  </div>
  )
 }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);