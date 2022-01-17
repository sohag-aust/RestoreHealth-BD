import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row min-vh-100 align-items-center">

                    <div className="col-md-6 content" data-aos="fade-right">

                        <div className="box">
                            <h3> <i className="fas fa-ambulance"></i> ambulance services </h3>
                            <p>Need ambulance service near you? we provides emergency ambulance service and freezing support.</p>
                        </div>

                        <div className="box">
                            <h3> <i className="fas fa-procedures"></i> emergency rooms </h3>
                            <p>Need emergency rooms near you? we provides emergency rooms and support.</p>
                        </div>

                        <div className="box">
                            <h3> <i className="fas fa-stethoscope"></i> free check-ups </h3>
                            <p>Need free check-ups near you? we provides free check-ups and support.</p>
                        </div>

                    </div>

                    <div className="col-md-6 d-none d-md-block" data-aos="fade-left">
                        <img src="images/about-img.png" width="100%" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;