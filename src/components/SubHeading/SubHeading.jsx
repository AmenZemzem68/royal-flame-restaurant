import React from "react";
import { images } from "../../constants";

const SubHeading = ({ ...props }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p-cormorant">{props.title}</p>
    <img src={images.spoon} alt="spoon" className="spoon-img" />
  </div>
);

export default SubHeading;
