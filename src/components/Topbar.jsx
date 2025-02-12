import React from "react";
import { IoIosCall } from "react-icons/io";

function Topbar() {
  return (
    <div className="p-4 backdrop-blur-2xl sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-3 lg:flex lg:flex-row justify-between items-center">
          <a href="/">
            <h1 className="text-2xl lg:text-4xl uppercase font-extrabold text-orange-400">
              GUNA WELDING WORKS
            </h1>
          </a>
          <a
            href="tel:+918525038532"
            className="flex justify-center items-center gap-3 text-lg text-white"
          >
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <IoIosCall className="text-black" />
            </div>
            <div className="text-left">
            <p className="font-semibold mb-0 hidden lg:block">
               Call Us:
            </p>
            +91 85250 38532
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
