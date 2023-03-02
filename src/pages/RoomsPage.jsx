import React, { useEffect, useState } from "react";
import { RoomCard } from "../components/RoomCard";

export const RoomsPage = () => {
  const [allroomsData, setAllroomsData] = useState([]);
  const [ourBestRoomsData, setOurBestRoomsData] = useState([]);

  useEffect(() => {
    fetch("./dummyData.json")
      .then((res) => res.json())
      .then(
        (data) => (
          setAllroomsData(data.rooms.allRooms),
          setOurBestRoomsData(data.rooms.ourBestRoom)
        )
      );
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center ">
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
        </div>

        <div className="grid grid-cols-3 gap-3 place-items-center max-md:grid-cols-1 max-lg:grid-cols-2 max-md:w-full justify-between w-10/12 max-w-[1600px] mb-6 ">
          {ourBestRoomsData.map((data, index) => (
            <RoomCard
              key={index}
              name={data.name}
              price={data.Price}
              photoUrl={data.photoUrl}
              roomCapacity={data.roomCapacity}
              roomDisc={data.roomDisc}
              roomSize={data.roomSize}
            />
          ))}
        </div>
      </section>

      <section className=" w-full flex flex-col items-center py-6">
        <div className=" flex justify-between items-center w-10/12 max-w-[1600px] ">
          <div className=" w-5/6 max-md:w-full">
            <h3 className="uppercase  font-[lora] my-3 mb-8 max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold ">
              All Available Rooms
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 place-items-center max-md:flex-col max-md:w-full justify-between w-10/12 max-w-[1600px] mb-6 ">
          {allroomsData.map((data, index) => (
            <RoomCard
              key={index}
              name={data.name}
              price={data.Price}
              photoUrl={data.photoUrl}
              roomCapacity={data.roomCapacity}
              roomDisc={data.roomDisc}
              roomSize={data.roomSize}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
