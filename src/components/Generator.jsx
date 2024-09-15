import React from "react";
import Subgenerate from "./subgenerate";
import Subgenerate2 from "./Subgenerate2";
import Subgenerative3 from "./Subgenerative3";

const Generator = () => {
  return (
    <div className="min-h-[100vh] neo bg-black text-white  flex flex-col font-bold  w-full">
      <div className="h-[30vh] font-semibold bg-[#030716] w-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-[1.5rem]">GENERATE YOUR WORKOUT</h1>
        <h1 className="text-[3rem]">IT'S HUGE O' CLOCK</h1>
      </div>
      <Subgenerate />
      <Subgenerate2 />
      <Subgenerative3 />
    </div>
  );
};

export default Generator;
