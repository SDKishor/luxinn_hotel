import React from "react";
import { OrderCard } from "../components/OrderCard";

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
        <div className="grid grid-cols-7 place-items-center text-xl font-bold h-16  border-solid border-t-2 border-b-2 border-primary my-5">
          <div className="col-span-4"></div>
          <div></div>
          <div>Total:</div>
          <div>$500</div>
        </div>
      </section>
      <section className="w-10/12 max-w-[1600px] mb-16 max-md:w-full  relative">
        <h1 className="font-[lora] mb-12 max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold max-md:mt-0 ">
          More Rooms
        </h1>
      </section>
    </main>
  );
};
