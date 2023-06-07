import React, { useRef, useEffect } from "react";

import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import wave from "src/assets/wave.svg";
import { motion } from "framer-motion";

const Section2 = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // 3. listen for player load. see lottie player repo for other events
    myRef.current.addEventListener("load", function (e) {
      // 4. configure the interactivity library
      create({
        mode: "scroll",
        player: "#firstLottie",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 800],
          },
        ],
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
      className="bg-black bg-bottom bg-cover bg-no-repeat h-screen text-white  flex flex-col justify-between items-center pt-6"
    >
      <div>
        <h1 className="font-indie md:text-6xl text-center text-3xl md:pb-8">
          Global Mental Health
        </h1>
      </div>
      <div className="flex md:flex-row flex-col md:gap-4 justify-center items-center p-6">
        {/* globe */}
        <div className="flex-1">
          <lottie-player
            ref={myRef} // 2. set the reference for the player
            id="firstLottie"
            mode="scroll"
            src="https://assets9.lottiefiles.com/packages/lf20_qfzzCg.json"
            // style={{ width: "400px", height: "400px" }}
          ></lottie-player>
        </div>
        {/* right side text */}
        <div className="flex flex-col flex-1 font-poppins md:pr-6">
          <div>
            <p className="font-semibold">
              According to World Health Organisation and the Institute for
              Health Metrics and Evaluation report:
            </p>
          </div>
          <div className="flex flex-row gap-6 py-4">
            <div className="flex-1 border-2 border-white p-4  rounded-lg flex justify-center items-center text-center shadow-text">
              <p>
                Over 1.1 billion people suffer from mental or substance use
                disorders
              </p>
            </div>
            <div className="flex-1 border-white border-2 p-4 rounded-lg flex justify-center items-center text-center shadow-text">
              <p>
                Approximately 20% of children and adolescents struggle with
                mental health issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="scale-[8] md:scale-110 relative z-10">
        <img src={wave} alt="wave" />
      </div>
    </motion.div>
  );
};

export default Section2;
