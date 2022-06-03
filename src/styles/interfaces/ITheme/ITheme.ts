export interface ITheme {
    colors: {
        primary: string,
        secondary: string
    },
    media: {
        phone: string,
        intermediate: string,
        tablet: string,
    },
    fontSize: {
        medium: string,
        bigger: string,
        large: string,
        larger: string,
        veryLarge: string,
    }
    fontWeight: {
        light: string,
        regular: string,
        medium: string,
        bold: string,
        black: string
    },
    bodyBackground: string,
    headerBackground: string,
    typeOfWeatherBg: string,
    searchedCityBg: string,
    searchBoxBg: string,
    cardHeaderBg: "rgba(0,0,0,0.55)",
}