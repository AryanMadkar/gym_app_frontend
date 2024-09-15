import React from "react";

const Subgenerate2 = () => {
  return (
    <div className="flex flex-col items-center  justify-center">
      <div className="flex h-[20vw] w-full gap-2 items-center flex-col justify-center">
        <div className="flex font-bold flex-row items-center text-[2.5rem] justify-center gap-[2rem]">
          <h1 className="text-[4rem]">02</h1>
          <h1>LOCK ON TARGET</h1>
        </div>
        <div className="flex items-center justify-center my-2">
          <h1 className="text-[1.4rem] text-red-700">
            SELECT THE MUSCLES JUDGED FOR ANNIHILATION
          </h1>{" "}
        </div>
        <div className="flex flex-row  items-center justify-center gap-[2rem]">
          <select className="p-[1rem] bg-[#030716] cursor-pointer rounded-2xl px-[2rem] w-[70vw] text-center h-[5rem]">
            <option value="">Select Muscle Group</option>
            <option value="abdominals">abdominals</option>
            <option value="abductors">abductors</option>
            <option value="adductors">adductors</option>
            <option value="biceps">Biceps</option>
            <option value="calves">Calves</option>
            <option value="chest">chest</option>
            <option value="forearms">forearms</option>
            <option value="glutes">Glutes</option>
            <option value="hamstrings">Hamstrings</option>
            <option value="lats">lats</option>
            <option value="lower_back">lower_back</option>
            <option value="triceps">Triceps</option>
          </select>
        </div>
      </div>
      <div className="h-1 w-[90%] bg-white rounded-full mb-2"></div>
    </div>
  );
};

export default Subgenerate2;
