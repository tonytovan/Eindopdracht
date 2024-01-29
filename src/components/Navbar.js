import React, {useContext} from "react";
import './Navbar.css';
import {Link, NavLink} from "react-router-dom";
import koksmuts from '../assets/Koksmuts.png'
import {AuthContext} from "../context/AuthContext";


function Navbar() {
    const {isAuth} = useContext(AuthContext);
    return (
        <nav>
            <div className="inner-nav-container">
            <Link to="/">
                <span className="logo-container">
                <img src={koksmuts} alt="logo"/>
                </span>
            </Link>
            </div>
            <ul>
                <li>
                    { isAuth && <NavLink to="/profile">Profile</NavLink> }
                </li>
                <li>
                     <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

