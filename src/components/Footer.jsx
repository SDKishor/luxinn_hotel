import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-end neutral min-h-[500px]  footer_gradient">
      <div className="flex justify-between pt-10 pb-0 w-10/12 max-md:flex-col max-md:w-full max-w-[1600px] ">
        <div className="w-[350px] text-base-100  max-md:pb-8 max-md:w-full max-md:text-center max-md:order-3">
          <div className="text-7xl font-['monoton'] max-md:text-6xl pb-3">
            LUXINN
          </div>
          <p className="opacity-80">
            A perfact hotel to spend your vacation. Your comfort is our no. 1
            priority. You are always wellcome anytime.
          </p>
        </div>

        <div className="text-right text-base-100 text-lg max-md:order-1 max-md:pt-40 max-md:text-left max-md:text-base max-md:p-5">
          <div className="font-bold font-[lora] text-neutral text-3xl opacity-1 uppercase pb-5 max-md:text-2xl">
            contacts
          </div>
          <p className=" pb-3">2978 Cameron Road, Lockport, Las vagus.</p>
          <p className="link link-hover pb-3">HotelLuxinn@gmail.com</p>
          <p className=" pb-3">+120-4502-4502</p>
        </div>

        <div className="flex max-md:order-2 max-md:p-5">
          <div className="text-right text-base-100 text-lg  w-[200px] max-md:text-left">
            <div className="font-bold font-[lora] text-neutral text-3xl opacity-1 uppercase pb-5 max-md:text-2xl">
              Follow us
            </div>
            <div className="flex items-center justify-end max-md:justify-start">
              <a
                href={"https://www.facebook.com/"}
                target="_blank"
                rel="noreferrer"
                className="link link-hover pb-3 block max-md:order-2"
              >
                Facebook
              </a>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="link link-hover px-2 pb-3 block text-xl max-md:order-1 max-md:pl-0"
              />
            </div>

            <div className="flex items-center justify-end max-md:justify-start">
              <a
                href="https://www.instagram.com/"
                className="link link-hover pb-3 block max-md:order-2"
                target="_blank"
                rel="noreferrer"
              >
                Instragram
              </a>
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="link link-hover px-2 pb-3 block text-xl max-md:order-1 max-md:pl-0"
              />
            </div>

            <div className="flex items-center justify-end max-md:justify-start">
              <a
                href="https://twitter.com/"
                className="link link-hover pb-3 block max-md:order-2"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="link link-hover px-2 pb-3 block text-xl max-md:order-1 max-md:pl-0"
              />
            </div>
          </div>
          <div className="text-right text-base-100 text-lg w-[200px]">
            <div className="font-bold font-[lora] text-neutral text-3xl opacity-1 uppercase pb-5 max-md:text-2xl">
              NAV
            </div>
            <Link to={"/"} className="link link-hover pb-3 block">
              Home
            </Link>
            <Link to={"/Rooms"} className="link link-hover pb-3 block">
              Rooms
            </Link>
            <Link to={"/Restaurant"} className="link link-hover pb-3 block">
              Restaurent
            </Link>
            <Link to={"/Gallery"} className="link link-hover pb-3 block">
              Gallery
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-5 text-lg font-bold text-base-100 w-10/12 max-md:text-center max-md:text-base  max-w-[1600px]">
        © 2022 Kinsley. All Rights Reserved.
      </div>
    </footer>
  );
};
