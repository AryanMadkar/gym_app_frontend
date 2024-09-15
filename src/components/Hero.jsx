import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col newswap text-center font-bold  items-center min-h-[100vh] w-full justify-center ">
      <div className="flex flex-col text-center  p-[2rem] rounded-3xl font-bold  items-center   justify-center gap-[2rem]">
        <div className="text-center font-bold text-white text-[2.5rem]">
          IT'S TIME FOR
        </div>
        <div className="flex flex-row  text-[3rem] items-center justify-center  font-extrabold">
          <div className="bg-white p-1">UNLEASH YOUR STRENGTH</div>
          <div className="bg-black text-white p-1">ELEVATE YOUR LIFE</div>
        </div>
        <div className="w-[70vw] text-center">
          <p className="text-[1.3rem] capitalize text-white">
            we believe fitness isn't just about looking good—it's about feeling
            empowered, confident, and living life to the fullest. Whether you’re
            a beginner or an advanced athlete, we provide personalized guidance
            to help you crush your goals.
          </p>
        </div>
        <div>
          <button className="btn bg-white text-black font-extrabold text-xl hover:text-white transition-all">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
