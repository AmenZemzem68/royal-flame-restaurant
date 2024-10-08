import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app-bg app-wrapper section-padding">
    <div className="app-wrapper-img app-wrapper-img-reverse">
      <img src={images.chef} alt="chef-image" />
    </div>
    <div className="app-wrapper-info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext-cormorant">What we believe in</h1>

      <div className="app-chef-content">
        <div className="app-chef-content-quote">
          <img src={images.quote} alt="quote-image" />
        </div>
        <p className="p-opensans">
          At Royal Flame, every dish is crafted with passion and precision. I
          believe food should inspire, not just satisfy. Using the finest
          ingredients, we blend tradition and innovation to create a dining
          experience that ignites the senses.
        </p>
      </div>

      <div className="app-chef-sign">
        <p>Kevin Luo</p>
        <p className="p-opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
