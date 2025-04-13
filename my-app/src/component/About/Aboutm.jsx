
import React from 'react';
import './Aboutm.css'; 

const Aboutm = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-intro">
          <img src="/path-to-your-photo.jpg" alt="Anup Raikar" className="about-photo" />
          <p className="about-description">
            Hello! I'm <strong>Anup N Raikar</strong>, a data-driven individual with a passion for analytics, machine learning, and technology. I thrive on turning complex data into simple, insightful solutions that empower businesses to make smarter decisions. 
            Based in Mangalore, I specialize in using tools like <strong>Python</strong>, <strong>SQL</strong>, <strong>Power BI</strong>, and <strong>Tableau</strong> to extract insights from large datasets. 
            Currently, I’m continuously learning and growing in the data analytics and machine learning fields, always eager to apply my skills to new challenges.
          </p>
        </div>
        
        <div className="about-details">
          <h3>My Professional Journey</h3>
          <p className="about-description">
            My journey into the world of data analytics started with a <strong>Bachelor's degree in Computer Science</strong> from <strong>Sahyadri College of Engineering and Management</strong>. During my academic years, I was fascinated by how data could be used to solve real-world problems. This fascination led me to pursue machine learning and data analysis as a career path.
          </p>
          <p className="about-description">
            I gained invaluable experience during my internship at <strong>RDL Technologies</strong>, where I worked on multiple machine learning projects, including building predictive models for the healthcare sector. This experience allowed me to apply theoretical knowledge to real-life data, which strengthened my skills in <strong>data preprocessing</strong>, <strong>modeling</strong>, and <strong>deployment</strong>.
          </p>
        </div>

        <div className="about-skills">
          <h3>Skills & Expertise</h3>
          <ul>
            <li><strong>Data Analysis</strong> using <strong>Python</strong> (Pandas, NumPy)</li>
            <li><strong>Machine Learning</strong> using <strong>Scikit-learn</strong>, <strong>TensorFlow</strong></li>
            <li><strong>Data Visualization</strong> with <strong>Power BI</strong>, <strong>Tableau</strong>, and <strong>Matplotlib</strong></li>
            <li><strong>SQL</strong> for database management and querying</li>
            <li><strong>Version Control</strong> using <strong>Git</strong> and <strong>GitHub</strong></li>
          </ul>
        </div>

        <div className="about-hobbies">
          <h3>Outside of Work</h3>
          <p className="about-description">
            When I’m not diving into data, you’ll find me enjoying sports, especially cricket. I’ve been fortunate enough to win several local championships, and I believe the lessons I’ve learned from sports — teamwork, discipline, and persistence — directly translate into my professional life. I also love playing video games and reading about new advancements in technology, especially AI and data science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutm;
