import React, { useState } from "react";
import fear from "src/assets/fear.png";
import headache from "src/assets/Headache.png";
import brainfog from "src/assets/brainfog.png";
import fatigue from "src/assets/Fatigue.png";
import sleepproblem from "src/assets/sleepproblem.png";
import edge from "src/assets/Edge.png";
import dread from "src/assets/dread.png";
import treatment from "src/assets/Treatment.png";
import fear2 from "src/assets/fear2.png";
import sleep2 from "src/assets/sleep2.png";
import brainfog2 from "src/assets/brainfog2.png";
import dread2 from "src/assets/dread2.png";
import edge2 from "src/assets/edge2.png";
import fatigue2 from "src/assets/fatigue2.png";
import headache2 from "src/assets/headache2.png";
import treatment2 from "src/assets/treatment2.png";
import { motion } from "framer-motion";

const Section10 = () => {
  const [showFear, setShowFear] = useState(false);
  const [showHeadache, setShowHeadache] = useState(false);
  const [showBrainfog, setShowBrainfog] = useState(false);
  const [showFatigue, setShowFatigue] = useState(false);
  const [showSleepProblem, setShowSleepProblem] = useState(false);
  const [showEdge, setShowEdge] = useState(false);
  const [showDread, setShowDread] = useState(false);
  const [showTreatment, setShowTreatment] = useState(false);

  return (
    <>
      <div className="bg-black text-white" id="anxiety">
        <h1 className="font-indie text-center text-4xl md:text-6xl p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Anxiety
          </motion.div>
        </h1>
        <p className="md:px-28 px-6 py-6 text-md md:text-xl font-poppins text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            A common emotion when dealing with daily stresses and problems. But
            when these emotions are persistent, excessive, and irrational, and
            affect a person’s ability to function, anxiety becomes a disorder.
            There are different types of anxiety disorders, including phobias,
            panic and stress disorders, and obsessive-compulsive disorder.
          </motion.div>
        </p>
      </div>

      <div className="bg-black">
        <h1 className="font-indie text-center text-4xl md:text-6xl px-6 pt-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Symptoms
          </motion.div>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-3 gap-4 gap-y-16  p-12"
        >
          <div
            onMouseEnter={() => setShowFear(true)}
            onMouseLeave={() => setShowFear(false)}
            className="flex justify-center items-center "
          >
            <img
              className="bg-white rounded-[60px]"
              src={showFear ? fear2 : fear}
              alt="fear"
            />
          </div>
          <div
            onMouseEnter={() => setShowHeadache(true)}
            onMouseLeave={() => setShowHeadache(false)}
            className="flex justify-center items-center"
          >
            <img
              className="bg-white rounded-[60px]"
              src={showHeadache ? headache2 : headache}
              alt="fear"
            />
          </div>
          <div
            onMouseEnter={() => setShowBrainfog(true)}
            onMouseLeave={() => setShowBrainfog(false)}
            className="flex justify-center items-center"
          >
            <img
              className="bg-white rounded-[60px]"
              src={showBrainfog ? brainfog2 : brainfog}
              alt="fear"
            />
          </div>
          <div
            onMouseEnter={() => setShowFatigue(true)}
            onMouseLeave={() => setShowFatigue(false)}
            className="flex justify-center items-center"
          >
            <img
              className="bg-white rounded-[60px]"
              src={showFatigue ? fatigue2 : fatigue}
              alt="fear"
            />
          </div>
          <div
            onMouseEnter={() => setShowSleepProblem(true)}
            onMouseLeave={() => setShowSleepProblem(false)}
            className="flex justify-center items-center"
          >
            <img
              className="bg-white rounded-[64px] w-100"
              src={showSleepProblem ? sleep2 : sleepproblem}
              alt="fear"
            />
          </div>
          <div
            onMouseEnter={() => setShowDread(true)}
            onMouseLeave={() => setShowDread(false)}
            className="flex justify-center items-center"
          >
            <img
              className="bg-white rounded-[60px]"
              src={showDread ? dread2 : dread}
              alt="fear"
            />
          </div>
          <div
            onMouseEnter={() => setShowEdge(true)}
            onMouseLeave={() => setShowEdge(false)}
            className="flex justify-center items-center"
          >
            <img
              className="bg-white rounded-[60px]"
              src={showEdge ? edge2 : edge}
              alt="fear"
            />
          </div>
        </motion.div>
      </div>

      <div className="bg-black">
        <div
          onClick={() => setShowTreatment((prev) => !prev)}
          className="cursor-pointer flex justify-center px-12 pt-28 pb-12"
        >
          <img src={showTreatment ? treatment2 : treatment} alt="treatment" />
        </div>
      </div>
    </>
  );
};

export default Section10;
