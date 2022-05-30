import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import {ThemeProvider} from "styled-components";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <App/>
        </ThemeProvider>
    </Provider>
);
