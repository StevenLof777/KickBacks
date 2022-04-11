import React from 'react';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Profile/Dashboard";
// import Login from "./pages/Login/Login";
import Navbar from "./pages/Profile/Navbar.js";
import Signup from "./pages/Signup/Signup";
import Home from './pages/Home/Home.js';
import Products from './components/Products/Products.jsx'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route exact path="/" element={<Login/>}/> */}
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/product/:slug" element={<Products/>}/>
          
        <Route path="/signup" element={<Signup/>}/>
          
        <Route path="/dashboard" element={<Dashboard/>}/>
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
