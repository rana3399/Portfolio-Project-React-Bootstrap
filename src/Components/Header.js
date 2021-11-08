import React from 'react'
import Typed from 'react-typed';


const Header=()=> {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi I am Rana Ahmed</h1>
                <h2>A Full-Stack Web-Developer</h2>
                <Typed 
                className ="typed-text"
                strings={[
                   "Web Development", "React", "JS", "Node.js", "SQL", "CSS", "HTML5"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer"> </a>
                <div className= 'button-container'>
                    <button className="my-btn">Contact me</button>
                    <button className="my-btn"><a href="/image/Rana-Ahmed-CV-01.png" download>Download CV</a></button>
 
                </div>
            </div>
           
        </div>
    )
}

export default Header