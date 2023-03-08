import React from "react";

export const SmallRoomCard = () => {
  return (
    <div className="w-[full] rounded-xl overflow-hidden pb-5 min-w-[300px] ">
      <div className="w-full h-[200px]  cardImagetwo">
        <h1 className="text-3xl font-bold p-3 text-base-100 max-md:text-2xl">
          Royle Delax Room
        </h1>
      </div>
      <div className="w-full mx-2 ">
        <div className="flex w-full py-4">
          <div className="flex-grow ">
            <span className="pr-2 font-bold text-3xl text-primary"> $500 </span>
            per night
          </div>
          <button className="font-bold text-xl text-primary underline mr-5">
            Details
          </button>
        </div>
        <button className="bg-primary py-4 px-10 rounded-lg text-xl max-md:text-lg font-bold cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
