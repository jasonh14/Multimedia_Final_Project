import React, { useRef } from "react";
import bg from "src/assets/bg.svg";
import { TypeAnimation } from "react-type-animation";
import whoosh from "src/assets/whoosh.mp3";
import menu from "src/assets/hover.mp3";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Section1 = () => {
  const audioRef = useRef(null);
  const whooshRef = useRef(null);

  const startAudio = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.2;
    console.log("play");
  };

  const startWhoosh = () => {
    whooshRef.current.play();
    whooshRef.current.volume = 0.1;
    console.log("play");
  };

  return (
    <>
      <audio src={menu} ref={audioRef} controls={false}>
        Your browser does not support the audio element.
      </audio>

      <audio src={whoosh} ref={whooshRef} controls={false}>
        Your browser does not support the audio element.
      </audio>
      <div className="bg-black text-white font-indie flex flex-col justify-center items-center pt-6">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
            }}
          >
            <h1 className="md:text-8xl text-center text-4xl pt-6">
              Mental Health
            </h1>
          </motion.div>
          <div className="py-6 text-sm md:text-xl">
            <TypeAnimation
              sequence={[
                "Does it haunt you?", // Types 'One'
                5000, // Waits 1s
                "Pick your poison...", // Deletes 'One' and types 'Two'
                5000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={0}
              style={{ display: "inline-block" }}
            />
          </div>
        </div>
        <div className="flex justify-center relative  p-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={bg} alt="bg" />
          </motion.div>

          <div className="absolute w-full flex flex-row md:gap-36 justify-center pt-28">
            <a
              href="#depression"
              className="text-2xl top-32  -rotate-12  hover:scale-125 transition duration-300 ease-in-out"
              onMouseEnter={startAudio}
              onClick={startWhoosh}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="w-[150px] flex justify-center text-sm md:text-2xl"
              >
                Depression ?
              </motion.div>
            </a>
            <a
              href="#bipolar"
              className=" text-2xl rotate-12 hover:scale-125 transition duration-300 ease-in-out mt-[-50px]"
              onMouseEnter={startAudio}
              onClick={startWhoosh}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="w-[100px] flex justify-center text-sm md:text-2xl"
              >
                Bipolar ?
              </motion.div>
            </a>
            <a
              href="#anxiety"
              className=" text-2xl top-32  rotate-12  hover:scale-125 transition duration-300 ease-in-out"
              onMouseEnter={startAudio}
              onClick={startWhoosh}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="w-[100px] flex justify-center text-sm md:text-2xl"
              >
                Anxiety ?
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
