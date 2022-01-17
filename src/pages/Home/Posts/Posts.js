import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Posts.css';

const Posts = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <section className="post" id="post">
            <div className="container min-vh-100">
                <h1 className="heading"><span>'</span> out posts <span>'</span></h1>

                <div className="box-container">

                    <div className="box" data-aos="fade-right">
                        <img src="images/img2.jpg" alt="" />
                        <div className="content">
                            <span>jan 5, 2021</span>
                            <a href="#"><h3>post title goes here</h3></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                            <a href="#"><button className="button">learn more</button></a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <img src="images/img4.jpg" alt="" />
                        <div className="content">
                            <span>jan 7, 2021</span>
                            <a href="#"><h3>post title goes here</h3></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                            <a href="#"><button className="button">learn more</button></a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-left">
                        <img src="images/img5.jpg" alt="" />
                        <div className="content">
                            <span>jan 10, 2021</span>
                            <a href="#"><h3>post title goes here</h3></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                            <a href="#"><button className="button">learn more</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Posts;