import React from "react";
import { FaWindowClose } from "react-icons/fa";

export const Admin_RestaurentEditModal = ({ id, setOpenEditModal }) => {
  return (
    <div className="w-screen h-screen  absolute top-0 right-0 bg-black/30 flex justify-center items-center z-50">
      <button
        onClick={() => setOpenEditModal(false)}
        className="absolute btn btn-ghost top-20 right-20 w-20 h-20"
      >
        <FaWindowClose className=" w-full h-full text-base-100" />
      </button>
      <div className="flex flex-col w-[400px] min-w-[300px] bg-white px-12 py-10">
        <div className="mb-3">
          <label
            className="text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            htmlFor="foodName"
          >
            Food Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 mt-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="text"
            id="foodName"
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
          />
        </div>
        <div className="mb-3 flex items-center">
          <input
            className="flex h-10 w-[24px] rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="checkbox"
            id="isSpecial"
          />
          <label
            className="text-sm font-medium px-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="isSpecial"
          >
            Today's Special
          </label>
        </div>

        <div className="mb-3 ">
          <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-3">
            Image Type
          </p>
          <div className="flex items-center mb-2">
            <input
              name="foodType"
              className=" h-5 w-[20px] rounded-md border border-gray-300 bg-transparent py-2 px-3  text-sm placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 inline"
              type="radio"
              id="breakfast"
              value="breakfast"
            />
            <label
              className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 px-3"
              htmlFor="breakfast"
            >
              Breakfast
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              name="foodType"
              className=" h-5 w-[20px] rounded-md border border-gray-300 bg-transparent py-2 px-3  text-sm placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 inline"
              type="radio"
              id="lunch"
              value="lunch"
            />
            <label
              className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 px-3"
              htmlFor="lunch"
            >
              Lunch
            </label>
          </div>
          <fieldset className="flex items-center mb-2">
            <input
              name="foodType"
              className=" h-5 w-[20px] rounded-md border border-gray-300 bg-transparent py-2 px-3  text-sm placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 inline"
              type="radio"
              id="dinner"
              value="dinner"
            />
            <label
              className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 px-3"
              htmlFor="dinner"
            >
              Dinner
            </label>
          </fieldset>
        </div>
        <button className="btn btn-primary mt-5  self-end">Update</button>
      </div>
    </div>
  );
};
