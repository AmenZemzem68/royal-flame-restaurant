import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Preload,
  Environment,
} from "@react-three/drei";
import Cup from "../../components/canvas/cup";
import CanvasLoader from "../../components/canvas/loader";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app-specialMenu flex-center section-padding" id="menu">
      <div className="app-specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext-cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app-specialMenu-menu">
        <div className="app-specialMenu-menu-wine flex-center">
          <p className="app-specialMenu-menu-heading">Pizzas</p>
          <div className="app-specialMenu-menu-items">
            {data.pizzas.map((pizza, index) => (
              <MenuItem
                key={pizza.title + index}
                title={pizza.title}
                price={pizza.price}
                tags={pizza.tags}
              />
            ))}
          </div>
        </div>

        <div className="app-specialMenu-menu-img">
          <Canvas style={{ width: "100%", height: "100%" }}>
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <OrbitControls
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                enableZoom={false}
              />
              <Cup position={[0, -10, 0]} scale={4} rotation={[0, 0, 0]} />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={4} />
              <directionalLight position={[-10, -10, 5]} intensity={1} />
              <Preload all />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        <div className="app-specialMenu-menu-cocktails flex-center">
          <p className="app-specialMenu-menu-heading">Plates</p>
          <div className="app-specialMenu-menu-items">
            {data.fancyPlates.map((fancy, index) => (
              <MenuItem
                key={fancy.title + index}
                title={fancy.title}
                price={fancy.price}
                tags={fancy.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom-button-outline">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
