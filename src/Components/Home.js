import React from 'react'
import Particles from 'react-particles-js';

import Navbar from './NavBar/Navbar';
import Header from './Header';
import Projects from './Project/Projects';
import SocialMedia from './SocialMedia/SocialMedia';

function Home() {
    return (
        <div>
            
            <Particles 
                params={{
                    Particles:{
                    number: {
                        value: 30,
                        density: {
                        enable: true,
                        value_area: 900
                        }
                    },
                    shape: {
                        type: "star",
                        stroke: {
                        width: 6,
                        color: "#f9ab"

                        }
                    }
                    }
                }}
            
            />

            <Navbar />
            <Header />
            <Projects />
            <SocialMedia />

        </div>
    )
}

export default Home
