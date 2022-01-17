import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Facility.css';

const Facility = (props) => {
    const {title, description, img} = props.facility;

    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    const cardStyle = {
        width:'280px',
        margin:'10px',
        overflow: 'hidden'
    }

    return (
        <>
            <div className="card text-center" style={cardStyle} data-aos="zoom-in">
                <img className="card-img" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        <span>{description.substring(0,title.length)}</span>
                        {description.substring(title.length)}
                    </p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-warning">{title}</a>
                </div>
            </div>
        </>
    );
};

export default Facility;