import React, { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setData] = useState(
    JSON.parse(window.localStorage.getItem("recipes")) || []
  );
  const [favorite, setFavorite] = useState(
    JSON.parse(window.localStorage.getItem("favorite")) || []
  );
  return (
    <recipecontext.Provider value={{ data, setData, favorite, setFavorite }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
