import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import About from './component/About/About.jsx';
import Skills from './component/Skills/Skills.jsx';
import Projects from './component/Projects/Projects.jsx';
import Experience from './component/Experience/Experience.jsx';
import Contact from './component/Contact/Contact.jsx';
import Aboutm from './component/About/Aboutm.jsx';
import Contactm from './component/Contact/Contactm.jsx';
import Projectm from './component/Projects/Projectm.jsx';

export const App = () => {
  return (
    <Router> {/* Wrap the whole app with BrowserRouter */}
      <div>
        <Navbar /> {/* Navbar component */}
        
        <Routes> {/* Define routes for different pages */}
          {/* Home page route - everything will be included here */}
          <Route 
            path="/" 
            element={
              <div>
                <About /> {/* About section */}
                <Skills /> {/* Skills section */}
                <Projects /> {/* Projects section */}
                <Experience /> {/* Experience section */}
                <Contact /> {/* Contact section */}
              </div>
            } 
          />

          {/* Separate route for Aboutm page */}
          <Route path="/project" element={<Projectm />} /> 
          <Route path="/contact" element={<Contactm />} />

          <Route path="/about" element={<Aboutm />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
