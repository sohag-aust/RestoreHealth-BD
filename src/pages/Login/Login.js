import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="" method="post">
                                <h3 className="text-center text-secondary">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-secondary">Username:</label><br />
                                    <input type="text" name="username" id="username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-secondary">Password:</label><br />
                                    <input type="text" name="password" id="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember-me" className="text-primary"><a href="#">Google Login</a></label><br />
                                    <div className="wrapper">
                                        <input type="submit" name="submit" className="btn btn-success btn-md" value="submit" />
                                    </div>
                                </div>
                                <div id="register-link" className="text-right">
                                    <a href="#" className="text-primary">Register here</a>
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