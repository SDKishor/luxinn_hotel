import React from "react";

export const Home = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section className=" h-screen hero_section_image w-full flex flex-col items-center justify-center mt-[-100px] ">
        <h3
          className="text-4xl font-medium pb-10
        max-md:text-xl
        "
        >
          WELCOME TO LUXINN
        </h3>
        <h1
          className="font-['lora'] text-[120px] w-[900px] font-bold text-center uppercase leading-[120px] text-base-100 max-md:text-5xl
          max-md:leading-[60px]
          max-md:w-11/12"
        >
          A Place for Relaxation
        </h1>
      </section>

      <section
        className="w-10/12 md:h-[800px] my-16 max-md:w-full  relative
        "
      >
        <h2 className="font-[lora] my-12 max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold max-md:mt-0 ">
          SPACIAL ABOUT HOTEL
        </h2>
        <div className="bg-primary p-16 max-md:p-10 max-md:py-20 flex flex-col text-base-100 rounded-3xl h-[450px] max-md:h-full">
          <h3 className="font-[lora] mb-6 text-4xl font-bold w-3/6 max-md:w-full max-md:text-center">
            We Also Provide Outdoor Activities To All Visitors
          </h3>
          <p className="font-normal w-3/6 text-2xl mb-6 max-md:w-full max-md:text-center">
            There is many activities that the hotel provide for all the visitors
            with delecious food and fun activities.
          </p>
          <button className="uppercase bg-base-100 py-4 px-8 rounded-md font-bold text-xl text-neutral cursor-pointer md:w-[200px] ">
            Read More
          </button>
        </div>

        <div className=" absolute top-0 right-0 flex max-lg:hidden">
          <div className="w-[300px] h-[450px] bg_center_utility  rounded-2xl mr-[-200px] mt-[350px] z-10 aboutSec_image_two "></div>
          <div className="w-[475px] h-[700px] bg_center_utility  rounded-2xl z-1 aboutSec_image_one"></div>
        </div>
      </section>
    </main>
  );
};
