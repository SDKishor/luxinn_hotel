import React from "react";

export const RoomCard = () => {
  return (
    <div className="card w-[400px] h-[500px] bg-primary shadow-xl">
      <figure className="h-3/6 cardImageOne"></figure>
      <div className="card-body text-base-100">
        <h2 className="card-title text-3xl font-[lora]">Deluxe Room</h2>
        <p className="text-success ">
          A room for two adults with free brackfast buffet. 10% discount on the
          uses of extra facilitices.
        </p>
        <div className="flex justify-between items-center">
          <h3>
            <span className="font-bold text-3xl text-neutral">$200 </span>
            per night
          </h3>
          <button className="btn btn-md btn-secondary">Book Now</button>
        </div>
      </div>
    </div>
  );
};
