import React, {useState, useEffect} from 'react';
import "./App.css"
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherStats from "./components/WeatherStats/WeatherStats";
import WeeklyWeather from "./components/WeeklyWeather/WeeklyWeather"
import {API_ADDR, API_END} from "./constants"
import { ConvertKelvinToCelsius, 
  ConvertKelvinToFahrenheit } from "./helperFunctions/ConversionFuctions"


function App() {
  const [ weekWeatherResults, setWeekWeatherResults ] = useState(null)
  const [ dailyWeatherResults, setDailyWeatherResults ] = useState(null)
  const [ searchLocation, setSearchLoaction ] = useState("Toronto")

  useEffect(() => {
    getWeatherInfo(searchLocation)
  }, [searchLocation])


  const getWeatherInfo = async (location) => {
    const req = await fetch(API_ADDR+location+API_END)
    const res = await req.json() 
    setWeekWeatherResults(res.forecast)
    setDailyWeatherResults(res) 
  }

  const updateSearch = () => {
    const search = document.getElementById("search").value
    getWeatherInfo(search)
  }




  if (weekWeatherResults === null || dailyWeatherResults === null) {
    return(
      <div>
          <h2>LOADING. . . . . . . .  </h2>
      </div>
    )
  }




  return (
    <div className="App">

        <div id="search-bar">
          <input id="search" type='text' placeholder='Enter the location you would like to get weather for '/>
          <button onClick={updateSearch}>Search</button>
        </div>
      <div id="weather-container">
        <div >
          <CurrentWeather weatherResults={dailyWeatherResults} />
        </div>

        <div id="weather-container-inner">
          <WeatherStats weatherResults={dailyWeatherResults} />
          <WeeklyWeather weatherResults={weekWeatherResults} />
        </div>
      </div>

    </div>
  );
}

export default App;
