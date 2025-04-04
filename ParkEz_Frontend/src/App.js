import './App.css';
import React from 'react';
import Home from './screens/Home/Home.jsx'; // Updated import path
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login/Login.jsx';
import Bookings from './screens/Bookings/Bookings.jsx'; // Updated import path
import Signup from './screens/Signup/Signup.jsx';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword.jsx';
import Payments from './screens/Payments/Payments.jsx'; // Updated import path
// import { useEffect } from 'react';
import API_ENDPOINTS from './apiEndpoints.js';


const App = () => {

  fetch(API_ENDPOINTS.LOGIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "test@example.com" })
  })
    .then(response => response.json())
    .then(data => console.log("API Response:", data))
    .catch(error => console.error("Fetch Error:", error));
  
  
  return(
    
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/payments' element={<Payments />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;