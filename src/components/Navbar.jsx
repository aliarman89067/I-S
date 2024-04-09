import React, { useState } from "react";
import { logo } from "../assets";
import { navbarLinks } from "../constants/data";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileNavShow, setIsMobileNavShow] = useState(false);
  return (
    <>
      <nav className="common-padding bg-white ">
        <div className="w-full h-full flex items-center justify-between common-width">
          <Link
            to="/"
            className="flex items-center gap-1 sm:max-w-[10rem] w-full "
          >
            <img
              src={logo}
              alt="Logo"
              width={20}
              height={20}
              className="w-10 h-10 object-cover"
            />
            <p className="text-zinc-700 text-base">I&S</p>
          </Link>
          <ul className="hidden sm:flex items-center gap-4 translate-y-1">
            {navbarLinks.map((item) => (
              <li key={item.id} className="group flex items-center flex-col">
                <a href={item.href} className="text-sm text-zinc-600">
                  {item.text}
                </a>
                <div className="w-[6px] h-[6px] rounded-full bg-nGreen opacity-0 group-hover:opacity-100 transition-all"></div>
              </li>
            ))}
          </ul>
          <div className="sm:max-w-[10rem] w-full flex justify-end items-center gap-3">
            <a
              href="#contactus"
              className="px-6 py-2 rounded-sm bg-nGreen text-white flex items-center gap-1 whitespace-nowrap"
            >
              Contact us
            </a>
            <Menu
              onClick={() => setIsMobileNavShow(true)}
              className="flex sm:hidden text-zinc-700 h-7 w-7"
            />
          </div>
        </div>
      </nav>
      {isMobileNavShow && (
        <nav className="flex flex-col gap-3 bg-white w-[20rem] min-h-screen absolute top-0 right-0 z-50">
          <div
            onClick={() => setIsMobileNavShow(false)}
            className="absolute top-3 left-3 w-10 h-10 rounded-full border border-zinc-500 flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5 text-zinc-600" />
          </div>
          <ul className="mt-24 ml-4 flex flex-col gap-3">
            {navbarLinks.map((item, index) => (
              <li
                onClick={() => setIsMobileNavShow(false)}
                key={index}
                className="text-zinc-800 text-lg"
              >
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
