import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="py-4 lg:py-6 flex justify-between items-center">
      {/* logo section */}
      <div>
        <p className="text-3xl lg:text-4xl font-semibold">
          FOOD<span className="text-orange-500">EAT</span>
        </p>
      </div>

      {/* Menu section */}
      <div className="flex justify-center items-center gap-10">
        <div className="gap-8 hidden sm:flex">
          <NavLink
            className={(e) =>
              e.isActive ? "hover:border-b-2 border-red-600 uppercase" : ""
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "hover:border-b-2 border-red-600 uppercase" : ""
            }
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "hover:border-b-2 border-red-600 uppercase" : ""
            }
            to="/recipes"
          >
            RECIPES
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "hover:border-b-2 border-red-600 uppercase" : ""
            }
            to="/favorite"
          >
            FAVORITE
          </NavLink>
        </div>
        {/* login section */}
        <div className="flex gap-4 items-center">
          <img src={Profile} className="w-10 rounded-full" />
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;