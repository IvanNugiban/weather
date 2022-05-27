import {ITheme} from "./interfaces/ITheme/ITheme";

const baseTheme: ITheme = {
    colors: {
        primary: "white",
        secondary: "black"
    },
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 900px) and (min-width: 425px)"
    },
    fontSize: {
        medium: "16px",
        bigger: "20px"
    },
    background: {
        bg: "black"
    },
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900
    }
}

export default baseTheme;