import React from "react";

const Subgenerate = () => {
  return (
    <div className="flex flex-col items-center  justify-center">
      <div className="flex h-[20vw] w-full gap-2 items-center flex-col justify-center">
        <div className="flex font-bold flex-row items-center text-[2.5rem] justify-center gap-[2rem]">
          <h1 className="text-[4rem]">01</h1>
          <h1>PICK YOUR POISON</h1>
        </div>
        <div className="flex items-center justify-center my-2">
          <h1 className="text-[1.4rem] text-red-700">
            SELECT THE WORKOUT YOU WISH TO ENDURE
          </h1>{" "}
        </div>
        <div className="flex flex-row  items-center justify-center gap-[2rem]">
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            INDIVISUAL
          </button>
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            BRO SPLIT
          </button>
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            BODYBUILDER SPLIT
          </button>
          <button className="py-[1rem] px-[2rem] rounded bg-[#030716]">
            UPPER/LOWER
          </button>
        </div>
      </div>
      <div className="h-1 w-[90%] bg-white rounded-full"></div>
    </div>
  );
};

export default Subgenerate;
