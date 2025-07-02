import React from "react";
import Image1 from "../assets/3.png";
import Image2 from "../assets/4.png";
import Image3 from "../assets/5.png";

const foodData = [
  {
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "₹220",
    name: "Grilled Tofu Salad",
    desc: "A protein-rich salad featuring golden grilled tofu, fresh greens, cherry tomatoes, red onions, and sesame seeds tossed in a light vinaigrette.",
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "₹260",
    name: "Rainbow Buddha Bowl",
    desc: "A colorful, nourishing bowl filled with fresh veggies like cucumber, avocado, tomato, red cabbage, peas, and quinoa, topped with sesame seeds and lime wedges.",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "₹450",
    name: "Grilled Steak with Greens",
    desc: "Juicy, perfectly grilled steak slices served alongside a fresh arugula and cherry tomato salad with a hint of cracked pepper.",
  },
];
const TopList = () => {
  return (
    <div className="py-14">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our top list</p>
      </div>

      {/* Card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300"
          >
            <img
              src={item.image}
              alt=""
              className="w-600 sm:w-40 sm:h-40 mx-auto object-cover rounded-full drop-shadow-[5px_5px_10px_rgba(0,0,0,0.4)]"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
