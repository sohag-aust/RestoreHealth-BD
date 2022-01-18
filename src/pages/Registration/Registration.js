import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import './Registration.css';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Registration = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {register, verifyEmail, setUserName} = useAuth();

    const location = useLocation();
    console.log('== came from: ', location.state?.from);

    const history = useHistory();
    const redirect_uri = location.state?.from || '/login';

    const handleRegistration = (event) => {
        event.preventDefault();

        const fullName = firstName + ' ' + lastName;
        console.log("== full Name: ", fullName);

        register(fullName, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("== Registered user: ", user);
            
                verifyEmail();
                setUserName(fullName);

                history.push(redirect_uri);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    return (
        <div className="signup-form">
            <form onSubmit={handleRegistration}>
                <h2>Register</h2>
                <p className="text-secondary">Create your account. It's free and only takes a minute.</p>

                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input onBlur={handleFirstName} type="text" className="form-control" name="first_name" placeholder="First Name" />
                        </div>

                        <div className="col">
                            <input onBlur={handleLastName} type="text" className="form-control" name="last_name" placeholder="Last Name" />
                        </div>
                    </div>        	
                </div>

                <div className="form-group">
                    <input onBlur={handleEmail} type="email" className="form-control" name="email" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input onBlur={handlePassword} type="password" className="form-control" name="password" placeholder="Password" />
                </div>

                <div className="form-group">
                    <input onBlur={handleConfirmPassword} type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" />
                </div>  

                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                </div>

            </form>

            <div className="text-center">
                Already have an account? <NavLink to="/login" style={{fontSize: '20px', color: 'blue'}}>Sign in</NavLink>
            </div>
        </div>
    );
};

export default Registration;