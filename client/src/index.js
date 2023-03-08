import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'
import App from "./App";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {theme} from './theme'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state'

const store = configureStore({
  reducer: {cart: cartReducer},
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="container">
          <App />
        </div>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
