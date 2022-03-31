import React from 'react';
import './index.css';

import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'
import Navigation from './components/NavBar/Navigation'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Container >
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
