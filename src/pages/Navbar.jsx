import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[13vh] bg-black text-white flex flex-row items-center justify-between px-[2rem] py-[1rem]">
      <div className="text-[2rem] cursor-pointer font-bold">
        <Link to={"/"}>THE GOLD/FITNESS</Link>
      </div>
      <div className="flex flex-row items-center justify-between w-[70%]  h-full">
        <div>
          <ul className="flex text-[1.2rem] font-bold flex-row items-center justify-center gap-[2rem] ">
            <li className="text-[1.2rem] hover:scale-105 transition-all">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="text-[1.2rem] hover:scale-105 transition-all">
              <Link to={"/"}>ABOUT</Link>
            </li>
            <li className="text-[1.2rem] hover:scale-105 transition-all">
              <Link to={"/"}>CONTACT</Link>
            </li>
            <li className="text-[1.2rem] hover:scale-105 transition-all">
              <Link to={"/"}>LOGIN</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <button className="text-[1.2rem] bg-white rounded text-black px-[1.5rem] py-[0.5rem] font-bold hover:scale-105 transition-all hover:bg-black hover:text-white">
            LOGIN/REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
