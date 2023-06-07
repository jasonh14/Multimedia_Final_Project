import React, { useState } from "react";
import manic from "src/assets/manic.png";
import depressed from "src/assets/depressed.png";
import psy from "src/assets/psy.png";
import psytherapy from "src/assets/psytherapy.png";
import medi from "src/assets/medi.png";
import foot from "src/assets/foot.png";
import manic2 from "src/assets/manic2.png";
import depressed2 from "src/assets/depressed2.png";
import therapy from "src/assets/therapy.png";
import medication from "src/assets/medication.png";
import support from "src/assets/support.png";
import { motion } from "framer-motion";

const Section9 = () => {
  const [showManic, setManic] = useState(false);
  const [showDepressed, setDepressed] = useState(false);

  const [showSupport, setShowSupport] = useState(false);
  const [showTherapy, setShowTherapy] = useState(false);
  const [showMedication, setMedication] = useState(false);

  return (
    <div className="bg-[#F2F4F7] relative z-50">
      <div>
        <h1
          id="bipolar"
          className="text-center font-indie text-4xl md:text-6xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Bipolar
          </motion.div>
          <br />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Disorder
          </motion.div>
        </h1>
        <p className="text-center p-12 text-md md:text-xl font-poppins font-semibold">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Bipolar disorder (formerly called manic-depressive illness or manic
            depression) is a mental illness that causes unusual shifts in a
            person’s mood, energy, activity levels, and concentration. These
            shifts can make it difficult to carry out day-to-day tasks.
          </motion.div>
        </p>
      </div>
      <div>
        <h1 className="text-center font-indie text-4xl md:text-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Symptoms
          </motion.div>
        </h1>
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
        <h1 className="text-center font-indie text-4xl md:text-6xl p-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Treatments
          </motion.div>
        </h1>
        <div className="flex flex-row overflow-x-auto p-6 justify-start">
          <div
            className="flex-shrink-0 md:w-auto w-full"
            onMouseEnter={() => setShowSupport(true)}
            onMouseLeave={() => setShowSupport(false)}
          >
            <img src={showSupport ? support : psy} alt="psy" />
          </div>
          <div
            className="flex-shrink-0 md:w-auto w-full"
            onMouseEnter={() => setShowTherapy(true)}
            onMouseLeave={() => setShowTherapy(false)}
          >
            <img src={showTherapy ? therapy : psytherapy} alt="psytherapy" />
          </div>
          <div
            className="flex-shrink-0 md:w-auto w-full"
            onMouseEnter={() => setMedication(true)}
            onMouseLeave={() => setMedication(false)}
          >
            <img src={showMedication ? medication : medi} alt="medi" />
          </div>
        </div>
      </div>

      <img src={foot} alt="foot" />
    </div>
  );
};

export default Section9;
