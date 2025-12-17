import React, { useState } from 'react';
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "fd3ed589-aa40-4e81-ba01-2dadd0811f46");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }

      setTimeout(() => setResult(""), 3000);
    } catch (error) {
      setResult("Network error. Please try later.");
      setTimeout(() => setResult(""), 3000);
    }
  };

  return (
    <section id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
      </div>

      <div className='contact-section'>
        {/* Left Info */}
        <div className='contact-left'>
          <h2>Let's Talk</h2>
          <p>
            I'm currently available for new projects. Feel free to reach out for
            any inquiries or collaborations.
          </p>

          <div className='contact-details'>
            <div className="contact-detail">
              <img src={mail_icon} alt='Email Icon' />
              <p>2244mv@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='Phone Icon' />
              <p>+91 9602938244</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='Location Icon' />
              <p>Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your full name'
            required
          />

          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email address'
            required
          />

          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            rows="6"
            placeholder='Write your message here'
            required
          ></textarea>

          <button type='submit' className='contact-submit'>
            Submit Now
          </button>

          {result && <p className="contact-result">{result}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
