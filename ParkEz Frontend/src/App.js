import './App.css';
import React from 'react';
import Home from './screens/Home/Home.jsx'; // Updated import path
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login/Login.jsx';
import Bookings from './screens/Bookings/Bookings.jsx'; // Updated import path

const App = () => {
  return(
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bookings' element={<Bookings />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;