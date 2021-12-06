import "./CSS/App.css";
import "./CSS/About.css";
import "./CSS/Navbar.css";
import "./CSS/SocialMedia.css";

import About from "./Components/About";
import Home from "./Components/Home";
import ContactMe from "./Components/ContactMe";
import MyWorks from "./Components/MyWorks";

import { HashRouter, Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";

function App() {
  return (
    <>
      <HashRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/about" element={<About />} />
            <Route path="/myworks" element={<MyWorks />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
