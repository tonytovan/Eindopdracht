import './App.css';
import React from "react";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Register from "./pages/register/Register";
import Recipes from './pages/recipes/Recipes';
import Search from "./pages/search/Search";


function App() {
  return (
<div>
  <Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
  <Route path="/recipes" element={<Recipes/>} />
  <Route path="/search" element={<Search/>} />
</Routes>
</div>
  );
}

export default App;
