import React from 'react';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Dashboard from "./pages/Profile/Dashboard";
// import Login from "./pages/Login/Login";
import Navbar from "./pages/Profile/Navbar.js";
// import Signup from "./pages/Signup/Signup";
import Home from './pages/Home/Home.js';
import Products from './components/Products/Products.js'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>

      <Routes>
            <Route path="/product/:slug" element={<Products />} />
            <Route path="/" element={<Home />} />
          </Routes>
            

    </BrowserRouter>
  );
}

export default App;
