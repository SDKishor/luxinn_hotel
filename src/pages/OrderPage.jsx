import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OrderCard } from "../components/OrderCard";
import { SmallRoomCard } from "../components/SmallRoomCard";

export const OrderPage = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section className="w-10/12 max-w-[1600px] mb-16 max-md:w-full ">
        <div className="grid grid-cols-7 place-items-center text-xl font-bold h-16  border-solid border-t-2 border-b-2 border-primary my-5">
          <h2 className="col-span-4">Rooms</h2>
          <h2>Unit Price</h2>
          <h2>Quantity</h2>
          <h2>Price</h2>
        </div>
        <OrderCard></OrderCard>
        <OrderCard lastItem={true}></OrderCard>
        <div className="flex  md:flex-col  items-end max-md:items-center max-md:w-full max-md:border-solid max-md:border-t-2 max-md:border-b-2 max-md:border-primary ">
          <div className=" flex items-center justify-end max-md:justify-center text-xl font-bold h-16  md:border-solid md:border-t-2 md:border-b-2 md:border-primary my-5 w-full max-md:w-1/2 max-md:my-3">
            <div className="">
              Total: <span className="mx-14 max-md:mx-5">$500</span>
            </div>
          </div>
          <button className="text-2xl font-bold bg-primary py-5 px-10 rounded-md text-base-100 w-[350px] max-md:text-sm max-md:w-[200px] max-md:px-5 max-md:ml-16 cursor-pointer">
            Chack Out ($500) <FontAwesomeIcon icon={faLocationArrow} />
          </button>
        </div>
      </section>
      <section className="w-10/12 max-w-[1600px] mb-16 relative">
        <h1 className="font-[lora] mb-12 max-md:text-center max-md:font-bold max-md:text-2xl text-4xl font-bold max-md:mt-0 ">
          More Rooms
        </h1>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
          <SmallRoomCard></SmallRoomCard>
          <SmallRoomCard></SmallRoomCard>
          <SmallRoomCard></SmallRoomCard>
          <SmallRoomCard></SmallRoomCard>
          <SmallRoomCard></SmallRoomCard>
        </div>
      </section>
    </main>
  );
};
