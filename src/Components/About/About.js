import React from 'react';
import Navbar from '../NavBar/Navbar';
import SocialMedia from '../SocialMedia/SocialMedia';

import profileImg from './ahmed.png';
 //const pic = require('../img/hero-img-1.jpg');


function About() {
    return (
        <>
        <Navbar />
        <div>
            <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-lg-6 col-sm-12">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About Me</h3>
                            <h6 className="theme-color lead">A full stack Web-Developer</h6>
                            <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                            
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Birthday</label>
                                        <p>7th of January</p>
                                    </div>
                        
                                    <div className="media">
                                        <label>Residence</label>
                                        <p>Spain</p>
                                    </div>
                    
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>+34 6313 75245</p>
                                    </div>
                                
                                    <div className="media">
                                        <label>Freelance</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src={profileImg} title="" alt="my-personal-img"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>


        </div>
        <SocialMedia />
        </>
    )
}

export default About;
