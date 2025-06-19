import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Importing the CSS file for styling

export default function About(props) {
  // let myStyle = {
  //   color: props.mode === "dark" ? "white" : "black",
  //   backgroundColor: props.mode === "dark" ? "grey" : "white",
  // };
  return (
    <>
      <div className="container ms-auto">
        <h1>
          <strong>Our Mission</strong>
        </h1>
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
            <h2 className="mb-3">Passionate About Sustainability</h2>
            <p
              className="mb-4"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              At Greenishora.com, our team of seasoned environmentalists
              combines years of expertise in sustainability with a passion for
              eco-friendly living. We curate products that not only meet high
              environmental standards but also educate our customers on reducing
              their ecological impact. <br />
              <br />
              Our dedicated staff members are not just employees; they are
              advocates for sustainable living. With diverse backgrounds in
              environmental science, education, and customer service, each team
              member is committed to empowering our community through insightful
              guidance and support.
            </p>
          </div>
        </div>
      </div>

      <div className="container ms-auto">
        <h3>WHY CHOOSE US </h3>
        <h1>
          <strong>Our Unique Value Proposition</strong>
        </h1>
      </div>
      <div
        className="container text-center"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div
          className="row"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <div
            className="col  "
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            1. <h1>Sustainably Sourced Products</h1>
            <br />
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
              We provide a carefully selected range of sustainable products that
              fit seamlessly into your life. Our focus on quality ensures that
              you’re making a positive impact without compromising on
              effectiveness.
            </p>
          </div>

          <div
            className="col"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            2. <h1>Educational Resources Provided</h1>
            <br />
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Transparency is at the core of our philosophy, allowing you to
              make informed choices about the products you use. Our detailed
              descriptions and sourcing information help you understand the
              journey of each item.
            </p>
          </div>

          <div
            className="col"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            3. <h1>User-Friendly Shopping Experience</h1>
            <br />
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
              We believe in the power of community engagement, organizing events
              and sharing knowledge to inspire others. Join us on our mission to
              create a healthier planet, one sustainable choice at a time.
            </p>
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
    </>
  );
}
