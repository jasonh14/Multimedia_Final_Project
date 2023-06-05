import React from "react";
import bg_3 from "src/assets/bg-3.svg";

const Section3 = () => {
  return (
    <div className="bg-[#00719D] text-center pb-28">
      <div className="text-white font-indie text-6xl">Challenges</div>
      <div className="w-screen flex items-center justify-center">
        <div className="bg-[url('src/assets/bubble.png')] h-[250px] w-[250px] bg-contain bg-no-repeat flex justify-center items-center text-white p-6 font-poppins">
          Many misconceptions and stigmas surrounding mental illness
        </div>
        <div>
          <img src={bg_3} alt="" />
        </div>
        <div className="bg-[url('src/assets/bubble.png')] h-[250px] w-[250px] bg-contain bg-no-repeat flex justify-center items-center text-white p-6 font-poppins">
          Unavailability of mental health care provision in low and
          middle-income countries
        </div>
      </div>

      <div className="w-screen flex justify-center mt-[-150px]">
        <div className="bg-[url('src/assets/bubble.png')] h-[250px] w-[250px] bg-contain bg-no-repeat flex justify-center items-center text-white p-6 font-poppins">
          Lack of education regarding mental health
        </div>
      </div>
    </div>
  );
};

export default Section3;
