import React from "react";
import { logo } from "../assets/index";
import { navbarLinks, servicesData } from "../constants/data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 relative common-padding">
      <div className="w-full h-full py-8 common-width flex justify-between flex-wrap">
        <Link to="/" className="px-6">
          <img src={logo} alt="Logo" className="w-[5rem] object-cover" />
        </Link>
        <div className="flex flex-col gap-3 px-6">
          <h3 className="text-lg text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {navbarLinks.map((item, index) => (
              <li key={index} className="text-white text-base">
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
            <li className="text-white text-base">
              <a href="#contactus">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 px-6">
          <h3 className="text-lg text-white">Our Services</h3>
          <ul className="flex flex-col gap-2">
            {servicesData.map((item, index) => (
              <li key={index} className="text-white text-base">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="block text-white text-sm mt-3 text-center">
        ©2024 I&S | All Right Reserved
      </p>
    </footer>
  );
}
