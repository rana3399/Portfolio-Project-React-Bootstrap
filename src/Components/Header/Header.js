import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import "./Header.css";
import mycv from './Full_Stack_Web_Developer_Rana_Ahmed_CV_English.pdf'


const Header=()=> {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi I am Rana Ahmed</h1>
                <h2>A Full-Stack Web-Developer</h2>
                <Typed 
                className ="typed-text"
                strings={[
                   "Web Development 💻", "React 🌐", "JS ✅", "Node.js 🔴", "SQL ✍", "CSS 💅", "HTML5 <>"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer"> </a>
                <div className= 'button-container'>

                    <Link to ='/contact' > <button className="my-btn fw-bolder">Contact me</button></Link>
                   
                    <a href={mycv} download >
                    <button className="my-btn fw-bolder">  Download my CV  </button>
                    </a> 
                    
                   
                </div>
            </div>
           
        </div>
    )
}

export default Header