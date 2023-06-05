import React from "react";
import symp from "src/assets/symp.svg";

const Section7 = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-center">
        <h1 className="text-center font-indie text-6xl text-white py-6">
          Symptoms
        </h1>
      </div>
      <div className="flex flex-row gap-8">
        <div className="flex-1 flex justify-end">
          <img src={symp} alt="" />
        </div>
        <div className="flex-1 text-white">
          <li>
            <ul>1</ul>
            <ul>2</ul>
            <ul>3</ul>
            <ul>4</ul>
            <ul>5</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Section7;
