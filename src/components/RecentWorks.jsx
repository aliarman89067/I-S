import React, { useRef } from "react";
import { worksData } from "../constants/data";
import { Link } from "react-router-dom";

export default function RecentWorks() {
  return (
    <div
      id="works"
      className="relative w-full min-h-screen bg-white common-padding"
    >
      <div className="w-full h-full flex flex-col py-10 gap-10 common-width">
        <div className="flex flex-col gap-2 max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 max-md:text-center">
            Our Recent Projects
          </h1>
          <p className="text-zinc-700 max-md:text-center max-sm:text-sm">
            Explore our latest endeavors spanning electrical, plumbing,
            carpentry, engineering, and cutting-edge tech installations,
            showcasing our commitment to excellence and innovation in every
            project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {worksData.map((item, index) => (
            <Link
              key={index}
              to={`/work/${item.id}`}
              className="group w-full h-[22rem] rounded-md border border-zinc-300 overflow-hidden p-2 bg-zinc-100 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="w-full h-[14rem] overflow-hidden rounded-md">
                <img
                  src={item.images[0].src}
                  alt="Project 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <h3 className="font-medium text-zinc-700">{item.title}</h3>
                <p className="text-xs text-zinc-600 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
