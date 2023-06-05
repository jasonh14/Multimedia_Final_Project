import bg5 from "src/assets/bg-5.svg";

const Section5 = () => {
  return (
    <div className="bg-[#00719D] flex flex-col pt-6">
      <div className="flex flex-col items-center">
        <h1 className="font-indie text-6xl text-white">However,</h1>
        <p className="font-poppins text-center font-semibold text-white text-2xl pt-6">
          There are only 600-800 psychiatrists in Indonesia. <br /> This makes
          the ratio of just 0.01 psychiatrists for every 100,000 people.
        </p>
      </div>
      <img src={bg5} alt="bg" />
    </div>
  );
};

export default Section5;
