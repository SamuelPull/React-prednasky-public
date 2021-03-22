import React from 'react';
import ReactDOM from 'react-dom';

//  Conditional rendering
const futureWeather = {
  location: "Trencin",
  humidity: 60,
  temperature: 20
}

const getTemperature = () => {
  if (futureWeather.temperature) {
    return <p>Temperature: {futureWeather.temperature}</p>
  } else {
    return <p></p>
  }
}

const predpovedPocasia = (
  <div>
    <h1>Weather in {futureWeather.location}</h1>
    <p>Humidity: {futureWeather.humidity}</p>
    {getTemperature()}
    {futureWeather.temperature > 25 ? "😅" : "🥶"}
  </div>
)

const prestavka = (<h1>Prestavka do 11:30</h1>)

ReactDOM.render(
  prestavka,
  document.getElementById('root')
);


