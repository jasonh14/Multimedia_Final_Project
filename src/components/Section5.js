import bg5 from "src/assets/bg-5.svg";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <div className="bg-[#00719D] flex flex-col pt-24">
      <div className="flex flex-col items-center">
        <h1 className="font-indie text-3xl md:text-6xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            However,
          </motion.div>
        </h1>
        <p className="font-poppins text-center font-semibold text-sm p-0 text-white md:text-2xl pt-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            There are only 600-800 psychiatrists in Indonesia. <br /> This makes
            the ratio of just 0.01 psychiatrists for every 100,000 people.
          </motion.div>
        </p>
      </div>

      <img src={bg5} alt="bg" className="" />
    </div>
  );
};

export default Section5;
