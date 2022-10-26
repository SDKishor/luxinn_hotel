import React from "react";

export const ReviewCard = () => {
  return (
    <div className="w-[450px] bg-primary p-8 rounded-xl max-md:w-[350px]">
      <div className="flex items-center pb-5 ">
        <div className="w-[120px] h-[120px]  rounded-full bg-slate-500 max-md:h-[80px] max-md:w-[80px] "></div>
        <div className="px-5">
          <h3 className="font-[lora] font-bold text-3xl uppercase pb-1 max-md:text-2xl">
            Alax Jhon
          </h3>
          <p className="text-base-100 capitalize  max-md:text-sm">
            From Amarica.
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="font-[lora] font-bold text-2xl uppercase pb-1 text-base-100 max-md:text-xl">
          “Best hotel”
        </h2>
        <p className="text-success max-md:text-sm">
          We have a 5 star restaurant with world class chef to give our guest
          their desierd food with your fabourite cusin
        </p>
      </div>
    </div>
  );
};
