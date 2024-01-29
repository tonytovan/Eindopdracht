import React, {useState} from "react";
import './Register.css';
import Inputfield from "../../components/Inputfield";
import Button from "../../components/Button";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";




function Register() {
    const [error, toggleError] = useState(false);
    const [ success, setSuccess] = useState(false)
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({ mode:'onBlur'
    });

    const handleFormSubmit = async (data) => {
       console.log(data);

    try {
        toggleError(false);
        const result = await axios.post( 'https://frontend-educational-backend.herokuapp.com/api/auth/signup', data)

       if (result.status === 200) {
           // setFormState({
           //     username: '',
           //     email: '',
           //     password: '',
           //     roll: '',
           // })

           navigate('/login');
           setSuccess(true);
           console.log(result);
       }
    } catch(e) {
        console.error(e);
        toggleError(true);
    }
};

    // function handleInputChange(e) {
    //     const changedFieldName = e.target.name;
    //
    //     setFormState({
    //         ...formState,
    //         [changedFieldName]: e.target.value,
    //         }
    //
    //     );
    // }

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
                            name="username"
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
                            name="email"
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
                            name="password"
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
                            name="roll"
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
                    <Button>Register</Button>
                    {error && (
                        <p>Er is iets misgegaan bij het registreren, probeer het
                            nog eens.</p> )}

                    {success && (
                        <p className="success-message-register">Registreren is gelukt! Je kunt vanaf nu, hiernaast, inloggen </p>
                    )}




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

