import React, { useEffect, useState } from 'react';
import './Facilities.css';
import Facility from '../Facility/Facility';

const Facilities = () => {
    const [facilities, setFacilities] = useState([]);

    useEffect(()=>{
        fetch('facilities.json')
            .then(res=>res.json())
            .then(data=>setFacilities(data));
    },[])

    return (
        <section className="facility" id="facility">
            <div className="container">
                <h1 className="heading"><span>'</span> our facilities <span>'</span></h1>

                <div className="box-container">
                    {
                        facilities?.map(facility => <Facility key={facility.id} facility={facility} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Facilities;