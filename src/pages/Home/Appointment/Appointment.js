import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Appointment.css';

const Appointment = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <section className="contact" id="contact">
            <div className="container min-vh-100">
                <div className="row justify-content-center">
                    <h1 className="heading"><span>'</span> make an appointment <span>'</span></h1>

                    <div className="col-md-10" data-aos="flip-down">
                        <form action="">
                            <div className="inputBox">
                                <input type="text" placeholder="full name" />
                                <input type="number" placeholder="phone" />
                            </div>

                            <div className="inputBox">
                                <input type="email" placeholder="your email" />
                                <select defaultValue={''} name="" id="">
                                    <option value="" disabled>Schedule</option>
                                    <option value="09-11 am">09-11 am</option>
                                    <option value="11-03 pm">11-03 pm</option>
                                    <option value="03-06 pm">03-06 pm</option>
                                    <option value="06-09 pm">06-09 pm</option>
                                </select>
                            </div>

                            <textarea name="" id="" cols="30" rows="10" placeholder="message ( optional )"></textarea>

                            <input type="submit" name="" id="" value="make appointment" className="button" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;