import React from 'react';
import ReactDOM from 'react-dom';
import Register from './pages/Register/Register';
import { GlobalStyle } from './styles/global';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from  './pages/Profile/Profile'
axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile/> }/>
        <Route path='/game' element={<><h2>Jogo</h2></>} />
        <Route path='/wishlist' element={<><h2>Lista de desejos</h2></>} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
