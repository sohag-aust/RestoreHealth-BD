import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = (props) => {
    const {children, ...rest} = props;
    const {user} = useAuth();

    console.log("++&& user from firebase: ", user);

    return (
        <Route
            {...rest}
            render={ ( {location} ) => 
                user.email ? children : 
                             <Redirect
                                to={{
                                    pathname: '/login',
                                    state: {from : location}
                                }}
                             />
            }
        >
            
        </Route>
    );
};

export default PrivateRoute;