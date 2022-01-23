import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import "./Header.css";
import mycv from './Web_Developer_Rana_Ahmed.pdf'

const userName = "Rana Ahmed";
const profession = "A Full-Stack Web-Developer"

const Header=()=> {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi I am {userName} </h1>
                <h2> {profession} </h2>
                <Typed 
                className ="typed-text"
                strings={[
                   "Web Development 💻", "React 🌐", "JS ✅", "Node.js 🔴", "SQL ✍", "CSS 💅", "NPM", "GIT 🔨", "HTML5 <>"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                
                <div className= 'button-container'>
                    <Link to ='/about' > 
                    <button className="my-btn fw-bolder">About me</button>
                    </Link>
                    <a href={mycv} download >
                    <button className="my-btn fw-bolder">  Download my CV  </button>
                    </a> 
                </div>
            </div>
           
        </div>
    )
}

export default Header