import React from "react";
import { AdminRestaurantTable } from "./components/AdminRestaurantTable";
import UseFetch from "../hooks/UseFetch";
import axios from "axios";

export const Admin_Restaurant = () => {
  const { data, reFetchData } = UseFetch(
    "http://localhost:8800/restaurant/getallfood"
  );

  const deleteItem = (id) => {
    axios.delete(`http://localhost:8800/restaurant/deletefood/${id}`);
    reFetchData();
  };
  return (
    <div className="flex-1 p-2">
      <AdminRestaurantTable data={data} deleteItem={deleteItem} />
    </div>
  );
};
