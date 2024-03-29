import { faBed, faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const RoomCard = ({
  name,
  price,
  photoUrl,
  roomCapacity,
  roomDisc,
  roomSize,
  roomData,
}) => {
  return (
    <div className="card w-[380px] gap-4 h-[500px] max-md:w-[350px] max-md:mb-5 bg-primary shadow-xl">
      <figure className={"h-3/5 relative " + photoUrl}>
        <div className="absolute text-base-100 bg-primary flex items-center bottom-0 left-0 h-12 rounded-tr-lg">
          <div className=" flex items-center px-5">
            <FontAwesomeIcon icon={faBed} />
            <span className="pl-2">adults: {roomCapacity}</span>
          </div>
          <div className="flex items-center pr-5 ">
            <FontAwesomeIcon icon={faRulerCombined} />
            <span className="pl-2">
              size: {roomSize} ft<sup>2</sup>
            </span>
          </div>
        </div>
      </figure>
      <div className="card-body pt-0 text-base-100">
        <h2 className="card-title text-3xl font-[lora]">{name}</h2>
        <p className="text-success ">{roomDisc}</p>
        <div className="flex justify-between items-center">
          <h3>
            <span className="font-bold text-3xl text-neutral">${price} </span>
            per night
          </h3>
          <Link to="/order" state={roomData}>
            <button className="btn btn-md btn-secondary hover:border-neutral">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
