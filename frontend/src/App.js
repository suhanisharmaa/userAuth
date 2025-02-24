import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='login' element={<LoginPage/>}/>
      <Route path='register' element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
