import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import notFound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div className="col-md-12 text-center">
            <img className="d-block mx-auto my-5" style={{width: '50%'}} src="images/404.jpg" alt=""/>
            <Link to="/">
                <Button variant="outline-primary" className="text-uppercase font-weight-bold mb-5">Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;