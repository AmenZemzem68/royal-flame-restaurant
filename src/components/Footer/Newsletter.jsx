import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app-newsletter" id="contact">
    <div className="app-newsletter-heading">
      <SubHeading title="Reservation" />
      <h1 className="headtext-cormorant">Book A Table With Us</h1>
      <p className="p-opensans">
        And ensure your spot for a delightful dining experience!
      </p>
    </div>
    <div className="app-newsletter-input flex-center">
      <input type="text" placeholder="Enter your name" />
      <input type="tel" placeholder="Enter your phone number" />
      <input type="email" placeholder="Enter your email address" />
      <input type="date" placeholder="Select date" />
      <select defaultValue="">
        <option value="" disabled>
          Number of Persons
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5+">5+</option>
      </select>
      <button type="button" className="custom-button">
        Find A Table
      </button>
    </div>
  </div>
);

export default Newsletter;
