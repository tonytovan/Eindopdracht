import React from "react";
import './Login.css';
import {Link} from "react-router-dom";
import Inputfield from "../../components/Inputfield";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import Lopend from '../../assets/Lopend.png';



function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm({ mode:'onBlur'});

    function handleFormSubmit(data) {
        console.log(data);
    }
        return (
            <>
            <div className="container-body">
                <header className="login-header-outer-container">
                    <div className="login-header-inner-container">
                        <h3>Welcome back my friend!</h3>
                    </div>
                </header>

                <main className="login-main-outer-container">
                    <h1>Login</h1>
                    <form className="login-main-inner-container" onSubmit={handleSubmit(handleFormSubmit)}>
                        <div>
                            <Inputfield
                                inputType="text"
                                inputName="name"
                                inputId="name-field"
                                placeholder="Username"
                                validationRules={{
                                    required: {
                                        value: true,
                                        message: 'Username is required',
                                    }
                                }}
                                register={register}
                                errors={errors}
                            />
                        </div>
                        <div>
                            <Inputfield
                                inputType="text"
                                inputName="password"
                                inputId="password-field"
                                placeholder="Password"
                                validationRules={{
                                    required: {
                                        value: true,
                                        message: 'Password is required',
                                    }
                                }}
                                register={register}
                                errors={errors}
                            />
                        </div>
                        <Button
                            clickHandler={() => (console.log("gebruiker wilt inloggen"))}
                        >Login</Button>
                    </form>
                    <p className="text-login">Don't have an account yet? Register <Link to="/register">here</Link>.</p>
                </main>
                <footer id="footer outer-footer-container">
                    <div className="inner-footer-container">
                        <div className="inner-walking-container">
                            <img src={Lopend} alt="walkingchef"/>
                        </div>
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
            </>
        );

    }



export default Login;

