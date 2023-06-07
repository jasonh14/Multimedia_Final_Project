import React from "react";
import med from "src/assets/med.png";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const Section8 = () => {
  return (
    <div className="bg-black ">
      <div className="text-white font-indie flex justify-end px-52 pt-16 text-4xl md:text-6xl">
        <h1 className="pt-16">Treatments</h1>
      </div>
      <Parallax speed={-10}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative -z-50"
        >
          <img src={med} alt="" />
        </motion.div>
      </Parallax>
    </div>
  );
};

export default Section8;
