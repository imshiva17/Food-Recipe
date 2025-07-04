import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Favorite from "../pages/Favorite";
import About from "../pages/About";
import Create from "../pages/Create";
import Update from "../pages/Update";
import PageNotFound from "../pages/PageNotFound";
import Recipe from "../pages/Recipe";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/create-recipe" element={<Create />} />
      <Route path="/recipes/details/:id" element={<Recipe />} />
      <Route path="/recipes/update-recipe/:id" element={<Update />} />

      <Route path="/favorite" element={<Favorite />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
