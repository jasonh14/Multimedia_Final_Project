import React from "react";
import med from "src/assets/med.png";
import { Parallax } from "react-scroll-parallax";

const Section8 = () => {
  return (
    <div className="bg-black ">
      <div className="text-white font-indie flex justify-end px-52 pt-16 text-6xl">
        <h1 className="pt-16">Treatments</h1>
      </div>
      <Parallax speed={-10}>
        <div className="relative -z-50">
          <img src={med} alt="" />
        </div>
      </Parallax>
    </div>
  );
};

export default Section8;
