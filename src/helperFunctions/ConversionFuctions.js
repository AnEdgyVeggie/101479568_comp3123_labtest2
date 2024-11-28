export const ConvertKelvinToCelsius = (kelvinTemp) => {
    return  kelvinTemp - 273.15
}

export const ConvertKelvinToFahrenheit = (kelvinTemp) => {
    return  (kelvinTemp - 273.15) * 1.8 + 32
}