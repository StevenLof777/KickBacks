import React from 'react';
import './index.css';

import Signup from './pages/Signup'
import Home from './pages/Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';


function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
