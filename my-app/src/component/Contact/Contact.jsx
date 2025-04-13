import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  // Manage form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        e.target, // Form data
        "YOUR_USER_ID" // Replace with your EmailJS public user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
          alert("Thanks for reaching out! We'll get back to you shortly.");
        },
        (error) => {
          console.log("Email sending error", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <footer className="footer-section">
      <div className="contact-card">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>Feel free to reach out via the form or any of the options below.</p>
          <div className="contact-details">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:anupraikar75@gmail.com">anupraikar75@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+918088490957">+91 80884 90957</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/anup-raikar-5a8832308/"
                target="_blank"
                rel="noreferrer"
              >
                Anup Raikar
              </a>
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Anup N Raikar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
