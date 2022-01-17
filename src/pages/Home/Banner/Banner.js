import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';

const Banner = () => {

    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <section className="home" id="home">
            <div className="container">
                <div className="row min-vh-100 align-items-center text-center text-md-left">

                    <div className="col-md-6 pr-md-5" data-aos="zoom-in">
                        <img src="images/home-img.svg" width="100%" alt="" />
                    </div>

                    <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                        <h1><span>stay</span> safe, <span>stay</span> healthy.</h1>
                        <h3>caring for you.</h3>
                        <a href="#"><button className="button">learn more</button></a>
                    </div>

                </div>
            </div>
        </section>
        
    );
};

export default Banner;