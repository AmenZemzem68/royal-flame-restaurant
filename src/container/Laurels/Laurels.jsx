import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app-laurels-awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app-laurels-awards-card-content">
      <p className="p-cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p-opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app-bg app-wrapper section-padding" id="awards">
    <div className="app-wrapper-info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext-cormorant">Our Laurels</h1>

      <div className="app-laurels-awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app-wrapper-img">
      <img src={images.welcome} alt="laurels-img" />
    </div>
  </div>
);

export default Laurels;
