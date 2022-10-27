import { faBed, faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const RoomCard = () => {
  return (
    <div className="card w-[380px] gap-4 h-[500px] max-md:w-[350px] max-md:mb-5 bg-primary shadow-xl">
      <figure className="h-3/5 cardImageOne relative">
        <div className="absolute text-base-100 bg-primary flex items-center bottom-0 left-0 h-12 rounded-tr-lg">
          <div className=" flex items-center px-5">
            <FontAwesomeIcon icon={faBed} />
            <span className="pl-2">adults: 2</span>
          </div>
          <div className="flex items-center pr-5 ">
            <FontAwesomeIcon icon={faRulerCombined} />
            <span className="pl-2">
              size: 50 ft<sup>2</sup>
            </span>
          </div>
        </div>
      </figure>
      <div className="card-body pt-0 text-base-100">
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
          <button className="btn btn-md btn-secondary hover:border-neutral">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
