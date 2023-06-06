import React, { useRef } from "react";
import bg from "src/assets/bg.svg";
import { TypeAnimation } from "react-type-animation";
import whoosh from "src/assets/whoosh.mp3";
import menu from "src/assets/hover.mp3";

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
          <h1 className="text-8xl pt-6">Mental Health</h1>
          <div className="py-6">
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
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </div>
        </div>
        <div className="flex justify-center relative w-1/2">
          <a
            href="#bipolar"
            className="absolute top-20 text-2xl rotate-12 hover:scale-125 transition duration-300 ease-in-out"
            onMouseEnter={startAudio}
            onClick={startWhoosh}
          >
            Bipolar ?
          </a>
          <a
            href="#depression"
            className="absolute text-2xl top-32 right-[600px] -rotate-12  hover:scale-125 transition duration-300 ease-in-out"
            onMouseEnter={startAudio}
            onClick={startWhoosh}
          >
            Depression ?
          </a>
          <a
            href="#anxiety"
            className="absolute text-2xl top-32 left-[600px] rotate-12  hover:scale-125 transition duration-300 ease-in-out"
            onMouseEnter={startAudio}
            onClick={startWhoosh}
          >
            Anxiety ?
          </a>
          <img src={bg} alt="bg" />
        </div>
      </div>
    </>
  );
};

export default Section1;
