import React from 'react'
import Typed from 'react-typed';


const Header=()=> {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi i am Rana Ahmed</h1>
                <Typed 
                className ="typed-text"
                strings={[
                   "Web Development", "React", "JS", "Node.js", "MySQL"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer"> </a>
                <button className="my-btn">Contact me</button>
            </div>
           
        </div>
    )
}

export default Header