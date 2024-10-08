import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app-footer section-padding" id="login">
    <div className="app-footer-links">
      <div className="app-footer-links-contact">
        <h1 className="app-footer-headtext">Contact Us</h1>
        <p className="p-opensans">9 Ave Med Najjar, Boumhal, 2097, Tunisie</p>
        <p className="p-opensans">+216 22-344-123</p>
        <p className="p-opensans">+216 22-555-123</p>
      </div>

      <div className="app-footer-links-logo">
        <img src={images.royal} alt="footer-logo" />
        <p className="p-opensans">
          &quot;The true essence of royalty is found in the art of serving
          unforgettable flavors, crafted with passion and precision.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon-img"
          style={{ marginTop: 15 }}
        />
        <div className="app-footer-links-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app-footer-links-work">
        <h1 className="app-footer-headtext">Working Hours</h1>
        <p className="p-opensans">Monday-Friday:</p>
        <p className="p-opensans">08:00 am - 12:00 am</p>
        <p className="p-opensans">Saturday-Sunday:</p>
        <p className="p-opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p className="p-opensans">2024 Royal Flame. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
