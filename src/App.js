import './App.css';
import './About.css';

import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Projects from './Components/Projects';
import SocialMedia from './Components/SocialMedia';
import About from './Components/About';

import ContactMe from './Components/ContactMe';



function App() {
  return (
    <>
    <BrowserRouter>
    

    <Link to="/contact">Contact</Link>


    <div className="App">
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
      <About/>
      
      <Routes>
      <Route Path= '/contact' component= {ContactMe}/>

      </Routes>
      
  
    </div>
    
    </BrowserRouter>
    </>
   
  );
}

export default App;
