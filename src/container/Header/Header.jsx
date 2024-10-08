import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";

import "./Header.css";
import { images } from "../../constants";

const Header = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app-header app-wrapper section-padding" id="home">
      <div className="app-wrapper-info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app-header-h1">The Key To Fine Dining</h1>
        <p className="p-opensans" style={{ margin: "2rem 0" }}>
          Welcome to Royal Flame, where elegance meets flavor. Indulge in a fine
          dining experience crafted with passion. Reserve your table today and
          savor unforgettable moments.
        </p>
        <div>
          <button
            type="button"
            className="custom-button"
            style={{ marginRight: "20px" }}
          >
            Explore Menu
          </button>
          <button type="button" className="custom-button-outline">
            Book Now
          </button>
        </div>
      </div>
      <div className="app-gallery-images">
        <div className="app-gallery-images-container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app-gallery-images-card flex-center"
              key={`gallery-image-${index + 1}`}
            >
              <img src={image} alt="gallery-image" />
              <BsInstagram className="gallery-image-icon" />
            </div>
          ))}
        </div>
        <div className="app-gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
