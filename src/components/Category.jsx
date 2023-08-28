import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="m-auto max-w-[1640px] px-4 py-10">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        {" "}
        Top Rated Items
      </h1>

      <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {/* Categories */}
        {categories.map((item) => (
          <div className=" flex bg-gray-100 rounded-lg p-4 justify-between items-center">
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
