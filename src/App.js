import './CSS/App.css';
import './Components/About/About.css';
import './Components/NavBar/Navbar.css';
import './Components/SocialMedia/SocialMedia.css';

import About from './Components/About/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import MyWorks from './Components/MyWorks';

import {
  HashRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js';

function App() {
  return (
    
    <>
    <HashRouter>
      <div className="App">
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/myworks" element= {<MyWorks />} />
      </Routes>  
      
      </div>

    </HashRouter>
  </>
   
  );
}

export default App;
