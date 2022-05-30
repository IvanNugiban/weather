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
        veryLarge:string,
    }
    background: {
        bg: string
    },
    fontWeight: {
        light: string,
        regular: string,
        medium: string,
        bold: string,
        black: string
    }
}