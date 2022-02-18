import './App.css';

import About from './Components/About/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import MyWorks from './Components/MyWorks';

import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (

    <>
      <HashRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/myworks" element={<MyWorks />} />
          </Routes>

        </div>

      </HashRouter>
    </>

  );
}

export default App;
