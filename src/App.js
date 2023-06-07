import "./App.css";
import Section1 from "src/components/Section1";
import Section2 from "src/components/Section2";
import Section3 from "src/components/Section3";
import Section4 from "src/components/Section4";
import Section5 from "src/components/Section5";
import Section6 from "src/components/Section6";
import Section7 from "src/components/Section7";
import Section8 from "src/components/Section8";
import Section9 from "src/components/Section9";
import Section10 from "src/components/Section10";
import audio from "src/assets/music.mp3";
import { useRef, useState } from "react";
import audioon from "src/assets/audioon.png";
import mute from "src/assets/mute.png";
import { ParallaxProvider } from "react-scroll-parallax";
import music2 from "src/assets/music2.mp3";
import rain from "src/assets/rain.mp3";
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, motion } from "framer-motion";
import piano from "src/assets/piano.mp3";

function App() {
  const [showAudio, setShowAudio] = useState(true);
  const audioRef = useRef(null);

  const [start, setStart] = useState(false);

  const startAudio = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.1;
    setShowAudio(false);
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setShowAudio(true);
  };

  const startStory = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.1;
    setShowAudio(false);
    setStart(true);
  };

  return (
    <div className="overflow-hidden relative bg-black">
      <audio src={piano} ref={audioRef} controls={false}>
        Your browser does not support the audio element.
      </audio>

      <AnimatePresence>
        {start ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "linear",
              duration: 2,
            }}
          >
            {/* <div className="flex flex-row absolute top-8 right-8 items-center bg-black justify-center gap-2 h-16 w-16">
              <div
                className="cursor-pointer  flex-1"
                onClick={showAudio ? startAudio : stopAudio}
              >
                <img className="w-100 h-100" src={audioon} alt="test" />
              </div>

              <div
                className={`cursor-pointer  flex-1 ${
                  showAudio ? "" : "opacity-0"
                } `}
                onClick={showAudio ? startAudio : stopAudio}
              >
                <img className="w-100 h-100" src={mute} alt="test" />
              </div>
            </div> */}
            <Section1 />

            <Section2 />
            <ParallaxProvider>
              <Section3 />
            </ParallaxProvider>
            <Section4 />
            <ParallaxProvider>
              <Section5 />
            </ParallaxProvider>
            <Section6 />
            <Section7 />
            <ParallaxProvider>
              <Section8 />
            </ParallaxProvider>
            <Section9 />
            <Section10 />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "linear",
              duration: 2,
            }}
            onClick={startStory}
            className="bg-black font-indie md:text-2xl text-white flex justify-center items-center cursor-pointer w-screen h-screen"
          >
            <TypeAnimation
              sequence={[
                "This is a story about mental health...",
                2000, // Waits 1s
                "Click here to start...",
              ]}
              wrapper="span"
              cursor={true}
              repeat={0}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
