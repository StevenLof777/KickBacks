import React from 'react';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Dashboard from "./pages/Profile/Dashboard";
import Login from "./pages/Login/Login";
// import Navbar from "./pages/Profile/Navbar.js";
import 'react-toastify/dist/ReactToastify.css'
import Navigation from './components/NavBar/Navigation'
import Signup from "./pages/Signup/Signup";
import Home from './pages/Home/Home.jsx';
import Products from './components/Products/Products.js'
import Cart from './pages/Cart/Cart.jsx'
import Shipping from '../src/pages/Shipping/Shipping.jsx'
import Payment from '../src/pages/Payment/Payment.jsx'
import Checkout from '../src/pages/Checkout/Checkout.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/product/:slug" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/shipping' element={<Shipping/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
