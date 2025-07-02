import React from "react";
import BannerImg from "../assets/2.png";

const Banner = () => {
  return (
    <div className="py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* img section  */}
        <div className="flex justify-center items-center">
          <img src={BannerImg} alt="" />
        </div>
        {/* text section  */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Food Is Always Good</h1>
          <p className="py-4 font-semibold">
            Savor every bite with flavors that bring joy to your soul. From
            comforting classics to bold new tastes, our dishes are crafted to
            satisfy every craving. Each plate is a celebration of freshness,
            passion, and creativity — made to delight your senses and create
            unforgettable moments around the table.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
