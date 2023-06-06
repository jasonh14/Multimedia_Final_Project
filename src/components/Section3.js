import React from "react";
import bg_3 from "src/assets/bg-3.png";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Section3 = () => {
  return (
    <div className="bg-[#00719D] text-center pb-28">
      <div className="text-white font-indie text-6xl relative z-20">
        Challenges
      </div>
      <div className="w-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="bg-[url('src/assets/bubble.png')] h-[250px] w-[250px] bg-contain bg-no-repeat flex justify-center items-center text-white p-6 font-poppins"
        >
          Many misconceptions and stigmas surrounding mental illness
        </motion.div>

        <Parallax speed={-20}>
          <div className="relative -z-50">
            <img src={bg_3} alt="" />
          </div>
        </Parallax>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="relative z-30 bg-[url('src/assets/bubble.png')] h-[250px] w-[250px] bg-contain bg-no-repeat flex justify-center items-center text-white p-6 font-poppins"
        >
          Unavailability of mental health care provision in low and
          middle-income countries
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        className="w-screen flex justify-center mt-[-150px] relative z-30"
      >
        <div className="bg-[url('src/assets/bubble.png')] h-[250px] w-[250px] bg-contain bg-no-repeat flex justify-center items-center text-white p-6 font-poppins">
          Lack of education regarding mental health
        </div>
      </motion.div>
    </div>
  );
};

export default Section3;
