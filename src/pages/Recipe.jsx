import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

const Recipe = () => {
  const navigate = useNavigate();
  const { data, setData, favorite, setFavorite } = useContext(recipecontext);
  const { id } = useParams();
  const recipe = data.find((r) => r.id == id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: recipe
      ? {
          rating: recipe.ratings,
          image: recipe.image,
          title: recipe.title,
          price: recipe.price,
          chef: recipe.chef,
          desc: recipe.desc,
          ingr: recipe.ingr,
          inst: recipe.inst,
        }
      : {}, // fallback when recipe is undefined
  });

  const submitHandler = (updatedRecipe) => {
    const i = data.findIndex((r) => r.id == id);
    // code to update recipe
    const copyData = [...data];
    copyData[i] = { ...recipe, ...updatedRecipe };
    setData(copyData);
    window.localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success("Recipe updated!");
    reset();
  };

  const deleteHandler = () => {
    const filterData = data.filter((r) => r.id != id);
    setData(filterData);
    window.localStorage.setItem("recipes", JSON.stringify(filterData));
    toast.success("Recipe Deleted!");
    navigate("/recipes");
  };

  const favoriteHandler = () => {
    let copyFavorite = [...favorite];
    copyFavorite.push(recipe);
    setFavorite(copyFavorite);
    window.localStorage.setItem("favroite", JSON.stringify(copyFavorite));
  };

  const unFavoriteHandler = () => {
    const filteredFavorite = favorite.filter((f) => f.id != id);
    setFavorite(filteredFavorite);
    window.localStorage.setItem("favroite", JSON.stringify(filteredFavorite));
  };

  return recipe ? (
    <div className="mt-5 h-screen overflow-auto flex justify-evenly gap-10 ">
      <div className="left bg-white/50 p-4 rounded-xl w-[25%] h-[450px]">
        {favorite.find((r) => r.id == recipe.id) ? (
          <button onClick={unFavoriteHandler} className="text-3xl">
            <FcDislike />
          </button>
        ) : (
          <button onClick={favoriteHandler} className="text-3xl">
            <FcLike />
          </button>
        )}
        <img
          className="w-600 sm:w-40 sm:h-40 mx-auto object-cover rounded-full drop-shadow-[5px_5px_10px_rgba(0,0,0,0.4)]"
          src={recipe.image}
          alt=""
        />
        <p className="text-red-500 mt-5 ">{recipe.ratings}</p>
        
        <h1 className="text-3xl font-semibold mt-3">{recipe.title}</h1>
        <p className="mt-4">
          {recipe.desc.slice(0, 100)}...
          <small className="text-blue-400">more</small>
        </p>
        <p className="text-lg font-semibold mt-4">{"₹"+ recipe.price}</p>
      </div>

      <div className="right">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="text-xl mt-5 p-10 shadow"
        >
          <input
            className="w-full mb-5 block border-b p-1 outline-0"
            {...register("ratings")}
            type="text"
            placeholder="Ratings"
          />
          <input
            className="w-full mb-5 block border-b p-1 outline-0"
            {...register("image")}
            type="url"
            placeholder="Image URL"
          />

          <input
            className="w-full mb-5 block border-b p-1 outline-0"
            {...register("title")}
            type="text"
            placeholder="Title"
          />
          <input
            className="w-full mb-5 block border-b p-1 outline-0"
            {...register("chef")}
            type="text"
            placeholder="Chef"
          />
          <input
            className="w-full mb-5 block border-b p-1 outline-0"
            {...register("price")}
            type="text"
            placeholder="Price"
          />

          <textarea
            className="w-full mb-5 block border-b p-1 outline-0"
            {...register("desc")}
            placeholder="Recipe Description"
          ></textarea>
          <textarea
            className="w-full mb-5 block border-b p-1 outline-0"
            {...register("ingr")}
            placeholder="Recipe Ingredients"
          ></textarea>
          <textarea
            className="w-full mb-5 block border-b p-1 outline-0"
            {...register("inst")}
            placeholder="Recipe Instructions"
          ></textarea>

          <select
            className="w-full mb-5 block border-b p-1 outline-0"
            {...register("category")}
          >
            <option value="">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>

          <button
            type="submit"
            className="bg-green-400 text-white px-4 py-2 rounded"
          >
            Update Recipe
          </button>
          <button
            onClick={deleteHandler}
            type="button"
            className="ml-5 bg-red-400 text-white px-4 py-2 rounded"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default Recipe;
