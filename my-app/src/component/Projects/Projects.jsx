import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Fault Fabric Prediction Model',
    description:
      'Machine Learning model to predict skipped or loose stitches in fabric pieces. Built using Yolov8 and Roboflow.',
    link: 'https://github.com/your-repo/fault-fabric-prediction',
  },
  {
    title: 'Phish Armor',
    description:
      'A web application designed to detect email spams and educate users about phishing attempts. Built with Machine Learning, Web Scraping, HTML, CSS, and JavaScript.',
    link: 'https://github.com/your-repo/phish-armor',
  },
  {
    title: 'Placement Cell Management System',
    description:
      'A database system to analyze student eligibility for attending placements, built with Java Swing and MySQL.',
    link: 'https://github.com/your-repo/placement-cell',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.link && (
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
