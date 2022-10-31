import React from "react";

export const TodaySpacialCard = ({ bgImage, foodName }) => {
  return (
    <div
      className={`w-[380px] h-[500px] rounded-2xl overflow-hidden relative group max-md:w-[320px] max-md:h-auto`}
    >
      <img className="w-full h-full" src={bgImage} alt="today's Spacial" />
      <div
        id="TodaySpacialCard_text"
        className=" w-full TodaySpecial_gradient_overlay  absolute z-10 top-0  justify-center p-10 opacity-0  group-hover:opacity-100 max-md:opacity-100"
      >
        <h3 className=" text-center text-2xl max-md:text-lg font-bold text-base-100 capitalize">
          {foodName}
        </h3>
      </div>
    </div>
  );
};
