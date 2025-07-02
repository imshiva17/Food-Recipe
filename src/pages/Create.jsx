import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    toast.success("New recipe created!");
    reset();
    navigate(-1);
  };

  return (
    <div className="shadow">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="left text-xl p-10"
      >
        <input
          className="mb-5 block border-b p-1 outline-0 w-[25%]"
          {...register("ratings")}
          type="text"
          placeholder="Ratings"
        />
        <input
          className="mb-5 block border-b p-1 outline-0 w-[25%]"
          {...register("image")}
          type="url"
          placeholder="Image URL"
        />

        <input
          className="mb-5 block border-b p-1 outline-0 w-[25%]"
          {...register("title")}
          type="text"
          placeholder="Title"
        />
        <input
          className="mb-5 block border-b p-1 outline-0 w-[25%]"
          {...register("chef")}
          type="text"
          placeholder="Chef"
        />
        <input
          className="mb-5 block border-b p-1 outline-0 w-[25%]"
          {...register("price")}
          type="text"
          placeholder="Price"
        />

        <textarea
          className="mb-5 block border-b p-1 outline-0 w-[25%]"
          {...register("desc")}
          placeholder="Recipe Description"
        ></textarea>
        <textarea
          className="mb-5 block border-b p-1 outline-0 w-[25%]"
          {...register("ingr")}
          placeholder="Recipe Ingredients"
        ></textarea>
        <textarea
          className="mb-5 block border-b p-1 outline-0 w-[25%]"
          {...register("inst")}
          placeholder="Recipe Instructions"
        ></textarea>
        <select
          className="mb-5 block border-b p-1 outline-0 w-[25%]"
          {...register("category")}
        >
          <option value="">Select Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="bg-green-400 text-white font-semibold px-4 py-2 rounded w-[25%]">
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
