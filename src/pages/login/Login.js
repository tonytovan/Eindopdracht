import React from "react";

import './Login.css';
import {Link} from "react-router-dom";


function Login() {
    return (
        <body>
        <div className="container-login">
            <header className="login-header-outer-container">
                <div className="login-header-inner-container">
                    <h3>Welcome back my friend!</h3>
                </div>
            </header>

            <main className="login-main-outer-container">
                <h1>Login</h1>
                <div className="login-main-inner-container">

                    <form>
                        <div>
                            <input type="text" id="username" name="username" placeholder="Username"/>
                        </div>
                        <div>
                            <input type="text" id="password" name="password" placeholder="Password"/>
                        </div>
                        <button type="submit">Login</button>
                    </form>

                </div>
                <p>Don't have an account yet? Register<Link to="/login">here</Link>.</p>
            </main>
            <footer id="footer outer-footer-container">
                <div className="inner-footer-container">
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
        </body>
    );
}

export default Login;

