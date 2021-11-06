import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Projects from './Components/Projects';
import SocialMedia from './Components/SocialMedia';



function App() {
  return (
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
    </div>
  );
}

export default App;
