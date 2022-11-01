import React from "react";

export const ShowCaseCard = ({ alignRign = false, lastItem = false }) => {
  return (
    <div className="flex my-12 max-md:flex-col max-md:my-0">
      <div
        className={`flex flex-col justify-center px-16 max-md:px-4  relative ${
          !alignRign && "hidden "
        }`}
      >
        <h2 className="text-4xl font-[lora] uppercase font-bold pb-6 max-md:text-2xl ">
          swimming pool
        </h2>
        <p className="text-xl w-9/12 text-info max-md:w-11/12 pb-6">
          We have a beautiful large pool for our guest to spand a relaxing
          moment.
        </p>
        {!lastItem && (
          <div
            className="w-[108px] h-[100px] vectorArrow bg_center_utility absolute bottom-[-15px] right-5  max-md:w-[54px] max-md:h-[54px] max-md:bottom-1 md:scale-x-[-1]
        "
          ></div>
        )}
      </div>

      <div className="w-2/4 flex items-center max-md:flex-col max-md:w-full">
        <div className="w-[600px] h-[300px] rounded-xl max-md:w-11/12 max-md:h-[220px] max-md:my-5 aroundHotelPool "></div>
      </div>
      <div
        className={`flex flex-col justify-center px-16 max-md:px-4  relative ${
          alignRign && "hidden"
        }`}
      >
        <h2 className="text-4xl font-[lora] uppercase font-bold pb-6 max-md:text-2xl max-md:pb-2">
          swimming pool
        </h2>
        <p className="text-xl w-9/12 text-info pb-6 max-md:w-11/12 max-md:text-base">
          We have a beautiful large pool for our guest to spand a relaxing
          moment.
        </p>

        {!lastItem && (
          <div className="w-[108px] h-[100px] vectorArrow bg_center_utility absolute bottom-[-15px] left-5 max-md:w-[108px] max-md:h-[100px] max-md:bottom-0 max-md:right-10 max-md:left-auto max-md:opacity-30"></div>
        )}
      </div>
    </div>
  );
};
