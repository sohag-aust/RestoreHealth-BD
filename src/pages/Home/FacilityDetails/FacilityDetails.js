import React from 'react';
import { useParams } from 'react-router-dom';

const FacilityDetails = () => {
    const {facilityId} = useParams();

    return (
        <div>
            <h2>Facility {facilityId}</h2>
        </div>
    );
};

export default FacilityDetails;