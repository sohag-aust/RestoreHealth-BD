import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Review = (props) => {
    const {id, name, review, img, date, aos} = props.review;

    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <div className="box" data-aos={aos}>
            <p>{review}</p>
            <h3>{name}</h3>
            <span>{date}</span>
            <img src={img} alt="image missing" />
        </div>
    );
};

export default Review;