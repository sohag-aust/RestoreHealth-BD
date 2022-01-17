import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('reviews.json')
            .then(res=>res.json())
            .then(data=>setReviews(data));
    },[]);

    return (
        <section className="review" id="review">
            <div className="container">
                <h1 className="heading"><span>'</span> people's review <span>'</span></h1>

                <div className="box-container">
                    {
                        reviews?.map(review => <Review key={review.id} review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;