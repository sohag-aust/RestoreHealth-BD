import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signInUsingGoogle, loginUser} = useFirebase();

    const handleLogin = (event) => {
        event.preventDefault();

        loginUser(email, password);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div id="login">
            <h3 className="text-center text-white">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" onSubmit={handleLogin}>
                                <h3 className="text-center text-secondary">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-secondary">Email:</label><br />
                                    <input onBlur={handleEmail} type="email" name="email" id="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-secondary">Password:</label><br />
                                    <input onBlur={handlePassword} type="password" name="password" id="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember-me" className="text-primary">
                                        <Button onClick={signInUsingGoogle} variant="outline-primary">Google Login</Button>
                                    </label>
                                    <br />
                                    <div className="wrapper">
                                        <input type="submit" name="submit" className="btn btn-success btn-md" value="submit" />
                                    </div>
                                </div>
                                <div id="register-link" className="text-right">
                                    <NavLink to="/register" className="text-primary">New ? Register here</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;