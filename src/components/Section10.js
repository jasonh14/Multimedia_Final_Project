import React from "react";
import fear from "src/assets/fear.png";
import headache from "src/assets/Headache.png";
import brainfog from "src/assets/brainfog.png";
import fatigue from "src/assets/Fatigue.png";
import sleepproblem from "src/assets/sleepproblem.png";
import edge from "src/assets/Edge.png";
import dread from "src/assets/dread.png";
import treatment from "src/assets/Treatment.png";

const Section10 = () => {
  return (
    <>
      <div className="bg-black text-white" id="anxiety">
        <h1 className="font-indie text-center text-6xl p-6">Anxiety</h1>
        <p className="px-28 py-6 text-xl font-poppins text-center">
          A common emotion when dealing with daily stresses and problems. But
          when these emotions are persistent, excessive, and irrational, and
          affect a person’s ability to function, anxiety becomes a disorder.
          There are different types of anxiety disorders, including phobias,
          panic and stress disorders, and obsessive-compulsive disorder.
        </p>
      </div>

      <div className="bg-black">
        <h1 className="font-indie text-center text-6xl px-6 pt-20 text-white">
          Symptoms
        </h1>
        <div className="grid grid-cols-3 gap-4 gap-y-16  p-12">
          <div className="flex justify-center items-center">
            <img src={fear} alt="fear" />
          </div>
          <div className="flex justify-center items-center">
            <img src={headache} alt="fear" />
          </div>
          <div className="flex justify-center items-center">
            <img src={brainfog} alt="fear" />
          </div>
          <div className="flex justify-center items-center">
            <img src={fatigue} alt="fear" />
          </div>
          <div className="flex justify-center items-center">
            <img src={sleepproblem} alt="fear" />
          </div>
          <div className="flex justify-center items-center">
            <img src={dread} alt="fear" />
          </div>
          <div className="flex justify-center items-center">
            <img src={edge} alt="fear" />
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="flex justify-center px-12 pt-28 pb-12">
          <img src={treatment} alt="treatment" />
        </div>
      </div>
    </>
  );
};

export default Section10;
