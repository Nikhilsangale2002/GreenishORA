import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-column ">
          <strong>Contact Us</strong>
          <p>
            Address: GreenishORA Solutions, Jay Malhar Colony, Walhekarwadi,
            Chinchwad Pune 411033 <br/>Email: greenishora@gmail.com <br/>Phone: +91
            8605014087
          </p>
        </div>
        <div className="footer-column">
        <strong>Quick Links</strong>
        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Service">Service</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
        </div>

        <div className="footer-column">
            <strong>Help</strong>
            <ul className="footer-links">
                <li>
                <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                <Link to="/Returns">Returns</Link>
                </li>
                <li>
                <Link to="/Shipping">Shipping Info</Link>
                </li>
            </ul>
        </div>
        <div className="footer-column">
            <strong>Follow Us</strong>
            <ul className="social-links">
                <li>
                    
                <Link to="https://www.facebook.com/greenishora" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare />Facebook
                </Link>
                </li>
                <li>
                <Link to="https://www.instagram.com/greenishora" target="_blank" rel="noopener noreferrer">
                   <FaSquareInstagram /> Instagram
                </Link>
                </li>
                <li>
                <Link to="https://www.twitter.com/greenishora" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />Twitter
                </Link>
                </li>
            </ul>
        </div>  
      </footer>
      <footer className="bg-dark text-white text-center py-3 ">
        © {new Date().getFullYear()} GreenishORA. All rights reserved.
      </footer>
    </>
  );
}
