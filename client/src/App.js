import React from 'react';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login/Login.jsx";
import 'react-toastify/dist/ReactToastify.css'
import Navigation from './components/NavBar/Navigation.jsx';
import Signup from "./pages/Signup/Signup.js";
import Home from './pages/Home/Home.jsx';
// import Products from './components/Products/Products.js';
import Cart from './pages/Cart/Cart.jsx';
import Shipping from '../src/pages/Shipping/Shipping.jsx';
import Payment from '../src/pages/Payment/Payment.jsx';
import Checkout from '../src/pages/Checkout/Checkout.jsx';
import Order from '../src/pages/Order/Order.jsx';
import OrderHistory from './pages/OrderHistory/OrderHistory.jsx';
import Account from './pages/Account/Account.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navigation className='desktop' />
      <div className='main'>
        <Routes>
          {/* <Route path="/product/:slug" element={<Products />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/shipping' element={<Shipping/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/order/:id' element={<Order/>}></Route>
          <Route path='/orderhistory' element={<OrderHistory/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
