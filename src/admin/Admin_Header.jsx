import React from "react";
import { FaGlobe, FaRegBell } from "react-icons/fa";
import { BiMenu, BiMessageAltDetail } from "react-icons/bi";

export const Admin_Header = () => {
  return (
    <header className="flex w-full items-center  justify-between  h-[80px] z-10 px-6 border-b border-primary/30">
      <div className="text-5xl font-['monoton'] text-accent ">LUXINN</div>

      <div className="flex items-center">
        <div className="flex items-center  ">
          <FaGlobe className="w-5 h-5" />
          <p className="p-2">English</p>
        </div>

        <div className="relative px-3 mx-2">
          <FaRegBell className="w-6 h-6" />
          <div className="absolute bg-red-600 w-4 h-4 text-xs text-center font-bold text-base-100 rounded-full top-0 right-2 ">
            1
          </div>
        </div>

        <div className="relative px-3 mx-2">
          <BiMessageAltDetail className="w-7 h-7" />
          <div className="absolute bg-red-600 w-4 h-4 text-xs text-center font-bold text-base-100 rounded-full top-0 right-2 ">
            1
          </div>
        </div>

        <div className="pl-4">
          <BiMenu className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
};
