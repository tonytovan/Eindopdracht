import './App.css';
import React from "react";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
<div>
  <Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
</Routes>
</div>
  );
}

export default App;
