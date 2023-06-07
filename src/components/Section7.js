import React, { useState } from "react";
import symp from "src/assets/symp.svg";
import symp2 from "src/assets/symp2.png";
import { motion } from "framer-motion";

const Section7 = () => {
  const [showSymp, setShowSymp] = useState(false);
  return (
    <div className="bg-black">
      <div className="flex justify-center">
        <h1 className="text-center font-indie text-3xl md:text-6xl text-white py-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Symptoms
          </motion.div>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-16 py-8 p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex-1 flex justify-end"
          onMouseEnter={() => setShowSymp(true)}
          onMouseLeave={() => setShowSymp(false)}
        >
          <img src={showSymp ? symp2 : symp} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex-1 text-white p-6"
        >
          <ul className="list-disc text-2xl md:text-4xl font-poppins">
            <li>
              loss of interest or enjoyment in your usual activities and hobbies
            </li>
            <li>a sense of hopelessness or pessimism</li>
            <li>anger, irritability, and restlessness </li>
            <li>a lack of energy or a sense of feeling slowed down </li>
            <li>chronic fatigue or sleep problems </li>
            <li>changes in appetite and weight </li>
            <li>
              difficulty concentrating, making decisions, or remembering
              information{" "}
            </li>
            <li>unexplained aches and pains or gastrointestinal concerns </li>
            <li>feelings of guilt, worthlessness, or helplessness </li>
            <li>thoughts of suicide, death, or dying </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Section7;
