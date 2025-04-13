import React, { useState, useRef } from 'react';
import './Contactm.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contactm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sjgtgtj',         // 🔁 Your actual Service ID
      'template_z7gzhb4',        // 🔁 Your actual Template ID
      form.current,
      'KFjtgZcEJNiDmNm4v'        // 🔁 Your actual Public Key
    ).then(
      (result) => {
        console.log('Email sent ✅', result.text);
        alert('Thanks for reaching out! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('Email error ❌', error.text);
        alert('Something went wrong. Please try again later.');
      }
    );
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-description">
            Whether you have a question, a project idea, or just want to say hello — feel free to reach out.
          </p>
          <div className="contact-details">
            <p><FaEnvelope className="icon" /><a href="mailto:anupraikar75@gmail.com">anupraikar75@gmail.com</a></p>
            <p><FaPhoneAlt className="icon" /><a href="tel:+918088490957">+91-8088490957</a></p>
            <p><FaLinkedin className="icon" />
              <a href="https://www.linkedin.com/in/anup-raikar-5a8832308/" target="_blank" rel="noopener noreferrer">
                anup-raikar-5a8832308
              </a>
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit} ref={form}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactm;
