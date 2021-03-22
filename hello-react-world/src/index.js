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

const element = (
  <div>
    <h1>Name: Samuel</h1>
    <p>Town: Bratislava</p>
    <p>Animal: dogs</p>
    <p>Food: Hamburger</p>
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);


