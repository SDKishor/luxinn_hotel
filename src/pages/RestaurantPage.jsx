import React, { useEffect, useState } from "react";

import Image1 from "../assets/Food 1.png";
import Image2 from "../assets/Food 2.png";
import Image3 from "../assets/Food 3.png";
import Image4 from "../assets/Food 4.png";
import Image5 from "../assets/Food 5.png";
import Image6 from "../assets/Food 6.png";
import Image7 from "../assets/Food 7.png";
import Image8 from "../assets/Food 8.png";
import Image9 from "../assets/Food 9.png";
import Image10 from "../assets/Food 10.png";
import { TodaySpacialCard } from "../components/TodaySpacialCard";

import { CusineCard } from "../components/CusineCard";

import axios from "axios";

const cusine = [
  {
    name: "Mexican",
    photoUrl: "./assets/cusine 1.png",
  },
  {
    name: "Indian",
    photoUrl: "./assets/cusine 2.png",
  },
  {
    name: "Japanese",
    photoUrl: "./assets/cusine 3.png",
  },
  {
    name: "American",
    photoUrl: "./assets/cusine 4.png",
  },
  {
    name: "Italian",
    photoUrl: "./assets/cusine 5.png",
  },
];

export const RestaurantPage = () => {
  const [foodHour, setFoodHour] = useState("breakfast");
  const [todaySpacialData, setTodaySpacialData] = useState([]);
  const [guestChoiceData, setGuestChoiceData] = useState([]);
  const cusineData = cusine;

  const images = document.getElementsByClassName("image");

  let globalIndex = 0,
    last = { x: 0, y: 0 };

  const activate = (image, x, y) => {
    image.style.left = `${x - 200}px`;
    image.style.top = `${y - 100}px`;
    image.style.zIndex = globalIndex;

    image.dataset.status = "active";

    last = { x, y };
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
  };

  const handleOnMove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
      const lead = images[globalIndex % images.length],
        tail = images[(globalIndex - 5) % images.length];

      activate(lead, e.clientX, e.clientY);

      if (tail) tail.dataset.status = "inactive";

      globalIndex++;
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8800/restaurant/getfood/${foodHour}`
      );
      setGuestChoiceData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/restaurant/gettodayfoods`
        );
        setTodaySpacialData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  useEffect(() => {
    fetchData();
  }, [foodHour]);

  return (
    <main className="w-full ">
      <section
        className="footer_gradient w-full h-[90vh]  relative max-md:hidden overflow-hidden "
        onMouseMove={(event) => {
          handleOnMove(event);
        }}
      >
        <img
          className="w-[25vmin] absolute translate-y-1/2 translate-x-[-1/2] image top-[15%] left-[25%] z-10"
          src={Image1}
          alt="image1"
          data-status="active"
        />

        <img
          className="w-[25vmin] absolute translate-y-1/2 translate-x-[-1/2] image top-[25%] left-[70%] z-10"
          src={Image2}
          alt="image1"
          data-status="active"
        />

        <img
          className="w-[25vmin] absolute translate-y-1/2 translate-x-[-1/2] image  top-[1%] left-[40%] z-10"
          src={Image3}
          alt="image1"
          data-status="active"
        />

        <img
          className="w-[25vmin] absolute translate-y-1/2 translate-x-[-1/2] image top-[55%] left-[40%] z-10"
          src={Image4}
          alt="image1"
          data-status="active"
        />

        <img
          className="w-[25vmin] absolute translate-y-1/2 translate-x-[-1/2] image top-[40%] left-[20%] "
          src={Image5}
          alt="image1"
          data-status="active"
        />

        <img
          className="w-[25vmin] absolute translate-y-1/2 translate-x-[-1/2] image top-[30%] left-[55%]"
          src={Image6}
          alt="image1"
          data-status="active"
        />

        <img
          className="w-[25vmin] absolute translate-y-1/2 translate-x-[-1/2] image top-[60%] left-[75%]"
          src={Image7}
          alt="image1"
          data-status="active"
        />

        <img
          className="w-[25vmin] absolute translate-y-[-1/2] translate-x-[-1/2] image top-[10%] left-[7%]"
          src={Image8}
          alt="image1"
          data-status="active"
        />
        <img
          className="w-[25vmin] absolute translate-y-[-1/2] translate-x-[-1/2] image top-[-8%] left-[80%] z-[10]"
          src={Image9}
          alt="image1"
          data-status="active"
        />
        <img
          className="w-[25vmin] absolute translate-y-[-1/2] translate-x-[-1/2] image top-[60%] left-[8%] z-[11]"
          src={Image10}
          alt="image1"
          data-status="active"
        />

        <div className="absolute w-full h-full  z-[100000] flex items-center justify-center restaurant_gradient_overlay">
          <h2 className=" font-[lora] text-8xl font-bold text-center max-w-[1200px] text-base-100 ">
            GET YOUR FABOURITE CUSINE
          </h2>
        </div>
      </section>
      <section className="my-10 flex justify-center ">
        <div className="w-10/12 py-16">
          <h2 className="uppercase  font-[lora] mb-10  max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold ">
            Today's Spacial
          </h2>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 place-items-center">
            {todaySpacialData.map((data, index) => {
              return (
                <TodaySpacialCard
                  key={index}
                  bgImage={data.imageUrl}
                  foodName={data.foodname}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="my-10 flex justify-center bg-secondary">
        <div className="w-10/12 py-16 max-md:w-11/12">
          <h2 className="uppercase  font-[lora] mb-10  max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold ">
            Guest Choices
          </h2>

          <div className="bg-primary w-[500px] h-[70px] rounded-2xl flex justify-around mb-8 max-md:w-full text-xl max-md:text-base max-md:h-[60px]">
            <button
              className={`  font-bold ${
                foodHour === "breakfast" && "text-base-100"
              }`}
              onClick={() => setFoodHour("breakfast")}
            >
              Breakfast
            </button>

            <button
              className={`font-bold ${foodHour === "lunch" && "text-base-100"}`}
              onClick={() => setFoodHour("lunch")}
            >
              Lunch
            </button>

            <button
              className={`font-bold ${
                foodHour === "dinner" && "text-base-100"
              }`}
              onClick={() => setFoodHour("dinner")}
            >
              Dinner
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 place-items-center">
            {guestChoiceData.map((data, index) => (
              <TodaySpacialCard
                key={index}
                bgImage={data.imageUrl}
                foodName={data.foodname}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 flex justify-center">
        <div className="w-10/12">
          <h2 className="uppercase  font-[lora] mb-10  max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold ">
            Available Cusine
          </h2>

          <div className=" grid grid-cols-4 max-md:grid-cols-2 gap-5 place-items-center">
            {cusineData.map((data, index) => {
              return (
                <CusineCard
                  key={index}
                  cusineImage={data.photoUrl}
                  cusineName={data.name}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
