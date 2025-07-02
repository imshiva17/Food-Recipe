import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Favorite = () => {
  const { favorite } = useContext(recipecontext);
  const recipeRender = favorite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <>
      <div className="p-5 mt-10 flex gap-8 flex-wrap">
        {favorite.length > 0 ? recipeRender : "No recipe found!"}
      </div>
    </>
  );
};

export default Favorite;
