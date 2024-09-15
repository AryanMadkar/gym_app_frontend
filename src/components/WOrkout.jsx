import React from "react";

const WOrkout = () => {
  return (
    <div className="min-h-[100vh] MT-10 neo bg-black text-white  flex flex-col font-bold w-full">
      <div className="h-[25vh] font-semibold bg-[#030716] w-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-[1.5rem]">WELCOME TO</h1>
        <h1 className="text-[3rem]">THE DANGER ZONE</h1>
      </div>
      <div className=" flex flex-col w-full h-full my-[2rem] items-center justify-center">
        <div className="min-h-[20vh] px-[1rem] py-[0.5rem] w-[90vw] bg-[#030716] rounded-xl flex flex-col gap-[1rem] ">
          <div className="flex flex-row font-bold items-center justify-between">
            <div>
              <h1 className="text-[3rem] text-gray-500">01</h1>
            </div>
            <div>
              <h1 className="text-[1.8rem]">NARROW STANCE DEADLIFT</h1>
            </div>
            <div>
              <h1 className="text-[1.2rem] text-gray-500">COMPOUND</h1>
            </div>
          </div>
          <div className="flex flex-col font-bold items-start ">
            <h1 className="text-sm text-gray-500">MUSCLE GROUP </h1>
            <h1 className="text-lg">HAMSTRING</h1>
          </div>
          <div className="flex flex-row font-bold items-center justify-center ">
            <p className="text-xl w-[90%] text-center">
              Setup : Stand with feet hip-width apart, barbell over your
              mid-feet, and grip the bar just outside your knees. Starting
              Position: Bend at hips and knees, keep your back flat, chest up,
              and engage your core. Lift Off: Push through your heels, extend
              hips and knees together, and keep the bar close to your body.
              Lowering: Push hips back first, then bend knees to lower the bar
              in a controlled manner. Breathing: Inhale before lifting, exhale
              at the top, and inhale again while lowering.
            </p>
          </div>
          <div className="flex flex-row font-bold items-center justify-around gap-[1rem]">
            <div className="flex flex-col text-center py-[1rem] border border-gray-500 rounded px-[1rem] w-[13rem]">
              {" "}
              <h1 className="text-[1rem]">REPS</h1>
              <h1 className="text-[1.3rem]">13</h1>
            </div>
            <div className="flex flex-col text-center py-[1rem] border border-gray-500 rounded px-[1rem] w-[13rem]">
              {" "}
              <h1 className="text-[1rem]">REST</h1>
              <h1 className="text-[1.3rem]">90 SEC</h1>
            </div>
            <div className="flex flex-col text-center py-[1rem] border border-gray-500 rounded px-[1rem] w-[13rem]">
              {" "}
              <h1 className="text-[1rem]">TEMPO</h1>
              <h1 className="text-[1.3rem]">411</h1>
            </div>
            <div className="flex flex-col text-center py-[1rem] border border-gray-500 rounded px-[1rem] w-[13rem]">
              {" "}
              <h1 className="text-[1rem]">SETS</h1>
              <h1 className="text-[1.3rem]">5</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WOrkout;
