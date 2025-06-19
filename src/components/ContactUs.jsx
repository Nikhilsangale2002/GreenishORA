import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Importing the CSS file for styling
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            Get in touch with us for inquiries, collaborations, or support.
            We're here to help!
          </p>
        </div>
        <div className="form-container">
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="4" placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Connect With Us</h3>
          <div className="info-grid">
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <h4>Address</h4>
              <p>
                GreenishORA Solutions, Jay Malhar Colony, Walhekarwadi,
                Chinchwad,
                <br />
                Pune 411033, Maharashtra, India
              </p>
            </div>
            <div>
              <i className="fas fa-phone-alt"></i>
              <h4>Call Us</h4>
              <p>+91 8605014087</p>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <p>greenishora2@gmail.com</p>
            </div>
            <div>
              <h4>Follow Us</h4>
              <p>
                <Link to="https://www.facebook.com/greenishora" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookSquare />
                                </Link>
                <Link to="https://www.instagram.com/greenishora" target="_blank" rel="noopener noreferrer">
                                   <FaSquareInstagram /> 
                                </Link>
                <Link to="https://www.twitter.com/greenishora" target="_blank" rel="noopener noreferrer">
                                    <FaSquareXTwitter />
                                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
  title="GreenishORA Location Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609840368!2d73.72288091120982!3d18.524870612053655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfa25cd0be55%3A0x54b4c9eb409865db!2sGreenishORA%20Solutions!5e0!3m2!1sen!2sin!4v1624020034832!5m2!1sen!2sin"
  style={{ width: "100%", height: "400px", border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
      </section>
    </div>
  );
}
