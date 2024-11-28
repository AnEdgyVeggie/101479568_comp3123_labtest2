import Clouds from "../assets/icons/clouds.png"
import Lightning from "../assets/icons/lightning.png"
import Rain from "../assets/icons/rain.png"
import Snow from "../assets/icons/snow.png"
import Sun from "../assets/icons/sun.png"


export const selectIcon = (weatherDescription) => {

    if (weatherDescription.toLowerCase().includes("rain")) {
        return <img src={Rain} />
    }
    if (weatherDescription.toLowerCase().includes("cloud") ||
    weatherDescription.toLowerCase().includes("overcast")) {
        return <img src={Clouds} />
    }
    if (weatherDescription.toLowerCase().includes("thunder") ||
        weatherDescription.toLowerCase().includes("lightning") ) {
        return <img src={Lightning} />
    }
    if (weatherDescription.toLowerCase().includes("snow") ||
    weatherDescription.toLowerCase().includes("blizzard")) {
        return <img src={Snow} />
    }
    if (weatherDescription.toLowerCase().includes("sun") ||
    weatherDescription.toLowerCase().includes("clear")) {
        return <img src={Sun} />
    }
}

