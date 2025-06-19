import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css"; // Importing the CSS file for styling
import Dprofile from './Dprofile';


export default function Navbar(props) {
  const[openProfile , setOpenProfile]=useState(false);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-3`}
    >
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="/th.jpeg"
          alt="Logo"
          width="40"
          height="40"
          className="d-inline-block align-top me-2"
        />
        {props.title}
      </Link>

      <ul className="nav-links navbar-nav ms-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
            to="/About"
          >
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
            to="/Shop"
          >
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
            to="/Service"
          >
            Service
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
            to="/ContactUs"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="d-flex align-items-center">
        <div
          className={`form-check form-switch mx-3 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
          />
          <label className="form-check-label" htmlFor="switchCheckDefault">
            Dark Mode
          </label>
        </div>

        <form className="d-flex search-form me-2">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
          <button className="navbar profile-btn  align-items-center" onClick={() => setOpenProfile ((prev) => !prev)}>
          <img
            src="/profile.svg"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />{openProfile && <Dprofile/>}
        </button>
        
        <Link className="navbar-addtocart d-flex align-items-center" to="/">
          <img
            src="/addtocart.svg"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
        </Link>
      </div>
    </nav>
  );
}
