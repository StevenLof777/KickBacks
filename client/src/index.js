import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom';
import App from './App';
import {StoreProvider} from './Store.js'
import axios from "axios";
 
axios.defaults.withCredentials = true;
 
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>  
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);