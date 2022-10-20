import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let allLinks = (
    <>
      <li className="hover:text-base-100">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-base-100 " : undefined
          }
          end
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-base-100">
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive ? "text-base-100 " : undefined
          }
        >
          Rooms
        </NavLink>
      </li>
      <li className="hover:text-base-100">
        <NavLink
          to="/Restaurant"
          className={({ isActive }) =>
            isActive ? "text-base-100 " : undefined
          }
        >
          Restaurant
        </NavLink>
      </li>
      <li className="hover:text-base-100">
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "text-base-100 " : undefined
          }
        >
          Gallery
        </NavLink>
      </li>
      <li className="hover:text-base-100">
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "text-base-100 " : undefined
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

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
          {allLinks}
        </ul>
      </nav>
      {isMenuOpen && (
        <ul className="absolute top-[100px] left-0 bg-primary flex flex-col items-center justify-evenly w-full h-80 font-bold text-xl md:hidden  ">
          {allLinks}
        </ul>
      )}
    </header>
  );
};
