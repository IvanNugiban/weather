import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Main/>
            <footer>lorem</footer>
        </ThemeProvider>
    );
}

export default App;
