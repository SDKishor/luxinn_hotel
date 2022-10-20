import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center  justify-between w-10/12 h-[100px]">
      <div className="text-5xl font-['monoton'] text-accent ">LUXINN</div>
      <nav
        id="navbar"
        className="bg-primary h-14 w-4/6 flex items-center justify-center rounded-xl font-bold text-xl max-md:w-14 max-md:rounded-md max-md:active:scale-95"
      >
        <div
          id="hambarMenu"
          className="md:hidden w-full h-full flex items-center justify-center text-3xl cursor-pointer "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <ul className="flex items-center justify-evenly w-full max-md:hidden">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Rooms</a>
          </li>
          <li>
            <a href="#">Restaurant</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <ul className="absolute top-[100px] left-0 bg-primary flex flex-col items-center justify-evenly w-full h-80 font-bold text-xl md:hidden  ">
          <li className="hover:text-base-100">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-base-100">
            <a href="#">Rooms</a>
          </li>
          <li className="hover:text-base-100">
            <a href="#">Restaurant</a>
          </li>
          <li className="hover:text-base-100">
            <a href="#">Gallery</a>
          </li>
          <li className="hover:text-base-100">
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
    </header>
  );
};
