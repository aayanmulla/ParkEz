import './App.css';
import React from 'react';
import Home from './screens/Home.jsx'; // Updated import path
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login/Login.jsx';

const App = () => {
  return(
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;