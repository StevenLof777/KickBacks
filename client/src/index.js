import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom';
import App from './App';
import {StoreProvider} from './Store.js';
import axios from "axios";
import {PayPalScriptProvider} from '@paypal/react-paypal-js';
 
axios.defaults.withCredentials = true;
 
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <PayPalScriptProvider>
          <App/>
        </PayPalScriptProvider>
      </HelmetProvider>  
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);