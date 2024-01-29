import './App.css';
import React, {useContext} from "react";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Register from "./pages/register/Register";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/Profile";
import {AuthContext} from "./context/AuthContext";



function App() {
  const { isAuth } = useContext(AuthContext)

  return (
<div>
  <Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
  <Route path="/profile" element={ isAuth ? <Profile /> : <Navigate to="/" />}/>
  <Route path="/search" element={<Search/>} />
</Routes>
</div>
  );
}

export default App;
