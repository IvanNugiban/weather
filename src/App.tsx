import React, {useRef} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {SearchContext} from "./context";

function App() {
    const searchBox = useRef();
    return (
        <SearchContext.Provider value={searchBox}>
            <Header/>
            <Navbar/>
            <Main/>
            <Footer/>
        </SearchContext.Provider>
    )
        ;
}

export default App;
