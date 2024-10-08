import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Preload,
  Environment,
} from "@react-three/drei";
import { images } from "../../constants";
import "./AboutUs.css";
import Meat from "../../components/canvas/meat";
import CanvasLoader from "../../components/canvas/loader";

const AboutUs = () => {
  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollRotation(scrollY * 0.01);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="app-aboutus app-bg flex-center section-padding" id="about">
      <div className="app-aboutus-content flex-center">
        <div className="app-aboutus-content-about">
          <h1 className="headtext-cormorant">About Us</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon-img" />
          <p className="p-opensans">
            At Royal Flame, we blend culinary artistry with impeccable service.
            Each dish is crafted from the finest ingredients, offering a refined
            dining experience in an elegant setting.
          </p>
          <button type="button" className="custom-button">
            Know More
          </button>
        </div>

        <div className="app-aboutus-content-knife flex-center">
          <Canvas style={{ width: "100%", height: "100%" }}>
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <OrbitControls
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                enableZoom={false}
              />
              <Meat
                position={[0, 0, 0]}
                scale={13}
                rotation={[0, scrollRotation, 0]}
              />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={2} />
              <directionalLight position={[-10, -10, 5]} intensity={0.5} />
              <Preload all />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        <div className="app-aboutus-content-history">
          <h1 className="headtext-cormorant">Our History</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon-img" />
          <p className="p-opensans">
            Founded with a passion for gourmet excellence, Royal Flame redefines
            luxury dining through innovative cuisine and timeless elegance. Each
            dish is a blend of tradition and modern flair.
          </p>
          <button type="button" className="custom-button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
