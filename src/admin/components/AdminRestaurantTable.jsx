import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Admin_RestaurentEditModal } from "./Admin_RestaurentEditModal";

export const AdminRestaurantTable = ({ data, deleteItem }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editItemId, setEditItemId] = useState("");

  return (
    <section className="container px-4 mx-auto py-4 ">
      {openEditModal && (
        <Admin_RestaurentEditModal
          setOpenEditModal={setOpenEditModal}
          id={editItemId}
        />
      )}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Food List
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            "This is a list of all foods. You can add new food, edit or delete
            existing ones."
          </p>
        </div>
        <div>
          <button className="rounded-md bg-primary px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Food</span>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Type
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Status
                    </th>

                    <th scope="col">
                      <span className=" ">Edit</span>
                    </th>

                    <th scope="col">
                      <span className=" ">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {data.map((item) => (
                    <tr key={item._id}>
                      <td className="py-4 px-4 whitespace-nowrap text-">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={item.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className=" font-medium text-gray-900 dark:text-white text-xl">
                              {item.foodname}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 whitespace-nowrap ">
                        <div className="text-sm text-gray-900 dark:text-white ">
                          {item.foodType}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-300">
                          {item.todaySpecial}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {item.TodaySpetial ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Special
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-300 text-black">
                            Regular
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-center text-sm font-medium ">
                        <button
                          onClick={() => {
                            setEditItemId(item._id);
                            setOpenEditModal(true);
                          }}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-center text-sm font-medium ">
                        <button
                          onClick={() => deleteItem(item._id)}
                          className="btn btn-sm btn-ghost"
                        >
                          <FaTrashAlt className="h-5 w-5 text-red-500" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
