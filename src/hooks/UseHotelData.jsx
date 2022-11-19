import React from "react";
import { useEffect, useState } from "react";

export const UseHotelData = () => {
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    fetch("./dummyData.json")
      .then((res) => res.json())
      .then((data) => setHotelData(data));
  }, []);
  return [hotelData, setHotelData];
};
