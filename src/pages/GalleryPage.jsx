import React, { useEffect, useState } from "react";
import { ShowCaseCard } from "../components/ShowCaseCard";

export const GalleryPage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
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
          <ShowCaseCard />
          <ShowCaseCard alignRign={windowSize.innerWidth > 768 && true} />
          <ShowCaseCard />
        </div>
      </section>
    </main>
  );
};
