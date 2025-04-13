import React from "react";
import { FaPython, FaTable, FaDatabase, FaChartBar, FaCodeBranch } from "react-icons/fa";
import { SiScikitlearn, SiPandas, SiTableau } from "react-icons/si"; // Correct imports
import "./Skills.css"; // Importing the CSS for styling

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <SiPandas />, name: "Pandas" },
  { icon: <SiScikitlearn />, name: "Sklearn" },
  { icon: <FaChartBar />, name: "Matplotlib" },
  { icon: <FaDatabase />, name: "SQL" }, // Used FaDatabase for SQL
  { icon: <FaChartBar />, name: "Power BI" }, // Replaced SiPowerbi with FaChartBar (for visualization)
  { icon: <SiTableau />, name: "Tableau" },
  { icon: <FaCodeBranch />, name: "Version Control" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
