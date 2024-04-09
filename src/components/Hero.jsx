import React, { useEffect, useState } from "react";
import { engineer3, heroBg, sensorLight } from "../assets";
import { ArrowRight } from "lucide-react";
import { heroImages } from "../constants/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  });

  useGSAP(() => {
    tl.to("#imageContainer", {
      borderRadius: "30px",
      width: "100%",
      height: "24rem",
      duration: 2,
      delay: 1,
    });
    tl.to("#imageGradient", {
      background:
        "linear-gradient(4deg, rgba(0, 0, 0, 0.81) 0%, rgba(238, 130, 238, 0) 100%)",
    });
    tl.to("#imagePara", {
      keyframes: [
        { opacity: "100%", y: 0 },
        { y: 10, delay: 3 },
        { opacity: "0" },
      ],
    });
    tl.to("#imageGradient", {
      background:
        " linear-gradient(4deg, rgba(0, 0, 0, 0) 0%, rgba(238, 130, 238, 0) 100%)",
    });
    tl.to("#imageContainer", {
      borderRadius: "500px",
      width: "0%",
      height: "0%",
      duration: 2,
      onComplete: () => {
        updateIndexNumber();
      },
    });
  }, [imageIndex]);
  useGSAP(() => {
    gsap.to(".normal-animation", {
      opacity: "100%",
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.3,
    });
  }, []);
  const updateIndexNumber = () => {
    if (imageIndex < 3) {
      setImageIndex((prev) => prev + 1);
    } else {
      setImageIndex(0);
    }
  };
  return (
    <div className="sticky top-0 left-0 w-full min-h-[calc(100vh)]">
      <div className="relative w-full min-h-[calc(100vh)] common-padding flex justify-center ">
        <img
          src={heroBg}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative flex justify-center items-center w-full h-full common-width mt-5">
          <div className="relative w-full min-h-[80vh] bg-white rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 py-5 sm:py-10 px-5 sm:px-10 lg:px-16 lg:items-center overflow-hidden">
            <div className="md:hidden absolute top-0 left-0 w-full h-full z-0 opacity-20">
              <img
                src={engineer3}
                alt="Engineer 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative flex flex-col gap-2 sm:gap-4 max-md:justify-center max-md:items-center">
              <h1 className="text-zinc-800 text-2xl sm:text-3xl font-extrabold max-md:text-center opacity-0 translate-y-5 normal-animation">
                Your One-Stop Solution for Plumbing, Electrical, and More
              </h1>
              <p className="text-zinc-700 max-md:text-center max-sm:text-sm opacity-0 translate-y-5 normal-animation">
                Welcome to I&S, where we offer comprehensive services in
                plumbing, electrical, and various other home maintenance tasks.
                With a team of skilled engineers and technicians, we strive to
                provide top-notch services tailored to your needs.
              </p>
              <a
                href="#works"
                className="px-8 py-[10px] rounded-md text-base flex items-center gap-2 bg-nGreen self-start text-white mt-6 max-md:mx-auto opacity-0 translate-y-5 normal-animation"
              >
                Explore
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="hidden w-full h-full md:flex md:justify-center md:items-center ">
              <div
                id="imageContainer"
                className="w-0 h-0 flex rounded-[500px] overflow-hidden justify-center items-center"
              >
                <div className="relative min-w-[40vw] h-[24rem] flex justify-center items-center overflow-hidden bg-red-500">
                  <div
                    id="imageGradient"
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-transparent to-transparent"
                  ></div>
                  <p
                    id="imagePara"
                    className="absolute left-0 bottom-8 text-white text-base mx-5 lg:mx-10 opacity-0 translate-y-[10px]"
                  >
                    {heroImages[imageIndex].description}
                  </p>
                  <img
                    src={heroImages[imageIndex].image}
                    alt="Hero Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
