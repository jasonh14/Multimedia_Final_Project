import React, { useState } from "react";
import manic from "src/assets/manic.png";
import depressed from "src/assets/depressed.png";
import psy from "src/assets/psy.png";
import psytherapy from "src/assets/psytherapy.png";
import medi from "src/assets/medi.png";
import foot from "src/assets/foot.png";
import manic2 from "src/assets/manic2.png";
import depressed2 from "src/assets/depressed2.png";

const Section9 = () => {
  const [showManic, setManic] = useState(false);
  const [showDepressed, setDepressed] = useState(false);

  return (
    <div className="bg-[#F2F4F7] relative z-50">
      <div>
        <h1 id="bipolar" className="text-center font-indie text-6xl">
          Bipolar
          <br />
          Disorder
        </h1>
        <p className="text-center p-12 text-xl font-poppins font-semibold">
          Bipolar disorder (formerly called manic-depressive illness or manic
          depression) is a mental illness that causes unusual shifts in a
          person’s mood, energy, activity levels, and concentration. These
          shifts can make it difficult to carry out day-to-day tasks.
        </p>
      </div>
      <div>
        <h1 className="text-center font-indie text-6xl">Symptoms</h1>
        <div className="flex flex-row justify-center p-8">
          <div
            onMouseEnter={() => setManic(true)}
            onMouseLeave={() => setManic(false)}
          >
            <img src={showManic ? manic2 : manic} alt="manic" />
          </div>
          <div
            onMouseEnter={() => setDepressed(true)}
            onMouseLeave={() => setDepressed(false)}
          >
            <img src={showDepressed ? depressed2 : depressed} alt="depressed" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center font-indie text-6xl p-6">Treatments</h1>
        <div className="flex flex-row overflow-x-auto p-6 justify-start">
          <div className="flex-shrink-0">
            <img src={psy} alt="psy" />
          </div>
          <div className="flex-shrink-0">
            <img src={psytherapy} alt="psytherapy" />
          </div>
          <div className="flex-shrink-0">
            <img src={medi} alt="medi" />
          </div>
        </div>
      </div>

      <img src={foot} alt="" />
    </div>
  );
};

export default Section9;
