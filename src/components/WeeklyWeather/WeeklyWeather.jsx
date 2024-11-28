import "./WeeklyWeather.css"
import React from 'react';
import { selectIcon } from "../../helperFunctions/IconSelection";

const WeeklyWeather = ({ weatherResults }) => {

    console.log(weatherResults.forecastday[0].day.condition.text)
    
    
    const createForcastChart = () => {

        let dayDisplay = []

        weatherResults.forecastday.forEach(day => {
            dayDisplay.push(
                <div className="weather-section">
                    <div className="single-temp-view">
                        <p className="small-temp">{Math.round(day.day.maxtemp_c)}°C  /  {Math.round(day.day.mintemp_c)}°C</p>
                        <p className="small-temp">{Math.round(day.day.maxtemp_f)}°F  /  {Math.round(day.day.mintemp_c)}°F</p>
                    </div>
                    {selectIcon(day.day.condition.text)}
                </div>
            )
        })
        
        return (
            <div id="temp-view">
                {dayDisplay}

            </div>
        )
    }
    
    return(
        <div>
                {createForcastChart()}
        </div>
    )

}

export default WeeklyWeather