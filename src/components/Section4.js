import React from "react";
import map from "src/assets/map.svg";

const Section4 = () => {
  return (
    <div className="bg-[#00719D] flex flex-col items-center">
      <div className="relative z-50">
        <img src={map} alt="map" />
      </div>
      <div>
        <h1 className="font-indie text-6xl text-white py-6">
          Mental Health Conditions in Indonesia
        </h1>
      </div>
      <div className="flex flex-row overflow-x-auto gap-4 p-6">
        <div className="p-6 text-center flex flex-col font-poppins font-semibold text-white w-1/4  flex-shrink-0 items-center justify-center shadow-text border-2 border-white rounded-lg">
          <p>
            Approximately 3.7% (9 million) people are suffering from depression,
            out of a population of 250 million people.
          </p>
          <p className="text-[#38C7FF] py-4">
            Source: 2013 Indonesian National Health Research (RISKESDAS)
          </p>
        </div>
        <div className="p-6 text-center flex flex-col font-poppins font-semibold text-white w-1/4  flex-shrink-0 items-center justify-center shadow-text border-2 border-white rounded-lg">
          <p>
            Around 6% (14 million) of people aged 15 and over suffer from mood
            disorders such as depression and anxiety.
          </p>
          <p className="text-[#38C7FF] py-4">
            Source: 2013 Indonesian National Health Research (RISKESDAS)
          </p>
        </div>
        <div className="p-6 text-center flex flex-col font-poppins font-semibold text-white w-1/4 flex-shrink-0 flex-col items-center justify-center shadow-text border-2 border-white rounded-lg">
          <p>
            Around 19 million people aged 15 and over suffer from mood disorders
            and 12 million people suffer from depression.
          </p>
          <p className="text-[#38C7FF] py-4">
            Source: 2018 Indonesian national health research (RISKESDAS)
          </p>
        </div>
        <div className="p-6 text-center flex flex-col font-poppins font-semibold text-white w-1/4 flex-shrink-0 flex-col items-center justify-center shadow-text border-2 border-white rounded-lg">
          <p>Around 2% (72.860 people) suffer from bipolar disorder.</p>
          <p className="text-[#38C7FF] py-4">Source: Bipolar Care Indonesia</p>
        </div>
        <div className="p-6 text-center flex flex-col font-poppins font-semibold text-white w-1/4 flex-shrink-0 flex-col items-center justify-center shadow-text border-2 border-white rounded-lg">
          <p>
            One in three Indonesian adolescents experienced a mental health
            problem in the past 12 months, while one in twenty Indonesian
            adolescents had a mental disorder in the past 12 months.
          </p>
          <p className="text-[#38C7FF] py-4">
            Source: 2021 National Adolescent Mental Health Survey (I-NAMHS)
          </p>
        </div>
        <div className="p-6 text-center flex flex-col font-poppins font-semibold text-white w-1/4  flex-shrink-0 flex-col items-center justify-center shadow-text border-2 border-white rounded-lg">
          <p>
            The most common mental disorders suffered by adolescents were
            anxiety disorders (a combination of social phobia and generalized
            anxiety disorder) at 3.7%, followed by major depressive disorder
            (1.0%), conduct disorder (0.9%), and PTSD and ADHD (both 0.5%).
          </p>
          <p className="text-[#38C7FF] py-4">
            Source: 2021 National Adolescent Mental Health Survey (I-NAMHS)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
