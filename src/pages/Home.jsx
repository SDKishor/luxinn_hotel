import React, { useEffect, useState } from "react";
import { RoomCard } from "../components/RoomCard";
import { ShowCaseCard } from "../components/ShowCaseCard";

import foodGroupImage from "../assets/Group 33.png";
import { Link } from "react-router-dom";
import { ReviewCard } from "../components/ReviewCard";

export const Home = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [aroundTheHotelData, setAroundTheHotelData] = useState([]);
  const [bestRooms, setBestRooms] = useState([]);
  const [userReviewData, setUserReviewData] = useState([]);

  useEffect(() => {
    fetch("./dummyData.json")
      .then((res) => res.json())
      .then(
        (data) => (
          setAroundTheHotelData(data.aroundTheHotel),
          setBestRooms(data.HomeOurBestRooms),
          setUserReviewData(data.guestReviews)
        )
      );

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <main className="w-full flex flex-col items-center justify-center ">
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
        className="w-10/12 max-w-[1600px] md:h-[800px] my-16 max-md:w-full  relative
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
          <Link
            to={"/about"}
            className="uppercase btn btn-lg btn-secondary bg-base-100 px-8 rounded-md font-bold text-xl text-neutral md:w-[200px] "
          >
            Read More
          </Link>
        </div>

        <div className=" absolute top-0 right-0 flex max-lg:hidden">
          <div className="w-[300px] h-[450px] bg_center_utility  rounded-2xl mr-[-200px] mt-[350px] z-10 aboutSec_image_two "></div>
          <div className="w-[475px] h-[700px] bg_center_utility  rounded-2xl z-1 aboutSec_image_one"></div>
        </div>
      </section>

      <section className="bg-secondary w-full flex flex-col items-center py-6">
        <div className=" flex justify-between items-center w-10/12 max-w-[1600px] ">
          <div className=" w-5/6 max-md:w-full">
            <h3 className="uppercase  font-[lora] my-3  max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold ">
              Our Best Rooms
            </h3>
            <p
              className="font-normal w-3/6 text-2xl mb-6 max-md:w-full 
            max-md:hidden max-md:text-center"
            >
              Here is some of our best rooms to relax for your vacation
            </p>
          </div>
          <Link
            to={"/rooms"}
            className="btn w-[200px] h-[80px] text-xl btn-primary max-md:hidden"
          >
            ALL ROOMS
          </Link>
        </div>

        <div className="flex items-center max-md:flex-col max-md:w-full justify-between w-10/12 max-w-[1600px] mb-6 ">
          {bestRooms.map((data, index) => (
            <RoomCard
              key={index}
              name={data.name}
              price={data.Price}
              photoUrl={data.photoUrl}
              roomCapacity={data.roomCapacity}
              roomDisc={data.roomDisc}
              roomSize={data.roomSize}
              roomData={data}
            />
          ))}
        </div>
      </section>

      <section className="py-6 w-10/12 max-w-[1600px] max-md:w-full flex flex-col items-center">
        <h2 className="uppercase font-[lora] my-8  max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold ">
          Around Our hotel
        </h2>

        <div className="">
          {aroundTheHotelData.map((data, index) =>
            index % 2 === 0 ? (
              <ShowCaseCard
                key={index}
                cardName={data.cardName}
                cardDisc={data.cardDisc}
                cardImg={data.photoUrl}
                lastItem={index === aroundTheHotelData.length - 1}
              />
            ) : (
              <ShowCaseCard
                key={index}
                cardName={data.cardName}
                cardDisc={data.cardDisc}
                cardImg={data.photoUrl}
                alignRign={windowSize.innerWidth > 768 && true}
                lastItem={index === aroundTheHotelData.length - 1}
              />
            )
          )}
        </div>

        <Link
          to={"/gallery"}
          className="btn btn-primary w-[180px] h-[80px] text-xl"
        >
          Gallery
        </Link>
      </section>

      <section className="w-full bg-secondary flex items-center justify-center my-10">
        <div className="flex w-10/12 max-w-[1600px] max-md:flex-col py-16">
          <div className="h-auto flex-1  flex items-center justify-center">
            <img src={foodGroupImage} alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-center box-border max-md:text-center pt-10">
            <h2 className="text-4xl uppercase font-bold px-14 max-md:text-2xl max-md:px-2 ">
              find your fabourite cusine
            </h2>
            <p className="text-xl px-14 py-6 max-md:text-base max-md:px-2">
              We have a 5 star restaurant with world class chef to give our
              guest their desierd food with your fabourite cusine
            </p>
            <Link
              to={"/restaurant"}
              className="btn btn-primary btn-lg mx-14 w-[250px] max-md:mx-auto"
            >
              Restaurant
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-6 w-10/12 max-w-[1600px] max-md:w-full flex flex-col items-center justify-center ">
        <div className="w-full max-md:flex flex-col items-center justify-center">
          <h2 className="uppercase  font-[lora] my-3 mb-5  max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold  max-md:mb-10">
            WHat Our Guest says
          </h2>

          <div
            id="carouselBody"
            className="carousel carousel-center  space-x-4 max-md:w-[350px] "
          >
            {userReviewData.map((data, index) => (
              <div key={index} id="slide1" className="carousel-item ">
                <ReviewCard
                  name={data.name}
                  heading={data.heading}
                  country={data.country}
                  comment={data.comment}
                  userPhotoUrl={data.userPhotoUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
