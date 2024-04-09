import React from "react";
import { servicesData } from "../constants/data";

export default function Services() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white common-padding">
      <div className="w-full h-[1px] bg-zinc-300 rounded-[10px]" />
      <div className="w-full h-full flex flex-col gap-10 py-10 common-width">
        <div className="flex flex-col gap-2 max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 max-md:text-center">
            Services We Provide
          </h1>
          <p className="text-zinc-700 max-md:text-center max-sm:text-sm">
            we offer a diverse range of services, including expert engineering
            solutions, reliable plumbing services, and precise hardware
            installations. Our skilled team is dedicated to delivering
            excellence in every project, ensuring quality craftsmanship and
            customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="w-full py-4 rounded-sm bg-nGreen/70 px-3 flex gap-2"
            >
              <div className="flex justify-center items-center rounded-full h-10 w-10 border border-white shrink-0">
                <item.icon className="text-zinc-200" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-sm font-light text-zinc-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
