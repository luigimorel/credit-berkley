import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from "@material-ui/core"

const theme = createMuiTheme({
    // palette: {
    //     primary: {
    //         main: '#29A475',
    //     },
    //     secondary: {
    //         main: '#282728',
    //     },
    //     shadow: {
    //         main: '#b8b9be',
    //     },
    //     btn: {
    //         main: '#1D9F6EA2',
    //     },
    //     credFifth: {
    //         main: '#68BEA2',
    //     },
    //     bgColor: {
    //         main: '#ECF3FD',
    //     },
    // },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
