import {ITheme} from "./interfaces/ITheme/ITheme";
import {DefaultTheme} from "styled-components";
import ThemeEnum from "./interfaces/themeEnum/themeEnum";
import Clouds from "../img/Clouds.png"
import Rain from "../img/Rain.png"
import Clear from "../img/Clear.png"
import Snow from "../img/Snow.png"

const baseTheme: ITheme = {
    colors: {
        primary: "#382B2B",
        secondary: "white"
    },
    media: {
        phone: "(max-width: 425px)",
        intermediate: "(max-width: 600px)",
        tablet: "(max-width: 900px) and (min-width: 425px)"
    },
    fontSize: {
        medium: "16px",
        bigger: "20px",
        large: "30px",
        larger: "60px",
        veryLarge: "90px",
    },
    fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
        black: "900"
    },
    headerBackground: "#005986",
    bodyBackground: "linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986)",
    typeOfWeatherBg: "#003651",
    searchedCityBg: "#337A9E",
    searchBoxBg: "#337A9E",
    cardHeaderBg: "rgba(0,0,0,0.55)",
}

export const CloudsTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.Clouds,
    headerBackground: "#59516E",
    bodyBackground: "linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)",
    cardBackground: "https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyCloudy-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70",
    typeOfWeatherBg: "#363142",
    searchedCityBg: "#7A748B",
    searchBoxBg: "#7A748B",
    cardIcon: Clouds,

}

export const RainTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.Rain,
    headerBackground: "#213D4A",
    bodyBackground: "linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)",
    cardBackground: "https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70",
    typeOfWeatherBg: "#14252D",
    searchedCityBg: "#4D646E",
    searchBoxBg: "#4D646E",
    cardIcon: Rain

}

export const ClearTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.Clear,
    headerBackground: "#005986",
    bodyBackground: "linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986)",
    cardBackground: "https://s.w-x.co/WeatherImages_Web/WeatherImage_Fair-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70",
    typeOfWeatherBg: "#003651",
    searchedCityBg: "#337A9E",
    searchBoxBg: "#337A9E",
    cardIcon: Clear,
}

export const SnowTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.Snow,
    headerBackground: "#2C5773",
    bodyBackground: " linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)",
    cardBackground: "https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70",
    typeOfWeatherBg: "#1A3445",
    searchedCityBg: "#56798F",
    searchBoxBg: "#56798F",
    cardIcon: Snow,
}

export default baseTheme;