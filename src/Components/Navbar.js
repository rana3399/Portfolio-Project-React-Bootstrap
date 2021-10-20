import React from 'react'
// ---IMPORT FONT AWESOME-----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
    <div className="my-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">

                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                        <a className="nav-link" href="#">About me</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">My works</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact me</a>
                        </li>
                        
                    </ul>
                
                </div>
            </div>
        </nav>

    </div>
    )
}

export default Navbar 
