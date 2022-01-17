import React from 'react';
import './Registration.css';

const Registration = () => {
    return (
        <div className="signup-form">
            <form action="/examples/actions/confirmation.php" method="post">
                <h2>Register</h2>
                <p className="hint-text">Create your account. It's free and only takes a minute.</p>

                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" name="first_name" placeholder="First Name" />
                        </div>

                        <div className="col">
                            <input type="text" className="form-control" name="last_name" placeholder="Last Name" />
                        </div>
                    </div>        	
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" />
                </div>  

                <div className="form-group">
                    <label className="form-check-label">
                        Already have account ? &nbsp; <a href="#" className="go-login text-primary">Login</a>
                    </label>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                </div>

            </form>

            <div className="text-center">Already have an account? <a href="#">Sign in</a></div>
        </div>
    );
};

export default Registration;