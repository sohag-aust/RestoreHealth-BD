import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Review.css';

const Review = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <section className="review" id="review">
            <div className="container">
                <h1 className="heading"><span>'</span> people's review <span>'</span></h1>

                <div className="box-container">

                    <div className="box" data-aos="fade-right">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
                        <h3>someone's name</h3>
                        <span>jan 5, 2021</span>
                        <img src="images/pic1.jpg" alt="" />
                    </div>

                    <div className="box" data-aos="fade-up">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
                        <h3>someone's name</h3>
                        <span>jan 7, 2021</span>
                        <img src="images/pic2.jpg" alt="" />
                    </div>

                    <div className="box" data-aos="fade-left">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
                        <h3>someone's name</h3>
                        <span>jan 10, 2021</span>
                        <img src="images/pic3.jpg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Review;