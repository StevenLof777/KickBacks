import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom';
import App from './App';
// import "bulma/css/bulma.css";
import axios from "axios";
 
axios.defaults.withCredentials = true;
 
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);