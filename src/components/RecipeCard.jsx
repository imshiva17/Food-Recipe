import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

const RecipeCard = (props) => {
  const { id, image, title, desc, price, ratings } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className=" bg-white/50 p-4 rounded-xl w-[25%] h-[400px] overflow-hidden"

    >
      <img
        className="w-600 sm:w-40 sm:h-40 mx-auto object-cover rounded-full drop-shadow-[5px_5px_10px_rgba(0,0,0,0.4)]"
        src={image}
        alt=""
      />
      <p className="text-red-500 mt-5 ">{ratings}</p>

      <h1 className="text-xl font-semibold mt-3">{title}</h1>
      <p className="mt-2">
        {desc.slice(0, 100)}...
        <small className="text-blue-400">more</small>
      </p>
      <p className="text-lg font-semibold mt-2">{"₹" + price}</p>
    </Link>
  );
};

export default RecipeCard;
