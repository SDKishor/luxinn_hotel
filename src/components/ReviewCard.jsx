import React from "react";

export const ReviewCard = ({
  name,
  country,
  heading,
  comment,
  userPhotoUrl,
}) => {
  return (
    <div className="w-[450px] bg-primary p-8 rounded-xl max-md:w-[350px]">
      <div className="flex items-center pb-5 ">
        <div className="w-[120px] h-[120px]  rounded-full  max-md:h-[80px] max-md:w-[80px] ">
          <img src={userPhotoUrl} alt="" />
        </div>
        <div className="px-5">
          <h3 className="font-[lora] font-bold text-3xl uppercase pb-1 max-md:text-2xl">
            {name}
          </h3>
          <p className="text-base-100 capitalize  max-md:text-sm">
            From {country}.
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="font-[lora] font-bold text-2xl uppercase pb-1 text-base-100 max-md:text-xl">
          “{heading}”
        </h2>
        <p className="text-success max-md:text-sm">{comment}</p>
      </div>
    </div>
  );
};
