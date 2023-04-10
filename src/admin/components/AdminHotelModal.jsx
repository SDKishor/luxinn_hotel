import axios from "axios";
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

export const AdminHotelModal = ({
  id,
  setOpenEditModal,
  setOpenAddModal,
  addmodal = false,
  reFetchData,
  ischacked = false,
}) => {
  const [roomname, setRoomname] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [bestRoom, setBestRoom] = useState(ischacked);
  const [foodType, setFoodType] = useState("");

  const closeModal = () => {
    setOpenEditModal(false);
    setOpenAddModal(false);
  };

  const addtoDb = async (e) => {
    // e.preventDefault();
    // const data = {
    //   foodname: roomname,
    //   imageUrl: imageUrl,
    //   foodType: foodType,
    //   TodaySpetial: bestRoom,
    // };
    // try {
    //   await axios.post("http://localhost:8800/restaurant/addfood", data);
    //   reFetchData();
    //   setOpenEditModal(false);
    //   setOpenAddModal(false);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const updateItem = async (e, id) => {
    // e.preventDefault();
    // const data = {};
    // if (roomname.length > 0) {
    //   data.foodname = roomname;
    // }
    // if (imageUrl.length > 0) {
    //   data.imageUrl = imageUrl;
    // }
    // if (foodType.length > 0) {
    //   data.foodType = foodType;
    // }
    // data.TodaySpetial = bestRoom;
    // try {
    //   await axios.put(
    //     `http://localhost:8800/restaurant/updatefood/${id}`,
    //     data
    //   );
    //   reFetchData();
    //   setOpenEditModal(false);
    //   setOpenAddModal(false);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="w-screen h-full  absolute top-0 right-0 bg-black/30 flex justify-center items-center z-50">
      <button
        onClick={closeModal}
        className="absolute btn btn-ghost top-20 right-20 w-20 h-20"
      >
        <FaWindowClose className=" w-full h-full text-base-100" />
      </button>
      <form className="flex flex-col w-[400px] min-w-[300px] bg-white px-12 py-10">
        <div className="mb-3">
          <label
            className="text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            htmlFor="foodName"
          >
            Room Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 mt-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="text"
            id="foodName"
            onChange={(e) => setRoomname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="ImageUrl"
          >
            Image Url
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 mt-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="text"
            id="ImageUrl"
            onChange={(e) => setimageUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="ImageUrl"
          >
            Room Description
          </label>
          <textarea
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 mt-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="text"
            id="ImageUrl"
            onChange={(e) => setimageUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="ImageUrl"
          >
            Price
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 mt-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="number"
            id="ImageUrl"
            onChange={(e) => setimageUrl(e.target.value)}
          />
        </div>
        <div className="mb-3 flex items-center">
          <input
            className="flex h-10 w-[24px] rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="checkbox"
            id="isSpecial"
            checked={bestRoom}
            onChange={() => setBestRoom(!bestRoom)}
          />
          <label
            className="text-sm font-medium px-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="isSpecial"
          >
            Best Room
          </label>
        </div>

        <div className="mb-3 flex gap-5">
          <div className="mb-3">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="ImageUrl"
            >
              Adult Capacity
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 mt-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="number"
              id="ImageUrl"
              onChange={(e) => setimageUrl(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="ImageUrl"
            >
              Room size
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 mt-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="text"
              id="ImageUrl"
              onChange={(e) => setimageUrl(e.target.value)}
            />
          </div>
        </div>
        {addmodal ? (
          <button
            type="submit"
            onClick={(e) => addtoDb(e)}
            className="btn btn-primary mt-5  self-end"
          >
            Add
          </button>
        ) : (
          <button
            onClick={(e) => updateItem(e, id)}
            className="btn btn-primary mt-5  self-end"
          >
            Update
          </button>
        )}
      </form>
    </div>
  );
};
