import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../About/About.css"; 

const HomeIntro = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span className="highlight">Anup N Raikar</span>
        </h1>
        <p className="home-subtitle">
          Aspiring Data Analyst with a love for transforming data into impactful insights.
          Skilled in Excel, SQL, Python, Power BI, and Tableau — and always ready for a new challenge.
        </p>
        <div className="home-buttons">
          {/* Updated Contact button using React Router's Link component */}
          <Link to="/contact" className="btn primary">Contact</Link>

          <a
            href="/Anup_Raikar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
