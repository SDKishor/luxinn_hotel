import React from "react";

import Image1 from "../assets/Rectangle 5.png";
import Image2 from "../assets/Rectangle 6.png";
import Image3 from "../assets/Rectangle 19.png";

export const RestaurantPage = () => {
  const images = document.getElementsByClassName("image");

  let globalIndex = 0,
    last = { x: 0, y: 0 };

  const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y - 100}px`;
    image.style.zIndex = globalIndex;

    image.dataset.status = "active";

    last = { x, y };
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
  };

  const handleOnMove = (e) => {
    if (distanceFromLast(e.pageX, e.pageY) > window.innerWidth / 20) {
      const lead = images[globalIndex % images.length],
        tail = images[(globalIndex - 5) % images.length];

      activate(lead, e.pageX, e.pageY);

      if (tail) tail.dataset.status = "inactive";

      globalIndex++;
    }
  };

  return (
    <main className="w-full ">
      <section className="footer_gradient flex ">
        <div
          className=" w-7/12 h-screen overflow-hidden relative max-md:hidden "
          onMouseMove={(event) => {
            handleOnMove(event);
          }}
        >
          <img
            className="w-[30vmin] absolute translate-y-1/2 translate-x-[-1/2] image "
            src={Image1}
            alt="image1"
            data-status="inactive"
          />

          <img
            className="w-[30vmin] absolute translate-y-1/2 translate-x-[-1/2] image"
            src={Image2}
            alt="image1"
            data-status="inactive"
          />

          <img
            className="w-[30vmin] absolute translate-y-1/2 translate-x-[-1/2] image"
            src={Image1}
            alt="image1"
            data-status="inactive"
          />

          <img
            className="w-[30vmin] absolute translate-y-1/2 translate-x-[-1/2] image"
            src={Image2}
            alt="image1"
            data-status="inactive"
          />

          <img
            className="w-[30vmin] absolute translate-y-1/2 translate-x-[-1/2] image"
            src={Image1}
            alt="image1"
            data-status="inactive"
          />

          <img
            className="w-[30vmin] absolute translate-y-1/2 translate-x-[-1/2] image"
            src={Image2}
            alt="image1"
            data-status="inactive"
          />

          <img
            className="w-[30vmin] absolute translate-y-1/2 translate-x-[-1/2] image"
            src={Image1}
            alt="image1"
            data-status="inactive"
          />

          <img
            className="w-[30vmin] absolute translate-y-[-1/2] translate-x-[-1/2] image"
            src={Image3}
            alt="image1"
            data-status="inactive"
          />
        </div>
        <div className="w-5/12"></div>
      </section>
    </main>
  );
};
