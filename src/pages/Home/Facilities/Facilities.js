import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Facilities.css';

const Facilities = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <section className="facility" id="facility">
            <div className="container">

                <h1 className="heading"><span>'</span> our facilities <span>'</span></h1>

                <div className="box-container">
                    <div className="box" data-aos="zoom-in">
                        <a href="images/img1.jpg" title="our team">
                            <img src="images/img1.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="images/img2.jpg" title="our lab">
                            <img src="images/img2.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="images/img3.jpg" title="emergency rooms">
                            <img src="images/img3.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="images/img4.jpg" title="expert doctors">
                            <img src="images/img4.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="images/img5.jpg" title="expert doctors">
                            <img src="images/img5.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="images/img6.jpg" title="emergency rooms">
                            <img src="images/img6.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="images/img7.jpg" title="expert doctors">
                            <img src="images/img7.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="images/img8.jpg" title="emergency rooms">
                            <img src="images/img8.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="images/img9.jpg" title="enough beds">
                            <img src="images/img9.jpg" alt="" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Facilities;