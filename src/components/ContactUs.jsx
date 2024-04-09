import React from "react";
import { contactUs, facebook, whatsapp } from "../assets";

export default function ContactUs() {
  return (
    <section
      id="contactus"
      className="relative w-full min-h-screen overflow-hidden bg-white common-padding"
    >
      <div className="w-full h-[1px] bg-zinc-300 rounded-[10px]" />
      <div className="w-full h-full flex flex-col gap-10 common-width py-10">
        <div className="flex flex-col gap-2 max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 max-md:text-center">
            Contact Us
          </h1>
          <p className="text-zinc-700 max-md:text-center max-sm:text-sm">
            Feel free to contact us.
          </p>
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex-1 flex flex-col gap-5">
            <div className="px-4 py-3 rounded-md bg-white shadow-lg border border-zinc-200 flex items-center gap-3">
              <img
                src={whatsapp}
                alt="Whatsapp"
                className="w-10 h-10 object-cover rounded-full"
              />
              <p className="text-zinc-700">+92 316 2546499</p>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=100076332394618"
              target="_blank"
            >
              <div className="px-4 py-3 rounded-md bg-white shadow-lg border border-zinc-200 flex items-center gap-3">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <p className="text-zinc-700">Arif Ishaq Shaikh</p>
              </div>
            </a>
          </div>
          <div className="max-md:hidden md:flex-1">
            <img
              src={contactUs}
              alt="Contact Us"
              className="w-full object-cover h-[22rem] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
