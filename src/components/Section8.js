import React from "react";
import med from "src/assets/med.png";

const Section8 = () => {
  return (
    <div className="bg-black">
      <div className="text-white font-indie flex justify-end px-52 pt-16 text-6xl">
        <h1>Treatments</h1>
      </div>
      <div>
        <img src={med} alt="" />
      </div>
    </div>
  );
};

export default Section8;
