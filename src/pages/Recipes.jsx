import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { data, setData } = useContext(recipecontext);

  const recipeRender = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <>
      <Link
        className="absolute right-[10%] bg-green-400 text-lg text-white font-semibold px-4 py-2 rounded"
        to="/recipes/create-recipe"
      >
        Create Recipe
      </Link>

      <div className="mt-10 flex gap-8 flex-wrap">
        {data.length > 0 ? recipeRender : "No recipe found!"}
      </div>
    </>
  );
};

export default Recipes;
