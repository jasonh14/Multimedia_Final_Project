import React, { useEffect, useRef, useState } from "react";
import bg_3 from "src/assets/bg-3.png";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import drowning from "src/assets/drowning.mp3";

const Section3 = () => {
  const soundRef = useRef(null);
  const myElementRef = useRef(null);
  const [soundPlayed, setSoundPlayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!soundPlayed) {
        const elementPosition =
          myElementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the condition as per your requirements
        if (elementPosition < windowHeight * 0.75) {
          // Play the sound
          soundRef.current.volume = 0.1;
          soundRef.current.play();
          setSoundPlayed(true);
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [soundPlayed]);

  return (
    <div className="bg-[#00719D] text-center pb-28 relative z-30">
      <div className="text-white font-indie md:text-6xl text-4xl relative z-20">
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
          className="bg-[url('src/assets/bubble.png')] md:text-lg text-[9px] md:h-[250px] md:w-[250px] h-[120px] w-[120px] bg-contain bg-no-repeat flex justify-center items-center text-white p-6 font-poppins"
        >
          Many misconceptions and stigmas surrounding mental illness
        </motion.div>

        <Parallax speed={-10}>
          <div ref={myElementRef} className="relative -z-50">
            <img src={bg_3} alt="" />
          </div>
        </Parallax>
        <audio ref={soundRef} src={drowning} />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="relative z-30 bg-[url('src/assets/bubble.png')] md:text-lg text-[9px] md:h-[250px] md:w-[250px] h-[120px] w-[120px] bg-contain bg-no-repeat flex justify-center items-center text-white p-6 font-poppins"
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
        className="w-screen flex justify-center md:mt-[-150px] relative z-30"
      >
        <div className="bg-[url('src/assets/bubble.png')] md:text-lg text-[9px] md:h-[250px] md:w-[250px] h-[120px] w-[120px] bg-contain bg-no-repeat flex justify-center items-center text-white p-6 font-poppins">
          Lack of education regarding mental health
        </div>
      </motion.div>
    </div>
  );
};

export default Section3;
