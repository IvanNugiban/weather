import React, {useRef, useState} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {HeaderContext} from "./context";
import {ThemeProvider} from "styled-components";
import {useTypedSelector} from "./redux/typedReduxHooks";
import GlobalStyles from "./styles/globalStyles";

function App() {
    const searchBox = useRef();
    const theme = useTypedSelector(state => state.weather.theme);
    const hamburgerMenu = useRef<HTMLLabelElement>(null);
    const [menuState, setMenuState] = useState(false)
    return (
        <HeaderContext.Provider value={{searchBox, setMenuState, menuState, hamburgerMenu}}>
            <ThemeProvider theme={theme}>
                <Header/>
                <Navbar menuState={menuState}/>
                <Main/>
                <Footer/>
                <GlobalStyles/>
            </ThemeProvider>
        </HeaderContext.Provider>
    )
}

export default App;
