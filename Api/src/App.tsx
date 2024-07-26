import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Auth/Login/Login';
import Home from './Pages/Home/Home';
import Signup from './Pages/Auth/Signup/Signup';
import ForgetPassword from './Pages/Auth/ForgetPassword/ForgetPassword';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
