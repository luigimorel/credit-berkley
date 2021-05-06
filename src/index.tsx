import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from "@material-ui/core"


declare module '@material-ui/core/styles/createPalette' {
    export interface Palette {
        credPrimary: Palette['primary'];
        credTertiary: Palette['primary'];
        credSecondary: Palette['primary'];
        credFourth: Palette['primary'];
        credFifth: Palette['primary'];
        credSixth: Palette['primary'];
        credGrey: Palette['primary'];
    }
    export interface PaletteOptions {
        credPrimary: PaletteOptions['primary'];
        credTertiary: PaletteOptions['primary'];
        credSecondary: PaletteOptions['primary'];
        credFourth: PaletteOptions['primary'];
        credFifth: PaletteOptions['primary'];
        credSixth: PaletteOptions['primary'];
        credGrey: PaletteOptions['primary'];
    }
}
const theme = createMuiTheme({
    palette: {
        credPrimary: {
            main: '#29A475',
        },
        credSecondary: {
            main: '#282728',
        },
        credTertiary: {
            main: '#b8b9be',
        },
        credFourth: {
            main: '#1D9F6EA2',
        },
        credFifth: {
            main: '#68BEA2',
        },
        credSixth: {
            main: '#ECF3FD',
        },
        credGrey: {
            main: '#707070',
        },
    },
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
