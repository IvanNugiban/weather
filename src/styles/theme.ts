import {ITheme} from "./interfaces/ITheme/ITheme";
import {DefaultTheme} from "styled-components";
import ThemeEnum from "./interfaces/themeEnum/themeEnum";
import Clouds from "../img/theme/Clouds.png"
import Rain from "../img/theme/Rain.png"
import Clear from "../img/theme/Clear.png"
import Snow from "../img/theme/Snow.png"
import CloudyBg from "../img/background/cloudy.webp"
import RainBg from "../img/background/rain.webp"
import ClearBg from "../img/background/clear.webp"
import SnowBg from "../img/background/snow.webp"

const baseTheme: ITheme = {
    colors: {
        primary: "#382B2B",
        secondary: "white"
    },
    media: {
        phone: "screen and (max-width: 425px)",
        intermediate: "screen and (max-width: 600px)",
        tablet: "screen and (max-width: 900px) and (min-width: 425px)"
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
    // searchedCityBg: "#337A9E",
    searchBoxBg: "#337A9E",
    cardHeaderBg: "rgba(0,0,0,0.55)",
}

export const CloudsTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.Clouds,
    headerBackground: "#59516E",
    bodyBackground: "linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)",
    cardBackground: CloudyBg,
    typeOfWeatherBg: "#363142",
    // searchedCityBg: "#7A748B",
    searchBoxBg: "#7A748B",
    cardIcon: Clouds,
}

export const RainTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.Rain,
    headerBackground: "#213D4A",
    bodyBackground: "linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)",
    cardBackground: RainBg,
    typeOfWeatherBg: "#14252D",
    // searchedCityBg: "#4D646E",
    searchBoxBg: "#4D646E",
    cardIcon: Rain

}

export const ClearTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.Clear,
    headerBackground: "#005986",
    bodyBackground: "linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986)",
    cardBackground: ClearBg,
    typeOfWeatherBg: "#003651",
    // searchedCityBg: "#337A9E",
    searchBoxBg: "#337A9E",
    cardIcon: Clear,
}

export const SnowTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.Snow,
    headerBackground: "#2C5773",
    bodyBackground: " linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)",
    cardBackground: SnowBg,
    typeOfWeatherBg: "#1A3445",
    // searchedCityBg: "#56798F",
    searchBoxBg: "#56798F",
    cardIcon: Snow,
}

export default baseTheme;