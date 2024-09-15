import React from "react";

const Subgenerative3 = () => {
  return (
    <div className="flex flex-col items-center  justify-center">
      <div className="flex h-[20vw] w-full gap-2 items-center flex-col justify-center">
        <div className="flex font-bold flex-row items-center text-[2.5rem] justify-center gap-[2rem]">
          <h1 className="text-[4rem]">03</h1>
          <h1>BECOME JUGARNAUT</h1>
        </div>
        <div className="flex items-center justify-center my-2">
          <h1 className="text-[1.4rem] text-red-700">
            SELECT YOUR ULTIMATE OBJECTIVE
          </h1>{" "}
        </div>
        <div className="flex flex-row  items-center justify-center gap-[2rem]">
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            cardio
          </button>
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            olympic_weightlifting
          </button>
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            plyometrics
          </button>
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            powerlifting{" "}
          </button>
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            strength
          </button>
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            stretching
          </button>
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            strongman
          </button>
        </div>
      </div>
      <div className="h-1 w-[90%] bg-white rounded-full"></div>
      <button className="text-center w-[90%] hover:bg-black hover:text-white hover:scale-100 transition-all  rounded bg-white text-black px-[2rem] py-[1rem] my-[2rem]">
        Generate
      </button>
    </div>
  );
};

export default Subgenerative3;
