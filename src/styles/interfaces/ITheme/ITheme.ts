export interface ITheme {
    colors: {
        primary: string,
        secondary: string
    },
    media: {
        phone: string,
        tablet: string,
    },
    fontSize: {
        medium: string,
        bigger: string
    }
    background: {
        bg: string
    },
    fontWeight: {
        light: number,
        regular: number,
        medium: number,
        bold: number,
        black: number
    }
}