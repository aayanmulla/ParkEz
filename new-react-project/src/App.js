import './App.css';
import React from 'react';
import Home from './screens/Home.jsx'; // Updated import path
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;