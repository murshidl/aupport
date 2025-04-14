import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sjgtgtj',
      'template_z7gzhb4',
      form.current,
      'KFjtgZcEJNiDmNm4v'
    ).then(
      (result) => {
        alert("✅ Email sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("❌ Failed to send email.");
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder="Your Name" required />
      <input type="email" name="from_email" placeholder="Your Email" required />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="message" placeholder="Message" required />
      <input type="text" name="cc_email" placeholder="CC (optional)" />
      <input type="text" name="bcc_email" placeholder="BCC (optional)" />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
