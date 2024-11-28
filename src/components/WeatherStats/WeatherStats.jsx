
import "./WeatherStats.css"
import React from 'react';

const WeatherStats = ({ weatherResults }) => {

    
    const day = weatherResults.forecast.forecastday[0].day
    const current = weatherResults.current

    return(
        <div>
            <table>
                <tbody>
                    <tr >
                        <td>Windspeed</td>
                        <td>{current.wind_kph}Kmph   /   {current.wind_mph}mph</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{current.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Air Pressure</td>
                        <td>{current.pressure_in}</td>
                    </tr>
                    <tr>
                        <td>UV index</td>
                        <td>{current.uv}</td>
                    </tr>
                    <tr>
                        <td>Max</td>
                        <td>{day.maxtemp_c}°C   /   {day.maxtemp_f}°F</td>
                    </tr>
                    <tr>
                        <td>Min</td>
                        <td>{day.mintemp_c}°C   /   {day.maxintemp_f}°F</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default WeatherStats