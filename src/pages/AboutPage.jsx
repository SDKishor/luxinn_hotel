import React from "react";

export const AboutPage = () => {
  return (
    <main className="w-10/12">
      <section className="">
        <h2 className="uppercase font-[lora] my-8  max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold ">
          About us
        </h2>
        <div className="flex max-md:flex-col">
          <div className="w-1/2 max-md:w-full max-md:text-center">
            <p className="text-xl pr-14 py-6 max-md:text-base max-md:px-2">
              Luxinn is a chain of luxury hotels and a subsidiary of the Las
              vagus Hotels Company Limited, headquartered in Las vagus company
              employed over 20,000 people in the year 2010. <br /> <br />
              In 2000s the hotel has 300-room near the southern end of the Las
              vagus vally.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src="./assets/about1.png" alt="" />
          </div>
        </div>
      </section>

      <section className="">
        <h2 className="uppercase font-[lora] my-8  max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold ">
          History
        </h2>
        <div className="flex max-md:flex-col">
          <div className="w-1/2 max-md:w-full max-md:text-center">
            <p className="text-xl pr-14 py-6 max-md:text-base max-md:px-2">
              In 1949 first hotel was purchased , the 40-room and bought
              additional hotels as years passed.
              <br />
              <br />
              In 1965, the Luxinn expanded to where the owner opened the first
              hotel with air-conditioning in public areas and cold running
              water.
              <br />
              <br />
              In 1977, abraham assumed management of the Luxinn hotel in Las
              vagus. That same year, they assumed management of four hotels on
              various parts of Las vagus.
              <br />
              <br />
              In 2000s the hotel has 300-room near the southern end of the Las
              vagus vally. It features a rustic ladge theme and a 65,556 sq ft
              (6,090.4 m2) casino. It is owned and operated by kaven Roski.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src="./assets/about2.png" alt="" className="object-cover " />
          </div>
        </div>
      </section>
    </main>
  );
};
