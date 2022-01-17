import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';

const Footer = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4" data-aos="fade-right">
                        <a href="#" className="logo">
                            <span style={{color:'cyan'}}>R</span>estore
                            <span style={{color:'cyan'}}>H</span>ealth &nbsp;
                            <span style={{color:'cyan'}}>B</span>
                            <span style={{color:'cyan'}}>D</span>
                        </a>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nemo porro quasi minima consequuntur dolorum, quas amet in autem id?</p>
                    </div>

                    <div className="col-md-4 text-center" data-aos="fade-up">
                        <h3>links</h3>
                        <a href="#">home</a>
                        <a href="#">about</a>
                        <a href="#">facility</a>
                        <a href="#">review</a>
                        <a href="#">contact</a>
                        <a href="#">post</a>
                    </div>

                    <div className="col-md-4 text-center" data-aos="fade-left">
                        <h3>share</h3>
                        <a href="#">facebook</a>
                        <a href="#">twitter</a>
                        <a href="#">instagram</a>
                        <a href="#">github</a>
                    </div>

                </div>
            </div>

            <h1 className="credit text-center mx-auto">created by <span style={{color:'cyan'}}>Md.Ashraful Islam</span> | all rights reserved.</h1>
        </section>
    );
};

export default Footer;