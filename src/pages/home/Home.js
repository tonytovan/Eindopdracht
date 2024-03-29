import React from 'react';
import './Home.css';
import LilChef from '../../assets/LilChef.png';
import {Link} from "react-router-dom";
import Koksmuts from '../../assets/Koksmuts.png'
import Fridge from '../../assets/Fridge.png'
import Pan from '../../assets/Pan.png'

function Home() {
    return (

        <div className="container">
        <header className="outer-container header">
            <div className="inner-container">
                    <h1>Lil' Chef</h1>
                    <Link to="/search">
                    <span className="logo-header">
                    <img src={LilChef} alt="logo_lilchef"/>
                    </span>
                    </Link>
                    <h2>Your kitchen buddy!!</h2>
            </div>
        </header>
        <main>
        <div className="main-wrapper">
            <div className="main-content">
                    <span className="picture-main-fridge">
                    <img src={Fridge} alt="Fridge"/>
                    </span>
                    <div className="inner-article-main">
                    <p>No inspiration what to cook with the ingredients in your fridge?</p>
                        <p>No Panic, Lil’ Chef to the rescue! You only have to choose the ingredients and Lil’ Chef will do the rest!</p>
                        <p>Login to start cooking. If you don’t have an account, register <Link to="/register"> here.</Link> </p>
                    </div>
                    <span className="picture-main-hotpan">
                    <img src={Pan} alt="Hotpan"/>
                    </span>
            </div>
        </div>
        </main>

        <footer id="footer outer-footer-container">
            <div className="inner-footer-container">
                <span className="logo-footer">
                <img src={Koksmuts} alt="koksmuts"/>
                </span>
                <ul className="ul-container">
                    <li>About us</li>
                    <li>FAQ</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="outer-border-container">
                <div className="border-container">
                </div>
            </div>
            <div className="copyright-container">
                <p>©Copyright. All rights reserved.</p>
            </div>
        </footer>
        </div>

    );
}

export default Home;