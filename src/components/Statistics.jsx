import React from "react";
import {
  eightStat,
  fifthStat,
  firstStat,
  fourthStat,
  ninthStat,
  secondStat,
  seventhStat,
  sixthStat,
  tenthStat,
  thirdStat,
} from "../assets";

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="relative w-full min-h-screen common-padding bg-white"
    >
      <div className="w-full h-[1px] bg-zinc-300 rounded-[10px]" />
      <div className="w-full h-full py-10 common-width flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 max-md:text-center">
            Our Stats
          </h1>
          <p className="text-zinc-700 max-md:text-center max-sm:text-sm">
            Experience excellence with I&S Company. Our proven track record
            showcases on-time project completion, high client satisfaction, and
            a reputation for reliability. Trust us for superior service and
            exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-zinc-100 shadow-lg rounded-md border border-zinc-300 py-4 px-6 flex flex-col justify-center items-center">
            <div className="p-3 bg-white rounded-md flex flex-col items-center justify-center">
              <p className="text-xs text-zinc-400">May 22 Se November 23</p>
              <h3 className="text-zinc-700 text-base mb-2">
                IT Park Hunza electrical work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] w-full h-[14rem] gap-3">
                <div className="hidden sm:flex flex-col gap-3 w-full h-full">
                  <img
                    src={firstStat}
                    alt="Stat Image"
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <img
                    src={secondStat}
                    alt="Stat Image"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
                <div className="w-full h-full">
                  <img
                    src={thirdStat}
                    alt="Stat Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:flex flex-col gap-3 w-full h-full">
                  <img
                    src={fourthStat}
                    alt="Stat Image"
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <img
                    src={fifthStat}
                    alt="Stat Image"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
              <h1 className="text-lg font-medium text-zinc-500 mt-2">
                We accomplished entire electrical and hardware works at IT Park
                Hunza
              </h1>
            </div>
          </div>
          <div className="bg-zinc-100 shadow-lg rounded-md border border-zinc-300 py-4 px-6 flex flex-col justify-center items-center">
            <div className="p-3 bg-whiteg rounded-md flex flex-col items-center justify-center">
              <p className="text-xs text-zinc-400">May 22 Se November 23</p>
              <h3 className="text-zinc-700 text-base mb-2">
                IT Park Hunza electrical work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] w-full h-[14rem] gap-3">
                <div className="hidden sm:flex flex-col gap-3 w-full h-[14rem]">
                  <div className="bg-red-500 w-full h-full overflow-hidden">
                    <img
                      src={sixthStat}
                      alt="Stat Image"
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                  <div className="bg-red-500 w-full h-full overflow-hidden">
                    <img
                      src={seventhStat}
                      alt="Stat Image"
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                </div>
                <div className="w-full h-[14rem] overflow-hidden">
                  <img
                    src={eightStat}
                    alt="Stat Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:flex flex-col gap-3 w-full h-[14rem]">
                  <div className="bg-red-500 w-full h-full overflow-hidden">
                    <img
                      src={ninthStat}
                      alt="Stat Image"
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                  <div className="bg-red-500 w-full h-full overflow-hidden">
                    <img
                      src={tenthStat}
                      alt="Stat Image"
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-lg font-medium text-zinc-500 mt-2">
                We play a vital role in hardware and electrical fields in IT
                Park Hunza
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
