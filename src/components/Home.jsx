import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Importing the CSS file for styling

export default function Home(props) {
  return (
    <>
      <div
        className="container ms-auto"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <Link rel="stylesheet" to="App.css" />
        <h3>LIVE SUSTAINABLY TODAY</h3>
        <h1>
          <strong>Join the Eco-Friendly Revolution</strong>
        </h1>

        <Link to="/Shop" className="shop-more-btn">
          Shop More
        </Link>

        <div
          className="container-photo my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <link rel="stylesheet" href="App.css" />
          <img src="/plant.jpeg" alt="" />
          <h2>Why Choose GreenishORA?</h2>
          <h1>
            <strong>Our Commitment to Sustainable Living</strong>
          </h1>
        </div>
        <div
          className="container text-center"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <Link rel="stylesheet" to="App.css" />
          <div className="row"style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <div className="col  " style={{backgroundColor: props.mode === "dark" ? "grey" : "white"}}>
              1. <h1 >Quality Assurance</h1>
              <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
                We prioritize high-quality products that meet sustainable
                standards for an eco-friendly lifestyle without compromising on
                performance or effectiveness.
              </p>
            </div>

            <div className="col"style={{backgroundColor: props.mode === "dark" ? "grey" : "white"}}>
              2. <h1>Community Driven</h1>
              <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
                Our platform fosters a community of like-minded individuals
                dedicated to sharing knowledge and practices for a greener
                tomorrow.
              </p>
            </div>

            <div className="col" style={{backgroundColor: props.mode === "dark" ? "grey" : "white"}}>
              3. <h1>Transparent Practices</h1>
              <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
                We believe in transparency, offering clear information about
                sourcing and production processes to empower informed purchasing
                decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="container mission-section">
          <Link rel="stylesheet" to="App.css" />
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/boy.jpeg"
                alt="Sustainability Mission"
                className="rounded-image"
              />
            </div>

            <div
              className="col-md-6 mission-text"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              <p className="text-uppercase text-muted mb-2">Our Mission</p>
              <h2 className="mb-3">Passionate About Sustainability</h2>
              <p
                className="mb-4"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                Founded by a team of environmental enthusiasts, Greenishora.com
                is dedicated to promoting sustainable living through
                eco-friendly products and educational resources.
              </p>
              <Link to="/About" className="read-more-btn">
              Read More
            </Link>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <Link rel="stylesheet" to="App.css" />
          <p>WHAT WE OFFER</p>
          <h2>Explor Our Eco-Friendly Products</h2>
          <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
            At GreenishORA, we are committed to promoting a sustainable
            lifestyle through innovative and practical solutions. Our
            eco-friendly products help reduce waste, conserve resources, and
            make sustainable living easy for everyone.
          </p>
        </div>

        <section className="solution-section">
          <div className="solution-card" style={{backgroundColor: props.mode === "dark" ? "grey" : "white"}}>
            <img src="/comp.jpg" alt="Composting Solutions" />
            <h2>Composting Solutions</h2>
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Our Home Composter is a hassle-free, easy-to-use solution for
              managing kitchen waste. It comes with a high-quality compost
              culture that accelerates the composting process, helping you
              create rich, organic compost for your garden.
            </p>
            <Link to="/Shop" className="read-more-btn">
              Read More
            </Link>
          </div>

          <div className="solution-card" style={{backgroundColor: props.mode === "dark" ? "grey" : "white"}}>
            <img src="/water.jpg" alt="Water-Saving Solutions" />
            <h2>Water-Saving Solutions</h2>
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Reduce water wastage effortlessly with our water-saving aerators,
              designed to minimize water flow without compromising performance.
              A simple yet effective way to conserve water and lower your
              utility bills.
            </p>
            <Link to="#" className="read-more-btn">
              Read More
            </Link>
          </div>

          <div className="solution-card" style={{backgroundColor: props.mode === "dark" ? "grey" : "white"}}>
            <img src="/waste.jpg" alt="Zero-Waste Solutions" />
            <h2>Zero-Waste Solutions</h2>
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
              We offer a range of sustainable alternatives to single-use
              plastics, including rental cutlery, bamboo toothbrushes, and steel
              straws. Additionally, we provide expert consultation for waste
              management.
            </p>
            <Link to="#" className="read-more-btn">
              Read More
            </Link>
          </div>
        </section>
        <div className="container mission-section">
          <Link rel="stylesheet" to="App.css" />
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/boy.jpeg"
                alt="Sustainability Mission"
                className="rounded-image"
              />
            </div>

            <div
              className="col-md-6 mission-text"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              <p className="text-uppercase text-muted mb-2">Why Choose Us</p>
              <h2 className="mb-3">Our Unique Value Proposition</h2>
              <p
                className="mb-4"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                Discover how our approach to sustainability is reshaping the way
                you shop for eco-friendly products. Sustainably Sourced Products
                Educational Resources Provided User-Friendly Shopping Experience
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </div>

        <div className="container  join">
          <h1>Join the Movement</h1>
          <p>
            Become a part of our community committed to a greener future, and
            start shopping sustainably today!
          </p>
          <Link to="/shop" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}
