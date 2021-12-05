import './App.css';
import './About.css';

import About from './Components/About';
import Home from './Components/Home';
import ContactMe from './Components/ContactMe';

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
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/about" element={<About />} />
      </Routes>  
      
      </div>

    </HashRouter>
  </>
   
  );
}

export default App;
