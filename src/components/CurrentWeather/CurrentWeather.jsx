import "./CurrentWeather.css"
import React, { useEffect } from 'react';
import { selectIcon } from "../../helperFunctions/IconSelection";

const CurrentWeather = ({ weatherResults }) => {
    console.log(weatherResults.forecast.forecastday[0].day)


    const dayMap = new Map()
    dayMap.set(0, "Sunday").set(1, "Monday").set(2, "Tuesday")
    .set(3, "Wednesday").set(4, "Thursday").set(5, "Friday").set(6, "Saturday")

    const monthMap = new Map()
    monthMap.set(0, "January").set(1, "February").set(2, "March").set(3, "April")
    .set(4, "May").set(5, "June").set(6, "July").set(7, "August")
    .set(8, "September").set(9, "October").set(10, "November").set(11, "December")

    return(
        <div id="current-weather">
            <div id="weather-summary">

                <h2>{dayMap.get(new Date().getDay())}</h2>
                <p className="sub-text">{monthMap.get(new Date().getMonth())} {new Date().getDate()}</p>
                <p className="sub-text">{weatherResults.location.name}, {weatherResults.location.region}</p>
            </div>
            <div>
                <h2>{Math.round(weatherResults.current.temp_c)}°C  /  {Math.round(weatherResults.current.temp_f)}°F</h2>
                <h2>{weatherResults.current.condition.text}</h2>
            </div>
            {selectIcon(weatherResults.forecast.forecastday[0].day.condition.text)}
        </div>
    )

}

export default CurrentWeather