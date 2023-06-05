import React from "react";
import bg from "src/assets/bg.svg";

const Section1 = () => {
  return (
    <div className="bg-black text-white font-indie flex flex-col justify-center items-center pt-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-8xl pt-6">Mental Health</h1>
        <p className="text-2xl">Does it haunt you?</p>
        <p className="text-2xl pt-12">Pick your poison...</p>
      </div>
      <div className="flex justify-center relative w-1/2">
        <a href="#" className="absolute top-20 text-2xl rotate-12">
          Bipolar ?
        </a>
        <a
          href="#"
          className="absolute text-2xl top-32 right-[600px] -rotate-12"
        >
          Depression ?
        </a>
        <a href="#" className="absolute text-2xl top-32 left-[600px] rotate-12">
          Anxiety ?
        </a>
        <img src={bg} alt="bg" />
      </div>
    </div>
  );
};

export default Section1;
