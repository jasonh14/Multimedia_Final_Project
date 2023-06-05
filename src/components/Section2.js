import React from "react";

const Section2 = () => {
  return (
    <div className="bg-[url('src/assets/bg-2.svg')] bg-bottom bg-cover bg-no-repeat h-screen text-white  flex flex-col items-center pt-6">
      <div>
        <h1 className="font-indie text-6xl pb-8">Global Mental Health</h1>
      </div>
      <div className="flex flex-row gap-4">
        {/* globe */}
        <div className="flex-1">test</div>
        {/* right side text */}
        <div className="flex flex-col flex-1 font-poppins">
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
    </div>
  );
};

export default Section2;
