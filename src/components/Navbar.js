import React from "react";
import './Navbar.css';
import {Link, NavLink} from "react-router-dom";
import koksmuts from '../assets/Koksmuts.png'


function Navbar() {

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
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>

                {/*<div className="button-container">*/}
                {/*    <button type="button" onClick={() => navigate("/")}>register</button>*/}
                {/*    <button type="button" onClick={() => navigate("/")}>Login</button>*/}
                {/*</div>*/}
        </nav>
    );
}

export default Navbar;

