import React from "react";
import './Register.css';
import Inputfield from "../../components/Inputfield";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

function Register() {
    const {register, handleSubmit, formState: {errors}} = useForm({ mode:'onBlur'});

    function handleFormSubmit(data) {
        console.log(data);
    }

    return (
        <div className="container-body">
            <header className="register-header-outer-container">
                <div className="register-header-inner-container">
                    <h3>Nice to meet you my friend!</h3>
                </div>
            </header>
            <main className="register-main-outer-container">
            <h1>Register</h1>
                <form className="register-main-inner-container" onSubmit={handleSubmit(handleFormSubmit)}>

                    <div>
                        <Inputfield
                            inputType="text"
                            inputName="username"
                            inputId="username-field"
                            placeholder="Username"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: 'Username is required',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Username minimal length is 6 characters'
                                },
                            }}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div>
                        <Inputfield
                            inputType="email"
                            inputName="email"
                            inputId="email-field"
                            placeholder="Email"
                            validationRules={{
                                required: {
                                    value: true,
                                    validate: (value) => value.includes('@'),
                                    message: 'Email is required',
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
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password minimal length is 6 characters'
                                },
                            }}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div>
                        <Inputfield
                            inputType="text"
                            inputName="roll"
                            inputId="roll-field"
                            placeholder="Roll"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: 'Fill in "user"',
                                }
                            }}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <Button>Login</Button>
                </form>
                <p className="text-login">If you already have an account, login <Link to="/login">here</Link>.</p>
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

    );
}

export default Register;

