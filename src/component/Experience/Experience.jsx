import React from 'react';
import './Experience.css';

const experienceData = [
  {
    title: 'Machine Learning Intern',
    company: 'RDL Technologies',
    date: '06/2023 - 01/2024',
    description: 'Contributed to multiple machine learning projects within the company, including developing a dental model building project.',
  },
  {
    title: 'AIML Intern',
    company: 'Technical Career Education',
    date: '10/2023 - 11/2023',
    description: 'Developed a face recognition application using ML algorithms, leveraging OpenCV and Python to enhance accuracy and efficiency in image processing, and optimizing algorithms for reliable real-world performance.',
  },
  // Add more experience items here if needed
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-list">
        {experienceData.map((item, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-title">{item.title}</h3>
            <p className="company-name">{item.company}</p>
            <p className="experience-date">{item.date}</p>
            <p className="experience-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
