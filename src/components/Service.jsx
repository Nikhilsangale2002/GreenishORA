import React from 'react'
import { Link } from "react-router-dom";
import "../App.css"; // Importing the CSS file for styling


export default function Service() {
  return (
    <div className= "container service"style={{color : 'black'}}>
      <h1><strong>GreenishORA Services</strong></h1>
      <strong>
        At GreenishORA, we offer expert guidance and practical solutions to help individuals, communities, and organizations adopt sustainable practices. Our services are designed to reduce waste, conserve resources, and promote an eco-friendly lifestyle.
      </strong>
      <h2><strong>Water Conservation Consultation</strong></h2>
      <img src="/Consultation.jpeg" alt="" />
      <strong>We provide customized solutions to help households, offices, and industries reduce water consumption. Our team assesses water usage, recommends aerators, rainwater harvesting systems, and other water-saving technologies to optimize efficiency and minimize wastage.</strong>
      <br/>
      <h2>Waste Management in Housing Societies</h2>
      <img src="/waste.jpeg" alt="" />
      <strong>Our consulting services help housing societies implement effective waste segregation, composting, and recycling systems. We guide residents on reducing landfill waste, setting up community composting units, and collaborating with recyclers for responsible waste disposal.</strong><br/>
      <h2>Waste Management in Gardens</h2>
      <img src="/Gardens.jpeg" alt="" />
      <strong>We offer sustainable garden waste management solutions, including composting, mulching, and eco-friendly disposal methods. Our services help create nutrient-rich compost, reduce burning of dry leaves, and maintain a greener, healthier environment.</strong><br/>
      <h2>Waste Management in Schools</h2>
      <img src="/Schools.jpeg" alt="" />
      <strong>We help schools implement waste reduction strategies through educational programs, waste segregation systems, and composting initiatives. Our goal is to instill eco-friendly habits in students and create a cleaner school environment.</strong><br/>
      <h2>Zero Waste Party Celebration</h2>
      <img src="/Celebration.jpeg" alt="" />
      <strong>GreenishORA promotes sustainable celebrations by providing eco-friendly alternatives to single-use plastics. We assist in organizing waste-free events by offering reusable cutlery, compostable decorations, and proper waste disposal methods to ensure a minimal environmental footprint.</strong><br/>
      <h2>Environment-Friendly Lifestyle Workshops for Schools</h2>
      <img src="/Lifestyle.jpeg" alt="" />
      <strong>Our interactive workshops educate students on sustainable living, waste reduction, water conservation, and composting. Through hands-on activities, we inspire young minds to adopt eco-friendly habits and become responsible citizens of the planet.</strong><br/>
      <h2>Home Composting Workshop</h2>
      <img src="/Home Composting.jpeg" alt="" />
      <strong>We provide step-by-step guidance on home composting, helping individuals turn kitchen waste into nutrient-rich compost. Our workshops include practical demonstrations on using composters, managing composting issues, and reducing household waste.</strong><br/>
      <h2>Managing Nirmalya (Sacred Offerings Waste Management)</h2>
      <img src="/Management.jpeg" alt="" />
      <strong>We offer solutions for the eco-friendly disposal of Nirmalya (flower and organic offerings from temples and religious ceremonies). Our approach includes composting and repurposing floral waste into organic products, ensuring that sacred waste does not contribute to pollution.</strong><br/>
      <Link to="/ContactUS" className="read-more-btn">Contact Us</Link>
      </div>
  )
}
