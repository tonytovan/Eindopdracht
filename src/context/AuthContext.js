import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext(null);

function AuthContextProvider( {children} ) {

    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const navigate = useNavigate();

    function login(jwt_token) {
        const decodedToken = jwt_decode(jwt_token);
        localStorage.setItem('token',jwt_token);
        console.log(decodedToken);
        setIsAuth({
            ...isAuth,
            isAuth: true,
            user: {
                username: decodedToken.sub,
            }
        })
        console.log('De gebruiker is ingelogd')
        navigate('/profile')
    }

    function logout() {
        localStorage.removeItem('token');
        setIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
        })
        console.log('De gebruiker is uitgelogd')
        navigate('/')
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {/*{isAuth.status === 'done' ? children : <p>Loading...</p>}*/}
            { children }
        </AuthContext.Provider>

    );

}


export default AuthContextProvider;
