import { faBed, faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const OrderCard = ({ lastItem = false }) => {
  return (
    <>
      <div className="grid grid-cols-7 place-items-center text-xl  py-5  border-solid  border-primary my-3">
        <div className="col-span-4 flex items-center mr-40">
          <div className="h-[150px] w-[200px] bg-slate-400 rounded-xl mr-5">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col align-center ">
            <h2 className="font-bold text-3xl">Royal Class Room</h2>
            <div className="flex my-5">
              <div className=" flex items-center px-5 py-3 mr-5 rounded-md  bg-primary/50">
                <FontAwesomeIcon icon={faBed} />
                <span className="pl-2">adults: 2</span>
              </div>
              <div className="flex items-center px-5 py-3 mr-5 rounded-md  bg-primary/50 ">
                <FontAwesomeIcon icon={faRulerCombined} />
                <span className="pl-2">
                  size: 50 ft<sup>2</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>$500</div>
        <div>
          <button className="h-10 w-10 text-2xl mx-1 border-solid border-2 border-primary">
            -
          </button>
          <button
            disabled
            className="h-10 w-10 text-2xl mx-1 border-solid border-2 border-primary"
          >
            1
          </button>
          <button className="h-10 w-10 text-2xl mx-1 border-solid border-2 border-primary">
            +
          </button>
        </div>
        <div>$500</div>
      </div>

      {lastItem ? (
        <div></div>
      ) : (
        <div className="h-[1px] bg-primary w-4/6 mx-auto mb-3"></div>
      )}
    </>
  );
};
