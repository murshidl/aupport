import React from "react";
import "./Projectm.css";

const Projectm = () => {
  return (
    <div className="projectm-container">
      <h1 className="projectm-title">Projects</h1>

      {/* Project 1: Fault Fabric Prediction Model */}
      <div className="project">
        <h2 className="project-title">Fault Fabric Prediction Model</h2>
        <p className="projectm-description">
          This project focuses on predicting skipped or loose stitches in fabric pieces through machine learning. The goal is to
          detect fabric defects in real-time to assist quality control teams in manufacturing processes.
        </p>
        <div className="projectm-details">
          <h2 className="section-title">Technologies Used</h2>
          <ul>
            <li>Machine Learning</li>
            <li>Yolov8 (for object detection)</li>
            <li>Roboflow (for data labeling)</li>
          </ul>

          <h2 className="section-title">Project Overview</h2>
          <p>
            The Fault Fabric Prediction Model uses machine learning algorithms to predict skipped and loose stitches in fabric
            pieces. Yolov8 is used for object detection to identify faulty areas in the fabric, while Roboflow helps label and process
            data for model training. The solution aims to reduce human error and improve the efficiency of the manufacturing process.
          </p>

          <h2 className="section-title">Timeline</h2>
          <p>January 2024 - March 2024</p>

          <h2 className="section-title">Role</h2>
          <p>Machine Learning Developer</p>

          <h2 className="section-title">Challenges Faced</h2>
          <p>
            One of the main challenges faced during the project was accurately detecting fabric defects, as the dataset required
            significant cleaning and preprocessing. Another challenge was ensuring the model's accuracy in real-time prediction.
          </p>

          <h2 className="section-title">Key Outcomes</h2>
          <p>
            The model achieved high accuracy in detecting fabric defects, reducing quality control errors and improving production
            timelines.
          </p>
        </div>
      </div>

      {/* Project 2: Phish Armor */}
      <div className="project">
        <h2 className="project-title">Phish Armor</h2>
        <p className="projectm-description">
          Phish Armor is a web application designed to detect email spam and phishing attempts. The application also educates users
          about the potential dangers of email spams.
        </p>
        <div className="projectm-details">
          <h2 className="section-title">Technologies Used</h2>
          <ul>
            <li>Machine Learning</li>
            <li>Web Scraping</li>
            <li>HTML, CSS, JavaScript</li>
          </ul>

          <h2 className="section-title">Project Overview</h2>
          <p>
            Phish Armor uses machine learning to detect and classify phishing emails. It scrapes email content to identify patterns
            indicative of spam or phishing attempts, helping users avoid malicious messages. The educational part of the app provides
            information on identifying phishing emails and staying safe online.
          </p>

          <h2 className="section-title">Timeline</h2>
          <p>July 2023 - September 2023</p>

          <h2 className="section-title">Role</h2>
          <p>Full-stack Developer</p>

          <h2 className="section-title">Challenges Faced</h2>
          <p>
            One challenge was creating an efficient and accurate web scraping algorithm to capture and process email content. The
            machine learning model also needed substantial data to effectively distinguish between phishing and legitimate emails.
          </p>

          <h2 className="section-title">Key Outcomes</h2>
          <p>
            The project successfully reduced the number of phishing attempts in email accounts and educated users on how to stay safe
            from email-based attacks.
          </p>
        </div>
      </div>

      {/* Project 3: Placement Cell Management System */}
      <div className="project">
        <h2 className="project-title">Placement Cell Management System</h2>
        <p className="projectm-description">
          A database management system to analyze student eligibility for attending placement drives, helping the placement cell
          streamline the process.
        </p>
        <div className="projectm-details">
          <h2 className="section-title">Technologies Used</h2>
          <ul>
            <li>Java Swing</li>
            <li>MySQL</li>
          </ul>

          <h2 className="section-title">Project Overview</h2>
          <p>
            The Placement Cell Management System automates the analysis of student data to determine their eligibility for placement
            interviews. It uses a MySQL database to store and process student information, and Java Swing to provide a user-friendly
            interface for placement cell administrators to interact with the system.
          </p>

          <h2 className="section-title">Timeline</h2>
          <p>April 2023 - June 2023</p>

          <h2 className="section-title">Role</h2>
          <p>Database Developer</p>

          <h2 className="section-title">Challenges Faced</h2>
          <p>
            Integrating the database with the Java Swing interface was a significant challenge, as it required careful attention to
            data validation and real-time updates. Ensuring accuracy in eligibility analysis based on dynamic student data was also
            difficult.
          </p>

          <h2 className="section-title">Key Outcomes</h2>
          <p>
            The system successfully automated eligibility analysis, reducing manual errors and improving the efficiency of the
            placement process for students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projectm;
