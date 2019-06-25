import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/lightBlue';

const theme = () => {
    return(createMuiTheme({
      palette: {
        primary: {
          ...blue,
          '500': '#01579B'
        }
      }
    }));
  }

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
