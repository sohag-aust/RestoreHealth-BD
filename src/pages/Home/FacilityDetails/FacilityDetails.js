import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './FacilityDetails.css';

const FacilityDetails = () => {
    const {facilityId} = useParams();
    const location = useLocation();

    const {img, title, description} = location.state;

    const cardStyle = {
        width:'300px',
        margin:'10px',
        overflow: 'hidden',
    }

    return (
        <>
            <div className="card text-center mx-auto my-5 display-center" style={cardStyle} data-aos="zoom-in">
                <img className="card-img" src={img} alt="Card image cap" />
                <div className="card-body mb-5" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        <span>{description.substring(0,title.length)}</span>
                        {description.substring(title.length)}
                    </p>
                </div>
            </div>
        </>
    );
};

export default FacilityDetails;