import React from "react";
import { AdminHotelTable } from "./components/AdminHotelTable";
import UseFetch from "../hooks/UseFetch";

export const Admin_Hotels = () => {
  const { data, reFetchData } = UseFetch(
    "http://localhost:8800/room/GetAllRooms"
  );

  // const deleteItem = async (id) => {
  //   await axios.delete(`http://localhost:8800/restaurant/deletefood/${id}`);
  //   reFetchData();
  // };

  console.log(data);
  return (
    <div className="flex-1 p-2">
      <AdminHotelTable
        data={data}
        // deleteItem={deleteItem}
        reFetchData={reFetchData}
      />
    </div>
  );
};
