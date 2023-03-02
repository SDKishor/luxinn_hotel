import React, { useEffect, useState } from "react";
import { ShowCaseCard } from "../components/ShowCaseCard";

export const GalleryPage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [hotelData, setHotelData] = useState([]);
  const galleryData = hotelData;

  useEffect(() => {
    fetch("./dummyData.json")
      .then((res) => res.json())
      .then((data) => setHotelData(data.gallary));

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
    <main className="w-full flex flex-col items-center justify-center">
      <section className="py-6 w-10/12 max-w-[1600px] max-md:w-full flex flex-col items-center">
        <h2 className="uppercase font-[lora] my-8  max-md:text-center max-md:font-bold max-md:text-xl text-4xl font-bold ">
          Around Our hotel
        </h2>

        <div className="">
          {galleryData.map((data, index) =>
            index % 2 === 0 ? (
              <ShowCaseCard
                key={index}
                cardName={data.cardName}
                cardDisc={data.cardDisc}
                cardImg={data.photoUrl}
                lastItem={index === galleryData.length - 1}
              />
            ) : (
              <ShowCaseCard
                key={index}
                cardName={data.cardName}
                cardDisc={data.cardDisc}
                cardImg={data.photoUrl}
                alignRign={windowSize.innerWidth > 768 && true}
                lastItem={index === galleryData.length - 1}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
};
