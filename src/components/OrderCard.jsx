import { faBed, faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const OrderCard = ({
  lastItem = false,
  quantity,
  price,
  name,
  roomSize,
  roomCapacity,
  handleRemoveItem,
  roomData,
}) => {
  const [netPrice, setNetPrice] = useState(quantity * price);

  return (
    <>
      <div className="flex items-center gap-14 text-xl  py-5 px-3 border-solid  border-primary my-3 overflow-hidden max-md:gap-0 relative">
        <button
          className=" btn btn-ghost absolute right-10 top-1 text-xl font-bold"
          onClick={() => handleRemoveItem(roomData.id)}
        >
          x
        </button>
        <div className="flex-grow  flex items-center ">
          <div className="h-[150px] w-[200px]  rounded-xl mr-5 max-md:h-[60px] max-md:w-[80px] max-md:mr-2 overflow-hidden ">
            <img src="./assets/Rectangle 17.png" alt="" />
          </div>
          <div className="flex flex-col align-center ">
            <h2 className="font-bold text-3xl max-md:text-base">{name}</h2>
            <div className="flex my-5 max-md:my-1">
              <div className="text-lg md:hidden">$500</div>
              <div className=" flex items-center px-5 py-3 mr-5 rounded-md  bg-primary/50 w-[180px] max-md:hidden">
                <FontAwesomeIcon icon={faBed} />
                <span className="pl-2">adults: {roomCapacity}</span>
              </div>
              <div className="flex items-center px-5 py-3 mr-5 rounded-md  bg-primary/50 w-[180px] max-md:hidden">
                <FontAwesomeIcon icon={faRulerCombined} />
                <span className="pl-2">
                  size: {roomSize} ft<sup>2</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-8 max-md:hidden">${price}</div>
        <div className="ml-[-20px]">
          <button
            disabled
            className="h-10 w-10 text-2xl mx-1  max-md:h-6 max-md:w-6 max-md:text-base font-bold"
          >
            {quantity}
          </button>
        </div>
        <div className=" max-md:hidden w-[115px] pl-5">${netPrice}</div>
      </div>

      {lastItem ? (
        <div></div>
      ) : (
        <div className="h-[1px] bg-primary w-4/6 mx-auto mb-3"></div>
      )}
    </>
  );
};
