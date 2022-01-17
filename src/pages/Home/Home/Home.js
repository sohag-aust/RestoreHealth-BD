import React from 'react';
import About from '../About/About';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Facilities from '../Facilities/Facilities';
import Posts from '../Posts/Posts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Facilities />
            <Reviews />
            <Counter />
            <Appointment />
            <Posts />
        </>
    );
};

export default Home;