import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = (props) => {
    const {children, ...rest} = props;
    const {user, isLoading} = useAuth();

    if(isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
   
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