import React from 'react';
// ---IMPORT FONT AWESOME-----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import logoImg from "./portfolio_logo.PNG";

const Navbar = () => {
    return (
    <div className="my-navbar">
        <nav className="navbar navbar-expand-lg navbar-light nav-my-bg-color">
            <div className="container">

                
                <Link to = "/" className="navbar-brand" > <img src= {logoImg} alt="logo" /> </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">

                        <li className="nav-item active">
                        <Link to = "/about" className = "nav-link" >About me</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/myworks" className = "nav-link">My works</Link>
                        </li>
                        <li className="nav-item">
                        <Link to ='/contact' className = "nav-link" >Contact me</Link>
                        </li>
                        
                    </ul>
                
                </div>
            </div>
        </nav>

    </div>
    )
}

export default Navbar
