import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Counter.css';

const Counter = () => {
    return (
        <section className="counter">
            <div className="container">
                <div className="box-container">

                    <div className="box" data-aos="fade-up">
                        <i className="fas fa-hospital"></i>
                        <span>120+</span>
                        <h3>Hospitals</h3>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <i className="fas fa-users"></i>
                        <span>100+</span>
                        <h3>staff</h3>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <i className="fas fa-smile"></i>
                        <span>1200+</span>
                        <h3>happy patients</h3>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <i className="fas fa-procedures"></i>
                        <span>130+</span>
                        <h3>bed facility</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Counter;