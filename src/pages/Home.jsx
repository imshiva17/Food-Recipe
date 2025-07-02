import React from "react";
import HeroImg from "../assets/1.png";
import TopList from "../components/TopList";
import Banner from "../components/Banner";
import OurServices from "../components/OurServices";

const Hero = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin-slow {
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-20s {
            animation: spin-slow 20s linear infinite;
          }
        `}
      </style>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* Text section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Delicious Food Is Waiting For You
          </h1>
          <p className="">
            Indulge in a world of mouth-watering flavors, freshly prepared with love and the finest ingredients. Whether you're craving something hearty or healthy, we’ve got the perfect dish waiting just for you.

          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <button className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full hover:scale-105 duration-200">
              Food Menu
            </button>
            <button className="bg-gray-200 text-black font-bold px-4 py-2 rounded-full hover:scale-105 duration-200">
              Book Table
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="flex flex-col justify-center">
          <img
            src={HeroImg}
            alt=""
            className="animate-spin-20s drop-shadow-[5px_5px_10px_rgba(0,0,0,0.4)] w-[400px] mx-auto"
          />
        </div>
      </div>
      <TopList/>
      <Banner/>
      <OurServices/>
    </>
  );
};

export default Hero;
