import { useState } from "react";
import { motion } from "framer-motion";

const Section6 = () => {
  const [myth1, setMyth1] = useState(true);
  const [myth2, setMyth2] = useState(true);
  const [myth3, setMyth3] = useState(true);
  const [myth4, setMyth4] = useState(true);

  return (
    <div className="bg-black text-white relative z-50" id="depression">
      <h1 className="text-white text-3xl md:text-6xl font-indie px-20">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Depression
        </motion.div>
      </h1>
      <div className="flex justify-center items-center text-center p-4 md:p-20 font-poppins font-semibold md:text-2xl">
        <p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Depression is a low mood that lasts for a long time, affecting
            everyday life. It is often triggered by a mix of genetic,
            psychological and environmental factors; studies show that the risk
            of becoming depressed can be increased by life events such as
            poverty, the death of a loved one, physical illness, or abuse. For
            some, the risk is also hereditary.
          </motion.div>
        </p>
      </div>
      <div>
        <h1 className="text-center text-3xl md:text-6xl font-indie">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Misconceptions
          </motion.div>
        </h1>
      </div>

      <div className="flex flex-row overflow-x-auto gap-4 p-6">
        <div
          onClick={() => setMyth1((prev) => !prev)}
          className={`p-6  cursor-pointer transition duration-300 ease-in-out text-center flex flex-col font-poppins font-semibold text-white md:w-1/4 w-[300px]  flex-shrink-0 items-center justify-center shadow-text border-2 border-white rounded-lg ${
            myth1 ? "" : "bg-[#00719D]"
          }`}
        >
          {myth1 ? (
            <p className="text-xl">Depression is about feeling sad.</p>
          ) : (
            <p>
              Persistent feelings of sadness are one of the symptoms of
              depression. However, depression also involves physical symptoms
              such as changes in appetite and quality of sleep, emotional
              symptoms such as feelings of worthlessness, and changes in
              behavior such as the loss of interest in our usual activities. For
              people experiencing depression, these symptoms continue for more
              than two weeks.
            </p>
          )}

          {myth1 ? (
            <p className="text-white py-4">MYTH</p>
          ) : (
            <p className="text-white py-4">FACT</p>
          )}
        </div>
        <div
          onClick={() => setMyth2((prev) => !prev)}
          className={`p-6  cursor-pointer transition duration-300 ease-in-out text-center flex flex-col font-poppins font-semibold text-white md:w-1/4 w-[300px]  flex-shrink-0 items-center justify-center shadow-text border-2 border-white rounded-lg ${
            myth2 ? "" : "bg-[#00719D]"
          }`}
        >
          {myth2 ? (
            <p className="text-xl"> Depression is a sign of weakness.</p>
          ) : (
            <p>
              Depression is not a sign of weakness but a medical condition.
              Depression is a chemical imbalance in the brain that can be
              treated. Depression is unrelated to the strength of someone s
              character; it is a serious medical condition like asthma or
              diabetes. Depression is often triggered by major life events that
              may be challenging to cope with, e.g., the loss of a loved one,
              the loss of a job, etc.
            </p>
          )}

          {myth2 ? (
            <p className="text-white py-4">MYTH</p>
          ) : (
            <p className="text-white py-4">FACT</p>
          )}
        </div>
        <div
          onClick={() => setMyth3((prev) => !prev)}
          className={`p-6  cursor-pointer transition duration-300 ease-in-out text-center flex flex-col font-poppins font-semibold text-white md:w-1/4 w-[300px]  flex-shrink-0 items-center justify-center shadow-text border-2 border-white rounded-lg ${
            myth3 ? "" : "bg-[#00719D]"
          }`}
        >
          {myth3 ? (
            <p className="text-xl">
              People feel that I do not need a doctor because they think that I
              am lazy rather than depressed.
            </p>
          ) : (
            <p>
              Depression takes away a lot of energy from a person. Loss of
              interest in usual activities is common and should not be
              misunderstood as a sign of laziness.
            </p>
          )}

          {myth3 ? (
            <p className="text-white py-4">MYTH</p>
          ) : (
            <p className="text-white py-4">FACT</p>
          )}
        </div>
        <div
          onClick={() => setMyth4((prev) => !prev)}
          className={`p-6  cursor-pointer transition duration-300 ease-in-out text-center flex flex-col font-poppins font-semibold text-white md:w-1/4 w-[300px]  flex-shrink-0 items-center justify-center shadow-text border-2 border-white rounded-lg ${
            myth4 ? "" : "bg-[#00719D]"
          }`}
        >
          {myth4 ? (
            <p className="text-xl">
              I am afraid to talk about my depression, for fear that it will
              make it worse.
            </p>
          ) : (
            <p>
              Talking about your feelings allows you to air your problems, seek
              assurance and find solutions. You may want to talk to a trained
              counselor who can help you walk through your depression. All
              information given is kept strictly confidential.
            </p>
          )}

          {myth4 ? (
            <p className="text-white py-4">MYTH</p>
          ) : (
            <p className="text-white py-4">FACT</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section6;
